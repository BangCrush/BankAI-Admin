import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: '상품별 각 연령대 가입자 수',
      font: {
        size: 30,
        weight: '500',
      },
    },
  },
};

const CustomBarChart = ({ dataByType }) => {
  const labels = dataByType.map((item) => item.prodName);

  const data = {
    labels,
    datasets: [
      {
        label: '20대',
        data: dataByType.map((item) => item.joinCnt.ageGroup20),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '30대',
        data: dataByType.map((item) => item.joinCnt.ageGroup30),
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
      {
        label: '40대',
        data: dataByType.map((item) => item.joinCnt.ageGroup40),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
      {
        label: '50대',
        data: dataByType.map((item) => item.joinCnt.ageGroup50),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: '60대',
        data: dataByType.map((item) => item.joinCnt.ageGroup60),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: '70대',
        data: dataByType.map((item) => item.joinCnt.ageGroup70),
        borderColor: 'rgb(0, 0, 128)',
        backgroundColor: 'rgba(0, 0, 128, 0.5)',
      },
      {
        label: '80대',
        data: dataByType.map((item) => item.joinCnt.ageGroup80),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default CustomBarChart;
