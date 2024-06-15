// app/api/download/route.js
import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  console.log("Received URL:", url);

  if (!url) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
    });
  }

  try {
    const decodedUrl = decodeURIComponent(url);
    const normalizedUrl = decodedUrl.startsWith("//")
      ? `https:${decodedUrl}`
      : decodedUrl;
    console.log("Normalized URL:", normalizedUrl);

    const response = await axios.get(normalizedUrl, {
      responseType: "arraybuffer",
    });

    return new Response(response.data, {
      status: 200,
      headers: {
        "Content-Disposition": "attachment; filename=music.mp3",
        "Content-Type": response.headers["content-type"],
      },
    });
  } catch (error) {
    console.error("Failed to download file:", error);
    return new Response(JSON.stringify({ error: "Failed to download file" }), {
      status: 500,
    });
  }
}
