import {
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

export default TableDemo;
