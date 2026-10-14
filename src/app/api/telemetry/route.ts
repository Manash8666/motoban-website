import { NextRequest, NextResponse } from "next/server";
import { dispatchEulaAlert } from "@/lib/telemetry-alerts";

// Authorized domains that are permitted to run without triggering EULA violation alerts
const AUTHORIZED_HOSTS = new Set([
  "motoban.in",
  "www.motoban.in",
  "mechbillerai.vercel.app",
  "motofit2.in",
  "localhost",
  "127.0.0.1",
  "::1",
]);

function isAuthorizedHost(hostname: string): boolean {
  if (!hostname) return true;
  const lower = hostname.toLowerCase().split(":")[0]; // strip port

  if (AUTHORIZED_HOSTS.has(lower)) return true;

  // Permit official Vercel preview/production deployments of the project owner
  if (
    lower.endsWith(".vercel.app") &&
    (lower.includes("motoban") || lower.includes("mechbillerai"))
  ) {
    return true;
  }

  return false;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}));
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const referer = req.headers.get("referer") || "";

    const hostname = (data.hostname || (referer ? new URL(referer).hostname : "unknown"))
      .toLowerCase()
      .split(":")[0];
    const source = data.source || "unknown";
    const origin = data.origin || referer || hostname;

    const authorized = isAuthorizedHost(hostname);

    if (!authorized) {
      await dispatchEulaAlert({
        type: "UNAUTHORIZED_DEPLOYMENT",
        source,
        target: hostname,
        timestamp: new Date().toISOString(),
        details: {
          hostname,
          origin,
          pathname: data.pathname || "/",
          sourceRepo: source,
          clientIp,
          userAgent,
          screen: data.screen || null,
          eulaRemedy:
            "Subject to 100% open-source reciprocity or 3x Lifetime License Commercial Royalty (₹44,997 / ₹119,997)",
        },
      });
    }

    // CORS response allows any external cloned instance to ping back without browser console errors
    return NextResponse.json(
      { ok: true, authorized, timestamp: Date.now() },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error: any) {
    console.error("[TELEMETRY_ROUTE_ERROR]", error);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
