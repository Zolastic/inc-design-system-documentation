import AlertModalDemo from "@/components/preview/alert-modal";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const alertModalProps: DocComponentProp[] = [
  {
    component: "AlertModal",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/alert-dialog#root",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description:
          "Must include ModalTrigger and ModalContent for the modal to work correctly.",
      },
    ],
  },
  {
    component: "AlertModalTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/alert-dialog#trigger",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "When clicked on, opens up the ModalContent.",
      },
    ],
  },
  {
    component: "AlertModalContent",
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Customizable content to display in the modal.",
      },
      {
        prop: "title",
        type: "string",
        description:
          "Optional. Shown as big bolded words at the top left corner of the modal.",
      },
      {
        prop: "description",
        type: "string",
        description:
          "Optional. Shown as small slightly greyed out words below the title.",
      },
      {
        prop: "className",
        type: "string",
        description:
          "Optional. Extra Tailwind styles for the overall modal content.",
      },
      {
        prop: "status",
        type: '"success" | "error" | "warning" | "info"',
        description:
          "Optional. Shows predefined icons for the chosen status, positioned next to the title.",
      },
    ],
  },
  {
    component: "AlertModalCancel",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/alert-dialog#cancel",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "When clicked on, closes the ModalContent.",
      },
      {
        prop: "className",
        type: "string",
        description: "Optional. Extra styling for the interactable element.",
      },
    ],
  },
  {
    component: "AlertModalAction",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/alert-dialog#action",
      },
    ],
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description:
          "When clicked on, closes the ModalContent after performing an action.",
      },
      {
        prop: "className",
        type: "string",
        description: "Optional. Extra styling for the interactable element.",
      },
    ],
  },
];

const alertModalComponentDocumentation: DocComponentDocumentation = {
  url: "alert-modal",
  componentTitle: "Alert Modal",
  componentDescription:
    "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. This modal is disruptive, clicking anywhere outside the modal will not close the modal",
  previewCode: `import React from "react";
import {
AlertModal,
AlertModalTrigger,
AlertModalContent,
AlertModalAction,
AlertModalCancel,
} from "inc-design-system/alertModal";
import { Button } from "inc-design-system/button";

const AlertModalDemo = () => {
return (
    <AlertModal>
    <AlertModalTrigger>
        <Button variant="primary" className="bg-danger hover:bg-danger/80">
        Delete Project
        </Button>
    </AlertModalTrigger>
    <AlertModalContent
        status="warning"
        title="Are you sure you want to delete Evaluation Project #2?"
        description="This action cannot be undone."
        className="w-96"
    >
        <AlertModalCancel className="mt-4 mr-2">
        <Button variant="primary">Cancel</Button>
        </AlertModalCancel>

        <AlertModalAction>
        <Button variant="secondary">Confirm</Button>
        </AlertModalAction>
    </AlertModalContent>
    </AlertModal>
);
};

export default AlertModalDemo;`,
  previewComponent: AlertModalDemo,
  usageCodeImport: `import {
AlertModal,
AlertModalTrigger,
AlertModalContent,
AlertModalAction,
AlertModalCancel,
} from "inc-design-system/alertModal";`,
  usageCode: `<AlertModal>
  <AlertModalTrigger>
    <Button variant="primary">Open Modal</Button>
  </AlertModalTrigger>
  <AlertModalContent
    status="info"
    title="Title"
    description="Description of the modal content."
    className="w-96"
  >
    <AlertModalCancel className="mt-4 mr-2">
      <Button variant="primary">Cancel</Button>
    </AlertModalCancel>

    <AlertModalAction>
      <Button variant="secondary">Confirm</Button>
    </AlertModalAction>
  </AlertModalContent>
</AlertModal>`,
  props: alertModalProps,
};

export default alertModalComponentDocumentation;
