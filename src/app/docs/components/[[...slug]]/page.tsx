"use client";

import DocsComponentUsage from "@/components/docs-component-usage";
import DocsComponentPreview from "@/components/docs-component-preview";
import { docComponentsDocumentation } from "@/config/docs-components-documentation";
import DocsComponentProps from "@/components/docs-component-props";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params }: Props) => {
  const slug = params.slug?.join("/") || "";
  const component = docComponentsDocumentation.find((doc) => doc.url === slug);

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {component.componentTitle}
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        {component.componentDescription}
      </p>

      <div className="mt-12">
        <DocsComponentPreview
          previewCode={component.previewCode}
          previewComponent={component.previewComponent()}
        />
      </div>
      <div className="mt-12">
        <DocsComponentUsage
          usageCodeImport={component.usageCodeImport}
          usageCode={component.usageCode}
          additionalCode={component.additionalCode}
        />
      </div>
      {component.props && (
        <div className="mt-12">
          <DocsComponentProps DocComponentProps={component.props} />
        </div>
      )}
    </>
  );
};

export default Page;
