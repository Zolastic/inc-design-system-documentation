import { RadioGroup, RadioGroupItem } from "inc-design-system/radioGroup";
import React from "react";

const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue="default">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <h1>Default</h1>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="r2" />
        <h1>Light</h1>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="r3" />
        <h1>Dark</h1>
      </div>
    </RadioGroup>
  );
};

export default RadioGroupDemo;
