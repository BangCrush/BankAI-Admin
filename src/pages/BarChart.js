import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import CustomBarChart from 'src/charts/CustomBarChart';
import { Container, Typography } from '@mui/material';

const BarChart = () => {
  const [data, setData] = useState({});
  const [dataByType, setDataByType] = useState([]); // 상품 종류별 데이터
  const [productType, setProductType] = useState(); // 상품 종류
  const [isLoading, setIsLoading] = useState(true);

  const SelectProductTypeButton = ({ value, type }) => {
    return (
      <Button
        onClick={() => {
          setProductType(type);
        }}
        sx={{
          color: grey[600],
          backgroundColor: productType === type ? grey[200] : 'transparent',
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
          'http://13.125.8.139:8080/admin/bar-chart'
        );
        if (!response.ok) throw new Error('!response.ok');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {}, [data]);

  useEffect(() => {
    // 처음 페이지 로딩 시 API 호출이 완료되고 데이터가 삽입되면 실행
    if (data[productType] && Array.isArray(data[productType])) {
      setDataByType(data[productType]);
      setIsLoading(false);
    }
  }, [productType]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <Typography variant="h1" sx={{ color: grey[800] }}>
          상품 종류를 선택하세요
        </Typography>
      ) : (
        <CustomBarChart dataByType={dataByType} />
      )}
      <SelectProductTypeBtnGroup />
    </Container>
  );
};

export default BarChart;
