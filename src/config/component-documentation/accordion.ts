import AccordionDemo from "@/components/preview/accordion";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const accordionProps: DocComponentProp[] = [
  {
    component: "Accordion",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/accordion#root",
      },
    ],
    props: [
      {
        prop: "single",
        type: "boolean",
        description:
          "Determines whether you want only a single item to be opened at once. If true, when the user opens one accordion, other accordions which are opened will close.",
        default: "false",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Disabled styling.",
        default: "false",
      },
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Children that are passed.",
      },
    ],
  },
  {
    component: "AccordionItem",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/accordion#item",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Children that are passed.",
      },
      {
        prop: "className",
        type: "string",
        description: "Classname that is passed.",
      },
      {
        prop: "value",
        type: "string",
        description: "Value that is passed.",
      },
    ],
  },
  {
    component: "AccordionTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/accordion#trigger",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Children that are passed.",
      },
      {
        prop: "className",
        type: "string",
        description: "Classname that is passed.",
      },
    ],
  },
  {
    component: "AccordionContent",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/accordion#content",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Children that are passed.",
      },
      {
        prop: "className",
        type: "string",
        description: "Classname that is passed.",
      },
    ],
  },
];

const accordionComponentDocumentation: DocComponentDocumentation = {
  url: "accordion",
  componentTitle: "Accordion",
  componentDescription:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  previewCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "inc-design-system/accordion";
import React from "react";

const AccordionDemo = () => {
  type data = {
    header: string;
    content: string;
  };
  const accordionData: data[] = [
    {
      header: "Header 1",
      content:
        "Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
    },
    {
      header: "Header 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl tincidunt tincidunt",
    },
    {
      header: "Header 3",
      content: "This is some dummy content",
    },
  ];

  return (
    <Accordion>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={index.toString()}>
          <AccordionTrigger>
            <h1 className="text-lg font-bold">{item.header}</h1>
          </AccordionTrigger>
          <AccordionContent>
            <p>{item.content} </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionDemo;`,
  previewComponent: AccordionDemo,
  usageCodeImport: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "inc-design-system/accordion";`,
  usageCode: `<Accordion>
  <AccordionItem value="contentOne">
    <AccordionTrigger>
      <h1 className="text-lg font-bold">Open Accordion</h1>
    </AccordionTrigger>
    <AccordionContent>
      <p>Content 1</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
  props: accordionProps,
};

export default accordionComponentDocumentation;
