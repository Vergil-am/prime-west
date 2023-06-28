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
export default async function PropertyCard({ property }: any) {
  if (property == undefined) {
    throw new Error("failed to retrieve property");
  }
  const Location = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${property.fields.location.lat}&lon=${property.fields.location.lon}`
  );

  const { address } = Location.data;
  return (
    <Card className="w-72 h-96 m-2.5 relative max-sm:w-screen max-sm:ml-0 max-sm:mt-2 max-sm:h-[450px]">
      <Link href={`/properties/${property.sys.id}`}>
        <img
          className="object-cover rounded-lg"
          src={property.fields.thumbnail.fields.file.url}
          alt="placeholder"
        />
        <CardHeader>
          <CardTitle>{property.fields.title}</CardTitle>
          <CardDescription className="h-6">
            {address.suburb},{address.town},{address.city},{address.state},{address.country}
          </CardDescription>
        </CardHeader>
        <Separator orientation="horizontal" className="mb-1" />
        <CardFooter className="flex justify-between pt-3">
          <p className="flex mt-2">{property.fields.price} $</p>
        </CardFooter>
      </Link>
    </Card>
  );
}
