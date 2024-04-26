import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select-component-documentation";
import multiSelectComponentDocumentation from "./component-documentation/multiselect-component-documentation";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  multiSelectComponentDocumentation,
  selectComponentDocumentation,
];

export { docComponentsDocumentation };
