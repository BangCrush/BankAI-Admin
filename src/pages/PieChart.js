import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const styles = {
  contentWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
  },
  chartTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
  },
  contentInner: {
    width: '80%',
    maxWidth: '600px',
  },
};

const Page = () => {
  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    const url = 'http://13.125.8.139:8080/admin/piechart';
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
        label: '상품 종류별 가입자 수',
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
  return (
    <div className='contentWrap' style={styles.contentWrap}>
      <div style={styles.chartTitle}>
        상품별 가입자 수 비율
      </div>
      <div className='contentInner' style={styles.contentInner}>
        <Pie data={data} />
      </div>
    </div>
  );
  
  
};

export default Page;
