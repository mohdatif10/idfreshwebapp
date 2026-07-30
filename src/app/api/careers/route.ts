import { NextResponse } from "next/server";
import { getOpenRoles } from "@/lib/services/careers";

export async function GET() {
  const roles = await getOpenRoles();
  return NextResponse.json({ roles });
}
