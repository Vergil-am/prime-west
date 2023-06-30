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
import { ClipboardList } from "lucide-react";

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
          <ClipboardList size={32} color="#f5f0f0" className="mx-2" />
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
