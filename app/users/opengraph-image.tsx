import { ImageResponse } from "next/server";
import { roboto } from "../font";

export const runtime = "edge";

export const alt = "Users Infor";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  //WE CAN FETCH POST TO CREATE DYNAMIC OPEN GRAPH IMAGE

  // const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
  //   res.json()
  // );

  //IN CASE YOU HAVE A LOCAL FONT TO APPLY, YOU CAN DO THIS TO CREATE A URL AND EXTRACT THE LOCAL FONT TO USE
  // const interSemiBold = fetch(
  //   new URL("./Inter-SemiBold.ttf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        className={`${roboto.className}`} //USE ROBOTO FROM THE NEXT/GOOGLE/FONT
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Users Page
      </div>
    ),
    {
      ...size,
      //USE LOCAL FONTS HERE
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await interSemiBold,
      //     style: 'normal',
      //     weight: 400,
      //   },
      // ],
    }
  );
}
