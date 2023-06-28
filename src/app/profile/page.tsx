import { RedirectToSignIn, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
export default function Profile() {
  return (
    <main className="min-h-screen flex justify-center">
      <SignedIn>
        <div className="m-2">
        <UserProfile />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </main>
  );
}
