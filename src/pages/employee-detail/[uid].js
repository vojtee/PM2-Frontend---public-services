import React from 'react';
import {Card, CardContent, Typography, Grid, Box, Container} from '@mui/material';
import {Layout as DashboardLayout} from "../../layouts/dashboard/layout";
import {OverviewEmployeeIssues} from "../../sections/overview/overview-total-employee-issues";
import {OverviewLatestIssues} from "../../sections/overview/overview-latest-issues";
import Head from "next/head";
import {OverviewSolvedIssuesGraph} from "../../sections/overview/overview-solved-issues-graph";
import { useState, useEffect } from 'react'
import {useAuth} from "../../hooks/use-auth";
import createApiInstance from "../../utils/api";
import { subMonths, startOfMonth, endOfMonth, format } from 'date-fns';
import { useRouter } from 'next/router';

const Page = () => {
    //to get user id from url
    const router = useRouter();
    const {uid}  = router.query;
    //for axios and data fetching
    const instance = createApiInstance();
    const [currentUser, setCurrentUser] = useState(null);
    const [userIssues, setUserIssues] = useState([]);
    const [monthGraphData, setMonthGraphData] = useState({
            solved: 0,
            solving: 0,
        }
    );
    const [yearlyGraphData, setYearlyGraphData] = useState(
        {
            thisYear: [],
            lastYear: [],
        }
    );

    const getCurrentUser = async () => {
        try {
            const userResponse = await instance.get(`/api/v1/employees/${uid}`);
            const departmentResponse = await instance.get(`/api/v1/departments/${userResponse.data.departmentUid}`);
            const issuesCountResponse = await instance.get(`/api/v1/issues/employee/${userResponse.data.uid}/count?statuses=SOLVED`);

            setCurrentUser({
                departmentUid: userResponse.data.departmentUid,
                email: userResponse.data.email,
                firstName: userResponse.data.firstName,
                lastName: userResponse.data.lastName,
                phoneNumber: userResponse.data.phoneNumber,
                uid: userResponse.data.uid,
                departmentName: departmentResponse.data.name,
                issuesCount: issuesCountResponse.data.count
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getUserIssues = async () => {
        try {
            const response = await instance.get(`/api/v1/issues/employee/${currentUser.uid}`);
            const issuesData = response.data.issues;
            // Map the issues data to the desired structure
            const formattedIssues = issuesData.map(issue => ({
                id: issue.id,
                name: issue.title,
                description: issue.description,
                longitude: issue.coordinates.longitude,
                latitude: issue.coordinates.latitude,
                dateOfCreation: issue.creationDate,
                status: issue.status
            }));
            // Update the state variable with the formatted issues
            setUserIssues(formattedIssues);
        } catch (error) {
            console.log(error);
        }
    };

    const getMonthGraphData = async () => {
        try {
            const startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
            const responseSolved = await instance.get(`/api/v1/issues/employee/${currentUser.uid}/count?from=${startDate}&statuses=SOLVED`);
            const responseSolving = await instance.get(`/api/v1/issues/employee/${currentUser.uid}/count?from=${startDate}&statuses=SOLVING`);
            const solvedCount = responseSolved.data.count;
            const solvingCount = responseSolving.data.count;
            setMonthGraphData({
                solved: solvedCount,
                solving: solvingCount,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getYearlyGraphData = async () => {
        try {
            const currentYear = new Date().getFullYear();
            const lastYear = currentYear - 1;
            const months = Array.from({ length: 12 }, (_, month) => month);

            const thisYearPromises = months.map(async (month) => {
                const thisYearStartDate = format(new Date(currentYear, month, 1), 'yyyy-MM-dd');
                const thisYearEndDate = format(endOfMonth(new Date(currentYear, month)), 'yyyy-MM-dd');
                const responseThisYear = await instance.get(`/api/v1/solutions/employee/${currentUser.uid}/count?from=${thisYearStartDate}&to=${thisYearEndDate}`);
                return responseThisYear.data.count;
            });

            const lastYearPromises = months.map(async (month) => {
                const lastYearStartDate = format(new Date(lastYear, month, 1), 'yyyy-MM-dd');
                const lastYearEndDate = format(endOfMonth(new Date(lastYear, month)), 'yyyy-MM-dd');
                const responseLastYear = await instance.get(`/api/v1/solutions/employee/${currentUser.uid}/count?from=${lastYearStartDate}&to=${lastYearEndDate}`);
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
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (uid) {
                await getCurrentUser();
            }
        }
        fetchData();
    },[uid]);


    useEffect(() => {
        if(currentUser) {
            getUserIssues();
            getMonthGraphData();
            getYearlyGraphData();
        }
    }, [currentUser]); // The empty dependency array ensures that this effect runs once after the initial render


    return (
        <>
            <Head>
                <title>
                    Employee detail
                </title>
            </Head>

            <Grid container spacing={3}>
                {/* First grid box above all with name */}
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5"> {currentUser ? currentUser.firstName + " " + currentUser.lastName : null}</Typography>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >

                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">Basic information</Typography>
                                    <Typography variant="body1">Email: {currentUser ? currentUser.email : null} </Typography>
                                    <Typography variant="body1">Phone: {currentUser ? currentUser.phoneNumber : null} </Typography>
                                    <Typography variant="body1">Department: {currentUser ? currentUser.departmentName : null} </Typography>
                                    <Typography variant="body1">Resolved Issues: {currentUser ? currentUser.issuesCount : null} </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid
                            xs={12}
                            md={12}
                            lg={8}
                        >
                            <OverviewLatestIssues       //tady dávám data co se budou ukazovat v latest issues listu - pak tam udelat nejakej foreach
                                issues = {userIssues}
                                sx={{height: '100%'}}
                            />
                        </Grid>

                        <Grid
                            xs={12}
                            lg={8}
                        >
                            <OverviewSolvedIssuesGraph
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
                        <Grid
                            xs={12}
                            md={6}
                            lg={4}
                        >
                            <OverviewEmployeeIssues
                                chartSeries={[monthGraphData.solved, monthGraphData.solving]}
                                labels={['Solved', 'Solving']}
                                sx={{height: '100%'}}
                            />

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;

