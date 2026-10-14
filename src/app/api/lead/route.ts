import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      workshopName,
      ownerName,
      phone,
      city,
      workshopType = "Two-Wheeler",
      dailyVehicles = 15,
      selectedPlan = "Garage Pro",
    } = body;

    // Basic Validation
    if (!workshopName || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Workshop Name and Phone Number are required.",
        },
        { status: 400 }
      );
    }

    const leadPayload = {
      workshopName: String(workshopName).trim(),
      ownerName: ownerName ? String(ownerName).trim() : "Workshop Owner",
      phone: String(phone).trim(),
      city: city ? String(city).trim() : "India",
      workshopType,
      dailyVehicles: Number(dailyVehicles) || 15,
      selectedPlan,
      timestamp: new Date().toISOString(),
      source: "motoban-website-lead",
    };

    // Forward to optional external CRM/webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      }).catch((err) => {
        console.error("Non-blocking lead webhook delivery error:", err);
      });
    }

    // Pre-populate structured WhatsApp onboarding message
    const waMessage = `🚀 *New MotoBan Workshop Onboarding Request*\n\n• *Workshop:* ${leadPayload.workshopName}\n• *Owner:* ${leadPayload.ownerName}\n• *Phone:* ${leadPayload.phone}\n• *City:* ${leadPayload.city}\n• *Type:* ${leadPayload.workshopType}\n• *Daily Volume:* ~${leadPayload.dailyVehicles} vehicles/day\n• *Interested Plan:* ${leadPayload.selectedPlan}\n\n_Generated via MotoBan CRO Lead Pipeline (https://motoban.in)_`;

    const waRedirectUrl = `https://wa.me/916359635416?text=${encodeURIComponent(waMessage)}`;

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
      data: leadPayload,
      waRedirectUrl,
    });
  } catch (err: unknown) {
    console.error("Lead submission error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error processing lead.",
      },
      { status: 500 }
    );
  }
}
