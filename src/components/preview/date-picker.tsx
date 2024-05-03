import { DatePicker } from "inc-design-system/datePicker";
import React from "react";

const DatePickerDemo = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date()
  );

  return (
    <DatePicker
      selected={selectedDate}
      onSelect={setSelectedDate}
      placeholder="Select Date"
    />
  );
};

export default DatePickerDemo;
