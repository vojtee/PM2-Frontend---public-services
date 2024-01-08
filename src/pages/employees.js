import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { applyPagination } from 'src/utils/apply-pagination';
import { EmployeesTable } from '../sections/employer/employees-table';

const Page = () => {
  const [employeesData,setEmployeesData] = useState([
    {
      id: '5e887ac47eed253091be10cb',
      department: 'Komunální odpad',
      email: 'carson.debil@devias.io',
      name: 'Carson Debil',
      phone: '304-428-3097'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      department: 'Komunální odpad',
      email: 'fran.perez@devias.io',
      name: 'Fran Perez',
      phone: '712-351-5711'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      department: 'Elektro odpad',
      email: 'jie.yan.song@devias.io',
      name: 'Jie Yan Song',
      phone: '770-635-2682'
    },
    {
      id: '5e86809283e28b96d2d38537',
      department: 'Bio odpad',
      email: 'anika.visser@devias.io',
      name: 'Anika Visser',
      phone: '908-691-3242'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      department: 'Bio odpad',
      email: 'miron.vitold@devias.io',
      name: 'Miron Vitold',
      phone: '972-333-4106'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      department: 'Banánová pohotovost',
      email: 'penjani.inyene@devias.io',
      name: 'Penjani Inyene',
      phone: '858-602-3409'
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      department: 'Banánová pohotovost',
      email: 'omar.darobe@devias.io',
      name: 'Omar Darobe',
      phone: '415-907-2647'
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      department: 'Banánová pohotovost',
      email: 'siegbert.gottfried@devias.io',
      name: 'Siegbert Gottfried',
      phone: '702-661-1654'
    },
    {
      id: '5e8877da9a65442b11551975',
      department: 'Banánová pohotovost',
      email: 'iulia.albu@devias.io',
      name: 'Iulia Albu',
      phone: '313-812-8947'
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      department: 'Elektro odpad',
      email: 'nasimiyu.danai@devias.io',
      name: 'Nasimiyu Danai',
      phone: '801-301-7894'
    }
  ]);
  const useEmployees = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(employeesData, page, rowsPerPage);
      },
      [page, rowsPerPage]
    );
  };

  const useEmployerIds = (employees) => {
    return useMemo(
      () => {
        return employees.map((employer) => employer.id);
      },
      [employees]
    );
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const employees = useEmployees(page, rowsPerPage);
  const employeesIds = useEmployerIds(employees);
  const customersSelection = useSelection(employeesIds);

  const handleUpdateItems = (updatedEmployer) => {
    // Aktualizujte stav seznamu položek
    updatedEmployer.id = "99xe8"+Math.floor(Math.random() * 100000001);+"da9a65442b1155" + Math.floor(Math.random() * 100000001);
    const updatedEmployeesData = [...employeesData, updatedEmployer];
    setEmployeesData(updatedEmployeesData);
  };
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
          Employees | Devias Kit
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
                  Employees
                </Typography>
              </Stack>
            </Stack>
            <EmployeesTable
              count={employeesData.length}
              items={employees}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onUpdateItems={handleUpdateItems}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
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
