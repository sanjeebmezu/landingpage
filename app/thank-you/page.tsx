import Link from "next/link";
import { CheckCircle2, MessageCircle, Timer } from "lucide-react";
import { Header } from "@/components/Header";
import { ThankYouVideo } from "@/components/ThankYouVideo";

const thankYouVideoSrc = "/thank-you-text-video.mp4";
const whatsappHref =
  "https://wa.me/?text=Hi%20MezuStudio%2C%20I%20booked%20a%20free%20AI%20marketing%20consultation%20and%20I%20have%20a%20question.";

export const metadata = {
  title: "You Are Booked"
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden pb-16">
      <Header />
      <section className="section-shell pt-10 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand shadow-glow">
            <CheckCircle2 size={34} strokeWidth={2.2} />
          </div>
          <h1 className="text-balance text-4xl font-black tracking-normal text-white sm:text-6xl">
            You&apos;re <span className="text-brand">Booked</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Your free AI marketing consultation request has been received.
          </p>
        </div>

        <div className="panel mx-auto mt-10 max-w-3xl p-5 sm:p-8">
          <ThankYouVideo src={thankYouVideoSrc} />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-line bg-white/[0.04] p-5">
              <MessageCircle className="mb-3 text-accent" size={26} />
              <p className="font-semibold text-white">Have questions or want faster support?</p>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-5 text-sm font-bold text-ink transition hover:bg-accent"
              >
                Chat on WhatsApp
              </Link>
            </div>
            <div className="rounded-3xl border border-line bg-white/[0.04] p-5">
              <Timer className="mb-3 text-brand" size={26} />
              <p className="font-semibold text-white">Make sure you attend your consultation on time.</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Bring your current marketing details, business goals, and any questions you have.
                The more you share, the better your custom plan will be.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-lg font-semibold text-white">See you on the call.</p>
        </div>
      </section>
    </main>
  );
}
