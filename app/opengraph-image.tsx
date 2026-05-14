import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marginfy — Profitability Intelligence for Growing Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #111849 0%, #1A2468 45%, #3D55D6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo text */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: 48 }}>
          <span style={{ color: "white", fontWeight: 700, fontSize: 36 }}>margin</span>
          <span style={{ color: "#3ECBA0", fontWeight: 700, fontSize: 36 }}>fy</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "white",
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: "0 0 20px",
            maxWidth: 880,
          }}
        >
          Profitability Intelligence for Growing Businesses
        </h1>

        {/* Subtitle */}
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 24, margin: 0 }}>
          Fractional CFO Services · Melbourne, Australia
        </p>

        {/* Teal accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #3ECBA0, #2EB88E)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
