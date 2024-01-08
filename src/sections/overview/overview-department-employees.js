import React, { useState } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Divider,
    SvgIcon,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination, Avatar
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';


export const OverviewDepartmentEmployees = (props) => {
    const { employees = [], sx } = props;
    const [page, setPage] = useState(0);
    const rowsPerPage = 5; // Set the default number of rows per page to 5

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedEmployees = employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Card sx={{sx}}>
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
                title="Department employees" />
            <Scrollbar sx={{ flexGrow: 1 }}>
                <Box sx={{ minWidth: 400, paddingTop:0}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: '35%', maxWidth: '150px' }}>Name</TableCell>
                                <TableCell style={{ width: '30%', maxWidth: '150px' }}>Email</TableCell>
                                <TableCell style={{ width: '35%', maxWidth: '150px' }}>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedEmployees.map((employee) => {
                                return (
                                    <TableRow hover key={employee.id}>
                                        <TableCell width="25%"> {employee.firstName + " " + employee.lastName} </TableCell>
                                        <TableCell width="35%"> {employee.email} </TableCell>
                                        <TableCell width="40%"> {employee.phoneNumber} </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={employees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[]} // Remove the "Rows per page" select menu
            />
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    color="inherit"
                    endIcon={(
                        <SvgIcon fontSize="small">
                            <ArrowRightIcon />
                        </SvgIcon>
                    )}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </CardActions>
        </Card>
    );
};

OverviewDepartmentEmployees.propTypes = {
    employees: PropTypes.array,
    sx: PropTypes.object
};
