import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "inc-design-system/hoverCard";
import { Info } from "lucide-react";
import React from "react";

const HoverCardDemo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Info size={24} className="text-grey-400 hover:text-grey-500" />
      </HoverCardTrigger>
      <HoverCardContent>
        <p>
          A mission statement explains why the organisations exists. It
          describes the organisation&apos;s purpose and its overall intention.
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardDemo;
