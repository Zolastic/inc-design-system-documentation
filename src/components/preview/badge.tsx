import Badge from "inc-design-system/badge";
import { Bell } from "lucide-react";
import React from "react";

const BadgeDemo = () => {
  return (
    <>
      <Badge variant={"info"} count={1000}>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Badge>

      <Badge variant={"info"} dot>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Badge>

      <Badge processing>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Badge>
    </>
  );
};

export default BadgeDemo;
