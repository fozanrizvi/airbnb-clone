import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/style.css";

//DATE PICKER COMPONENT
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDatae: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <h1>Hi folks</h1>
    </div>
  );
}

export default Search;
