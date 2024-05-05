import BadgeDemo from "@/components/preview/badge";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const badgeProps: DocComponentProp[] = [
  {
    component: "Badge",
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description:
          "Content to display inside the badge. There should be only one child for best results. Note: Order of precedence: Processing > Dot > Count. This means that if both dot and count props are provided, the dot will be shown instead of the count.",
      },
      {
        prop: "count",
        type: "number",
        description:
          "Number that shows the count of notifications. Default is 0. Note: Order of precedence: Processing > Dot > Count. This means that if both dot and count props are provided, the dot will be shown instead of the count.",
      },
      {
        prop: "dot",
        type: "boolean",
        description:
          "Boolean value to determine whether to show a dot UI instead of the count. Default is false. Note: Order of precedence: Processing > Dot > Count. This means that if both dot and count props are provided, the dot will be shown instead of the count.",
      },
      {
        prop: "showZero",
        type: "boolean",
        description:
          "Boolean value to determine whether to display the number 0. Default is false.",
      },
      {
        prop: "overflowCount",
        type: "number",
        description:
          "The maximum number before displaying '99+'. Default is 1000.",
      },
      {
        prop: "processing",
        type: "boolean",
        description:
          "Boolean value to determine whether to show a processing icon (lucide icon clock4). Note: Order of precedence: Processing > Dot > Count. This means that if both dot and count props are provided, the dot will be shown instead of the count.",
      },
      {
        prop: "className",
        type: "string",
        description: "Styling for the parent div.",
      },
      {
        prop: "variant",
        type: '"default" | "success" | "error" | "warning" | "info"',
        description:
          "Variant of the badge determining its color. Default is 'default'.",
      },
    ],
  },
];

const badgeComponentDocumentation: DocComponentDocumentation = {
  url: "badge",
  componentTitle: "Badge",
  componentDescription:
    "Small numerical value or status descriptor for UI elements.",
  previewCode: `import Badge from "inc-design-system/badge";
import { Bell } from "lucide-react";
import React from "react";

const BadgeDemo = () => {
return (
    <>
      <Badge variant={"info"} count={1000}>
          {/* to simulate an icon/ div */}
          <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
          </div>
      </Badge>

      <Badge variant={"info"} dot>
          {/* to simulate an icon/ div */}
          <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
          </div>
      </Badge>

      <Badge processing>
          {/* to simulate an icon/ div */}
          <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
          </div>
      </Badge>
    </>
);
};

export default BadgeDemo;`,
  previewComponent: BadgeDemo,
  usageCodeImport: `import Badge from "inc-design-system/badge";`,
  usageCode: `<Badge variant={"info"} dot>
  {/* to simulate an icon/ div */}
  <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
    <Bell size={24} />
  </div>
</Badge>`,
  props: badgeProps,
};

export default badgeComponentDocumentation;
