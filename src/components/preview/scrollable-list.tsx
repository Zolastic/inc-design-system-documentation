import ScrollableList from "inc-design-system/scrollableList";
import React from "react";

const ScrollableListDemo = () => {
  const data = Array.from({ length: 15 }, (_, i) => ({
    header: `list item ${i + 1}`,
    item: `content -${i + 1}`,
  }));

  return (
    <ScrollableList height={"270px"}>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <h1 className="text-lg font-bold">{item.header}</h1>
            <p>{item.item}</p>
          </div>
        </div>
      ))}
    </ScrollableList>
  );
};

export default ScrollableListDemo;
