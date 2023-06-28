import db from "@/lib/MongoClient";
import Application from "@/app/models/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(Req: NextRequest, Res: NextResponse) {
  try {
    await db.connect();

    await db.disconnect();
    return new Response(JSON.stringify("success"));
  } catch (err: any) {
    return new Response(JSON.stringify(err.message));
  }
}
