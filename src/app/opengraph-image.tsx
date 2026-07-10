import { ImageResponse } from "next/og";

export const alt = "Diamond State Block Landscaping";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10b981 0%, #065f46 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: 16,
          }}
        >
          Newark &amp; Hockessin, DE
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          Diamond State Block Landscaping
        </div>
        <div style={{ fontSize: 32, opacity: 0.9, marginTop: 24 }}>
          Lawn Care · Landscaping · Hardscaping
        </div>
      </div>
    ),
    { ...size },
  );
}
