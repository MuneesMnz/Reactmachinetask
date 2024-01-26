import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js";
import Chart from 'chart.js/auto';


const LIneChart = ({ chartData,options }) => {
  console.log(chartData);
  return <Line data={chartData} options={options} />;
};

export default LIneChart
