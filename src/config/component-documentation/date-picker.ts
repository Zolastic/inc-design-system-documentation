import DatePickerDemo from "@/components/preview/date-picker";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const datePickerProps: DocComponentProp[] = [
  {
    component: "DatePicker",
    props: [
      {
        prop: "today",
        type: "Date",
        description: "The current date.",
        default: "new Date()",
      },
      {
        prop: "selected",
        type: "Date",
        description:
          "The currently selected date. If a date is selected, it will be displayed in the date picker. If no date is selected, the placeholder text will be displayed instead.",
      },
      {
        prop: "onSelect",
        type: "(date: Date) => void",
        description:
          "A callback function that is called when a date is selected in the date picker. The selected date is passed as an argument to this function.",
      },
      {
        prop: "placeholder",
        type: "string",
        description:
          "The placeholder text that is displayed in the date picker when no date is selected.",
        default: "'Pick a date'",
      },
      {
        prop: "disabled",
        type: "boolean",
        description:
          "A boolean that determines whether the date picker is disabled. If `true`, the date picker is disabled and cannot be interacted with. If `false` or omitted, the date picker is enabled.",
        default: "false",
      },
      {
        prop: "buttonClassName",
        type: "string",
        description:
          "A string that is added to the class list of the button element in the date picker. This can be used to add custom styles to the button.",
        default: "''",
      },
    ],
  },
];

const datePickerComponentDocumentation: DocComponentDocumentation = {
  url: "date-picker",
  componentTitle: "Date Picker",
  componentDescription: "To select or input a date.",
  previewCode: `import { DatePicker } from "inc-design-system/datePicker";
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

export default DatePickerDemo;`,
  previewComponent: DatePickerDemo,
  usageCodeImport: `import { DatePicker } from "inc-design-system/datePicker";`,
  usageCode: `const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
new Date()
);

return (
<DatePicker
    selected={selectedDate}
    onSelect={setSelectedDate}
    placeholder="Select Date"
/>
);`,
  props: datePickerProps,
};

export default datePickerComponentDocumentation;
