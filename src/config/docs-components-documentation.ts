import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select-component-documentation";
import multiSelectComponentDocumentation from "./component-documentation/multiselect-component-documentation";
import tagComponentDocumentation from "./component-documentation/tag-component-documentation";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  multiSelectComponentDocumentation,
  selectComponentDocumentation,
  tagComponentDocumentation,
];

export { docComponentsDocumentation };
