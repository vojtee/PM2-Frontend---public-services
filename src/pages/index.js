import Head from 'next/head';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewDepartmentList } from 'src/sections/overview/overview-department-list';
import { OverviewServiceIssuesGraph } from 'src/sections/overview/overview-service-issues-graph';
import { OverviewIssueTypeGraph } from 'src/sections/overview/overview-issue-type-graph';
import React, { useContext, useEffect, useState } from 'react';
import {endOfMonth, format, startOfMonth} from "date-fns";

//import {useAuth} from "../contexts/auth-context";
import {useAuth} from "../hooks/use-auth";
import createApiInstance from '../utils/api';
import { columnsStateInitializer } from '@mui/x-data-grid/internals';

const Page = () => {
  // const user  = useAuth();
  //
  // if (!user) {
  //     // V případě, že uživatel není přihlášen, nic nezobrazujeme
  //     return null;
  // }else{
  //     console.log(user);
  //     //console.log(user.user.accessToken);
  //   //console.log(user.user.accessToken);
  //   //console.log(user.user.reloadUserInfo.customAttributes);
  // }

  const instance = createApiInstance();
  const [service, setService] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [serviceIssues, setServiceIssues] = useState([]);
  const [yearlyGraphData, setYearlyGraphData] = useState({
      thisYear: [],
      lastYear: [],
    }
  );
    const [statusCount, setStatusCount] = useState({
        solving: 0,
        solved: 0,
        published: 0,
        deleted: 0,
    });

  const getService = async () => {
    try {
      const response = await instance.get(`/api/v1/services/me`);
      setService(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await instance.get(`/api/v1/services/me/departments`);
      const formattedDepartments = response.data.departments.map(department => ({
        uid: department.uid,
        Name: department.name,
        description: department.description,
        phoneNumber: department.phoneNumber,
        address: department.address,
        }));
      setDepartments(formattedDepartments);
    } catch (error) {
      console.log(error);
    }
  };


  const getIssues = async () => {
    try {
      const iss = [];
      for (let i = 0; i < departments.length; i++) {
        const response = await instance.get(`/api/v1/issues/department/${departments[i].uid}`);
        if (response.data.issues.length > 0) {
          iss.push(...response.data.issues);
        }
      }

      const formattedIssues = iss.map(issue => ({
        id: issue.id,
        name: issue.title,
        description: issue.description,
        longitude: issue.coordinates ? issue.coordinates.longitude : null,
        latitude: issue.coordinates ? issue.coordinates.latitude : null,
        dateOfCreation: issue.creationDate,
        status: issue.status
      }));

      setServiceIssues(formattedIssues);
      countIssuesByStatus(formattedIssues);
    } catch (error) {
      console.log(error);
    }
  };

    const countIssuesByStatus = async (issues) => {
      try {
        if (service) {
          const startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
          console.log(startDate);
          const responseSolved = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${startDate}&statuses=SOLVED`);
          const responseSolving = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${startDate}&statuses=SOLVING`);
          const responsePublished = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${startDate}&statuses=PUBLISHED`);
          const responseDeleted = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${startDate}&statuses=DELETED`);
          const solvedCount = responseSolved.data.count;
          const solvingCount = responseSolving.data.count;
          const publishedCount = responsePublished.data.count;
          const deletedCount = responseDeleted.data.count;
          setStatusCount({
            solved: solvedCount,
            solving: solvingCount,
            published: publishedCount,
            deleted: deletedCount,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };


  const getYearlyGraphData = async () => {
    try {
      if (service) {
        console.log("zacatek year dat");
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;
        const months = Array.from({ length: 12 }, (_, month) => month);

        const thisYearPromises = months.map(async (month) => {
          const thisYearStartDate = format(new Date(currentYear, month, 1), 'yyyy-MM-dd');
          const thisYearEndDate = format(endOfMonth(new Date(currentYear, month)), 'yyyy-MM-dd');
          const responseThisYear = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${thisYearStartDate}&to=${thisYearEndDate}`);
          return responseThisYear.data.count;
        });

        const lastYearPromises = months.map(async (month) => {
          const lastYearStartDate = format(new Date(lastYear, month, 1), 'yyyy-MM-dd');
          const lastYearEndDate = format(endOfMonth(new Date(lastYear, month)), 'yyyy-MM-dd');
          const responseLastYear = await instance.get(`api/v1/issues/service/${service.uid}/count?from=${lastYearStartDate}&to=${lastYearEndDate}`);
          return responseLastYear.data.count;
        });

        const [thisYearCounts, lastYearCounts] = await Promise.all([
          Promise.all(thisYearPromises),
          Promise.all(lastYearPromises),
        ]);

        setYearlyGraphData({
          thisYear: thisYearCounts,
          lastYear: lastYearCounts,
        });
        console.log("yearly graph data");
        console.log(yearlyGraphData);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      await getService();
      console.log("service fetched")
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (service) {
        await getDepartments();
        await getIssues();
        await getYearlyGraphData();
      }
    };
    fetchData();
  }, [service]);

  return (
    <>
      <Head>
        <title>
          Better City
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Grid container spacing={3}>
          {/* First grid box above all with name */}
          <Grid item xs={12} sx={{paddingTop: 0}}>
            <Card>
              <CardContent>
                {/*<Avatar*/}
                {/*  src={service && service.photo}*/}
                {/*  alt="Service Photo"*/}
                {/*  sx={{ width: 56, height: 56, marginRight: 2 }}*/}
                {/*/>*/}
                <Typography variant="h5">{service ? service.name : null}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              md={12}
              lg={8}
            >
              <OverviewDepartmentList
                departments={departments}
                sx={{height: '100%'}}
              />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewIssueTypeGraph
                chartSeries={[statusCount.solving, statusCount.solved]}
                labels={['Solving', 'Solved']}
                sx={{height: '100%'}}
              />
            </Grid>

            <Grid
              xs={12}
              lg={8}
            >
              <OverviewServiceIssuesGraph
                chartSeries={[
                  {
                    name: 'This year',
                    data: yearlyGraphData.thisYear
                  },
                  {
                    name: 'Last year',
                    data: yearlyGraphData.lastYear
                  }
                ]}
                sx={{height: '100%'}}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;