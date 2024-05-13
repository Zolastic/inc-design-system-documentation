import { Button } from "inc-design-system/button";
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

export default ModalDemo;
