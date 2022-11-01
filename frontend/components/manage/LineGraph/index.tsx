import React from "react";
import { Wrapper } from "./styles";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

const LineGraph: React.FC = () => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  );

  const data = {
    labels: ["5일전", "4", "3", "2", "today"],
    datasets: [
      {
        label: "온도.",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#92ECEE",
      },
    ],
  };
  const options = {

    plugins: {
      tooltip: {
        // backgroundColor: "#fff",
      },
      indexAxis: "y" as const,
      plugins: {
        legend: {
          position: "top" as const,
        },
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
      axis: "y" as const,
    },
  };

  return (
    <Wrapper>
      <Line data={data} options={options} />
    </Wrapper>
  );
};

export default LineGraph;
