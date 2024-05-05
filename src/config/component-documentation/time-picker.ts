import TimePickerDemo from "@/components/preview/time-picker";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const timePickerProps: DocComponentProp[] = [
  {
    component: "TimePicker",
    props: [
      {
        prop: "timeValue",
        type: "Date",
        description:
          "The current time selected. If undefined, the picker defaults to the current time.",
      },
      {
        prop: "onTimeChange",
        type: "(newTime: Date) => void",
        description:
          "A callback function that is called when the user selects a new time. It receives the new Date object as its argument.",
      },
      {
        prop: "size",
        type: "'sm' | 'md' | 'lg'",
        description:
          "Specifies the size of the time picker. Options include sm for small, md for medium, and lg for large. Default is md.",
        default: "'md'",
      },
      {
        prop: "hourMinuteOnly",
        type: "boolean",
        description:
          "If true, the picker will only display hours and minutes (no seconds). Default is false.",
        default: "false",
      },
      {
        prop: "twelveHour",
        type: "boolean",
        description:
          "If true, the time picker will use a 12-hour format with AM/PM selectors. If false, it uses a 24-hour format. Default is false.",
        default: "false",
      },
      {
        prop: "disabled",
        type: "boolean",
        description:
          "If true, the time picker will be disabled and not interactable. Default is false.",
        default: "false",
      },
      {
        prop: "suppressHydrationWarning",
        type: "boolean",
        description:
          "If true, suppresses the hydration warning that Next.js might throw when using dynamic imports with React components.",
        default: "true",
      },
    ],
  },
];

const timePickerComponentDocumentation: DocComponentDocumentation = {
  url: "time-picker",
  componentTitle: "Time Picker",
  componentDescription:
    "By clicking the input box, you can select a time from a popup panel.",
  previewCode: `import { TimePicker } from "inc-design-system/timePicker";
import React from "react";

const TimePickerDemo = () => {
const [timeValue, setTimeValue] = React.useState(new Date());

return (
    <div>
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

export default TimePickerDemo;`,
  previewComponent: TimePickerDemo,
  usageCodeImport: `import { TimePicker } from "inc-design-system/timePicker";`,
  usageCode: `const [timeValue, setTimeValue] = React.useState(new Date());

return (
    <div>
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
);`,
  props: timePickerProps,
};

export default timePickerComponentDocumentation;
