import { CalendarDateRange } from "inc-design-system/calendar";
import { RangeDatePicker } from "inc-design-system/datePicker";
import React from "react";

const RangeDatePickerDemo = () => {
  const [selectedDate, setSelectedDate] = React.useState<
    CalendarDateRange | undefined
  >(undefined);

  return (
    <RangeDatePicker
      today={new Date()}
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
};

export default RangeDatePickerDemo;
