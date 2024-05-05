import { TimePicker } from "inc-design-system/timePicker";
import React from "react";

const TimePickerDemo = () => {
  const [timeValue, setTimeValue] = React.useState(new Date());

  return (
    <div className="flex space-x-4 justify-center items-center">
      <h1>Select Time</h1>
      <TimePicker
        timeValue={timeValue}
        onTimeChange={setTimeValue}
        size="md"
        twelveHour={true}
        hourMinuteOnly={false}
        suppressHydrationWarning={true}
      />
    </div>
  );
};

export default TimePickerDemo;
