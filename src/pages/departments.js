import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { DepartmentsTable } from 'src/sections/department/departments-table';
import { DepartmentsSearch } from 'src/sections/department/departments-search';
import { applyPagination } from 'src/utils/apply-pagination';

const Page = () => {

  const [departmentsData,setDepartmentsData] = useState([
    {
      id: '5e887ac47eed253091be10cb',
      department: 'Komunální odpad',
      address: {
        city: 'Berkeley',
        country: 'USA',
        state: 'California',
        street: '317 Angus Road'
      },
      description: 'Svoz odpadu.',
      phone: '304-428-3097'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      department: 'Elektro odpad',
      address: {
        city: 'Atlanta',
        country: 'USA',
        state: 'Georgia',
        street: '1865  Pleasant Hill Road'
      },
      description: 'Svoz elektro odpadu.',
      phone: '712-351-5711'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      department: 'Bio odpad',
      address: {
        city: 'North Canton',
        country: 'USA',
        state: 'Ohio',
        street: '4894  Lakeland Park Drive'
      },
      description: 'Svoz bio odpadu',
      phone: '770-635-2682'
    },
    {
      id: '5e86809283e28b96d2d38537',
      department: 'Banánová pohotovost.',
      address: {
        city: 'Madrid',
        country: 'Spain',
        state: 'Spain',
        street: '4158  Hedge Street'
      },
      description: 'Banán přímo pod nos do 24h.',
      phone: '908-691-3242'
    },
  ]);

  const useDepartments = (page, rowsPerPage) => {
    return useMemo(
        () => {
          return applyPagination(departmentsData, page, rowsPerPage);
        },
        [page, rowsPerPage]
    );
  };

  const useDepartmentIds = (departments) => {
    return useMemo(
        () => {
          return departments.map((department) => department.id);
        },
        [departments]
    );
  };

  const handleUpdateItems = (updatedDepartments) => {
    // Aktualizujte stav seznamu položek
    updatedDepartments.id = "99xe8"+Math.floor(Math.random() * 100000001);+"da9a65442b1155" + Math.floor(Math.random() * 100000001);
    const updatedDepartmentsData = [...departmentsData, updatedDepartments];
    setDepartmentsData(updatedDepartmentsData);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const departments = useDepartments(page, rowsPerPage);
  const departmentIds = useDepartmentIds(departments);
  const departmentSelection = useSelection(departmentIds);

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

  return (
    <>
      <Head>
        <title>
          Departments | Devias Kit
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
                  Departments
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                </Stack>
              </Stack>
            </Stack>

            <DepartmentsTable
              count={departmentsData.length}
              items={departments}
              onDeselectAll={departmentSelection.handleDeselectAll}
              onDeselectOne={departmentSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onUpdateItems={handleUpdateItems}
              onSelectAll={departmentSelection.handleSelectAll}
              onSelectOne={departmentSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={departmentSelection.selected}
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
