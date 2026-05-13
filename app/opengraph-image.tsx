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
          background: "linear-gradient(135deg, #0F2240 0%, #1B3B9A 50%, #1B4FE4 100%)",
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
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#1B4FE4",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: 800, fontSize: 20 }}>M</span>
          </div>
          <span style={{ color: "white", fontWeight: 700, fontSize: 28 }}>Marginfy</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: "0 0 20px",
            maxWidth: 900,
          }}
        >
          Profitability Intelligence for Growing Businesses
        </h1>

        {/* Subtitle */}
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 26, margin: 0 }}>
          Fractional CFO Services · Melbourne, Australia
        </p>

        {/* Green accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #059669, #10B981)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
