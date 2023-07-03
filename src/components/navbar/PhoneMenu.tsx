"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface params {
  Links: { title: string; href: string }[];
}
export function PhoneMenu({ Links }: params) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg
            className="fill-current h-6 w-6 text-gray-700"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-primary">
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link
                href="/"
                className="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
              >
                <span className="mb-0 p-0">PRIME WEST</span>
                <br />
                <small className="text-sm font-medium leading-none">Property group</small>
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <div className="w-full flex-grow lg:flex items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
            {Links.map((link) => (
              <SheetClose asChild>
                <Link
                  href={link.href}
                  className="block lg:inline-block text-md font-bold  text-secondary sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
