import { Button } from "inc-design-system/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "inc-design-system/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "inc-design-system/sheet";
import { Link as LinkIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

const SheetDemo = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <h1>
          <Button>
            <span className="text-base mr-1">Resources</span>
            <LinkIcon size={16} />
          </Button>
        </h1>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-start justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold">Resources</h1>

          <Card size="custom-size" className="w-full mt-8">
            <CardHeader>
              <CardTitle>What is Mission, Vision and Values?</CardTitle>
              <CardDescription>
                Learn about the importance of Mission, Vision and Values and how
                it can help your organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              <Link
                href="https://courses.lumenlearning.com/wm-principlesofmanagement/chapter/reading-mission-vision-and-values/"
                target="_blank"
                rel="noreferrer"
              >
                <Button as="a" variant="primary" size="sm">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <SheetClose>
          <Button>Close Sheet</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDemo;
