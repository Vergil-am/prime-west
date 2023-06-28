"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [Search, setSearch] = useState<string | null>(null);
  const [Bedrooms, setBedrooms] = useState<string | null>(null);
  const [Bathrooms, setBathrooms] = useState<string | null>(null);
  const [Garages, setGarages] = useState<string | null>(null);

  const router = useRouter();
  // I still need more work here
  const addSearchParams = (Arg: string) => {
    // I need to add more params
    const params = new URLSearchParams(window.location.search);
    if (Search) {
      params.set("search", Search);
    }
    if (Bedrooms) {
      params.set("bedrooms", Bedrooms);
    }
    if (Bathrooms) {
      params.set("bathrooms", Bathrooms);
    }
    if (Garages) {
      params.set("garages", Garages);
    }
    const newUrl = `/${Arg}?${params.toString()}`;
    router.push(newUrl);
  };
  return (
    <main
      className="bg-secondary flex min-h-screen flex-col items-center justify-between p-24 
bg-[url('https://wallpaperboat.com/wp-content/uploads/2020/10/23/57974/real-estate-06.jpg')]
      "
    >
      <div>
        <Tabs defaultValue="properties" className="w-[400px] mt-20">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="land">Land</TabsTrigger>
          </TabsList>
          <TabsContent value="properties">
            <Card>
              <CardHeader>
                <CardTitle>Properties</CardTitle>
                <CardDescription>Browse our properties</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="flex">
                  <div className="space-y-1 m-1">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input
                      id="bedrooms"
                      type="number"
                      min={1}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 m-1">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input
                      id="bathrooms"
                      type="number"
                      min={1}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1 m-1">
                    <Label htmlFor="garages"> Garages</Label>
                    <Input
                      id="grages"
                      type="number"
                      min={1}
                      onChange={(e) => setGarages(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => addSearchParams("properties")}>Browse</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="land">
            <Card>
              <CardHeader>
                <CardTitle>Land</CardTitle>
                <CardDescription>Browse lands</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => addSearchParams("land")}>Browse</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
