import DefaultList from "inc-design-system/defaultList";
import React from "react";

const DefaultListDemo = () => {
  const data = Array.from({ length: 2 }, (_, i) => ({
    header: `User - ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  return (
    <DefaultList header="Users' email" footer="End of list">
      {data.map((item, index) => (
        <div key={index}>
          <div className="">
            <h1 className="text-lg font-bold">{item.header}</h1>
            <p>Email: {item.email}</p>
          </div>
        </div>
      ))}
    </DefaultList>
  );
};

export default DefaultListDemo;
