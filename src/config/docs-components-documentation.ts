import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select-component-documentation";
import multiSelectComponentDocumentation from "./component-documentation/multi-select-component-documentation";
import tagComponentDocumentation from "./component-documentation/tag-component-documentation";
import checkableTagComponentDocumentation from "./component-documentation/checkable-tag-component-documentation";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  checkableTagComponentDocumentation,
  multiSelectComponentDocumentation,
  selectComponentDocumentation,
  tagComponentDocumentation,
];

export { docComponentsDocumentation };
