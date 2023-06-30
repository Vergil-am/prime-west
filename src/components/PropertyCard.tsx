import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import Link from "next/link";
import axios from "axios";

import { BedSingle, Bath, Warehouse, Home } from "lucide-react";

export default async function PropertyCard({ property }: any) {
  if (property == undefined) {
    throw new Error("failed to retrieve property");
  }
  // const res = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/47.64054,-122.12934?&key=AtF5PAcQCfAlUzN9iG458WLI34dvAeV62Rr6f2xLiF_5bpVoOSPFA0TCgVkRHsPg`)
  // console.log(res.data.resourceSets[0])
  const Location = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${property.fields.location.lat}&lon=${property.fields.location.lon}`
  );
  const { name } = Location.data;
  return (
    <Card className="w-72 h-96 m-2.5 relative max-sm:w-screen max-sm:ml-0 max-sm:mt-2  max-sm:h-auto">
      <Link href={`/properties/${property.sys.id}`}>
        <img
          className="object-cover rounded-lg"
          src={property.fields.thumbnail.fields.file.url}
          alt="placeholder"
        />
        <CardHeader>
          <CardTitle>{property.fields.title}</CardTitle>
          <CardDescription className="h-6">{name}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-end">
          <p className="flex">{property.fields.price} $</p>
        </CardContent>
        <Separator orientation="horizontal" className="mb-1" />
        <CardFooter className="flex justify-between pt-3">
          <ul className="flex justify-between w-full">
            <li className="flex ">
              <BedSingle color="#000000" className="mr-2" /> {property.fields.bedrooms}
            </li>

            <li className="flex ">
              <Bath color="#000000" className="mr-2" /> {property.fields.bathrooms}
            </li>
            <li className="flex ">
              <Warehouse color="#000000" className="mr-2" /> {property.fields.garages}
            </li>
            <li className="flex ">
              <Home color="#000000" className="mr-2" /> {property.fields.size}m2
            </li>
          </ul>
        </CardFooter>
      </Link>
    </Card>
  );
}
