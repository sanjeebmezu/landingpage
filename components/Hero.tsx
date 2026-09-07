import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="section-shell pt-6 sm:pt-10">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          Free AI Marketing Consultation Call
        </div>
        <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl">
          Get More Customers From Your{" "}
          <span className="text-brand">Online Marketing</span> in 30 Days
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-8 text-slate-200 sm:text-xl">
          Stop posting and boosting without results. Get a clear AI marketing plan made for your
          business.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          This free consultation is for small and medium business owners who are struggling to get
          customers from Facebook or online. You will receive a simple, customized plan to fix
          what&apos;s not working.
        </p>
        <a
          href="#book-call"
          className="mx-auto mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-accent focus:outline-none focus:ring-4 focus:ring-brand/30"
        >
          Book Free Consultation
          <ArrowDown size={19} strokeWidth={2.4} />
        </a>
      </div>
    </section>
  );
}
