import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

export const OverviewDepartmentList = (props) => {
  const { departments = {departments}, sx } = props;

  const sortedDepartments = departments
    .slice()
    .sort((a, b) => (a.Name && b.Name ? a.Name.localeCompare(b.Name) : 0));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(5);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowClick = (dept) => {
    setSelectedDepartment(dept === selectedDepartment ? null : dept);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Card sx={{ ...sx, flex: 1 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor: 'warning.main',
                height: 56,
                width: 56,
                paddingBottom: 0,
              }}
            >
              <SvgIcon>
                <ListBulletIcon />
              </SvgIcon>
            </Avatar>
          }
          title="Departments:"
        />
        <Scrollbar sx={{ flexGrow: 1 }}>
          <Box sx={{ minWidth: 800, paddingTop: 0 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Department name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedDepartments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dept) => (
                  <TableRow
                    hover
                    key={dept.name}
                    onClick={() => handleRowClick(dept)}
                    selected={dept === selectedDepartment}
                  >
                    <TableCell>{dept.Name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        <TablePagination
          component="div"
          count={departments.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[]}
        />
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
        </CardActions>
      </Card>

      {selectedDepartment && (
        <Card sx={{ flex: 1, marginLeft: 2 }}>
          <CardContent>
            <div>
              <h3>{selectedDepartment.name} details</h3>
              <p><strong>Department name:</strong> {selectedDepartment.Name}</p>
              <p><strong>Description:</strong> {selectedDepartment.description}</p>
              <p><strong>Phone Number:</strong> {selectedDepartment.phoneNumber}</p>
              <p><strong>Address:</strong> {selectedDepartment.address}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

OverviewDepartmentList.propTypes = {
  departments: PropTypes.array,
  sx: PropTypes.object,
};
