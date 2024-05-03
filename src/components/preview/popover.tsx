import { Button } from "inc-design-system/button";
import { Input } from "inc-design-system/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "inc-design-system/popover";
import React from "react";

const PopoverDemo = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Contact Form</h4>
            <p className="text-sm text-muted-foreground">
              Please fill out this form to contact us.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <h1>Name</h1>
              <Input id="name" defaultValue="" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <h1>Email</h1>
              <Input id="email" defaultValue="" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <h1>Message</h1>
              <Input id="message" defaultValue="" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Button variant="primary">Submit</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDemo;
