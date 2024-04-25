import { contributors } from "@/config/contributors";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
        Contributors
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        A list of contributors who have helped shape the INC Design System.
        (Alphabetical order)
      </p>

      <div className="flex flex-col mt-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="flex items-center space-x-4 mt-4">
            <Link href={contributor.github} className="underline">
              <h3 className="leading-none text-text-default no-underline group-hover:no-underline">
                {contributor.name}
              </h3>
            </Link>
          </div>
        ))}
        <p className="text-lg text-text-default/60 mt-8">
          A big thank you to all the contributors who have helped shape the INC
          Design System.
        </p>
      </div>
    </>
  );
};

export default Page;
