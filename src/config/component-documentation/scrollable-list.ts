import ScrollableListDemo from "@/components/preview/scrollable-list";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const scrollableListProps: DocComponentProp[] = [
  {
    component: "Scrollable List",
    props: [
      {
        prop: "horizontal",
        type: "boolean",
        description: "Whether to be displayed in a horizontal row or not.",
      },
      {
        prop: "width",
        type: "React.CSSProperties['width']",
        description: "The width of the list. Default is 'full'.",
      },
      {
        prop: "height",
        type: "React.CSSProperties['height']",
        description:
          "The height of the list. Default is '400px' (might change).",
      },
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
    ],
  },
];

const scrollableListComponentDocumentation: DocComponentDocumentation = {
  url: "scrollable-list",
  componentTitle: "Scrollable List",
  componentDescription:
    "The ScrollableList component is a versatile UI element that provides a container for displaying a list of items, with the ability to scroll through them vertically or horizontally. It offers several customization options to tailor its appearance and behavior according to specific requirements.",
  previewCode: `import ScrollableList from "inc-design-system/scrollableList";
  import React from "react";

  const ScrollableListDemo = () => {
    const data = Array.from({ length: 3 }, (_, i) => ({
      header: \`list item \${i + 1}\`,
      item: \`content -\${i + 1}\`,
    }));

    return (
      <ScrollableList height={"300px"} header="HEADER">
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <h1 className="text-lg font-bold">{item.header}</h1>
              <p>{item.item}</p>
              each element must have this
            </div>
          </div>
        ))}
      </ScrollableList>
    );
  };

  export default ScrollableListDemo;`,
  previewComponent: ScrollableListDemo,
  usageCodeImport: `import ScrollableList from "inc-design-system/scrollableList";`,
  usageCode: `<ScrollableList height={"300px"} header="HEADER">
  {data.map((item, index) => (
    <div key={index}>
      <div>
        <h1 className="text-lg font-bold">{item.header}</h1>
        <p>{item.item}</p>
        each element must have this
      </div>
    </div>
  ))}
</ScrollableList>`,
  props: scrollableListProps,
};

export default scrollableListComponentDocumentation;
