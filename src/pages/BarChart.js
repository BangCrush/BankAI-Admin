import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CustomBarChart from 'src/charts/CustomBarChart';
import '../styles/chart.css';
import DoLoginModal from 'src/components/DoLoginModal';
import FailGetDataModal from 'src/components/FailGetDataModal';

const productTypeNames = {
  CHECKING: '입출금',
  DEPOSIT: '예금',
  SAVINGS: '적금',
  LOAN: '대출',
};

const BarChart = () => {
  const [DL_ModalIsOpen, setDL_ModalIsOpen] = useState(false);
  const openDL_Modal = () => setDL_ModalIsOpen(true);
  const [FGD_ModalIsOpen, setFGD_ModalIsOpen] = useState(false);
  const openFGD_Modal = () => setFGD_ModalIsOpen(true);
  const closeFGD_Modal = () => setFGD_ModalIsOpen(false);

  const [data, setData] = useState({});
  const [dataByType, setDataByType] = useState([]); // 상품 종류별 데이터
  const [productType, setProductType] = useState('CHECKING'); // 상품 종류
  const userToken = localStorage.getItem('token');

  const SelectProductTypeButton = ({ value, type }) => {
    return (
      <Button
        onClick={() => {
          setProductType(type);
        }}
        sx={{
          color: grey[600],
          backgroundColor:
            productType === type ? 'rgba(135, 133, 246, 0.2)' : 'transparent',
          '&:hover': {
            borderColor: '#8785F6',
            backgroundColor: 'rgba(135, 133, 246, 0.2)',
          },
          '&.Mui-selected': {
            borderColor: '#8785F6',
            backgroundColor: 'rgba(135, 133, 246, 0.2)',
          },
        }}
      >
        {value}
      </Button>
    );
  };

  const SelectProductTypeBtnGroup = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 4,
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{
            '.MuiButtonGroup-grouped': {
              borderColor: grey[600],
            },
          }}
        >
          <SelectProductTypeButton value={'입출금'} type={'CHECKING'} />
          <SelectProductTypeButton value={'예금'} type={'DEPOSIT'} />
          <SelectProductTypeButton value={'적금'} type={'SAVINGS'} />
          <SelectProductTypeButton value={'대출'} type={'LOAN'} />
        </ButtonGroup>
      </Box>
    );
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'http://13.125.8.139:8080/admin/bar-chart',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 500 || !response.ok) openFGD_Modal();
        if (response.status !== 200) openDL_Modal();

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (data['CHECKING'] && Array.isArray(data['CHECKING'])) {
      setDataByType(data['CHECKING']);
    }
  }, [data]);

  useEffect(() => {
    if (data[productType] && Array.isArray(data[productType])) {
      setDataByType(data[productType]);
    }
  }, [productType]);

  return (
    <div className="contentWrap">
      <div className="chartTitle">
        {productTypeNames[productType]} 상품별 가입자 연령대 통계
      </div>
      <div className="contentInner">
        <div className="contentChart">
          <CustomBarChart dataByType={dataByType} />
        </div>
      </div>

      <SelectProductTypeBtnGroup />

      <DoLoginModal isOpen={DL_ModalIsOpen} />
      <FailGetDataModal isOpen={FGD_ModalIsOpen} closeModal={closeFGD_Modal} />
    </div>
  );
};

export default BarChart;
