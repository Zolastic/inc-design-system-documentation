import HoverCardDemo from "@/components/preview/hover-card";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const hoverCardProps: DocComponentProp[] = [
  {
    component: "HoverCard",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/hover-card#root",
      },
    ],
    props: [],
  },
  {
    component: "HoverCardTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/hover-card#trigger",
      },
    ],
    props: [],
  },
  {
    component: "HoverCardContent",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/hover-card#content",
      },
    ],
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional class name for styling purposes.",
      },
      {
        prop: "align",
        type: "string",
        description:
          "Alignment of the content relative to the trigger. Default is 'center'.",
      },
      {
        prop: "sideOffset",
        type: "number",
        description:
          "Offset of the content from the trigger, in pixels. Default is 4.",
      },
    ],
  },
];

const hoverCardComponentDocumentation: DocComponentDocumentation = {
  url: "hover-card",
  componentTitle: "Hover Card",
  componentDescription:
    "Displays a card that shows additional information when hovered.",
  previewCode: `import {
HoverCard,
HoverCardContent,
HoverCardTrigger,
} from "inc-design-system/hoverCard";
import { Info } from "lucide-react";
import React from "react";

const HoverCardDemo = () => {
return (
    <HoverCard>
        <HoverCardTrigger asChild>
            <Info size={24} />
        </HoverCardTrigger>
        <HoverCardContent>
            <p>
            A mission statement explains why the organisations exists. It
            describes the organisation&apos;s purpose and its overall intention.
            </p>
        </HoverCardContent>
    </HoverCard>
);
};

export default HoverCardDemo;`,
  previewComponent: HoverCardDemo,
  usageCodeImport: `import {
HoverCard,
HoverCardContent,
HoverCardTrigger,
} from "inc-design-system/hoverCard";`,
  usageCode: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="text">Hover me</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>This is the content of the hover card</p>
  </HoverCardContent>
</HoverCard>`,
  props: hoverCardProps,
};

export default hoverCardComponentDocumentation;
