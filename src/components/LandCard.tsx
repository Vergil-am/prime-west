import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import Link from "next/link";

export default async function LandCard({ land }: any) {
  if (land == undefined) {
    throw new Error("cannot find lands");
  }
  return (
    <Card className="w-72 h-96 m-2.5 relative max-sm:w-screen max-sm:ml-0 max-sm:mt-2 max-sm:h-[450px]">
      <Link href={`/land/${land.sys.id}`}>
        <img
          className="object-cover rounded-lg"
          src={land.fields.thumbnail.fields.file.url}
          alt="placeholder"
        />
        <CardHeader>
          <CardTitle>{land.fields.title}</CardTitle>
          <CardDescription className="h-6">
            {land.fields.address}
          </CardDescription>
        </CardHeader>
        <Separator orientation="horizontal" className="mb-1" />
        <CardFooter className="flex justify-between pt-3">
          <p className="flex mt-2">{land.fields.price} $</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
