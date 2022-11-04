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
import { LogsType } from "../../../pages/manage/myplant/[potseq]";

const LineGraph: React.FC<{ log: LogsType[] }> = ({ log }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  );

  console.log(log);

  const data = {
    labels: ["5일전", "4", "3", "2", "today"],
    datasets: [
      {
        label: "온도.",
        data: log,
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
