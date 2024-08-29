import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

function SummaryPiChart() {
  const data = {
    labels: ["Home", "Credit Card", "Transportation", "Groceries", "Shopping"],
    datasets: [
      {
        label: "Transactions",
        data: [3000 * 0.2, 3000 * 0.15, 3000 * 0.35, 3000 * 0.2, 3000 * 0.1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderWidth: 0,
        hoverOffset: 30,
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

export default SummaryPiChart;
