import ButtonDemo from "@/components/preview/button";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const buttonProps: DocComponentProp[] = [
  {
    component: "Button",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the button.",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "dashed" | "link" | "text"',
        description: "The variant of the button.",
        default: '"primary"',
      },
      {
        prop: "size",
        type: '"default" | "sm" | "lg" | "icon"',
        description: "The size of the button.",
        default: '"default"',
      },
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Render the button as a child component. Default is false.",
        default: "false",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Whether the button is disabled. Default is false.",
        default: "false",
      },
      // Other React.ButtonHTMLAttributes<HTMLButtonElement> props are inherited
      // Props like onClick, type, etc. are available but not documented here
    ],
  },
];

const buttonComponentDocumentation: DocComponentDocumentation = {
  url: "button",
  componentTitle: "Button",
  componentDescription:
    "Displays a button or a component that looks like a button.",
  previewCode: `import { Button } from "inc-design-system/button";
  import React from "react";
  
  const ButtonDemo = () => {
    return <Button>Button</Button>;
  };
  
  export default ButtonDemo;`,
  previewComponent: ButtonDemo,
  usageCodeImport: `import { Button } from "inc-design-system/button";`,
  usageCode: `<Button>Button</Button>`,
  props: buttonProps,
};

export default buttonComponentDocumentation;
