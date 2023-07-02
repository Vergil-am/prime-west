import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "./ui/Separator";

export default function LoadingCard() {
  return (
    <Card className="w-72 h-96 m-2.5 relative max-sm:w-screen max-sm:ml-0 max-sm:mt-2  max-sm:h-auto">
      <Skeleton className="h-48 w-full" />
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-2/4" />
        </CardTitle>
        <CardDescription className="h-6">
          <Skeleton className="h-4 w-4/5" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-end">
        <Skeleton className="h-5 w-2/4" />
      </CardContent>
      <Separator orientation="horizontal" className="mb-1" />
      <CardFooter className="flex justify-between pt-3">
        <ul className="flex justify-between w-full">
          <li className="flex ">
            <Skeleton className="h-6 w-10" />
          </li>
          <li className="flex ">
            <Skeleton className="h-6 w-10" />
          </li>
          <li className="flex ">
            <Skeleton className="h-6 w-10" />
          </li>
          <li className="flex ">
            <Skeleton className="h-6 w-10" />
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
