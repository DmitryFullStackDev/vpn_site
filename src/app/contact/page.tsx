import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OrbitSafe VPN. Email support and contact form for questions, feedback, and partnership inquiries.",
  openGraph: {
    title: "Contact | OrbitSafe VPN",
    description: "Contact OrbitSafe VPN for support, feedback, or partnership.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
