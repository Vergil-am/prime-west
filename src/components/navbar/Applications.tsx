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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { FileStack } from "lucide-react";

export default function Applications() {
  const { isLoaded } = useAuth();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("http://localhost:3000/api/applications/user");
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
          <Button variant="ghost" className="mr-2">
            <FileStack color="#fffafa" className="w-full hover:stroke-black" />
          </Button>
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
                <RedirectToSignIn />
              </SignedOut>
            </Accordion>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
