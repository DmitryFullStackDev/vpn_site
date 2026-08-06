import type { Metadata } from "next";
import { GetStartedContent } from "./GetStartedContent";

export const metadata: Metadata = {
  title: "Как подключиться | OrbitSafe",
  description:
    "Подключитесь к OrbitSafe через Telegram-бота за три простых шага. Первые 3 дня бесплатно.",
  openGraph: {
    title: "Как подключиться | OrbitSafe",
    description: "Подключитесь к OrbitSafe через Telegram-бота за три простых шага.",
    type: "website",
  },
};

export default function GetStartedPage() {
  return <GetStartedContent />;
}
