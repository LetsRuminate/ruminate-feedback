import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaRegCalendarAlt } from "react-icons/fa";

interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export function Calendar(props: CalendarProps) {
  const [selected, setSelected] = useState<Date>();

  let footer;
  if (!selected) {
    footer = <p className="text-white"></p>;
  } else {
    footer = <p className="text-white"></p>;
  }

  return (
    <DayPicker
      mode="single"
      selected={props.selected}
      onSelect={(day) => {
        setSelected(day);
        props.onSelect(day);
      }}
      footer={footer}
      className="text-white"
    />
  );
}

function CalendarButton() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [selected, setSelected] = useState<Date>();

  const display = () => {
    setShowCalendar(true);
    setShowButton(false);
  };

  return (
    <div className="flex items-center">
      {!selected && showButton && (
        <div className="flex items-center gap-2  bg-blue-500 px-4 py-2 rounded my-4">
          <FaRegCalendarAlt className="text-white text-2xl" />
          <button onClick={display} className="text-white">
            Please pick a day
          </button>
        </div>
      )}
      <div
        className={`${showCalendar ? "block" : "hidden"}`}
        onClick={() => {
          setShowCalendar(false);
          setShowButton(true);
        }}
      >
        <Calendar selected={selected} onSelect={setSelected} />
      </div>
      {selected && (
        <p className="text-white my-4 w-full border-b border-white">
          You chose {format(selected, "PP")}.
        </p>
      )}
    </div>
  );
}

export default CalendarButton;
