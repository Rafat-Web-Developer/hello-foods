import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center mb-5">Line and Bar Chart</h1>
        <div className="col-12 col-md-6">
          <LineChart width={500} height={500} data={data}>
            <Line type="monotone" dataKey="revenue" stroke="#8884d8"></Line>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="col-12 col-md-6">
          <ResponsiveContainer width="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="revenue" fill="#8884d8" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="row mt-5">
        <h1 className="text-center my-5">Pie and Radar Chart</h1>
        <div className="col-12 col-md-6">
          <ResponsiveContainer width={"100%"} height={300}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="revenue"
                cx="50%"
                cy="50%"
                outerRadius={"100%"}
                fill="#0dcaf0"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-12 col-md-6">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="month" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="revenue"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
