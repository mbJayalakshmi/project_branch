// Dashboard.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import { fetchData } from '../redux/actions';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, ScatterChart, Scatter, PieChart, Pie, Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = ({ data, fetchData }) => {
  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, [fetchData]);

  console.log(fetchData)

  // Check if data is available
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  // Format data for charts
  const barChartData = data.map(item => ({ name: item.topic, value: item.intensity }));
  const lineChartData = data.map(item => ({ name: item.topic, value: item.likelihood }));
  const scatterChartData = data.map(item => ({ x: item.intensity, y: item.likelihood }));
  const pieChartDataArray = data.map(item => ({ name: item.topic, value: item.intensity }));

// Dashboard.js

// ...

return (
  <div>
    <h1>Dashboard</h1>

    {/* Bar Chart and Line Chart */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <Card style={{ maxWidth: '300px', maxHeight: '400px', overflow: 'hidden' }}>
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '20px' }}>
        <img src='deepmind.jpg' alt="Center Image" style={{ maxWidth: '1000%', maxHeight: '500px' }} />
      </div>
      </Card>
      <Card title="Bar Chart" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <Card title="Line Chart" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
  
   
    {/* Scatter Chart and Pie Chart */}
      <Card title="Scatter Chart" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis dataKey="y" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={scatterChartData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </Card>
      </div>

      <Card title="Pie Chart" style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieChartDataArray} labelLine={false}>
              {pieChartDataArray.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    

  </div>
);



};



const mapStateToProps = state => {
  console.log('State:', state);

  return {
    data: state.dataReducer.data || [], // Use an empty array if data is undefined
    error: state.dataReducer.error,
  };
};



const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
