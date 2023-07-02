import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <main className="bg-secondary flex min-h-screen flex-col items-center justify-between p-24 ">
      <Card className="w-[400px] mt-20">
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-4 w-[250px]" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-[250px]" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px]" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-6 w-[100px]" />
        </CardFooter>
      </Card>
    </main>
  );
}
