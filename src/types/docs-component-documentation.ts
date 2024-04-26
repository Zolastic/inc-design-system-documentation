type DocComponentDocumentation = {
  url: string;
  componentTitle: string;
  componentDescription: string;
  previewCode: string;
  previewComponent: () => JSX.Element;
  usageCodeImport: string;
  usageCode: string;
};

export type { DocComponentDocumentation };
