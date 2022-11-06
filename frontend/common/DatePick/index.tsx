import React, { useState, FC } from "react";
import { DatePickerWrapper } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  saveInput: (value: string | Date, identifier: string) => void;
}

const DatePick: FC<Props> = ({ saveInput }) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (dates: Date) => {
    saveInput(dates, "waterSupply");
    setStartDate(dates);
  };

  return (
    <DatePickerWrapper
      selected={startDate}
      onChange={onChange}
      dateFormat="yyyy-MM-dd"
      startDate={startDate}
    />
  );
};

export default DatePick;
