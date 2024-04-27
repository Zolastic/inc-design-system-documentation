import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select";
import multiSelectComponentDocumentation from "./component-documentation/multi-select";
import tagComponentDocumentation from "./component-documentation/tag";
import checkableTagComponentDocumentation from "./component-documentation/checkable-tag";
import buttonComponentDocumentation from "./component-documentation/button";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  buttonComponentDocumentation,
  checkableTagComponentDocumentation,
  multiSelectComponentDocumentation,
  selectComponentDocumentation,
  tagComponentDocumentation,
];

export { docComponentsDocumentation };
