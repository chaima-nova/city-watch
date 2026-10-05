import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const text = z.string().trim().min(1).max(200);
const schema = z.object({
  name: text, organization: text, role: text,
  email: z.string().trim().email().max(254), region: text,
  interest: z.enum(["Infrastructure", "Mobility", "Environment", "Climate", "Land Use", "Energy", "Water", "Public Services", "Earth Observation", "City Data Integration", "Research Collaboration", "Other"]),
  message: z.string().trim().min(1).max(5000),
  requestId: z.string().uuid(),
});

// Public contact submission; recipient and sender are controlled only on the server.
export const sendDemoRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const gatewayKey = process.env['LOVABLE_API_KEY'];
    const resendKey = process.env['RESEND_API_KEY'];
    if (!gatewayKey || !resendKey) return { ok: false, error: "Email delivery is unavailable. Your request was not sent." };
    try {
      const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${gatewayKey}`,
          "X-Connection-Api-Key": resendKey,
          "Idempotency-Key": `demo-${data.requestId}`,
        },
        body: JSON.stringify({
          from: "EcoGuardian AI <onboarding@resend.dev>",
          to: ["chaima.novara@gmail.com"],
          reply_to: data.email,
          subject: "EcoGuardian AI — New demo request",
          text: ["New EcoGuardian demo request", `Full Name: ${data.name}`, `Organization: ${data.organization}`, `Role: ${data.role}`, `Work Email: ${data.email}`, `City / Region: ${data.region}`, `Area of Interest: ${data.interest}`, "", "Message:", data.message].join("\n"),
        }),
      });
      if (!response.ok) {
        const body = await response.text();
        console.error(`Email provider failed [${response.status}]: ${body}`);
        return { ok: false, error: `Email delivery failed (${response.status}): ${body}` };
      }
      const result = await response.json() as { id?: string };
      if (!result.id) return { ok: false, error: "Email delivery was not confirmed. Please try again." };
      return { ok: true, error: null };
    } catch {
      return { ok: false, error: "Email delivery could not be confirmed. Please try again." };
    }
  });