import PropTypes from 'prop-types';
import DoneIcon from '@mui/icons-material/Done';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
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
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";
import DataUsageIcon from '@mui/icons-material/DataUsage';
import React from 'react';

const useChartOptions = (labels) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent'
    },
    colors: [
      //theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.success.main,
      //theme.palette.error.main
    ],
    dataLabels: {
      enabled: false
    },
    labels,
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
   // Published: (
   //   <SvgIcon style={{color: "#06AED4"}}>
   //     <PendingOutlinedIcon/>
   //   </SvgIcon>
   // ),
  Solving: (
    <SvgIcon style={{color: "F79009"}}>
      <RotateRightIcon/>
    </SvgIcon>
  ),
  Solved: (
    <SvgIcon style={{color: "#10B981"}}>
      <DoneIcon/>
    </SvgIcon>
  )
   ,
   // Deleted: (
   //     <SvgIcon style={{color: "#F04438"}}>
   //       <CancelOutlinedIcon/>
   //     </SvgIcon>
   // )
};

export const OverviewIssueTypeGraph = (props) => {
  const { chartSeries, labels, sx } = props;
  const chartOptions = useChartOptions(labels);

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

        title="This month's issues & their statuses"
      />
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
            const label = labels[index];

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

OverviewIssueTypeGraph.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
