import Indicator from "inc-design-system/indicator";
import { Bell } from "lucide-react";

const IndicatorDemo = () => {
  return (
    <div>
      {/* // with count */}
      <Indicator variant={"info"} count={1000}>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
      {/* // without count */}
      <Indicator variant={"info"} dot>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
      {/* // processing icon */}
      <Indicator processing>
        {/* to simulate an icon/ div */}
        <div className="text-xl bg-gray-300 w-10 h-10 rounded flex justify-center items-center">
          <Bell size={24} />
        </div>
      </Indicator>
    </div>
  );
};

export default IndicatorDemo;
