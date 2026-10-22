import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #eef2ff 0%, #fdf2f8 50%, #fffbeb 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 28px",
            borderRadius: 999,
            background: "linear-gradient(135deg, #6366f1, #ec4899)",
            color: "white",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 900, color: "#111", marginTop: 40 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#4b5563", marginTop: 20 }}>
          Chief Academic Officer, Orchids The International School · Bangalore
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6366f1", marginTop: 48, fontWeight: 600 }}>
          nareshram121.com
        </div>
      </div>
    ),
    size
  );
}
