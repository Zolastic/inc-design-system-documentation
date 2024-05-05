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
import paginatedListComponentDocumentation from "./component-documentation/paginated-list";
import rangeDatePickerComponentDocumentation from "./component-documentation/range-date-picker";
import modalComponentDocumentation from "./component-documentation/modal";
import alertModalComponentDocumentation from "./component-documentation/alert-modal";
import badgeComponentDocumentation from "./component-documentation/badge";
import cardComponentDocumentation from "./component-documentation/card";
import hoverCardComponentDocumentation from "./component-documentation/hover-card";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  accordionComponentDocumentation,
  alertModalComponentDocumentation,
  alertComponentDocumentation,
  badgeComponentDocumentation,
  buttonComponentDocumentation,
  calendarComponentDocumentation,
  cardComponentDocumentation,
  checkableTagComponentDocumentation,
  checkboxComponentDocumentation,
  datePickerComponentDocumentation,
  defaultListComponentDocumentation,
  fileUploadComponentDocumentation,
  hoverCardComponentDocumentation,
  inputComponentDocumentation,
  modalComponentDocumentation,
  multiSelectComponentDocumentation,
  paginatedListComponentDocumentation,
  popoverComponentDocumentation,
  radioComponentDocumentation,
  rangeDatePickerComponentDocumentation,
  selectComponentDocumentation,
  switchComponentDocumentation,
  tagComponentDocumentation,
  textareaComponentDocumentation,
];

export { docComponentsDocumentation };
