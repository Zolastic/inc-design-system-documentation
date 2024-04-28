import AccordionDemo from "@/components/preview/accordion";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const accordionProps: DocComponentProp[] = [
  {
    component: "Accordion",
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
        prop: "headers",
        type: "string[]",
        description: "Array of headers that should match the children.",
      },
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Children that are passed.",
      },
    ],
  },
];

const accordionComponentDocumentation: DocComponentDocumentation = {
  url: "accordion",
  componentTitle: "Accordion",
  componentDescription:
    "A vertically stacked set of interactive headings that each reveal a section of content.",
  previewCode: `import Accordion from "inc-design-system/accordion";
  import React from "react";
  
  const AccordionDemo = () => {
    const headers: string[] = ["Header 1"];
  
    const data = Array.from({ length: 1 }, (_, i) => ({
      header: \`accordion \${i + 1}\`,
      item: \`content-\${i + 1}\`,
    }));
  
    return (
      <Accordion headers={headers}>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <h1 className="text-lg font-bold">{item.header}</h1>
                <p>{item.item}</p>
              </div>
            </div>
          );
        })}
      </Accordion>
    );
  };
  
  export default AccordionDemo;`,
  previewComponent: AccordionDemo,
  usageCodeImport: `import Accordion from "inc-design-system/accordion";`,
  usageCode: `<Accordion headers={headers}>
  {data.map((item, index) => {
    return (
      <div key={index}>
        <div>
          <h1 className="text-lg font-bold">{item.header}</h1>
          <p>{item.item}</p>
        </div>
      </div>
    );
  })}
</Accordion>`,
  props: accordionProps,
};

export default accordionComponentDocumentation;
