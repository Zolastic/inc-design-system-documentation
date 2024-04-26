"use client";

import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";

type Props = {
  code: string;
};

const CopyCodeHeader = ({ code }: Props) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className="flex justify-between px-4 text-text-default text-xs items-center max-h-[28px]">
      <p className="text-sm">Example Code</p>
      {copy ? (
        <button className="py-1 inline-flex items-center gap-1">
          <Check size={16} className="mt-1" />
          <span>Copied!</span>
        </button>
      ) : (
        <button
          className="py-1 inline-flex items-center gap-1"
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 2000);
          }}
        >
          <Clipboard size={16} className="mt-1" />
          <span>Copy code</span>
        </button>
      )}
    </div>
  );
};

export default CopyCodeHeader;
