import PropTypes from 'prop-types';
import {
    Avatar,
    Box, Button,
    Card,
    CardContent,
    CardHeader,
    Stack,
    SvgIcon,
    Typography,
    useTheme
} from '@mui/material';
import { Chart } from 'src/components/chart';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DoneIcon from '@mui/icons-material/Done';
import DataUsageIcon from "@mui/icons-material/DataUsage";
import React from "react";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";

const useChartOptions = () => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.success.main, // Color for "Solved"
            theme.palette.warning.main   // Color for "Solving"
        ],
        dataLabels: {
            enabled: false
        },
        labels: ['Solved', 'Solving'],
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

const iconMap = {
    Solved: (
        <SvgIcon style={{color: '#10B981'}}>
              <DoneIcon />
        </SvgIcon>
    ),
    Solving: (
        <SvgIcon style={{color: '#F79009'}}>
              <RotateRightIcon />
        </SvgIcon>
    )
};

export const OverviewEmployeeIssues = (props) => {
    const { chartSeries, sx } = props;
    const chartOptions = useChartOptions();

    return (
        <Card sx={sx}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: 'success.main',
                            height: 56,
                            width: 56,
                            paddingBottom: 0,
                        }}
                    >
                        <SvgIcon>
                            <DataUsageIcon />
                        </SvgIcon>
                    </Avatar>
                }

                // action={(
                //     <Button
                //         color="inherit"
                //         size="small"
                //         startIcon={(
                //             <SvgIcon fontSize="small">
                //                 <ArrowPathIcon />
                //             </SvgIcon>
                //         )}
                //     >
                //         Sync
                //     </Button>
                // )}

                title="This month's issues & their statuses" />
            <CardContent>
                <Chart
                    height={300}
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                />
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries.map((item, index) => {
                        const label = chartOptions.labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                {iconMap[label]}
                                <Typography
                                    sx={{ my: 1 }}
                                    variant="h6"
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="subtitle2"
                                >
                                    {item}
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};

OverviewEmployeeIssues.propTypes = {
    chartSeries: PropTypes.array.isRequired,
    sx: PropTypes.object
};