import SheetDemo from "@/components/preview/sheet";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const sheetProps: DocComponentProp[] = [
  {
    component: "Sheet",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#root",
      },
    ],
    props: [
      {
        prop: "defaultOpen",
        type: "boolean",
        description:
          "The open state of the sheet when it is initially rendered. Default is false.",
        default: "false",
      },
      {
        prop: "open",
        type: "boolean",
        description:
          "The controlled open state of the sheet, must be used with onOpenChange. Default is false.",
        default: "false",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        description:
          "Event handler called when the open state of the sheet changes. Default is '-'.",
        default: "-",
      },
    ],
  },
  {
    component: "SheetTrigger",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#trigger",
      },
    ],
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Change the default rendered element for the one passed as a child, merging their props and behavior. Default is false.",
        default: "false",
      },
    ],
  },
  {
    component: "SheetContent",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#content",
      },
    ],
    props: [
      {
        prop: "side",
        type: "'top' | 'bottom' | 'left' | 'right'",
        description:
          "The side of the screen from which the sheet will originate from. Default is 'right'.",
        default: "'right'",
      },
      {
        prop: "showClose",
        type: "boolean",
        description:
          "Renders an 'X' icon on the top right corner of the sheet in order to close the sheet. Default is true.",
        default: "true",
      },
      {
        prop: "onOpenAutoFocus",
        type: "(event: Event) => void",
        description:
          "Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault. Default is '-'.",
        default: "-",
      },
      {
        prop: "onCloseAutoFocus",
        type: "(event: Event) => void",
        description:
          "Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault. Default is '-'.",
        default: "-",
      },
      {
        prop: "onEscapeKeyDown",
        type: "(event: Event) => void",
        description:
          "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. Default is '-'.",
        default: "-",
      },
      {
        prop: "onPointerDownOutside",
        type: "(event: Event) => void",
        description:
          "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault. Default is '-'.",
        default: "-",
      },
      {
        prop: "onInteractOutside",
        type: "(event: Event) => void",
        description:
          "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault. Default is '-'.",
        default: "-",
      },
    ],
  },
  {
    component: "SheetClose",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/dialog#close",
      },
    ],
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Change the default rendered element for the one passed as a child, merging their props and behavior. Default is false.",
        default: "false",
      },
    ],
  },
];

const sheetComponentDocumentation: DocComponentDocumentation = {
  url: "sheet",
  componentTitle: "Sheet",
  componentDescription:
    "A Sheet is a container that slides in from the side of the screen.",
  previewCode: `import { Button } from "inc-design-system/button";
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "inc-design-system/card";
import {
Sheet,
SheetClose,
SheetContent,
SheetTrigger,
} from "inc-design-system/sheet";
import { Link as LinkIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

const SheetDemo = () => {
return (
    <Sheet>
        <SheetTrigger>
            <h1>
            <Button>
                <span className="text-base mr-1">Resources</span>
                <LinkIcon size={16} />
            </Button>
            </h1>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start justify-between">
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">Resources</h1>

                <Card size="custom-size" className="w-full mt-8">
                    <CardHeader>
                    <CardTitle>What is Mission, Vision and Values?</CardTitle>
                    <CardDescription>
                        Learn about the importance of Mission, Vision and Values and how
                        it can help your organization.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <Link
                            href="https://courses.lumenlearning.com/wm-principlesofmanagement/chapter/reading-mission-vision-and-values/"
                            passHref
                        >
                            <Button as="a" variant="primary" size="sm">
                            Learn More
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            <SheetClose>
            <Button>Close Sheet</Button>
            </SheetClose>
        </SheetContent>
    </Sheet>
);
};

export default SheetDemo;`,
  previewComponent: SheetDemo,
  usageCodeImport: `import {
Sheet,
SheetClose,
SheetContent,
SheetTrigger,
} from "inc-design-system/sheet";`,
  usageCode: `<Sheet>
  <SheetTrigger>
    <h1>Open Sheet</h1>
  </SheetTrigger>
  <SheetContent className="">
    <h1>Hello World</h1>

    <SheetClose>Close Sheet</SheetClose>
  </SheetContent>
</Sheet>`,
  props: sheetProps,
};

export default sheetComponentDocumentation;
