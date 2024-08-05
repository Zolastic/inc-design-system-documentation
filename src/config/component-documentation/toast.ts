import ToastDemo from "@/components/preview/toast";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const toastProps: DocComponentProp[] = [
  {
    component: "Toaster",
    links: [
      {
        title: "Docs",
        url: "https://sonner.emilkowal.ski/getting-started",
      },
      {
        title: "API Reference",
        url: "https://sonner.emilkowal.ski/toaster",
      },
    ],
    props: [
      {
        prop: "expand",
        type: "boolean",
        description:
          "Sets whether to expand the list of toasts or not. Default is false.",
        default: "false",
      },
      {
        prop: "visibleToasts",
        type: "number",
        description: "Amount of visible toasts. Default is 3.",
        default: "3",
      },
      {
        prop: "position",
        type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'",
        description:
          "Place where the toasts will be rendered. Default is 'bottom-right'.",
        default: "'bottom-right'",
      },
      {
        prop: "offset",
        type: "string | number",
        description: "Offset from the edges of the screen. Default is '32px'.",
        default: "'32px'",
      },
      {
        prop: "dir",
        type: "'rtl' | 'ltr' | 'auto'",
        description: "Directionality of toast's text. Default is 'ltr'.",
        default: "'ltr'",
      },
      {
        prop: "gap",
        type: "number",
        description: "Gap between toasts when expanded. Default is 14.",
        default: "14",
      },
      {
        prop: "pauseWhenPageIsHidden",
        type: "boolean",
        description:
          "Pauses toast timers when the page is hidden. Default is false.",
        default: "false",
      },
      {
        prop: "toastOptions",
        type: "ToastOptions",
        description:
          "These will act as default options for all toasts. Default is 4000ms duration.",
        default: "4000",
      },
    ],
  },
  {
    component: "ToastOptions",
    links: [
      {
        title: "API Reference",
        url: "https://sonner.emilkowal.ski/toast",
      },
    ],
    props: [
      {
        prop: "className",
        type: "string",
        description: "Allows you to control the outer div of the toast.",
        default: "-",
      },
      {
        prop: "id",
        type: "string | number",
        description: "Custom ID for the toast.",
        default: "-",
      },
      {
        prop: "closeButton",
        type: "boolean",
        description: "Adds a close button to the toast. Default is false.",
        default: "false",
      },
      {
        prop: "dismissable",
        type: "boolean",
        description:
          "If false, prevents the user from dismissing the toast via swipe action. Default is true.",
        default: "true",
      },
      {
        prop: "description",
        type: "React.ReactNode",
        description:
          "Toast's description, renders underneath the title. Default is '-'.",
        default: "'-'",
      },
      {
        prop: "duration",
        type: "number",
        description:
          "Time in milliseconds before automatically closing the toast. Default is 4000ms.",
        default: "4000",
      },
      {
        prop: "onDismiss",
        type: "() => void",
        description:
          "Function called when the close button is clicked or the toast is swiped. Default is '-'.",
        default: "-",
      },
      {
        prop: "onAutoClose",
        type: "() => void",
        description:
          "Function called when the toast disappears automatically after its timeout. Default is '-'.",
        default: "-",
      },
      {
        prop: "position",
        type: "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'",
        description:
          "Position of the toast on the screen. Default is 'bottom-right'.",
        default: "'bottom-right'",
      },
    ],
  },
];

const toastComponentDocumentation: DocComponentDocumentation = {
  url: "toast",
  componentTitle: "Toast",
  componentDescription:
    "The Toast component is used to display a brief message to the user.",
  previewCode: `import { Button } from "inc-design-system/button";
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
                return \`This is a \${data.name} toast!\`;
                },
            });
            }}
        >
            Promise Toast
        </Button>
    </div>
);
};

export default ToastDemo;`,
  previewComponent: ToastDemo,
  usageCodeImport: `import { toast } from "inc-design-system/toast";`,
  usageCode: `toast.info("Event has been added!", {
    description: "You can view the event in the calendar.",
});`,
  additionalCode: [
    {
      title: "RootLayout.tsx",
      description: "Custom toast with a close button.",
      code: `import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "inc-design-system/toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
`,
    },
  ],
  props: toastProps,
};

export default toastComponentDocumentation;
