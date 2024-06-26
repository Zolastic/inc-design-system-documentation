import ModalDemo from "@/components/preview/modal";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const modalProps: DocComponentProp[] = [
  {
    component: "Modal",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#root",
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
    component: "ModalTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#trigger",
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
    component: "ModalContent",
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
      {
        prop: "overlayClassName",
        type: "string",
        description:
          "Optional. Extra Tailwind styles for the Modal overlay.",
      },
      {
        prop: "closable",
        type: "boolean",
        description:
          "Optional. Shows an 'X' at the opposite end of the title to close the modal.",
      },
    ],
  },
  {
    component: "ModalTitle",
    props: [
      {
        prop: "children",
        type: "React.ReactNode",
        description: "Content to be displayed as the title.",
      },
      {
        prop: "status",
        type: '"success" | "error" | "warning" | "info"',
        description:
          "Optional. Shows predefined icons for the chosen status, positioned next to the title.",
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
        description: "Optional. Additional classNames to customize the title.",
      },
    ],
  },
  {
    component: "ModalCloser",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#close",
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
];

const modalComponentDocumentation: DocComponentDocumentation = {
  url: "modal",
  componentTitle: "Modal",
  componentDescription:
    "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. This modal is not disruptive, clicking anywhere outside the modal will close the modal.",
  previewCode: `import { Button } from "inc-design-system/button";
import {
  Modal,
  ModalCloser,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "inc-design-system/modal";
import { Textarea } from "inc-design-system/textarea";
import React from "react";

const ModalDemo = () => {
  return (
    <Modal>
      <ModalTrigger>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent className="w-96" closable>
        <ModalTitle status="info" description="Share your thoughts with us!">
          Feedback
        </ModalTitle>
        <div className="text-text-default">
          <h1 className="mb-1">What is your feedback?</h1>
          <Textarea />
        </div>
        <ModalCloser className="mt-4">
          <Button variant="primary">Confirm</Button>
        </ModalCloser>
      </ModalContent>
    </Modal>
  );
};

export default ModalDemo;`,
  previewComponent: ModalDemo,
  usageCodeImport: `import {
  Modal,
  ModalCloser,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "inc-design-system/modal";`,
  usageCode: `<Modal>
  <ModalTrigger>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent closable>
    <ModalTitle status="info" description="This is some description">
      Title
    </ModalTitle>
    <div className="text-text-default">Content</div>
    <ModalCloser className="mt-4">
      <Button variant="primary">Confirm</Button>
    </ModalCloser>
  </ModalContent>
</Modal>`,
  props: modalProps,
};

export default modalComponentDocumentation;
