import React, { FC } from "react";
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
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Theme } from "../../../styles/theme";

export interface LogsType {
  [name: string]: string;
}

interface Props {
  labels: Date[];
  data: string[];
  label: string;
}

const LineGraph: FC<Props> = ({ labels, data, label }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
  );

  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        fill: true,
        backgroundColor: '#395144',
        borderColor: '#395144',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          // label: (tooltipItem, data) => {
          //   console.log(tooltipItem);
          // },
        },
        // backgroundColor: "#fff",
      },
      indexAxis: "y" as const,
      plugins: {
        legend: {
          position: "top" as const,
        },
      },
    },
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: "day" as const,
          parser: "yy:mm:dd" as const,
        },
      },
    },
    interaction: {
      mode: "index" as const,
      axis: "y" as const,
    },
  };

  return (
    <Wrapper>
      <Line data={chartData} options={options} />
    </Wrapper>
  );
};

export default LineGraph;
