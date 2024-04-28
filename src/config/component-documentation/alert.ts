import AlertDemo from "@/components/preview/alert";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const alertProps: DocComponentProp[] = [
  {
    component: "Alert",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the alert.",
      },
      {
        prop: "variant",
        type: '"info" | "danger" | "warning" | "success"',
        description: "Sets the variant of the alert.",
        default: '"info"',
      },
      {
        prop: "showIcon",
        type: "boolean",
        description: "Sets whether to show or hide the relevant icon.",
        default: "true",
      },
      {
        prop: "dismissible",
        type: "boolean",
        description:
          "Sets whether to show or hide the 'X' that allows the alert to be dismissed.",
        default: "false",
      },
      {
        prop: "onDismiss",
        type: "() => void",
        description:
          "A function that will be called upon the dismissal of the Alert, can only be triggered if dismissible={true}.",
      },
      // Other React.HTMLAttributes<HTMLDivElement> props are inherited
      // Props like children, onClick, etc. are available but not documented here
    ],
  },
];

const alertComponentDocumentation: DocComponentDocumentation = {
  url: "alert",
  componentTitle: "Alert",
  componentDescription: "Display warning messages that require attention.",
  previewCode: `import { Alert } from "inc-design-system/alert";
  import React from "react";
  
  const AlertDemo = () => {
    return (
      <Alert variant="success">
        <h1>Successful!</h1>
      </Alert>
    );
  };
  
  export default AlertDemo;`,
  previewComponent: AlertDemo,
  usageCodeImport: `import { Alert } from "inc-design-system/alert";`,
  usageCode: `<Alert>
  <h1>Successful!</h1>
</Alert>`,
  props: alertProps,
};

export default alertComponentDocumentation;
