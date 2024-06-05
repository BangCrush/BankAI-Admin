import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Page = () => {
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    const url = 'http://127.0.0.1:8080/admin/piechart';
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setDatalist(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    labels: ['입출금', '예금', '적금', '대출'],
    datasets: [
      {
        label: '상품 종류별 가입자 수 비율',
        data: datalist,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <div style={{ width: '80vw', height: '80vh' }}>
    <Pie data={data} />
    </div>;
};

export default Page;
