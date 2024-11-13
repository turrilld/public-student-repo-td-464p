import React from 'react';
import { useState, useEffect } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { backgroundColors, borderColors } from '../utils/chartColors.js';

const api = 'https://cs464p564-frontend-api.vercel.app/api/countries';

const Population = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => setResult(response.data))
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: result.map((country) => country.name),
    datasets: [
      {
        label: 'Population',
        data: result.map((country) => country.population),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 2,
      },
    ],
    options: {
      maintainAspectRatio: false,
    },
  };

  const styles = {
    chartContainer: {
      maxWidth: '500px',
      width: '60%',
      height: '100%',
      margin: '20px auto',
    },
  };

  return (
    <main>
      <div className="graph-container">
        <h1>Population of South American Countries</h1>
        <div style={styles.chartContainer}>
          <Bar data={data} />
        </div>
      </div>
    </main>
  );
};

export default Population;
