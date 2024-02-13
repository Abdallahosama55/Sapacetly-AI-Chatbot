import React from 'react';
import './barChart.css';

import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'; // Import createTheme and ThemeProvider

const theme = createTheme({
  typography: {
    fontFamily: 'GE SS Two, GE SS Two', // Set your desired font family here
  },
});

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function BarChart() {
  const data = [
    { value: 5, label: 'صور' },
    { value: 10, label: 'شات' },
    { value: 15, label: 'تدقيق' },
    { value: 20, label: 'مقالات' },
  ];

  const size = {
    width: 400,
    height: 200,
  };

  return (
    <ThemeProvider theme={theme}> {/* Wrap your component with ThemeProvider and pass the theme */}
      <div className='bar-c h-100'>
        <h3>الاستخدام</h3>
        <p>الاشتراك: تجريبي</p>
        <div className='d-flex align-items-center justify-content-center position-relative'>
          <PieChart
            series={[{
              data,
              innerRadius: 80,
              startAngle: -110,
              endAngle: 110,
              paddingAngle: 5,
              innerRadius: 60,
              outerRadius: 80,
            }]}
            {...size}
          >
            <PieCenterLabel>75%</PieCenterLabel>
          </PieChart>
        </div>

        <div className='d-flex justify-content-around'>
          <button className='btn '>الباقات</button>
          <button className='btn btn-outline-info'>ترقية</button>
        </div>
      </div>
    </ThemeProvider>
  );
}
