import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQ } from "@/components/FAQ";
import { featureIcons } from "@/components/FeatureIcons";

const benefits = [
  {
    title: "Secure VPN connection",
    description: "Military-grade AES-256 encryption keeps your data safe on any network—public Wi‑Fi, cellular, or home.",
    icon: featureIcons.secure,
  },
  {
    title: "Fast global servers",
    description: "Connect to servers in dozens of countries for low latency and smooth streaming and browsing.",
    icon: featureIcons.fast,
  },
  {
    title: "Privacy protection",
    description: "Your IP address and online activity stay private. We don’t sell or share your data with third parties.",
    icon: featureIcons.privacy,
  },
  {
    title: "No logging policy",
    description: "We don’t keep logs of what you do online. Your browsing history remains yours alone.",
    icon: featureIcons.noLogs,
  },
];

const howItWorksSteps = [
  { step: 1, title: "Download", text: "Get OrbitSafe VPN from the App Store when it launches." },
  { step: 2, title: "Connect", text: "Open the app and tap one button to secure your connection." },
  { step: 3, title: "Browse", text: "Use the internet with confidence on any network." },
];

const faqItems = [
  {
    question: "What is OrbitSafe VPN?",
    answer: "OrbitSafe VPN is an iOS app that creates a secure, encrypted tunnel between your iPhone and the internet. It hides your IP address and protects your data on public and private networks.",
  },
  {
    question: "When will OrbitSafe VPN be available?",
    answer: "We’re putting the finishing touches on the app and plan to launch on the App Store soon. Follow our updates or contact us to be notified at launch.",
  },
  {
    question: "Do you keep logs of my activity?",
    answer: "No. We follow a strict no-logging policy. We don’t store your browsing history, connection timestamps tied to your identity, or any data that could be used to identify what you do online.",
  },
  {
    question: "Is OrbitSafe VPN only for iPhone?",
    answer: "Our first release is for iOS. We’re focused on delivering a great experience on iPhone and iPad. Other platforms may be considered in the future.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section id="benefits" className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-slate-900">Why choose OrbitSafe VPN?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Built for simplicity and trust. Here’s what you get with every connection.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <FeatureCard key={b.title} title={b.title} description={b.description} icon={b.icon} />
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-slate-900">How it works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
              Three simple steps to a safer internet on your iPhone.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {howItWorksSteps.map((item) => (
                <div key={item.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Security you can trust</h2>
            <p className="mt-4 text-slate-600">
              OrbitSafe VPN uses industry-standard protocols and encryption. Your traffic is encrypted end-to-end through our secure servers, so ISPs, advertisers, and bad actors can’t see what you’re doing online. We’re committed to transparency: our privacy policy and practices are clear and easy to understand.
            </p>
          </div>
        </section>
        <section id="faq" className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
              Quick answers to common questions about OrbitSafe VPN.
            </p>
            <div className="mt-12">
              <FAQ items={faqItems} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
