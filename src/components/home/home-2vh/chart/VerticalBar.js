import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['石斑魚1', '石斑魚2', '石斑魚3', '石斑魚4', '石斑魚5', '石斑魚6', '石斑魚7', '石斑魚8', '石斑魚9', '石斑魚10'],
  datasets: [
    {
      label: '銷售比',
      data: [100, 80, -40, 60, -60, 20, 0, -80, 40, 60],
      backgroundColor: [
        '#92B7B0',
        '#92B7B0',
        '#E63946',
        '#92B7B0',
        '#E63946',
        '#92B7B0',
        '#E63946',
        '#E63946',
        '#92B7B0',
        '#92B7B0',
      ],
      borderColor: [
        '#92B7B0',
        '#92B7B0',
        '#E63946',
        '#92B7B0',
        '#E63946',
        '#92B7B0',
        '#E63946',
        '#E63946',
        '#92B7B0',
        '#92B7B0',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        borderColor: '#FFF579'
      },
      ticks: {
        color: 'white',
      }
    },
    y: {
      grid: {
        color: '#FFF579',
        borderColor: '#FFF579'
      },
      ticks: {
        color: 'white',
      }
    },
  },
  maintainAspectRatio:false
};

const VerticalBar = () => (
  <div style={{height:'45%',width:'100%'}}>
    <div className='header'>
      <h1 className='title' style={{textAlign: 'center', marginTop: '2vh', color: 'white'}}>漁貨銷售統計</h1>
      <hr style={{width: '10.5vw', marginBottom: '5px'}}/>
    </div>
    <Bar data={data} options={options} style={{paddingBottom: '5px'}}/>
  </div>
);


export default VerticalBar;