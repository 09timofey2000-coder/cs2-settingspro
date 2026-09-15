import { ImageResponse } from "next/og";

export const alt = "CS2 Settings — настройки про-игроков";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0a0a0b",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255,92,26,0.20), transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#ff5c1a",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0a0b",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            CS2
          </div>
          <div style={{ color: "#8a8a93", fontSize: "24px" }}>Settings</div>
        </div>
        <div
          style={{
            color: "#f5f5f7",
            fontSize: "84px",
            fontWeight: "bold",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Настройки</span>
          <span>
            про-игроков <span style={{ color: "#ff5c1a" }}>CS2</span>
          </span>
        </div>
        <div
          style={{
            color: "#8a8a93",
            fontSize: "26px",
            marginTop: "30px",
            display: "flex",
          }}
        >
          DPI · Sens · Crosshair · Viewmodel · Launch Options
        </div>
      </div>
    ),
    { ...size }
  );
}