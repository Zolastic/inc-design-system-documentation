import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import SelectDemo from "@/components/demo/select-demo";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  {
    url: "select",
    componentTitle: "Select",
    componentDescription: "Select component to select value from options.",
    previewCode: `import {
            Select,
            SelectContent,
            SelectItem,
            SelectTrigger,
            SelectValue,
          } from "inc-design-system/select";
          import React from "react";
          
          const SelectDemo = () => {
            return (
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            );
          };
          
          export default SelectDemo;`,
    previewComponent: SelectDemo,
  },
];

export { docComponentsDocumentation };
