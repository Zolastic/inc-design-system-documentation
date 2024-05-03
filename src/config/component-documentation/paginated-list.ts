import PaginatedListDemo from "@/components/preview/paginated-list";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const paginatedListProps: DocComponentProp[] = [
  {
    component: "PaginatedList",
    props: [
      {
        prop: "header",
        type: "string",
        description: "Appears at the top of the component.",
      },
      {
        prop: "itemsPerPage",
        type: "number",
        description:
          "Determines how many children to be displayed on each page.",
      },
      {
        prop: "horizontal",
        type: "boolean",
        description:
          "Determines whether to be displayed in a horizontal row or not.",
      },
      {
        prop: "children",
        type: "React.ReactNode",
        description:
          "Child passed to this component. Should be multiple children as it is a list.",
      },
    ],
  },
];

const paginatedListComponentDocumentation: DocComponentDocumentation = {
  url: "paginated-list",
  componentTitle: "Paginated List",
  componentDescription: "Displays a list of items with pagination controls.",
  previewCode: `import PaginatedList from "inc-design-system/paginatedList";
import React from "react";

const PaginatedListDemo = () => {
const data = Array.from({ length: 6 }, (_, i) => ({
    header: \`User - \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
}));

return (
    <PaginatedList itemsPerPage={2} header="Users' email" variant={"default"}>
    {data.map((item, index) => (
        <div key={index}>
        <div className="border-b-1 border-gray-400 p-3 rounded">
            <h1 className="text-lg font-bold">{item.header}</h1>
            <p>{item.email}</p>
        </div>
        </div>
    ))}
    </PaginatedList>
);
};

export default PaginatedListDemo;`,
  previewComponent: PaginatedListDemo,
  usageCodeImport: `import PaginatedList from "inc-design-system/paginatedList";`,
  usageCode: `<PaginatedList itemsPerPage={2}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</PaginatedList>`,
  props: paginatedListProps,
};

export default paginatedListComponentDocumentation;
