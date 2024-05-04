import { Button } from "inc-design-system/button";
import {
  Modal,
  ModalCloser,
  ModalContent,
  ModalTrigger,
} from "inc-design-system/modal";
import { Textarea } from "inc-design-system/textarea";
import React from "react";

const ModalDemo = () => {
  return (
    <Modal>
      <ModalTrigger>
        <Button variant="dashed">Open Modal</Button>
      </ModalTrigger>
      <ModalContent
        status="info"
        title="Feedback"
        description="Share your thoughts with us!"
        className="w-96"
        closable
      >
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
