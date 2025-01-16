import React from "react";
import Chart from "react-apexcharts";

const StudentsChart = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Female Students", "Male Students"],
    colors: ["#F7EAE0", "#A8E3CC"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: -10,
              style: {
                fontSize: "16px",
                fontWeight: 600,
              },
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: 600,
              formatter: (val) => val.toLocaleString(),
            },
            total: {
              show: true,
              label: "Total Students",
              fontSize: "18px",
              fontWeight: 600,
              color: "#333",
              formatter: () => "5,000", // Total value
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      markers: {
        radius: 2,
      },
      labels: {
        colors: "#333",
      },
    },
  };

  const series = [1500, 3500]; // Female and Male Students data

  return (
    <div
      className="card mb-2"
      style={{ width: "360px", borderRadius: "10px", height: "390px" }}
    >
      <h6
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "15px" }}
      >
        Students 2025
      </h6>
      <Chart options={options} series={series} type="donut" height="300" />
    </div>
  );
};

export default StudentsChart;
