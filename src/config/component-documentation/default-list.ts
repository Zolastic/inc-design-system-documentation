import DefaultListDemo from "@/components/preview/default-list";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const defaultListProps: DocComponentProp[] = [
  {
    component: "DefaultList",
    props: [
      {
        prop: "Header",
        type: "string",
        description: "This will be at the top of the list.",
      },
      {
        prop: "Footer",
        type: "string",
        description: "This will be at the bottom of the list.",
      },
      {
        prop: "Children",
        type: "React.ReactNode",
        description:
          "Child passed to this component, should be multiple children as it is a list.",
      },
    ],
  },
];

const defaultListComponentDocumentation: DocComponentDocumentation = {
  url: "default-list",
  componentTitle: "Default List",
  componentDescription:
    "Displays a list of items with an optional header and a footer. (Not Scrollable)",
  previewCode: `import DefaultList from "inc-design-system/defaultList";
import React from "react";

const DefaultListDemo = () => {
  const data = Array.from({ length: 2 }, (_, i) => ({
    header: \`User - \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
  }));

  return (
    <DefaultList header="Users' email" footer="End of list">
      {data.map((item, index) => (
        <div key={index}>
          <div className="">
            <h1 className="text-lg font-bold">{item.header}</h1>
            <p>Email: {item.email}</p>
          </div>
        </div>
      ))}
    </DefaultList>
  );
};

export default DefaultListDemo;`,
  previewComponent: DefaultListDemo,
  usageCodeImport: `import DefaultList from "inc-design-system/defaultList";`,
  usageCode: `<DefaultList>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</DefaultList>`,
  props: defaultListProps,
};

export default defaultListComponentDocumentation;
