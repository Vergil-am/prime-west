"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { SignInButton, useAuth } from "@clerk/nextjs";
import axios from "axios";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Applications() {
  const { isLoaded } = useAuth();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("/api/applications/user");
      setData(res.data);
    };
    if (isLoaded) {
      getdata();
    }
  }, [isLoaded]);
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <p className="block lg:inline-block text-md font-bold  text-secondary sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
            My Applications
          </p>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My applications</SheetTitle>
            <SheetDescription>check the status of your applications</SheetDescription>
            <Accordion type="single" collapsible className="w-full">
              <SignedIn>
                <div>
                  {data &&
                    data.map((item: any) => {
                      return (
                        <AccordionItem value={item._id} key={item._id}>
                          <AccordionTrigger>{item.PropertyTitle}</AccordionTrigger>
                          <AccordionContent>status: {item.Status}</AccordionContent>
                        </AccordionItem>
                      );
                    })}
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </Accordion>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
