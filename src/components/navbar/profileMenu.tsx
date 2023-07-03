"use client";
import * as React from "react";
import { Menu, LucideUser, LogOut, UserPlus, User } from "lucide-react";
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
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Applications from "./Applications";

export default function ProfileMenu() {
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
        <SignedIn>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link className="flex" href="/profile">
                <LucideUser className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground">
              <Applications />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <SignOutButton />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </SignedIn>
        <SignedOut>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <div className="flex">
                <LucideUser className="mr-2 h-4 w-4" />
                <SignInButton
                  mode="modal"
                />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="flex" href="/">
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Join us</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
