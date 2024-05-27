import { Progress } from "inc-design-system/progress";
import React from "react";

function ProgressDemo() {
  const [progress, setProgress] = React.useState(50); // Set initial progress value

  return (
    <div>
      <h1>Progress Bar Example</h1>
      <Progress value={progress} />
      <button
        onClick={() => setProgress(progress + 10)}
        style={{ marginRight: "30px" }}
      >
        Increase Progress
      </button>
      <button onClick={() => setProgress(progress - 10)}>
        Decrease Progress
      </button>
      <Progress value={90} isSuccess />
      <Progress value={30} showValueInfo />

      <Progress value={50} isCircle={true} />

      <Progress value={50} isSuccess isCircle={true} showValueInfo />
    </div>
  );
}

export default ProgressDemo;
