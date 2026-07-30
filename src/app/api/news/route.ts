import { NextResponse } from "next/server";
import { getNewsPosts } from "@/lib/services/news";

export async function GET() {
  const news = await getNewsPosts();
  return NextResponse.json({ news });
}
