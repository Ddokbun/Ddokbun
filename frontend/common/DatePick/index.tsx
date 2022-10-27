import React, { useState, useEffect, SyntheticEvent } from "react";
import ReactDatePicker from "react-datepicker";
import { DatePickerWrapper, Wrapper } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

const DatePick: React.FC<{
  saveInput: (value: string, identifier: string) => void;
}> = ({ saveInput }) => {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (dates: any) => {
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
