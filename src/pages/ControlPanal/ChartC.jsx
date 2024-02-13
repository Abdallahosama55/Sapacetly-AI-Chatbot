import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'; // Import createTheme and ThemeProvider

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3490, 3490, 3490, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 1398, 1398, 1398];
const xData = [3490, 3490, 3490, 3490, 2400, 1398, 9800, 3908, 4800, 3800, 1398];
const yData = [1398, 9800, 3908, 4800, 3800, 4300, 3490, 4000, 3000, 2000, 2780];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G', 
    'Page t', 
    'Page y', 
    'Page u', 
    'Page i',
];

const theme = createTheme({
  typography: {
    fontFamily: 'GE SS Two, sans-serif', // Set your desired font family here
  },
});

export default function SimpleLineChart() {
    const [length, setLength] = useState(800);

    return (
        <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider and pass the theme */}
          <LineChart
              // width={length}
              height={300}
              className='w-100'
              series={[
                  { data: pData, label: 'مقالات' },
                  { data: uData, label: 'تدقيق' },
                  { data: xData, label: 'شات' },
                  { data: yData, label: 'صور' }
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
        </ThemeProvider>
    );
}
