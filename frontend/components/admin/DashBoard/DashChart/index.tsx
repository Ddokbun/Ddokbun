import { useEffect, useState } from "react";
import { Wrapper } from "./styles";
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
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import { getOrderData } from "../../../../apis/admin";

const DashChart = () => {
  const [list, setList] = useState();
  useEffect(() => {
    async function fetchCount() {
      const data = await getOrderData();
      setList(data.content);
    }
    fetchCount();
  }, []);
  console.log(list);

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
  );
  const data = {
    labels: ["11/2", "11/3", "11/4", "11/5", "11/5", "11/6", "11/7"],
    datasets: [
      {
        label: "판매 건 수",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(120, 120, 120)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Wrapper>
      <div className="div-flex">
        <h2>최근 일주일 판매량</h2>
        <Line data={data} options={options} />
      </div>
    </Wrapper>
  );
};

export default DashChart;
