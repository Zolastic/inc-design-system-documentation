import InputDemo from "@/components/preview/input";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const inputProps: DocComponentProp[] = [
  {
    component: "Input",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the input.",
      },
      {
        prop: "variant",
        type: '"sm" | "md" | "lg"',
        description: "Changes the size of the Input component.",
        default: '"md"',
      },
      {
        prop: "type",
        type: '"password"',
        description: "Specifies the type of the input. Default is 'text'.",
      },
      // Other React.InputHTMLAttributes<HTMLInputElement> props are inherited
      // Props like value, onChange, etc. are available but not documented here
    ],
  },
];

const inputComponentDocumentation: DocComponentDocumentation = {
  url: "input",
  componentTitle: "Input",
  componentDescription:
    "Displays a form input field or a component that looks like an input field.",
  previewCode: `import { Input } from "inc-design-system/input";
  import React from "react";
  
  const InputDemo = () => {
    return <Input placeholder="Email" variant="lg" />;
  };
  
  export default InputDemo;`,
  previewComponent: InputDemo,
  usageCodeImport: `import { Input } from "inc-design-system/input";`,
  usageCode: `<Input />`,
  props: inputProps,
};

export default inputComponentDocumentation;
