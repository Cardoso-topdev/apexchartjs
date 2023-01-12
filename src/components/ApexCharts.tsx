import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Chart from "react-apexcharts";

const ApexCharts = () => {
  const [options] = useState({
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    labels:['A', 'B', 'C', 'D', 'E'],
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })
  const [series] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ])
  const [donutSeries] = useState([44, 55, 41, 17, 15])
  const [donutLabels] = useState(['A', 'B', 'C', 'D', 'E'])
  return (
    <>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: Bar</Typography>
        <Chart options={options} series={series} type="bar" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: Line</Typography>
        <Chart options={options} series={series} type="line" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: donut</Typography>
        <Chart options={{labels: donutLabels}} series={donutSeries} type="donut" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: area</Typography>
        <Chart options={options} series={series} type="area" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: Histogram</Typography>
        <Chart options={options} series={series} type="histogram" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: radialBar</Typography>
        <Chart options={options} series={donutSeries} type="radialBar" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: scatter</Typography>
        <Chart options={options} series={series} type="scatter" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: heatmap</Typography>
        <Chart options={options} series={series} type="heatmap" width="380" />
      </Box>
      <Box sx={{ display: 'inline-block', textAlign: 'center'}}>
        <Typography>Chart Type: radar</Typography>
        <Chart options={options} series={series} type="radar" width="380" />
      </Box>
    </>
  );
};

export default ApexCharts;