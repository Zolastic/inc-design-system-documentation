import SwitchDemo from "@/components/preview/switch";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const switchProps: DocComponentProp[] = [
  {
    component: "Switch",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the switch.",
      },
      {
        prop: "defaultChecked",
        type: "boolean",
        description:
          "Specifies whether the switch should be on (true) or off (false) by default.",
        default: "false",
      },
      {
        prop: "size",
        type: '"small" | "medium" | "large"',
        description:
          "Determines the size of the switch. Available options are small, medium, and large.",
        default: '"medium"',
      },
      {
        prop: "variantIcon",
        type: "boolean",
        description:
          "Determines whether an icon should be displayed within the switch.",
        default: "false",
      },
      {
        prop: "onChange",
        type: "(checked: boolean) => void",
        description:
          "A callback function that is called when the switch's state changes.",
      },
      // Other React.HTMLAttributes<HTMLLabelElement> props are inherited
      // Props like onClick, aria-label, etc. are available but not documented here
    ],
  },
];

const switchComponentDocumentation: DocComponentDocumentation = {
  url: "switch",
  componentTitle: "Switch",
  componentDescription:
    "Displays a button or a component that looks like a button.",
  previewCode: `import { Switch } from "inc-design-system/switch";
import React from "react";

const SwitchDemo = () => {
  return <Switch defaultChecked={true} size="medium" />;
};

export default SwitchDemo;`,
  previewComponent: SwitchDemo,
  usageCodeImport: `import { Switch } from "inc-design-system/switch";`,
  usageCode: `<Switch />`,
  props: switchProps,
};

export default switchComponentDocumentation;
