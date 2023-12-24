import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChartComponent = ({ data }) => {
  // Extracting data for the chart
  const chartData = data.map(item => ({
    topic: item.topic,
    intensity: item.intensity,
  }));

  return (
    <div>
      <h2>Line Chart</h2>
      <LineChart width={400} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="topic" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="intensity" stroke="rgba(75, 192, 192, 1)" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
