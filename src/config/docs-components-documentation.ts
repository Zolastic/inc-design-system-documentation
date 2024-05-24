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
import timePickerComponentDocumentation from "./component-documentation/time-picker";
import avatarComponentDocumentation from "./component-documentation/avatar";
import tableComponentDocumentation from "./component-documentation/table";
import toastComponentDocumentation from "./component-documentation/toast";
import sheetComponentDocumentation from "./component-documentation/sheet";
import progressComponentDocumentation from "./component-documentation/progress";
import resultPageComponentDocumentation from "./component-documentation/result-page";

const docComponentsDocumentation: DocComponentDocumentation[] = [
  accordionComponentDocumentation,
  alertModalComponentDocumentation,
  alertComponentDocumentation,
  avatarComponentDocumentation,
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
  progressComponentDocumentation,
  radioComponentDocumentation,
  rangeDatePickerComponentDocumentation,
  resultPageComponentDocumentation,
  selectComponentDocumentation,
  sheetComponentDocumentation,
  switchComponentDocumentation,
  tableComponentDocumentation,
  tagComponentDocumentation,
  textareaComponentDocumentation,
  timePickerComponentDocumentation,
  toastComponentDocumentation,
];

export { docComponentsDocumentation };
