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
import accordionComponentDocumentation from "./component-documentation/accordion";
import defaultListComponentDocumentation from "./component-documentation/default-list";
import calendarComponentDocumentation from "./component-documentation/calendar";
import datePickerComponentDocumentation from "./component-documentation/date-picker";
import popoverComponentDocumentation from "./component-documentation/popover";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  accordionComponentDocumentation,
  alertComponentDocumentation,
  buttonComponentDocumentation,
  calendarComponentDocumentation,
  checkableTagComponentDocumentation,
  checkboxComponentDocumentation,
  datePickerComponentDocumentation,
  defaultListComponentDocumentation,
  fileUploadComponentDocumentation,
  inputComponentDocumentation,
  multiSelectComponentDocumentation,
  popoverComponentDocumentation,
  radioComponentDocumentation,
  selectComponentDocumentation,
  switchComponentDocumentation,
  tagComponentDocumentation,
  textareaComponentDocumentation,
];

export { docComponentsDocumentation };
