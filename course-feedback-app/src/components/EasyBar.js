import { Bar } from "react-chartjs-2"; //connects chart to React
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
  scales,
} from "chart.js"; //from chart library
import { fontString } from "chart.js/helpers";
import { paletteColors } from "./palette";

let titletxt = "Content Clarity";
//labels for bar chart cols
let barChartLabels = [
  "Very Unclear",
  "A little Unclear",
  "Neutral",
  "A little Clear",
  "Very Clear",
];

let defaultBarLabel = "Student Feedback";
let defaultBarData = [10, 15, 18, 22, 4];

//data for bar chart
const barChartData = {
  labels: barChartLabels,
  datasets: [
    {
      label: defaultBarLabel,
      data: defaultBarData,
      borderWidth: 0,

      backgroundColor: paletteColors.gold,
      hoverBackgroundColor: paletteColors.burntGold,
    },
  ],
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip
);

export const Bargraph1 = () => {
  const options = {
    responsive: true,
    plugins: {
      ticks: {
        font: {
          size: 40,
        },
      },
      legend: {
        position: "top",

        labels: {
          color: paletteColors.navy,

          font: {
            size: 20,
          },
        },
      },
      title: {
        display: true,
        text: titletxt,
        position: "top",
        color: paletteColors.navy,

        font: {
          size: 45,
          color: paletteColors.navy,
        },
      },
    },
    grouped: true,
    offset: true,
    barPercentage: 1,
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: paletteColors.navy,
          font: {
            size: 25,
          },
        },
      },
      y: {
        grid: { color: paletteColors.navy },
        ticks: {
          color: paletteColors.navy,

          font: {
            size: 25,
          },
        },
      },
    },
  };

  const data = barChartData;

  return <Bar options={options} data={data} />;
};
