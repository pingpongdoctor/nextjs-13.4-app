import { revalidateTag } from "next/cache";
import { NextResponse, NextRequest } from "next/server";

//ENDPOINT LOOKS LIKE: http://localhost:3000/api/revalidate?tag=teachers&key=fnewjfjwenfjew
export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  const key = req.nextUrl.searchParams.get("key");

  if (tag && key && key === process.env.MY_REVALIDATE_TOKEN) {
    revalidateTag(tag);
    return NextResponse.json(
      JSON.stringify({
        revalidate: true,
        date: Date.now(),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
        statusText: "success",
      }
    );
  } else {
    return NextResponse.json(
      JSON.stringify({
        revalidate: false,
        data: Date.now(),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 401,
        statusText: "failed",
      }
    );
  }
}
