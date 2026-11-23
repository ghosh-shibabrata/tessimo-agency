import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, description, timeline, scope } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid business email address is required." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    // In production without external provider credentials (e.g. Resend, SendGrid, or CRM webhook),
    // we log the submission locally and return an integration-ready success acknowledgment.
    console.log("[Tessimo Contact Inbound]", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || "N/A",
      service: service || "Both",
      timeline: timeline || "Standard Enterprise",
      scope: scope || "Not Specified",
      description,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully. Integration ready.",
      leadId: `LEAD-${Date.now().toString().slice(-4)}`,
    });
  } catch (error) {
    console.error("[Tessimo Contact API Error]", error);
    return NextResponse.json(
      { error: "Internal processing error. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
