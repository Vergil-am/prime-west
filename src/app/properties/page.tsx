import PropertyCard from "@/components/PropertyCard";
import { Header } from "@/components/Header";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "izmdfhi52bl5",
  accessToken: "nfCtAYqyYRABC5oWQmwI-luORkf1oePPL2l5ZcCdOqA",
});


export default async function Properties({ searchParams }: any) {
  const res = await client.getEntries({
    content_type: "properties",
  });
  let Properties = res.items;
  if (searchParams.search) {
    Properties = Properties.filter(
      (property: any) =>
        property.fields.title.toLowerCase().includes(searchParams.search.toLowerCase()) ||
        property.fields.address.toLowerCase().includes(searchParams.search.toLowerCase())
    );
  }
  if (searchParams.bedrooms) {
    Properties = Properties.filter(
      (property: any) => property.fields.bedrooms == searchParams.bedrooms
    );
  }
  if (searchParams.bathrooms) {
    Properties = Properties.filter(
      (property: any) => property.fields.bathrooms == searchParams.bathrooms
    );
  }
  if (searchParams.garages) {
    Properties = Properties.filter(
      (property: any) => property.fields.garages == searchParams.garages
    );
  }
  return (
    <main className="bg-secondary min-h-screen p-10 max-sm:px-0">
      <Header title="Properties" description="Browse the best properties" size="sm" />
      <div className="flex flex-wrap items-start justify-start max-sm:flex-col w-full max-sm:p-0">
        {Properties &&
          Properties.map((property: any) => {
            return <PropertyCard property={property} key={property.sys.id} />;
          })}
      </div>
    </main>
  );
}
