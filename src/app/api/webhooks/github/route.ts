import { NextRequest, NextResponse } from "next/server";
import { dispatchEulaAlert } from "@/lib/telemetry-alerts";

/**
 * GitHub Webhook Listener for MotoBan & MechBillerAI
 * Captures Fork, Star, Watch, and Branch creation events.
 * Setup on GitHub: Repo Settings -> Webhooks -> Payload URL: https://motoban.in/api/webhooks/github
 */
export async function POST(req: NextRequest) {
  try {
    const event = req.headers.get("x-github-event") || "unknown";
    const delivery = req.headers.get("x-github-delivery");
    const payload = await req.json().catch(() => ({}));

    const repoName = payload.repository?.full_name || "unknown-repo";
    const sender = payload.sender?.login || "anonymous";
    const senderUrl = payload.sender?.html_url || "";

    if (event === "fork") {
      const forkeeUrl = payload.forkee?.html_url || "";
      const forkeeName = payload.forkee?.full_name || "";

      await dispatchEulaAlert({
        type: "FORK_DETECTED",
        source: repoName,
        target: sender,
        timestamp: new Date().toISOString(),
        details: {
          user: sender,
          userProfile: senderUrl,
          sourceRepository: repoName,
          forkRepository: forkeeName,
          forkUrl: forkeeUrl,
          deliveryId: delivery,
        },
      });

      return NextResponse.json({
        ok: true,
        event: "fork",
        message: `Fork alert successfully processed for ${sender} -> ${forkeeUrl}`,
      });
    }

    if (event === "create" && payload.ref_type === "branch") {
      await dispatchEulaAlert({
        type: "FORK_DETECTED",
        source: repoName,
        target: `${sender} (branch: ${payload.ref})`,
        timestamp: new Date().toISOString(),
        details: {
          user: sender,
          userProfile: senderUrl,
          branch: payload.ref,
          sourceRepository: repoName,
          deliveryId: delivery,
        },
      });

      return NextResponse.json({
        ok: true,
        event: "create:branch",
        message: `Branch creation logged for ${sender}`,
      });
    }

    if (event === "ping") {
      return NextResponse.json({
        ok: true,
        message: `MotoBan GitHub Webhook active for ${repoName}`,
        zen: payload.zen,
      });
    }

    return NextResponse.json({ ok: true, event, status: "ignored" });
  } catch (error: any) {
    console.error("[GITHUB_WEBHOOK_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: error?.message || "Webhook processing error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    service: "MotoBan & MechBillerAI GitHub Webhook Listener",
    supportedEvents: ["fork", "create", "watch", "star"],
    timestamp: new Date().toISOString(),
  });
}
