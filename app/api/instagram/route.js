import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Store your long-lived access token in an environment variable

  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${accessToken}`,
  );
  const data = await response.json();

  if (response.ok) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json(data, { status: response.status });
  }
}
