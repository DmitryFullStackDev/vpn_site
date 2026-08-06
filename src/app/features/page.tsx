import type { Metadata } from "next";
import { FeaturesContent } from "./FeaturesContent";

export const metadata: Metadata = {
  title: "Функции",
  description:
    "Функции OrbitSafe: защищённое соединение, быстрые серверы по всему миру, защита приватности, политика без логов и простое подключение через Telegram-бота.",
  openGraph: {
    title: "Функции | OrbitSafe",
    description:
      "Защищённое соединение, быстрые серверы, защита приватности, без логов, простое подключение через бота.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
