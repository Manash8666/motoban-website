import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MotoBan — #1 AI Garage Billing, Job Card & Spares POS App";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          backgroundColor: "#0B0F19",
          backgroundImage: "radial-gradient(circle at 25% 25%, #151D2F 0%, #0B0F19 80%)",
          padding: "60px 70px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          border: "4px solid rgba(201, 243, 29, 0.3)",
        }}
      >
        {/* Top Header Badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 22px",
              borderRadius: "9999px",
              backgroundColor: "#1C263D",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "9999px",
                backgroundColor: "#C9F31D",
              }}
            />
            <span
              style={{
                fontSize: "18px",
                color: "#C9F31D",
                fontWeight: 800,
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              MOTOBAN • POWERED BY HYBRIDSTUDIOZ
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 94, 20, 0.15)",
              border: "1px solid #FF5E14",
              borderRadius: "9999px",
              padding: "8px 18px",
            }}
          >
            <span style={{ fontSize: "16px", color: "#FF5E14", fontWeight: 700 }}>
              ★ 4.9 Rating (540+ Garages)
            </span>
          </div>
        </div>

        {/* Main Content Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            15-Second AI Garage Billing, <br />
            <span style={{ color: "#C9F31D" }}>Digital Job Cards</span> & Spares Matrix
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#94A3B8",
              margin: 0,
              lineHeight: 1.4,
              maxWidth: "950px",
            }}
          >
            India&apos;s #1 Operating System for Motorcycle, Scooter & Auto Workshops.
            100% Offline-First PWA • Thermal ESC/POS Printing • Instant WhatsApp Estimates.
          </p>
        </div>

        {/* Bottom Feature Badges & Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "30px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#C9F31D", fontSize: "20px" }}>⚡</span>
              <span style={{ color: "#E2E8F0", fontSize: "18px", fontWeight: 600 }}>
                15s Voice NLP
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#FF5E14", fontSize: "20px" }}>📦</span>
              <span style={{ color: "#E2E8F0", fontSize: "18px", fontWeight: 600 }}>
                50,000+ Spares Matrix
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#C9F31D", fontSize: "20px" }}>🖨️</span>
              <span style={{ color: "#E2E8F0", fontSize: "18px", fontWeight: 600 }}>
                ESC/POS Thermal Print
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            <span>Try Live Sandbox: </span>
            <span style={{ color: "#C9F31D" }}>mechbillerai.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
