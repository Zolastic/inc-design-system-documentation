import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Styling Guidelines
      </h1>
      <div className="text-lg text-text-default/60 max-w-[750px] mt-2">
        This is a guide to the styling guidelines of the project.
        <br />
        <span className="italic">
          Unless specially stated or defined, use default Tailwind CSS Commands.
        </span>
      </div>

      {/* Sizing & Spacing */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Sizing & Spacing</h2>
        <div className="text-lg text-text-default/60 max-w-[750px] mt-2">
          Increments of 4px are used for sizing and spacing.
          <ul className="list-disc list-inside">
            <li>Use multiples of 4 for padding and margin.</li>
            <li>Use multiples of 4 for width and height.</li>
            <li>Minimum value of 4px</li>
            <li>Goes from 4px, 8px, 12px, 16px...</li>
          </ul>
        </div>
      </div>

      {/* Icons */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Icons</h2>
        <div className="text-lg text-text-default/60 max-w-[750px] mt-2">
          <ul className="list-disc list-inside">
            <li>Use Lucide React Icons</li>
            <li>
              Icons accompanying text should adjust to match the font size of
              the corresponding text.
            </li>
          </ul>
        </div>
      </div>

      {/* Form Controls */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Form Controls</h2>
        <div className="text-lg text-text-default/60 max-w-[750px] mt-2">
          <ul className="list-disc list-inside">
            <li>
              Buttons, Checkboxes = Primary Colours Mostly - Unless it is a
              special event button
            </li>
            <li>Active State - DO NOT USE transparent fill and border</li>
          </ul>
        </div>
      </div>

      {/* Border Radius */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold">Border Radius</h2>
        <div className="text-lg text-text-default/60 max-w-[750px] mt-2">
          Increments of 2px only
          <ul className="list-disc list-inside">
            <li>Minimum value of 4px</li>
            <li>Goes from 4px, 6px, 8px, 10px...</li>
            <li>Use rounded-full for circular components</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
