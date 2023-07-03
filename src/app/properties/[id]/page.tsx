import Carousel from "@/components/propertyPage/Carousel";
import Description from "@/components/propertyPage/description";
import PropertyForm from "@/components/propertyPage/form";
import MapsView from "@/components/propertyPage/mapsView";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/Card";
import { BedSingle, Bath, Warehouse, Home } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

const contentful = require("contentful");
const client = contentful.createClient({
  space: "izmdfhi52bl5",
  accessToken: "nfCtAYqyYRABC5oWQmwI-luORkf1oePPL2l5ZcCdOqA",
});

async function GetProperties(id: string) {
  const res = await client.getEntry(id);

  return res.fields;
}

export async function generateMetadata(
  { params }: any,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const Property = await GetProperties(id);
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: Property.title,
  };
}

export default async function Property({ params }: any) {
  const { id } = params;
  const Property = await GetProperties(id);
  if (Property == undefined) {
    throw new Error("failed to retrieve Property");
  }

  return (
    <main>
      <div className="w-screen flex flex-wrap">
        <div className="w-3/5 max-lg:w-full ">
          <Carousel Pictures={Property.pictures} />
        </div>
        <div className="w-2/5 flex flex-col justify-center items-center max-lg:w-screen mt-2 ">
          <Card className="max-md:w-2/4 max-lg:w-2/5 lg:fixed lg:w-1/3 xl:w-1/4">
            <CardHeader className="flex items-center">
              <CardTitle>{Property.title}</CardTitle>
            </CardHeader>
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
                  <Home color="#000000" className="mr-2" /> Size : {Property.size}m2
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-center w-full">
              <h1>{Property.price} $</h1>
              <PropertyForm PropertyTitle={Property.title} PropertyId={params.id} />
            </CardFooter>
          </Card>
        </div>
        <div className="w-3/5 m-3 max-lg:w-full">
          <Description Body={Property.description} />
          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Location of the property
            </h2>
            <MapsView Coordinates={Property.location} />
          </div>
        </div>
      </div>
    </main>
  );
}
