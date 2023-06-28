"use client";
import * as React from "react";
import { Menu, LucideUser, LifeBuoy, Heart, LogOut, UserPlus, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/menu";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { SignOutButton } from "@clerk/nextjs";


export default function ProfileMenu() {
  const [isLoggedin, setLoggedin] = useState(false);
  // const session = useSession();
  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     setLoggedin(true);
  //   }
  // }, [session]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="rounded-full">
          <div className="flex items-center">
            <Menu color="#f1f5f9" />
            <User color="#f1f5f9" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {isLoggedin ? (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link className="flex" href="/profile">
                  <LucideUser className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex" href="/wishlist">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Whishlist</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link className="flex" href="/api/auth/signin">
                  <LucideUser className="mr-2 h-4 w-4" />
                  <span>Login</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="flex" href="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Sign up</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        )}
        <DropdownMenuItem>
          <Link className="flex" href="/help">
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Help</span>
          </Link>
        </DropdownMenuItem>
        {isLoggedin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            // onClick={() => signOut()}
            >
              <LogOut className="mr-2 h-4 w-4" />

              <SignOutButton />
              {/* <span>Log out</span> */}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
