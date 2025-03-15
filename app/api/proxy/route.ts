import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      "https://cryptopunks-api.herokuapp.com/api/v1/punks/listings?limit=3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.OPENSEA_API_KEY || "", // Set your OpenSea API key
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Proxy API Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
