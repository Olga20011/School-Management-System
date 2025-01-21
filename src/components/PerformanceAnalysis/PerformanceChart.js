import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = () => {
  const [term, setTerm] = useState("Term 1");
  const [examBatch, setExamBatch] = useState("End of Term");
  const [levelBatch, levelExamBatch] = useState("O'Level");

  const data = {
    labels: [
      "Biology",
      "Physics",
      "Mathematics",
      "English",
      "Fine Arts",
      "Chemistry",
      "History",
      "Geography",
    ],
    datasets: [
      {
        label: "Pass",
        data: [74.33, 94.33, 73.33, 76.67, 83.33, 70, 76.7, 80],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "Fail",
        data: [25.67, 5.67, 26.67, 23.33, 16.67, 25, 20.5, 19.0],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
    ],
  };

  const options = {
    indexAxis: "y", // Makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Performance by Subject",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Ensure range is from 0 to 100%
      },
    },
  };

  return (
    <div className="card mb-3" style={{ borderRadius: "5px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="form-group">
            <label htmlFor="termSelect" className="form-label">
              Select Term:
            </label>
            <select
              id="termSelect"
              className="form-select"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            >
              <option value="Term 1">Term 1</option>
              <option value="Term 2">Term 2</option>
              <option value="Term 3">Term 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="examBatchSelect" className="form-label">
              Select Exam Batch:
            </label>
            <select
              id="examBatchSelect"
              className="form-select"
              value={examBatch}
              onChange={(e) => setExamBatch(e.target.value)}
            >
              <option value="End of Term">End of Term</option>
              <option value="Midterm">Midterm</option>
              <option value="Beginning of Term">Beginning of Term</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="levelBatchSelect" className="form-label">
              Select Level:
            </label>
            <select
              id="levelBatchSelect"
              className="form-select"
              value={levelBatch}
              onChange={(e) => setExamBatch(e.target.value)}
            >
              <option value="O'Level">O'Level(Ordinary)</option>
              <option value="A'Level">A'Level(Advanced)</option>
            </select>
          </div>
        </div>
        <Bar data={data} options={options} height={185} />
      </div>
    </div>
  );
};

export default PerformanceChart;
