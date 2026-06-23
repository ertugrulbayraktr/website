import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ertuğrul Bayraktar — Yazılım Mühendisi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Letterpress temalı sosyal medya önizleme kartı (1200×630).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f4ef",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 16,
              border: "3px solid #1c1a17",
              color: "#1c1a17",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            EB
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 25,
              letterSpacing: 5,
              color: "#6f665b",
              fontWeight: 600,
            }}
          >
            BACKEND &amp; DISTRIBUTED SYSTEMS
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#1c1a17",
              marginTop: 14,
              lineHeight: 1,
            }}
          >
            Ertuğrul Bayraktar
          </div>
          <div style={{ fontSize: 40, color: "#4a4239", marginTop: 20 }}>
            Yazılım Mühendisi · Software Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            color: "#6f665b",
          }}
        >
          <div
            style={{
              width: 44,
              height: 2,
              backgroundColor: "#1c1a17",
              marginRight: 18,
            }}
          />
          Java/Quarkus · .NET · Event-Driven Microservices
        </div>
      </div>
    ),
    { ...size }
  );
}
