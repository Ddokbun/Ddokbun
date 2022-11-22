import { FC } from "react";
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
        backgroundColor: "#395144",
        borderColor: "#395144",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "#fff",
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
