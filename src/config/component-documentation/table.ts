import TableDemo from "@/components/preview/table";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const tableProps: DocComponentProp[] = [
  {
    component: "Table",
    props: [],
  },
  {
    component: "TableHeader",
    props: [],
  },
  {
    component: "TableBody",
    props: [],
  },
  {
    component: "TableFooter",
    props: [],
  },
  {
    component: "TableRow",
    props: [],
  },
  {
    component: "TableHead",
    props: [],
  },
  {
    component: "TableCell",
    props: [],
  },
  {
    component: "TableCaption",
    props: [],
  },
];

const tableComponentDocumentation: DocComponentDocumentation = {
  url: "table",
  componentTitle: "Table",
  componentDescription:
    "The Table component is used to display tabular data in a structured format.",
  previewCode: `import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "inc-design-system/table";
  
const users = [
    {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        status: "Active",
    },
    {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "User",
        status: "Inactive",
    },
    {
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        role: "User",
        status: "Active",
    },
];

const TableDemo = () => {
    return (
        <Table>
            <TableCaption>A list of users in the system.</TableCaption>
            <TableHeader>
                <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                <TableRow key={user.email}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
  
export default TableDemo;`,
  previewComponent: TableDemo,
  usageCodeImport: `import {
Table,
TableBody,
TableCaption,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "inc-design-system/table";`,
  usageCode: `<Table>
  <TableCaption>Table Caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Header 1</TableHead>
      <TableHead>Header 2</TableHead>
      <TableHead>Header 3</TableHead>
      <TableHead>Header 4</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell 1</TableCell>
      <TableCell>Cell 2</TableCell>
      <TableCell>Cell 3</TableCell>
      <TableCell>Cell 4</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Cell 5</TableCell>
      <TableCell>Cell 6</TableCell>
      <TableCell>Cell 7</TableCell>
      <TableCell>Cell 8</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  // No props for any of the table components. So, we don't need to pass the tableProps array to the props key.
};

export default tableComponentDocumentation;
