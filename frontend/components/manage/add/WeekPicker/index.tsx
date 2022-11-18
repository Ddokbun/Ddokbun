import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { Wrapper } from "./styles";
import { fetchWateringLogs } from "../../../../apis/manage";
import { useRouter } from "next/router";

interface Props {
  setWateringLogs: Dispatch<SetStateAction<string>>;
}

const WeekPicker: FC<Props> = ({ setWateringLogs }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { potseq } = useRouter().query;

  useEffect(() => {
    if (!selectedDate || !potseq) {
      return;
    }
    const getWateringLogs = async () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth() + 1;
      const date = selectedDate.getDate();
      const dataList: any[] = await fetchWateringLogs(potseq, year, month);
      const logs = dataList.filter(
        item => item[0] === year && item[1] === month && item[2] === date,
      );

      if (logs.length) {
        setWateringLogs(`${year}년 ${month}월 ${date}일에 물을 주었네요`);
      } else {
        setWateringLogs("물을 준 이력이 없네요.");
      }
    };
    getWateringLogs();
  }, [selectedDate, setWateringLogs]);

  const changeWeekHandle = (btnType: string) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="month-container">
        <div className="">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="button-conatiner">
          <span className="button" onClick={() => changeWeekHandle("prev")}>
            prev
          </span>
          <span className="button" onClick={() => changeWeekHandle("next")}>
            next
          </span>
        </div>
      </div>
    );
  };
  const renderDays = () => {
    const dateFormat = "eeeee";
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <p className="week" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </p>,
      );
    }

    return <div className="week-container">{days}</div>;
  };
  const renderCells = () => {
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
            key={day.toString() + "1"}
            className={`day ${isSameDay(day, selectedDate) ? "selected" : ""}`}
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

    return <>{rows}</>;
  };

  return (
    <Wrapper>
      <div className="calander">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
    </Wrapper>
  );
};

export default WeekPicker;
