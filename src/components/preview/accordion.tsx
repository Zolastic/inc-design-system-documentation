import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "inc-design-system/accordion";
import React from "react";

const AccordionDemo = () => {
  type data = {
    header: string;
    content: string;
  };
  const accordionData: data[] = [
    {
      header: "Header 1",
      content:
        "Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,",
    },
    {
      header: "Header 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl tincidunt tincidunt",
    },
    {
      header: "Header 3",
      content: "This is some dummy content",
    },
  ];

  return (
    <Accordion>
      {accordionData.map((item, index) => (
        <AccordionItem key={index} value={index.toString()}>
          <AccordionTrigger>
            <h1 className="text-lg font-bold">{item.header}</h1>
          </AccordionTrigger>
          <AccordionContent>
            <p>{item.content} </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionDemo;
