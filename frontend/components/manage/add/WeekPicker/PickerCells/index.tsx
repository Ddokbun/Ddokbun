import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
} from "date-fns";
import { FC, useEffect } from "react";
import { fetchWateringLogs } from "../../../../../apis/manage";

interface Props {
  currentMonth: Date;
  selectedDate: Date;
  onDateClickHandle: (day: Date) => void;
  potseq: string | string[];
}

const PickerCells: FC<Props> = ({
  currentMonth,
  selectedDate,
  onDateClickHandle,
  potseq,
}) => {
  const checkIfWatering = async (day: Date) => {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();
    const dataList: any[] = await fetchWateringLogs(potseq!, year, month);
    const logs = dataList.filter(
      item => item[0] === year && item[1] === month && item[2] === date,
    );
    if (logs.length) {
      return true;
    } else {
      return false;
    }
  };

  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          id={day.toString()}
          key={day.toString() + "1"}
          className={`day ${isSameDay(day, selectedDate) ? "selected" : ""}
          `}
          onClick={() => {
            onDateClickHandle(cloneDay);
          }}
        >
          <p className="day">{formattedDate}</p>
        </div>,
      );
      day = addDays(day, 1);
    }

    rows.push(<div className="day-container">{days}</div>);
    days = [];
  }

  useEffect(() => {
    const getInitialData = async () => {
      day = startDate;
      for (let i = 0; i < 7; i++) {
        const res = await checkIfWatering(day);
        if (res) {
          document.getElementById(day.toString())?.classList.add("dot");
        }
        day = addDays(day, 1);
      }
    };
    getInitialData();
  }, [startDate]);

  return <>{rows}</>;
};

export default PickerCells;
