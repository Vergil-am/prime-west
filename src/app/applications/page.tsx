"use client";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
export default function Applications() {
  const { isLoaded, userId } = useAuth();
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
    <main>
      <SignedIn>
        <div>{userId}</div>
        <div>
          {data &&
            data.map((item: any) => {
              return (
                <>
                  <div>{item.PropertyId}</div>
                  <div>{item.FullName}</div>
                  <div>{item.PropertyTitle}</div>
                </>
              );
            })}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </main>
  );
}
