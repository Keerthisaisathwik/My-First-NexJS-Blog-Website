import React from "react";
import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardHeader,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-full bg-gray-600" />
        </CardHeader>
        <CardContent className="flex flex-row justify-between">
          <div>
            <Skeleton className="flex h-32 w-32 rounded-full bg-gray-600" />
          </div>
          <div className="flex w-2/5 flex-col justify-center gap-5">
            <Skeleton className="inline-block h-5 bg-gray-600" />
            <Skeleton className="inline-block h-5 bg-gray-600" />
            <Skeleton className="inline-block h-5 bg-gray-600" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-5">
          <Skeleton className="h-5 w-full bg-gray-600" />
          <Skeleton className="h-5 w-1/4 bg-gray-600" />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SkeletonCard;
