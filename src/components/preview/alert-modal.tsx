import React from "react";
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

export default AlertModalDemo;
