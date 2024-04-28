import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select";
import multiSelectComponentDocumentation from "./component-documentation/multi-select";
import tagComponentDocumentation from "./component-documentation/tag";
import checkableTagComponentDocumentation from "./component-documentation/checkable-tag";
import buttonComponentDocumentation from "./component-documentation/button";
import checkboxComponentDocumentation from "./component-documentation/checkbox";
import radioComponentDocumentation from "./component-documentation/radio-group";
import inputComponentDocumentation from "./component-documentation/input";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  buttonComponentDocumentation,
  checkableTagComponentDocumentation,
  checkboxComponentDocumentation,
  inputComponentDocumentation,
  multiSelectComponentDocumentation,
  radioComponentDocumentation,
  selectComponentDocumentation,
  tagComponentDocumentation,
];

export { docComponentsDocumentation };
