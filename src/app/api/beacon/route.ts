import { NextRequest, NextResponse } from "next/server";
import { dispatchEulaAlert } from "@/lib/telemetry-alerts";

// Authorized domains
const AUTHORIZED_HOSTS = new Set([
  "motoban.in",
  "www.motoban.in",
  "mechbillerai.vercel.app",
  "motofit2.in",
  "localhost",
  "127.0.0.1",
  "::1",
]);

// 1x1 transparent SVG image returned to the browser
const TRANSPARENT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1" viewBox="0 0 1 1"><rect width="1" height="1" fill="none"/></svg>`;

/**
 * Remote Asset & HTTP Referer Beacon
 * When an unauthorized site loads this image, their browser automatically sends their domain
 * in the HTTP 'Referer' header.
 */
export async function GET(req: NextRequest) {
  const referer = req.headers.get("referer") || "";
  const source = req.nextUrl.searchParams.get("src") || "generic";
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  if (referer) {
    try {
      const refUrl = new URL(referer);
      const host = refUrl.hostname.toLowerCase().split(":")[0];
      const isAuthorized =
        AUTHORIZED_HOSTS.has(host) ||
        (host.endsWith(".vercel.app") &&
          (host.includes("motoban") || host.includes("mechbillerai")));

      if (!isAuthorized) {
        // Asynchronously trigger EULA alert
        dispatchEulaAlert({
          type: "BEACON_TRIGGERED",
          source,
          target: host,
          timestamp: new Date().toISOString(),
          details: {
            referer,
            hostname: host,
            sourceRepo: source,
            clientIp,
            userAgent,
            detectionMethod: "HTTP Referer Header Tracking",
          },
        }).catch(() => {});
      }
    } catch {}
  }

  return new NextResponse(TRANSPARENT_SVG, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
