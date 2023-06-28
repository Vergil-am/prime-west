import db from "@/lib/MongoClient";
import Application from "@/app/models/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(Req: NextRequest, Res: NextResponse) {
  try {
    await db.connect();
    const Applications = await Application.find().exec();
    await db.disconnect();
    return new Response(JSON.stringify(Applications));
  } catch (err: any) {
    return new Response(JSON.stringify(err.message));
  }
}
