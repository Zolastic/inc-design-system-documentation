import React from "react";
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

export default AlertModalDemo;
