import CalendarDemo from "@/components/preview/calendar";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const calendarProps: DocComponentProp[] = [
  {
    component: "Calendar",
    links: [
      {
        title: "Docs",
        url: "https://react-day-picker.js.org/",
      },
    ],
    props: [
      {
        prop: "className",
        type: "string",
        description: "The class name of the calendar.",
      },
      {
        prop: "classNames",
        type: "object",
        description: "The class names for the calendar.",
      },
      {
        prop: "showOutsideDays",
        type: "boolean",
        description: "Whether to show outside days or not.",
        default: "true",
      },
      {
        prop: "today",
        type: "Date",
        description: "The current date.",
        default: "new Date()",
      },
      {
        prop: "selected",
        type: "Date | Date[] | CalendarDateRange | undefined",
        description:
          "The selected date. Type `Date` for 'single' mode, `Date[]` for 'multiple' mode, and `CalendarDateRange` for 'range' mode.",
      },
      {
        prop: "onSelect",
        type: "(selected: Date | Date[] | CalendarDateRange | undefined) => void",
        description:
          "Callback function that is called when a date or a range of dates is selected.",
      },
      {
        prop: "onDayClick",
        type: "(date: Date) => void",
        description: "The function to call when a day is clicked.",
      },
      {
        prop: "disabled",
        type: "Date[]",
        description: "The dates that should be disabled.",
        default: "[]",
      },
      {
        prop: "hidden",
        type: "Date[]",
        description: "The dates that should be hidden.",
        default: "[]",
      },
      {
        prop: "mode",
        type: "'single' | 'multiple' | 'range'",
        description: "The selection mode. Default is 'single'.",
        default: "'single'",
      },
      {
        prop: "props",
        type: "object",
        description:
          "The other props for the DayPicker component by React Day Picker.",
      },
    ],
  },
];

const calendarComponentDocumentation: DocComponentDocumentation = {
  url: "calendar",
  componentTitle: "Calendar",
  componentDescription: "A container that displays data in calendar form.",
  previewCode: `"use client";
  import { Calendar } from "inc-design-system/calendar";
  import React from "react";
  
  const CalendarDemo = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
  
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  };
  
  export default CalendarDemo;`,
  previewComponent: CalendarDemo,
  usageCodeImport: `import { Calendar } from "inc-design-system/calendar";`,
  usageCode: `const [date, setDate] = React.useState<Date | undefined>(new Date());
  
return <Calendar mode="single" selected={date} onSelect={setDate} />;`,
  props: calendarProps,
};

export default calendarComponentDocumentation;
