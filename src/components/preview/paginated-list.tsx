import PaginatedList from "inc-design-system/paginatedList";
import React from "react";

const PaginatedListDemo = () => {
  const data = Array.from({ length: 6 }, (_, i) => ({
    header: `User - ${i + 1}`,
    email: `user${i + 1}@example.com`,
  }));

  return (
    <PaginatedList itemsPerPage={2} header="Users' email" variant={"default"}>
      {data.map((item, index) => (
        <div key={index}>
          <div className="border-b-1 border-gray-400 p-3 rounded">
            <h1 className="text-lg font-bold">{item.header}</h1>
            <p>{item.email}</p>
          </div>
        </div>
      ))}
    </PaginatedList>
  );
};

export default PaginatedListDemo;
