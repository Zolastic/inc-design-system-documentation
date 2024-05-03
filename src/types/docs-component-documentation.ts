type DocComponentDocumentation = {
  url: string;
  componentTitle: string;
  componentDescription: string;
  previewCode: string;
  previewComponent: () => JSX.Element;
  usageCodeImport: string;
  usageCode: string;
  props?: DocComponentProp[];
};

type ComponentProp = {
  prop: string;
  type?: string;
  description?: string;
  default?: string;
};

type DocComponentLink = {
  title: string;
  url: string;
};

type DocComponentProp = {
  component: string;
  props: ComponentProp[];
  links?: DocComponentLink[];
};

export type {
  DocComponentDocumentation,
  ComponentProp,
  DocComponentProp,
  DocComponentLink,
};
