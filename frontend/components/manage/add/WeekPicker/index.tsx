import React, { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { Wrapper } from "./styles";

const WeekPicker: React.FC<{
  showDetailHandler: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showDetailHandler }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const onDateClickHandle = (day: any, dayStr: any) => {
    setSelectedDate(day);
    showDetailHandler(dayStr);
  };

  //   007AFF => 버튼
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
            key={day.toString()}
            className={`day ${
              isSameDay(day, new Date())
                ? "today"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            onClick={() => {
              const dayStr = format(cloneDay, "ccc dd MMM yy");
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <p className="day">{formattedDate}</p>
          </div>,
        );
        day = addDays(day, 1);
      }
      console.log(days);

      rows.push(<div className="day-container">{days}</div>);
      days = [];
    }
    return <>{rows}</>;
  };

  return (
    <Wrapper>
      <div className="calander">
        {renderHeader()}
        <div>
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </Wrapper>
  );
};

export default WeekPicker;
