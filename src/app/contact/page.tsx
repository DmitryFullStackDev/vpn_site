import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с OrbitSafe. Поддержка по электронной почте и контактная форма для вопросов, отзывов и запросов о сотрудничестве.",
  openGraph: {
    title: "Контакты | OrbitSafe",
    description: "Свяжитесь с OrbitSafe по вопросам поддержки, отзывов или сотрудничества.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
