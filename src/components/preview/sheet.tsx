import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "inc-design-system/sheet";
import React from "react";

const SheetDemo = () => {
  return (
	// changed the mine height from 100dvh to 10dvh
    <div className="flex flex-col items-center justify-start min-h-[10dvh]">
      <Sheet>
        <SheetTrigger>
          <h1>Open Sheet</h1>
        </SheetTrigger>
        <SheetContent>
          <h1>Hello World</h1>
          <SheetClose>Close Sheet</SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetDemo;
