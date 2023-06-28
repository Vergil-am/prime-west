import db from "@/lib/MongoClient";
import Application from "@/app/models/ApplicationSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Req: NextRequest, Res: NextResponse) {
  try {
    await db.connect();
    const { UserId, PropertyId, PropertyTitle, FullName, Phone, Email, Message } = await Req.json();

    const NewApplication = await Application.create({
      UserId: UserId,
      PropertyId: PropertyId,
      PropertyTitle: PropertyTitle,
      FullName: FullName,
      Email: Email,
      Phone: Phone,
      Message: Message,
    });
    await db.disconnect();
    return new Response(JSON.stringify("success"));
  } catch (err: any) {
    return new Response(JSON.stringify(err.message));
  }
}
