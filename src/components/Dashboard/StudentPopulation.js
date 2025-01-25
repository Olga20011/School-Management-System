import React, { useState } from "react";
import Chart from "react-apexcharts";

const StudentPopulation = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Male",
        data: [30, 40, 60, 50, 60, 90],
      },

      {
        name: "Female",
        data: [40, 50, 70, 90, 60, 70],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 450,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["S.1", "S.2", "S.3", "S.4", "S.5", "S.6"],
      },
      yaxis: {
        title: {
          text: "Student Population",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 5,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0.3,
          // stops: [0, 90, 100],
        },
      },
      colors: ["#008FFB", "#00E396", "#FEB019"],
      title: {
        text: "Students Attendance",
        align: "center",
      },
      legend: {
        position: "top",
      },
    },
  });

  return (
    <div className="card mb-3" style={{ borderRadius: "5px", height: "390px" }}>
      <div className="card-body">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={285}
        />
      </div>
    </div>
  );
};

export default StudentPopulation;
