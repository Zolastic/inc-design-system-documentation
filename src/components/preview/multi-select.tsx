import { MultiSelect, MultiSelectItem } from "inc-design-system/multiselect";
import React from "react";

const MultiSelectDemo = () => {
  const data: MultiSelectItem[] = Array.from({ length: 3 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));

  return <MultiSelect items={data} />;
};

export default MultiSelectDemo;
