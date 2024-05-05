import CardDemo from "@/components/preview/card";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const cardProps: DocComponentProp[] = [
  {
    component: "Card",
    props: [
      {
        prop: "size",
        type: '"small" | "medium" | "large" | string',
        description:
          "Size variant of the card. Possible values are 'small', 'medium', 'large', or any custom string. Default is 'medium'.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
  {
    component: "CardHeader",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
  {
    component: "CardTitle",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
  {
    component: "CardDescription",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
  {
    component: "CardContent",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
  {
    component: "CardFooter",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
    ],
  },
];

const cardComponentDocumentation: DocComponentDocumentation = {
  url: "card",
  componentTitle: "Card",
  componentDescription: "A container component that groups content together.",
  previewCode: `import { Button } from "inc-design-system/button";
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "inc-design-system/card";
import { Input } from "inc-design-system/input";
import React from "react";

const CardDemo = () => {
return (
    <Card size="custom-size" className="w=[300px]">
      <CardHeader>
          <CardTitle>Create Evaluation Project</CardTitle>
          <CardDescription>
          Create an Evaluation Project for Jumbo Seafood
          </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
          <h1>Project Name:</h1>
          <Input placeholder="Project Name" />
      </CardContent>
      <CardFooter>
          <Button>Submit</Button>
      </CardFooter>
    </Card>
);
};

export default CardDemo;`,
  previewComponent: CardDemo,
  usageCodeImport: `import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "inc-design-system/card";`,
  usageCode: `<Card size="custom-size" className="w=[300px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a card description that can be used to describe the card.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-1">
    This is the content of the card.
  </CardContent>
  <CardFooter>This is the footer of the card.</CardFooter>
</Card>`,
  props: cardProps,
};

export default cardComponentDocumentation;
