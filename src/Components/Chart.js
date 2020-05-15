import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const customPercentageLabel = ({ percent }) => {
  const percentage = Math.floor(percent * 100);
  return percentage;
};

const Chart = ({ data, colors }) => {
  return (
    <PieChart width={500} height={500}>
      <Pie data={data} dataKey={"time"} label={customPercentageLabel}>
        {data.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;