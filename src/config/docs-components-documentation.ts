import { DocComponentDocumentation } from "@/types/docs-component-documentation";
import selectComponentDocumentation from "./component-documentation/select";
import multiSelectComponentDocumentation from "./component-documentation/multi-select";
import tagComponentDocumentation from "./component-documentation/tag";
import checkableTagComponentDocumentation from "./component-documentation/checkable-tag";
import buttonComponentDocumentation from "./component-documentation/button";
import checkboxComponentDocumentation from "./component-documentation/checkbox";
import radioComponentDocumentation from "./component-documentation/radio-group";
import inputComponentDocumentation from "./component-documentation/input";
import textareaComponentDocumentation from "./component-documentation/textarea";
import alertComponentDocumentation from "./component-documentation/alert";
import switchComponentDocumentation from "./component-documentation/switch";
import fileUploadComponentDocumentation from "./component-documentation/file-upload";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  alertComponentDocumentation,
  buttonComponentDocumentation,
  checkableTagComponentDocumentation,
  checkboxComponentDocumentation,
  fileUploadComponentDocumentation,
  inputComponentDocumentation,
  multiSelectComponentDocumentation,
  radioComponentDocumentation,
  selectComponentDocumentation,
  switchComponentDocumentation,
  tagComponentDocumentation,
  textareaComponentDocumentation,
];

export { docComponentsDocumentation };
