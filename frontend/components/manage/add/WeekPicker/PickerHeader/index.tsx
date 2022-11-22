import {
  format,
} from "date-fns";
import { FC } from "react";

interface Props {
  currentMonth: Date;
  changeWeekHandle: (btnType: string) => void;
}

const PickerHeader: FC<Props> = ({ currentMonth, changeWeekHandle }) => {
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

export default PickerHeader;
