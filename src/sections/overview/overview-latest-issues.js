import React, { useState } from 'react';
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
import { SeverityPill } from 'src/components/severity-pill';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';
import { format, parse } from 'date-fns';

const statusMap = {
    //"not started": 'info',
    SOLVING: 'warning',
    SOLVED: 'success',
    //failed: 'error'
};

export const OverviewLatestIssues = (props) => {
    const { issues = [], sx } = props;
    const [page, setPage] = useState(0);
    const rowsPerPage = 5; // Set the default number of rows per page to 5

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const paginatedIssues = issues.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const parseISOWithMilliseconds = (isoString) => {
        const date = parse(isoString, "yyyy-MM-dd'T'HH:mm:ss.SSSSSS", new Date());
    return date;
    };

  return (
        <Card sx={sx}>
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
              title="Your latest Issues" />
            <Scrollbar sx={{ flexGrow: 1 }}>
                <Box sx={{ minWidth: 800, paddingTop:0}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell> Issue Nr. </TableCell>
                                <TableCell> What happened </TableCell>
                                <TableCell> Location </TableCell>
                                <TableCell sortDirection="desc"> Date </TableCell>
                                <TableCell> Status </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedIssues.map((issue) => {
                                // const date = format(issue.dateOfCreation, 'dd/MM/yyyy');
                                const date = format(parseISOWithMilliseconds(issue.dateOfCreation), 'dd/MM/yyyy');

                                return (
                                    <TableRow hover key={issue.id}>
                                        <TableCell> {issue.id} </TableCell>
                                        <TableCell> {issue.name} </TableCell>
                                        <TableCell> {issue.latitude}, {issue.longitude} </TableCell>
                                        <TableCell> {date} </TableCell>
                                        <TableCell>
                                            <SeverityPill color={statusMap[issue.status]}>
                                                {issue.status}
                                            </SeverityPill>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={issues.length}
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

OverviewLatestIssues.propTypes = {
    issues: PropTypes.array,
    sx: PropTypes.object
};
