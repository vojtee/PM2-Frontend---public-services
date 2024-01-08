import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography, Grid, Box, Container} from '@mui/material';
import {Layout as DashboardLayout} from "../../layouts/dashboard/layout";
import {OverviewDepartmentEmployees} from "../../sections/overview/overview-department-employees";
import {OverviewMonthlyDepartment} from "../../sections/overview/overview-monthly-department";
import {OverviewLatestIssues} from "../../sections/overview/overview-latest-issues";
import Head from "next/head";
import createApiInstance from "../../utils/api";
import {endOfMonth, format, startOfMonth} from "date-fns";
import {useRouter} from "next/router";


const Page = () => {
    //to get department id from url
    const router = useRouter();
    const { uid } = router.query;

    const instance = createApiInstance();
    const [department, setDepartment] = useState(null);
    const [departmentEmployees, setDepartmentEmployees] = useState([]);
    const [departmentIssues, setDepartmentIssues] = useState([]);
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


    const getDepartment = async () => {
        try {
            console.log(uid);
            const response = await instance.get(`/api/v1/departments/${uid}`);
            setDepartment(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    // TODO wont work due to authorization
    const getDepartmentEmployees = async () => {
        try {
            const response = await instance.get(`api/v1/departments/${department.uid}/employees`);
            console.log(response);
            const formattedEmployees = response.data.map(employee => ({
                uid: employee.uid,
                email: employee.email,
                firstName: employee.firstName,
                lastName: employee.lastName,
                phoneNumber: employee.phoneNumber,
                departmentUid: employee.departmentUid,
                creationDate: employee.creationDate
            }));
            setDepartmentEmployees(formattedEmployees);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const getDepartmentIssues = async () => {
        try {
            const response = await instance.get(`/api/v1/issues/department/${department.uid}`);
            const issuesData = response.data.issues;
            // console.log(response)

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
            setDepartmentIssues(formattedIssues);
        } catch (error) {
            console.log(error);
        }
    };

    const getMonthGraphData = async () => {
        try {
            const startDate = format(startOfMonth(new Date()), 'yyyy-MM-dd');
            const responseSolved = await instance.get(`/api/v1/issues/department/${department.uid}/count?from=${startDate}&statuses=SOLVED`);
            const responseSolving = await instance.get(`/api/v1/issues/department/${department.uid}/count?from=${startDate}&statuses=SOLVING`);
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
                const responseThisYear = await instance.get(`/api/v1/solutions/department/${department.uid}/count?from=${thisYearStartDate}&to=${thisYearEndDate}`);
                return responseThisYear.data.count;
            });

            const lastYearPromises = months.map(async (month) => {
                const lastYearStartDate = format(new Date(lastYear, month, 1), 'yyyy-MM-dd');
                const lastYearEndDate = format(endOfMonth(new Date(lastYear, month)), 'yyyy-MM-dd');
                const responseLastYear = await instance.get(`/api/v1/solutions/department/${department.uid}/count?from=${lastYearStartDate}&to=${lastYearEndDate}`);
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
            await getDepartment();
        };
        fetchData();
    }, []); // This useEffect runs once after the initial render to fetch the department

    useEffect(() => {
        // Check if department is not null before calling other functions
        if (department) {
            getDepartmentEmployees();
            getDepartmentIssues();
            getMonthGraphData();
            getYearlyGraphData();
        }
    }, [department]); // This useEffect runs whenever the department state changes

    return (
        <>
            <Head>
                <title>
                    Department detail
                </title>
            </Head>
            <Grid container spacing={3} >
                {/* First grid box above all with name */}
                <Grid item xs={12} sx={{paddingTop:0}}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{department ? department.name : null} - detail</Typography>
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
                    {/* Second row for Information and Employees */}
                    <Grid spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">Information</Typography>
                                    <div>
                                        <Typography variant="body">Tel: {department ? department.phoneNumber : null} </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body">Address: {department ? department.address : null} </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body"> Description: {department ? department.description : null} </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid
                            xs={12}
                            md={12}
                            lg={8}
                        >
                            <OverviewLatestIssues       //tady dávám data co se budou ukazovat v latest issues listu - pak tam udelat nejakej foreach
                                issues={departmentIssues}
                                sx={{ height: '100%' }}
                            />
                        </Grid>

                        <Grid
                            xs={12}
                            md={12}
                            lg={8}
                        >
                            <OverviewDepartmentEmployees       //tady dávám data co se budou ukazovat v latest issues listu - pak tam udelat nejakej foreach
                                employees={departmentEmployees}
                                sx={{ height: '100%' }}
                            />
                        </Grid>

                        <Grid
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <OverviewMonthlyDepartment
                                chartSeries={[
                                    {
                                        name: 'This year',
                                        data: yearlyGraphData.thisYear,
                                    },
                                    {
                                        name: 'Last year',
                                        data: yearlyGraphData.lastYear,
                                    },
                                ]}
                                sx={{ height: '100%' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

Page.getLayout = (page) =>
    <DashboardLayout>
        {page}
    </DashboardLayout>;

export default Page;