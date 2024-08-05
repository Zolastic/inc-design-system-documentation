import { Button } from "inc-design-system/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "inc-design-system/card";
import { Input } from "inc-design-system/input";
import React from "react";

const CardDemo = () => {
  return (
    <Card className="w=[300px]">
      <CardHeader>
        <CardTitle>Create Evaluation Project</CardTitle>
        <CardDescription>
          Create an Evaluation Project for Jumbo Seafood
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <h1>Project Name:</h1>
        <Input placeholder="Project Name" />
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};

export default CardDemo;
