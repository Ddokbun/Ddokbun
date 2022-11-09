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

export interface ProductArray {
  list: string[];
  orderTime: string;
  count: number;
}

const DashChart = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchCount() {
      const data = await getOrderData();
      setList(data.content);
    }
    fetchCount();
  }, []);

  console.log(list);
  const date = list.map((list: ProductArray) => list.orderTime).reverse();
  const rawData = list.map((list: ProductArray) => list.count).reverse();

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
    labels: date,
    datasets: [
      {
        label: "판매 건 수",
        data: rawData,
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
        <h2>최근 10일 간 판매량</h2>
        <Line data={data} options={options} />
      </div>
    </Wrapper>
  );
};

export default DashChart;
