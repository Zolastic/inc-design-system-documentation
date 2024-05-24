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
        description: "Content to display inside the badge. There should be at least one child.",
      },
      {
        prop: "className",
        type: "string",
        description: "Styling for the parent div.",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "translucent" | "primaryAccent"',
        description: "Variant of the badge determining its color.",
      },
    ],
  },
];

const badgeComponentDocumentation: DocComponentDocumentation = {
  url: "badge",
  componentTitle: "Badge",
  componentDescription:
    "The Badge component is a small, customizable UI element typically used to display counts or statuses.",
  previewCode: `import React from "react";
  import Badge from "inc-design-system/badge";
  
  const BadgeDemo = () => {
    return (
      <div>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="translucent">Light</Badge>
        <Badge variant="primaryAccent">Dark</Badge>
      </div>
    );
  };
  
  export default BadgeDemo;
  `,
  previewComponent: BadgeDemo,
  usageCodeImport: `import Badge from "inc-design-system/badge";`,
  usageCode: `<Badge>Badge</Badge>`,
  props: badgeProps,
};

export default badgeComponentDocumentation;
