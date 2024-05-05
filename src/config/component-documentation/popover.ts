import PopoverDemo from "@/components/preview/popover";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const popoverProps: DocComponentProp[] = [
  {
    component: "Popover",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/popover#root",
      },
    ],
    props: [
      {
        prop: "defaultOpen",
        type: "boolean",
        description: "Determines whether the popover is open by default.",
        default: "No default value",
      },
      {
        prop: "open",
        type: "boolean",
        description: "Determines whether the popover is currently open.",
        default: "No default value",
      },
      {
        prop: "onOpenChange",
        type: "function",
        description:
          "A function called when the visibility of the popover changes.",
        default: "No default value",
      },
      {
        prop: "modal",
        type: "boolean",
        description: "Determines whether the popover is displayed as a modal.",
        default: "false",
      },
    ],
  },
  {
    component: "PopoverTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/popover#trigger",
      },
    ],
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Determines whether the trigger element is a child of the Popover component.",
        default: "false",
      },
    ],
  },
  {
    component: "PopoverContent",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/popover#content",
      },
    ],
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Determines whether the content element is a child of the Popover component.",
        default: "false",
      },
      {
        prop: "onOpenAutoFocus",
        type: "function",
        description:
          "A function called when the content is opened and should receive focus.",
        default: "No default value",
      },
      {
        prop: "onCloseAutoFocus",
        type: "function",
        description:
          "A function called when the content is closed and should receive focus.",
        default: "No default value",
      },
      {
        prop: "onEscapeKeyDown",
        type: "function",
        description:
          "A function called when the 'Escape' key is pressed while the content is focused.",
        default: "No default value",
      },
      {
        prop: "onPointerDownOutside",
        type: "function",
        description:
          "A function called when a pointer down event occurs outside of the content.",
        default: "No default value",
      },
      {
        prop: "onFocusOutside",
        type: "function",
        description: "A function called when the content loses focus.",
        default: "No default value",
      },
      {
        prop: "onInteractOutside",
        type: "function",
        description:
          "A function called when an interaction occurs outside of the content.",
        default: "No default value",
      },
      {
        prop: "forceMount",
        type: "boolean",
        description:
          "Determines whether the content is force-mounted, ignoring visibility.",
        default: "No default value",
      },
      {
        prop: "side",
        type: "'left' | 'right' | 'bottom' | 'top'",
        description: "Determines the side from which the content appears.",
        default: "'bottom'",
      },
      {
        prop: "sideOffset",
        type: "number",
        description:
          "Determines the offset from the side from which the content appears.",
        default: "0",
      },
      {
        prop: "align",
        type: "'start' | 'end' | 'center'",
        description: "Determines the alignment of the content.",
        default: "'center'",
      },
      {
        prop: "alignOffset",
        type: "number",
        description: "Determines the offset from the alignment of the content.",
        default: "0",
      },
      {
        prop: "avoidCollisions",
        type: "boolean",
        description:
          "Determines whether the content avoids collisions with other elements.",
        default: "true",
      },
      {
        prop: "collisionBoundary",
        type: "Boundary[]",
        description:
          "Specifies the boundary within which collisions are detected.",
        default: "[]",
      },
      {
        prop: "collisionPadding",
        type: "number | Padding",
        description: "Determines the padding used for collision detection.",
        default: "0",
      },
      {
        prop: "arrowPadding",
        type: "number",
        description: "Determines the padding used for the arrow.",
        default: "0",
      },
      {
        prop: "sticky",
        type: "'none' | 'partial' | 'fixed'",
        description: "Determines the sticky behavior of the content.",
        default: "'partial'",
      },
      {
        prop: "hideWhenDetached",
        type: "boolean",
        description: "Determines whether the content is hidden when detached.",
        default: "false",
      },
    ],
  },
];

const popoverComponentDocumentation: DocComponentDocumentation = {
  url: "popover",
  componentTitle: "Popover",
  componentDescription:
    "The floating card pops up when clicking/mouse hovering over an element.",
  previewCode: `import { Button } from "inc-design-system/button";
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

export default PopoverDemo;`,
  previewComponent: PopoverDemo,
  usageCodeImport: `import {
Popover,
PopoverContent,
PopoverTrigger,
} from "inc-design-system/popover";`,
  usageCode: `<Popover>
<PopoverTrigger>Open Popover Trigger</PopoverTrigger>
<PopoverContent>Popover Content</PopoverContent>
</Popover>`,
  props: popoverProps,
};

export default popoverComponentDocumentation;
