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
import { BedSingle, Bath, MapPin, Map } from "lucide-react";
import axios from "axios";
const contentful = require("contentful");
const client = contentful.createClient({
  space: "izmdfhi52bl5",
  accessToken: "nfCtAYqyYRABC5oWQmwI-luORkf1oePPL2l5ZcCdOqA",
});

export default async function Land({ params }: any) {
  if (params == undefined) {
    throw new Error("failed to retieve land");
  }

  const res = await client.getEntry(params.id);
  const land = res.fields;
  return (
    <main className="w-screen flex flex-wrap">
      <div className="w-3/5 max-lg:w-full">
        <Carousel Pictures={land.pictures} />
      </div>
      <div className="w-2/5 flex flex-col justify-center items-center max-sm:w-full mt-2">
        <Card className="w-3/5 max-xl:w-4/5 ">
          <CardHeader className="flex items-center">
            <CardTitle>{land.title}</CardTitle>
          </CardHeader>
          <CardDescription>test</CardDescription>
          <CardContent className="flex items-center flex-col">
            <ul>
              <li className="flex m-2">
                <BedSingle color="#000000" className="mr-2" /> Bedrooms : 2
              </li>

              <li className="flex m-2">
                <Bath color="#000000" className="mr-2" /> Bathrooms : 4
              </li>
              <li className="flex m-2">
                <MapPin className="mr-2" /> Location: test
              </li>
              <li className="flex m-2">
                <Map className="mr-2" /> Size : {land.size} m2
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center w-full">
            <h1>{land.price} $</h1>
            <PropertyForm PropertyTitle={land.title} PropertyId={params.id}/>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
