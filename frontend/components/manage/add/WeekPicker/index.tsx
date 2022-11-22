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
import PickerHeader from "./PickerHeader";
import PickerDays from "./PickerDays";
import PickerCells from "./PickerCells";

interface Props {
  setWateringLogs: Dispatch<SetStateAction<string>>;
}

const WeekPicker: FC<Props> = ({ setWateringLogs }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { potseq } = useRouter().query;

  const onDateClickHandle = (day: Date) => {
    setSelectedDate(day);
  };

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
      console.log(logs);

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

  return (
    <Wrapper>
      <div className="calander">
        <PickerHeader
          currentMonth={currentMonth}
          changeWeekHandle={changeWeekHandle}
        />
        <PickerDays currentMonth={currentMonth} />
        <PickerCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          potseq={potseq!}
          onDateClickHandle={onDateClickHandle}
        />
      </div>
    </Wrapper>
  );
};

export default WeekPicker;
