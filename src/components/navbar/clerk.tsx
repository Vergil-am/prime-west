import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
export default function Clerk() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" ></UserButton>
      </SignedIn>
      <SignedOut>
        <Button variant="secondary">
          <SignInButton />
        </Button>
      </SignedOut>
    </>
  );
}
