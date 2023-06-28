import LandCard from "@/components/LandCard";
import { Header } from "@/components/Header";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "izmdfhi52bl5",
  accessToken: "nfCtAYqyYRABC5oWQmwI-luORkf1oePPL2l5ZcCdOqA",
});

export default async function Lands({searchParams }: any) {
  const res = await client.getEntries({
    content_type: "lands",
  });
  let Lands = res.items;
  if (searchParams.search) {
    Lands = Lands.filter((land : any) =>
      land.fields.title.toLowerCase().includes(searchParams.search.toLowerCase())
    );
  }
  return (
    <main className="bg-secondary min-h-screen p-10 max-sm:px-0">
      <Header title="Land" description="Browse the best Land" size="sm" />

      <div className="flex flex-wrap items-start justify-start max-sm:flex-col w-full max-sm:p-0">
        {Lands &&
          Lands.map((land: any) => {
            return <LandCard land={land} />;
          })}
      </div>
    </main>
  );
}
