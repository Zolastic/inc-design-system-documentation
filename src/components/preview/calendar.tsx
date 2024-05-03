"use client";
import { Calendar } from "inc-design-system/calendar";
import React from "react";

const CalendarDemo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
};

export default CalendarDemo;
