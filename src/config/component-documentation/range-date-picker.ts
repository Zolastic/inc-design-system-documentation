import RangeDatePickerDemo from "@/components/preview/range-date-picker";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const rangeDatePickerProps: DocComponentProp[] = [
  {
    component: "RangeDatePicker",
    props: [
      {
        prop: "today",
        type: "Date",
        description: "The current date.",
        default: "new Date()",
      },
      {
        prop: "selected",
        type: "CalendarDateRange | undefined",
        description:
          "The currently selected date range. If a date range is selected, it will be displayed in the date picker. If no date is selected, the placeholder text will be displayed instead.",
      },
      {
        prop: "onSelect",
        type: "(date: CalendarDateRange | undefined) => void",
        description:
          "A callback function that is called when a date range is selected in the date picker. The selected date range is passed as an argument to this function.",
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
      {
        prop: "dropDownClassName",
        type: "string",
        description:
          "A string that is added to the class list of the dropdown element in the date picker. This can be used to add custom styles to the dropdown.",
      },
      {
        prop: "calendarClassName",
        type: "string",
        description:
          "A string that is added to the class list of the calendar element in the date picker. This can be used to add custom styles to the calendar.",
      },
      {
        prop: "startDatePlaceholder",
        type: "string",
        description:
          "The placeholder text that is displayed when the start date is not selected.",
        default: "'Start date'",
      },
      {
        prop: "endDatePlaceholder",
        type: "string",
        description:
          "The placeholder text that is displayed when the end date is not selected.",
        default: "'End date'",
      },
      {
        prop: "disabledDates",
        type: "Matcher | Matcher[] | undefined",
        description:
          "Specifies which days should be disabled in the calendar. It can disable specific dates, ranges, or days of the week. Supports complex conditions like disabling before, after, or specific days.",
      },
      {
        prop: "onOpenChange",
        type: "function",
        description:
          "A function that is called when the visibility of the date picker changes.",
        default: "-",
      },
      {
        prop: "modal",
        type: "boolean",
        description:
          "A boolean that determines whether the date picker is displayed as a modal.",
        default: "false",
      },
    ],
  },
];

const rangeDatePickerComponentDocumentation: DocComponentDocumentation = {
  url: "range-date-picker",
  componentTitle: "Range Date Picker",
  componentDescription:
    "A date picker that allows the selection of a range of dates.",
  previewCode: `import { CalendarDateRange } from "inc-design-system/calendar";
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

export default RangeDatePickerDemo;`,
  previewComponent: RangeDatePickerDemo,
  usageCodeImport: `import { CalendarDateRange } from "inc-design-system/calendar";`,
  usageCode: `const [selectedDate, setSelectedDate] = React.useState<
  CalendarDateRange | undefined
>(undefined);

return (
  <RangeDatePicker
    today={new Date()}
    selected={selectedDate}
    onSelect={setSelectedDate}
  />
);`,
  props: rangeDatePickerProps,
};

export default rangeDatePickerComponentDocumentation;
