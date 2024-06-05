import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../styles/chart.css';
ChartJS.register(ArcElement, Tooltip, Legend);

const Page = () => {
  const [datalist, setDatalist] = useState([]);
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.125.8.139:8080/admin/pie-chart',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
          }
        });
        setDatalist(response.data.data);
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };
    fetchData();
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
    <div className='contentWrap'>
      <div className='chartTitle'>
        상품별 가입자 수 비율
      </div>
      <div className='contentInner'>
        <div className='contentPieChart'>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
  
  
};

export default Page;
