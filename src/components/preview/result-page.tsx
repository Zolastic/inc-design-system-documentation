import React from "react";
import { Ban } from "lucide-react";
import { ResultPage } from "inc-design-system/resultPage"; 

const ResultDemo = () => {
  return (
    <div>
      {/* Test with different status text size icon size*/}
      <ResultPage
        status="success"
        title="Success"
        subTitle="Operation completed successfully"
        size={50}
        titleFontSize="30px"
        subTitleFontSize="18px"
      />
      <ResultPage
        status="error"
        title="Error"
        subTitle="An error occurred"
        size={50}
      />
      <ResultPage
        status="info"
        title="Info"
        subTitle="Additional information"
      />
      <ResultPage status="warning" title="Warning" subTitle="Be cautious!" />

      {/* Test with custom icon */}
      <ResultPage
        icon={<Ban size={24} />}
        title="Custom Icon"
        subTitle="This uses a custom icon component"
      />

      {/* Test with extra content */}
      <ResultPage
        status="success"
        title="Success"
        subTitle="Operation completed successfully"
        extra={
          <button
            style={{
              backgroundColor: "grey",
              color: "white",
              border: "none",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            Back Home
          </button>
        }
      />
    </div>
  );
};

export default ResultDemo;