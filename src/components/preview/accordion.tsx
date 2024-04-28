import Accordion from "inc-design-system/accordion";
import React from "react";

const AccordionDemo = () => {
  const headers: string[] = ["Header 1"];

  const data = Array.from({ length: 1 }, (_, i) => ({
    header: `accordion ${i + 1}`,
    item: `content-${i + 1}`,
  }));

  return (
    <Accordion headers={headers}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>
              <h1 className="text-lg font-bold">{item.header}</h1>
              <p>{item.item}</p>
            </div>
          </div>
        );
      })}
    </Accordion>
  );
};

export default AccordionDemo;
