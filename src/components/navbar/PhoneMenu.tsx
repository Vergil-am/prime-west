"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
export function PhoneMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          // onClick={OpenNavBar}
        >
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
            <Link
              href="/"
              className="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              <span className="mb-0 p-0">PRIME WEST</span>
              <br />
              <small className="text-sm font-medium leading-none">Property group</small>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="w-full flex-grow lg:flex items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8">
            <Link
              href="/properties"
              className="block lg:inline-block text-md font-bold  text-secondary sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              PROPERTIES
            </Link>
            <Link
              href="/land"
              className="block lg:inline-block text-md font-bold  text-secondary sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              LAND
            </Link>
            <Link
              href="/#rent"
              className="block lg:inline-block text-md font-bold  text-secondary  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              RENT
            </Link>
            <Link
              href="/#buy"
              className="block lg:inline-block text-md font-bold  text-secondary  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              BUY
            </Link>
            <Link
              href="/#invest"
              className="block lg:inline-block text-md font-bold  text-secondary  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              INVEST
            </Link>
            <Link
              href="/#contact"
              className="block lg:inline-block text-md font-bold  text-secondary  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
