

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
        prop: "className",
        type: "string",
        description:
          "Optional. Extra Tailwind styles for the overall modal content.",
      },
    ],
  },
  {
    component: "AlertModalTitle",
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Title of the modal.",
      },
      {
        prop: "status",
        type: "string",
        description:
          "Optional. Status of the modal title. Can be 'warning', 'error', 'success', 'info'.",
      },
      {
        prop: "description",
        type: "string",
        description: "Optional. Description of the modal title.",
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
  AlertModalTitle,
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
      <AlertModalContent className="w-96">
        <AlertModalTitle
          status="warning"
          description="This action cannot be undone."
        >
          Are you sure you want to delete this project?
        </AlertModalTitle>
        <AlertModalCancel className="mr-2 mt-4">
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
  AlertModalTitle,
} from "inc-design-system/alertModal";`,
  usageCode: `<AlertModal>
  <AlertModalTrigger>
    <Button>Open Modal</Button>
  </AlertModalTrigger>
  <AlertModalContent className="w-96">
    <AlertModalTitle
      status="warning"
      description="Description of the modal content."
    >
      Title
    </AlertModalTitle>
    <AlertModalCancel className="mr-2 mt-4">
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
