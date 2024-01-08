import { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import MapIcon from '@mui/icons-material/Map';
import { Box, Button, Container, FormControl, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { IssuesTable } from 'src/sections/issue/issues-table';
import { IssuesSearch } from 'src/sections/issue/issues-search';
import { applyPagination } from 'src/utils/apply-pagination';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {useAuth} from "../hooks/use-auth";
import createApiInstance from "../utils/api";


const issuesData = [];

const useIssues = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(issuesData, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useIssueIds = (issues) => {
  return useMemo(
    () => {
      return issues.map((issue) => issue.id);
    },
    [issues]
  );
};

const Page = () => {
  const instance = createApiInstance();
  const [issuesData, setIssuesData] = useState(null);
  const [issuesByDepartmentData, setIssuesByDepartmentData] = useState([]);
  const [issuesByEmployeeData, setIssuesByEmployeeData] = useState([]);

  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [status, setStatus] = useState('');
  const [department, setDepartment] = useState('');
  const [employee, setEmployee] = useState('');

  const issues = useIssues(page, rowsPerPage);
  const issuesIds = useIssueIds(issues);
  const issuesSelection = useSelection(issuesIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'status') setStatus(value);
    if (name === 'department') {
      if (value != '') {
        getIssuesByDepartment(value);
      }
      setDepartment(value);
    }
    if (name === 'employee') {
      if (value != '') {
        getIssuesByEmployee(value);
      }
      setEmployee(value);
    }
  };

  const getIssues = async () => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues');
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setIssuesData(issuesData);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await instance.get('/api/v1/services/me/departments');
      const issuesData = response.data.departments.map(department => ({
        address: department.address,
        categories: department.categories,
        creationDate: department.creationDate,
        description: department.description,
        name: department.name,
        phoneNumber: department.phoneNumber,
        uid: department.uid
      }));
      setDepartments(issuesData);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const getEmployees = async () => {
    try {
      const issuesResponse = await instance.get('/api/v1/services/me/employees');
      const issuesData = issuesResponse.data.employees.map(employee => ({
        uid: employee.uid,
        email: employee.email,
        firstName: employee.firstName,
        lastName: employee.lastName,
        phoneNumber: employee.phoneNumber,
        departmentUid: employee.departmentUid,
        creationDate: employee.creationDate
      }));
      setEmployees(issuesData);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const getIssuesByDepartment = async (uid) => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues/department/' + uid);
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setIssuesByDepartmentData(issuesData);
    } catch (error) {
      console.error("Error fetching issues by department:", error);
    }
  };

  const getIssuesByEmployee = async (uid) => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues/employee/' + uid);
      const issuesData = issuesResponse.data.issues.map(issue => ({
        id: issue.id,
        photo: issue.photo,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        description: issue.description,
        title: issue.title,
        authorUid: issue.authorUid,
        categoryId: issue.categoryId,
        creationDate: issue.creationDate,
        status: issue.status,
        likeCount: issue.likeCount
      }));
      setIssuesByEmployeeData(issuesData);
    } catch (error) {
      console.error("Error fetching issues by employee:", error);
    }
  };

  const applyFilters = () => {
    let filteredData = [...issuesData];
    
    if (status) {
      filteredData = filteredData.filter(issue => issue.status === status);
    }
    
    if (department) {
      filteredData = filteredData.filter(issue => issuesByDepartmentData.some(dIssue => dIssue.id === issue.id));
    }
    
    if (employee) {
      filteredData = filteredData.filter(issue => issuesByEmployeeData.some(mIssue => mIssue.id === issue.id));
    }
    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIssues();
      await getDepartments();
      await getEmployees();
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>
          Issues
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Issues
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Status</InputLabel>
                    <Select
                      labelId="select-status-label"
                      id="select-status"
                      value={status}
                      label="Status"
                      name="status"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="PUBLISHED">Published</MenuItem>
                      <MenuItem value="SOLVING">Solving</MenuItem>
                      <MenuItem value="SOLVED">Solved</MenuItem>
                    </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Department</InputLabel>
                    <Select
                      labelId="select-department-label"
                      id="select-department"
                      value={department}
                      label="Department"
                      name="department"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        departments.map((department) => (
                          <MenuItem key={department.uid} value={department.uid}>{department.name}</MenuItem>
                        ))
                      }
                    </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-status-label">Employee</InputLabel>
                    <Select
                      labelId="select-employee-label"
                      id="select-employee"
                      value={employee}
                      label="Employee"
                      name="employee"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {
                        employees.map((employee) => (
                          <MenuItem key={employee.uid} value={employee.uid}>{employee.firstName} {employee.lastName}</MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                  
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <MapIcon />
                      </SvgIcon>
                    )} href={"/issue-map"}
                  >
                    Show on map
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <IssuesSearch />
            <IssuesTable
              count={issuesData ? issuesData.length : 0}
              items={issuesData ? applyFilters(issuesData) : []}
              onDeselectAll={issuesSelection.handleDeselectAll}
              onDeselectOne={issuesSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={issuesSelection.handleSelectAll}
              onSelectOne={issuesSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={issuesSelection.selected}
            />
          </Stack>
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
