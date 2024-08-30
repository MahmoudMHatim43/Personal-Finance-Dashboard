import React from "react";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import { motion, useAnimation } from "framer-motion";
export function AnimateNumber({ value, duration }) {
  const [number, setNumber] = React.useState(0);
  const controls = useAnimation();
  React.useEffect(() => {
    controls.start({ count: value, transition: { duration } });
  }, [value, duration, controls]);
  return (
    <motion.span
      initial={{ count: number }}
      animate={controls}
      onUpdate={(latest) =>
        setNumber(Math.round(latest.count).toLocaleString("en-US"))
      }>
      {number}
    </motion.span>
  );
}

export function PiChart({ userLabels, userLable, userData }) {
  Chart.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: userLabels,
    datasets: [
      {
        label: userLable,
        data: userData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderWidth: 1,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: { enabled: true },
    },
  };

  return <Pie data={data} options={options} />;
}

export function LineChart({ userLabels, userLable, userData }) {
  Chart.register(
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );
  const data = {
    labels: userLabels,
    datasets: [
      {
        label: userLable,
        data: userData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        fill: true,
      },
      {
        label: "Expense",
        data: [1300, 1200, 1000, 2500, 3000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 3,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}
