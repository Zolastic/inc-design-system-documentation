import IndicatorDemo from "@/components/preview/indicator";

import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const indicatorProps: DocComponentProp[] = [
  {
    component: "Indicator",
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description:
          "Content to display inside the badge. There should be at least one child.",
      },
      {
        prop: "count",
        type: "number",
        description:
          "Number that shows the count of notifications. Default is 0.",
        default: "0",
      },
      {
        prop: "dot",
        type: "boolean",
        description:
          "Boolean value to determine whether to show a dot UI instead of the count. Default is false. Order of precedence: Processing > Dot > Count",
        default: "false",
      },
      {
        prop: "showZero",
        type: "boolean",
        description:
          "Boolean value to determine whether to display the number 0. Default is false.",
        default: "false",
      },
      {
        prop: "overflowCount",
        type: "number",
        description:
          "The maximum number before displaying '99+'. Default is 99.",
        default: "99",
      },
      {
        prop: "processing",
        type: "boolean",
        description:
          "Boolean value to determine whether to show a processing icon (lucide icon clock4). Default is false.",
        default: "false",
      },
      {
        prop: "className",
        type: "string",
        description: "Styling for the parent div.",
        default: "-",
      },
      {
        prop: "variant",
        type: '"default" | "success" | "error" | "warning" | "info"',
        description: "Variant of the badge determining its color.",
        default: "default",
      },
    ],
  },
];

const indicatorComponentDocumentation: DocComponentDocumentation = {
  url: "indicator",
  componentTitle: "Indicator",
  componentDescription:
    "The Indicator component is a small, customizable UI element typically used to display counts or statuses.",
  previewCode: `
    import Indicator from "inc-design-system/indicator";
import { Bell } from "lucide-react";

const IndicatorDemo = () => {
  return (
    <div>
      <Indicator variant={"info"} count={1000}>
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
      <Indicator variant={"info"} dot>
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
      <Indicator processing>
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
    </div>
  );
};

export default IndicatorDemo;
`,
  previewComponent: IndicatorDemo,
  usageCodeImport: `import Indicator from "inc-design-system/indicator";`,
  usageCode: `<Indicator>Div with status</Indicator>`,
  props: indicatorProps,
};

export default indicatorComponentDocumentation;