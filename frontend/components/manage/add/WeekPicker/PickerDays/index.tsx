import { format, startOfWeek, addDays } from "date-fns";
import { FC } from "react";

interface Props {
  currentMonth: Date;
}

const PickerDays: FC<Props> = ({currentMonth}) => {
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

export default PickerDays;
