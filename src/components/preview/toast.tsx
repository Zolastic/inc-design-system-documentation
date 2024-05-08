import { Button } from "inc-design-system/button";
import { toast } from "inc-design-system/toast";
import React from "react";

const ToastDemo = () => {
  const promise = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve({ name: "Promise" }), 2000)
    );

  return (
    <div className="flex flex-col space-y-8">
      <Button
        onClick={() => {
          toast.info("Event has been added!", {
            description: "You can view the event in the calendar.",
          });
        }}
      >
        Info Toast
      </Button>

      <Button
        onClick={() => {
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return `This is a ${data.name} toast!`;
            },
          });
        }}
      >
        Promise Toast
      </Button>
    </div>
  );
};

export default ToastDemo;
