import Carousel from "@/components/propertyPage/Carousel";
import PropertyForm from "@/components/propertyPage/form";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { BedSingle, Bath, Warehouse, Home } from "lucide-react";
const contentful = require("contentful");
const client = contentful.createClient({
  space: "izmdfhi52bl5",
  accessToken: "nfCtAYqyYRABC5oWQmwI-luORkf1oePPL2l5ZcCdOqA",
});
export default async function Property({ params }: any) {
  const res = await client.getEntry(params.id);
  const Property = res.fields;
  if (Property == undefined) {
    throw new Error("failed to retrieve Property");
  }
  return (
    <main className="w-screen flex flex-wrap">
      <div className="w-3/5 max-lg:w-full">
        <Carousel Pictures={Property.pictures} />
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center max-sm:w-full mt-2">
        <Card className="w-3/5 max-xl:w-4/5 ">
          <CardHeader className="flex items-center">
            <CardTitle>{Property.title}</CardTitle>
          </CardHeader>
          <CardDescription>test</CardDescription>
          <CardContent className="flex items-center flex-col">
            <ul>
              <li className="flex m-2">
                <BedSingle color="#000000" className="mr-2" /> Bedrooms : {Property.bedrooms}
              </li>

              <li className="flex m-2">
                <Bath color="#000000" className="mr-2" /> Bathrooms : {Property.bathrooms}
              </li>
              <li className="flex m-2">
                <Warehouse color="#000000" className="mr-2" /> Garages : {Property.garages}
              </li>
              <li className="flex m-2">
                <Home color="#000000" className="mr-2"/> Size : {Property.size}m2
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center w-full">
            <h1>{Property.price} $</h1>
            <PropertyForm PropertyTitle={Property.title} PropertyId={params.id}/>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
