import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import List from '@mui/material/List';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    ListItem,
    ListItemAvatar,
    ListItemText,
    SvgIcon,
    TablePagination,
    Typography,
} from '@mui/material';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import { format } from 'date-fns';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';

export const OverviewNotifications = (props) => {
    const { notifications, sx } = props;
    const [page, setPage] = useState(0);
    const rowsPerPage = 4;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const paginatedNotifications = notifications.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <Card sx={sx}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: 'error.main',
                            height: 56,
                            width: 56,
                            paddingBottom: 0,
                        }}
                    >
                        <SvgIcon>
                            <AnnouncementIcon />
                        </SvgIcon>
                    </Avatar>
                }
                title="Notifications"
                sx={{marginBottom:0}}
            />
            <CardContent>
                <List sx={{paddingBottom:0, paddingTop:0}}>
                    {paginatedNotifications.map((notif, index) => {
                        const hasDivider = index < paginatedNotifications.length - 1;
                        const formattedDateTime = format(notif.dateOfCreation, 'dd/MM/yyyy HH:mm');

                        return (
                            <ListItem divider={hasDivider} key={notif.id}>
                                <ListItemText
                                    primary={notif.description}
                                    secondary={
                                        <Typography variant="caption" color="textSecondary">
                                            {formattedDateTime}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
            <TablePagination
                component="div"
                count={notifications.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[]}
            />
        </Card>
    );
};

OverviewNotifications.propTypes = {
    notifications: PropTypes.array.isRequired,
    sx: PropTypes.object,
};