import db from "@/lib/MongoClient";
import Application from "@/app/models/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(Req: NextRequest, Res: NextResponse) {
  const { userId } = getAuth(Req);
  console.log('api called', userId)
  try {
    await db.connect();
    const Applications = await Application.find({
      UserId: userId,
    });
    await db.disconnect();
    console.log('api', Applications)
    return new Response(JSON.stringify(Applications));
  } catch (err: any) {
    return new Response(JSON.stringify(err.message));
  }
}
