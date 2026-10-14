/**
 * MotoBan Telemetry & EULA Enforcement Dispatcher
 * Dispatches alerts when:
 * 1. A GitHub repository is forked (via GitHub Webhook)
 * 2. An unauthorized domain deployment is detected (via Heartbeat Beacon or HTTP Referer)
 */

interface AlertPayload {
  type: "FORK_DETECTED" | "UNAUTHORIZED_DEPLOYMENT" | "BEACON_TRIGGERED";
  source: "motoban-website" | "mechbillerai" | string;
  target: string;
  details: Record<string, any>;
  timestamp: string;
}

export async function dispatchEulaAlert(payload: AlertPayload) {
  const alertEmail = process.env.ALERT_EMAIL || "info@motoban.in";
  const resendApiKey = process.env.RESEND_API_KEY;
  const webhookUrl = process.env.ALERT_WEBHOOK_URL; // Discord / Slack / Telegram / Zapier webhook

  console.warn(
    `[EULA_ALERT] [${payload.type}] Source: ${payload.source} | Target: ${payload.target}`,
    JSON.stringify(payload.details)
  );

  const subject =
    payload.type === "FORK_DETECTED"
      ? `🔔 [GitHub Fork Alert] ${payload.target} forked ${payload.source}`
      : `🚨 [EULA Alert] Unauthorized Deployment on ${payload.target} (${payload.source})`;

  const textBody = `
========================================
MOTOBAN & MECHBILLERAI EULA ALERT SYSTEM
========================================
Event Type: ${payload.type}
Source Repo: ${payload.source}
Target / Domain: ${payload.target}
Timestamp: ${payload.timestamp}

Incident Details:
${JSON.stringify(payload.details, null, 2)}

EULA Dual-Licensing Compliance Policy:
Under EULA Section 2 & 3, any entity deploying the MotoBan Website or mechbillerai repository is legally obligated to:
1. Release 100% of their derivative codebase as public open-source software, OR
2. Remit the 3x Lifetime License Commercial Royalty to HybridStudioZ:
   - Garage Pro: ₹44,997 INR
   - Enterprise: ₹119,997 INR
========================================
  `.trim();

  // 1. Dispatch to Webhook (Discord / Slack / Telegram / Zapier) if configured
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: subject,
          embeds: [
            {
              title: subject,
              description: textBody,
              color: payload.type === "FORK_DETECTED" ? 0xc9f31d : 0xff5e14,
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
    } catch (err) {
      console.error("[ALERT_WEBHOOK_ERROR]", err);
    }
  }

  // 2. Dispatch via Resend API if API Key is configured
  if (resendApiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "MotoBan Security <alerts@motoban.in>",
          to: alertEmail,
          subject,
          text: textBody,
        }),
      });
    } catch (err) {
      console.error("[ALERT_EMAIL_ERROR]", err);
    }
  }

  return { success: true };
}
