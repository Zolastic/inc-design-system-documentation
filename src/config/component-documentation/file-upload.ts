import FileUploadDemo from "@/components/preview/file-upload";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const fileUploadProps: DocComponentProp[] = [
  {
    component: "File Upload",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the file upload area.",
      },
      {
        prop: "width",
        type: '"full" | "half"',
        description:
          "Sets the width of the file upload component. Options are full for full width and half for half width. Default is full.",
        default: '"full"',
      },
      {
        prop: "transparent",
        type: "boolean",
        description:
          "Determines whether the background of the upload area is transparent.",
        default: "false",
      },
      {
        prop: "onFileChange",
        type: "(files: File[]) => void",
        description:
          "A function that is called when the user selects files. It receives an array of File objects as its argument.",
      },
      // Other React.HTMLAttributes<HTMLDivElement> props are inherited
      // Props like onClick, aria-label, etc. are available but not documented here
    ],
  },
];

const fileUploadComponentDocumentation: DocComponentDocumentation = {
  url: "file-upload",
  componentTitle: "File Upload",
  componentDescription:
    "Used to select and upload files or drag and drop files.",
  previewCode: `
  import { FileUpload } from "inc-design-system/upload";
  import React from "react";

  const FileUploadDemo = () => {
    const handleFileChange = (files: File[]) => {
      alert(
        \`You have selected \${files.length} file(s): \${files
          .map((file) => file.name)
          .join(", ")}\`
      );
    };

    return (
      <FileUpload
        width="full"
        transparent={false}
        onFileChange={handleFileChange}
      />
    );
  };

  export default FileUploadDemo;`,
  previewComponent: FileUploadDemo,
  usageCodeImport: `import { FileUpload } from "inc-design-system/upload"`,
  usageCode: `<FileUpload />`,
  props: fileUploadProps,
};

export default fileUploadComponentDocumentation;
