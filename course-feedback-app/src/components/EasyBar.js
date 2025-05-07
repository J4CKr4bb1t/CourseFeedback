import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { paletteColors } from "./palette";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip
);

const titletxt = "Content Clarity";
const barChartLabels = [
  "Very unclear",
  "A little unclear",
  "Neutral",
  "A little clear",
  "Very clear",
];
const defaultBarLabel = "Student Feedback";
// default zeros matching the number of labels:
const defaultBarData = Array(barChartLabels.length).fill(0);

// helper to build the Chart.js data object
function makeBarChartData(dataArray) {
  return {
    labels: barChartLabels,
    datasets: [
      {
        label: defaultBarLabel,
        data: dataArray,
        borderWidth: 0,
        backgroundColor: paletteColors.gold,
        hoverBackgroundColor: paletteColors.burntGold,
      },
    ],
  };
}

export const Bargraph1 = ({ data = defaultBarData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: paletteColors.navy,
          font: { size: 20 },
        },
      },
      title: {
        display: true,
        text: titletxt,
        color: paletteColors.navy,
        font: { size: 45 },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: paletteColors.navy,
          font: { size: 25 },
        },
      },
      y: {
        grid: { color: paletteColors.navy },
        ticks: {
          color: paletteColors.navy,
          font: { size: 25 },
        },
      },
    },
  };

  const chartData = makeBarChartData(data);

  return <Bar options={options} data={chartData} />;
};
