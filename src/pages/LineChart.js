import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../styles/linechart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: '계좌 개설 건수',
        color: 'black', // y축 제목 색상
        font: {
          size: 12 // y축 제목 크기
        }
      }
    }
  }
};
  
const getMonthName = (monthIndex) => {
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  return monthNames[monthIndex];
}

const getCurrentDate = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  return { year: currentYear, month: currentMonth };
};

const formatData = (data, currentMonth) => {
  const datasets = [];
  const colors = [
    'rgb(255, 99, 132, 0.5)',
    'rgb(53, 162, 235, 0.5)',
    'rgb(102, 204, 102, 0.5)',
    'rgb(255, 206, 86, 0.5)'
  ];
  let colorIndex = 0;

  // 합계 그래프
  const sumData = Array.from({ length: currentMonth + 1 }, () => 0);
  for (const value of Object.values(data)) {
    for (let i = 1; i <= currentMonth + 1; i++) {
      sumData[i - 1] += value[i] || 0;
    }
  }
  const sumDataset = {
    label: '합계',
    data: sumData,
    borderColor: 'rgb(0, 0, 0, 0.5)',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
  };
  datasets.push(sumDataset);

  for (const [key, value] of Object.entries(data)) {
    const dataset = {
      label: key,
      data: Array.from({ length: currentMonth + 1 }).map((_, i) => value[i + 1] || 0),
      borderColor: colors[colorIndex % colors.length],
      backgroundColor: colors[colorIndex % colors.length],
    };
    datasets.push(dataset);
    colorIndex++;
  }

  return {
    labels: Array.from({ length: currentMonth + 1 }, (_, i) => getMonthName(i)),
    datasets: datasets,
  };
};

const LineChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const { year } = getCurrentDate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { month } = getCurrentDate();
        const response = await axios.get('http://13.125.8.139:8080/admin/line-chart', {params: { year: year } });
        console.log(response);
        const formattedData = formatData(response.data, month);
        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='contentWrap'>
      <div className='chartTitle'>{year}년 월별 신규 계좌 개설 건수 통계</div>
      <div className='contentInner'>
        <div className='contentChart'>
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;