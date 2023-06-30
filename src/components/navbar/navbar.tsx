import Link from "next/link";
import Clerk from "@/components/navbar/clerk";
import Applications from "@/components/navbar/Applications";
import { PhoneMenu } from "./PhoneMenu";

export default function NavBar() {
  return (
    <header>
      <div className="bg-primary w-screen py-4 px-2  xl:mx-0 fixed z-50 top-0">
        <div className="flex justify-between">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="block lg:hidden">
              <PhoneMenu />
            </div>
            <Link
              href="/"
              className="block lg:inline-block text-md font-bold  text-orange-500  sm:hover:border-indigo-400  hover:text-orange-500 mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg"
            >
              <span className="mb-0 p-0">PRIME WEST</span>
              <br />
              <small className="text-sm font-medium leading-none">Property group</small>
            </Link>
            <div className={`w-full flex-grow lg:flex items-center lg:w-auto hidden`}>
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
          </nav>
          <div className="flex items-center mr-5">
            <Applications />
            <Clerk />
          </div>
        </div>
      </div>
    </header>
  );
}
