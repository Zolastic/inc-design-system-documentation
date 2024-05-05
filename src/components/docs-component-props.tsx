import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DocComponentLink,
  DocComponentProp,
} from "@/types/docs-component-documentation";
import Link from "next/link";
import { Tag } from "inc-design-system/tag";
import { SquareArrowOutUpRight } from "lucide-react";

type DocsComponentPropsProps = {
  DocComponentProps: DocComponentProp[];
};

type ComponentPropsTableProps = {
  DocComponentProps: DocComponentProp;
  links?: DocComponentLink[];
};

const DocsComponentProps = ({ DocComponentProps }: DocsComponentPropsProps) => {
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 w-full">
        Props
      </h1>
      <div className="flex flex-col space-y-10">
        {DocComponentProps.map((componentProps) => (
          <div key={componentProps.component} className="mt-2">
            <ComponentPropsTable
              DocComponentProps={componentProps}
              links={componentProps.links}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const ComponentPropsTable = ({
  DocComponentProps,
  links = [],
}: ComponentPropsTableProps) => {
  return (
    <>
      <h2
        className="
        scroll-m-20 
        pb-1 
        text-lg
        font-medium 
        tracking-tight 
        first:mt-0 
        w-full
      "
      >
        {DocComponentProps.component}
      </h2>
      <div>
        {links.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-text-default/60">
              For more props:
            </h3>
            <ul className="flex items-center space-x-2">
              {links.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} target="_blank" rel="noreferrer">
                    <Tag variant="secondary" border={false}>
                      {link.title}
                      <SquareArrowOutUpRight className="ml-1" size={12} />
                    </Tag>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {DocComponentProps.props.length > 0 && (
        <Table className="mt-5">
          <TableHeader>
            <TableRow className="bg-grey-100">
              <TableHead className="w-[50px]">Prop</TableHead>
              <TableHead className="w-[50px]">Type</TableHead>
              <TableHead className="w-[250px]">Description</TableHead>
              <TableHead className="w-[50px]">Default</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DocComponentProps.props.map((prop) => (
              <TableRow key={prop.prop}>
                <TableCell>{prop.prop}</TableCell>
                <TableCell>{prop.type ? prop.type : "-"}</TableCell>
                <TableCell>
                  {prop.description ? prop.description : "-"}
                </TableCell>
                <TableCell>{prop.default ? prop.default : "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default DocsComponentProps;
