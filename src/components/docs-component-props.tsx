import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { DocComponentProp } from "@/types/docs-component-documentation";

type DocsComponentPropsProps = {
  DocComponentProps: DocComponentProp[];
};

type ComponentPropsTableProps = {
  DocComponentProps: DocComponentProp;
};

const DocsComponentProps = ({ DocComponentProps }: DocsComponentPropsProps) => {
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 w-full mb-10">
        Props
      </h1>
      <div className="mt-4 flex flex-col space-y-10">
        {DocComponentProps.map((componentProps) => (
          <div key={componentProps.component} className="mt-2">
            <ComponentPropsTable DocComponentProps={componentProps} />
          </div>
        ))}
      </div>
    </>
  );
};

const ComponentPropsTable = ({
  DocComponentProps,
}: ComponentPropsTableProps) => {
  return (
    <>
      <h2
        className="
        scroll-m-20 
        pb-2 
        text-lg
        font-medium 
        tracking-tight 
        first:mt-0 
        w-full
      "
      >
        {DocComponentProps.component}
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-grey-100">
            <TableHead className="w-[100px]">Prop</TableHead>
            <TableHead className="w-[100px]">Type</TableHead>
            <TableHead className="w-[100px]">Description</TableHead>
            <TableHead className="w-[100px]">Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DocComponentProps.props.map((prop) => (
            <TableRow key={prop.prop}>
              <TableCell>{prop.prop}</TableCell>
              <TableCell>{prop.type ? prop.type : "-"}</TableCell>
              <TableCell>{prop.description ? prop.description : "-"}</TableCell>
              <TableCell>{prop.default ? prop.default : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DocsComponentProps;
