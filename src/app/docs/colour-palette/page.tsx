import colourPalette from "@/config/docs-colours";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Colour Palette
      </h1>
      <div className="mt-6">
        {colourPalette.map((group, index) => (
          <div key={index} className="mb-8">
            <h2 className="tracking-tighter font-semibold">
              {group.groupName}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-1">
              {group.colours.map((colour) => (
                // <div
                //   key={colour.colourName}
                //   className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-sm"
                // >
                //   <div
                //     className="w-8 h-8 rounded-full"
                //     style={{ backgroundColor: colour.hex }}
                //   />
                //   <div>
                //     <p className="text-sm font-medium text-gray-900">
                //       {colour.colourName}
                //     </p>
                //     <p className="text-sm text-gray-500">{colour.hex}</p>
                //   </div>
                // </div>
                <div key={colour.colourName}>
                  <div
                    className="flex items-center rounded-lg shadow-md w-[160px] h-[90px]"
                    style={{ backgroundColor: colour.hex }}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {colour.colourName}
                    </p>
                    <p className="text-sm text-gray-500">{colour.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
