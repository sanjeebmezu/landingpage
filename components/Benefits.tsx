import { BrainCircuit, ChartNoAxesColumnIncreasing, Check, Route, Target } from "lucide-react";

const benefits = [
  {
    icon: ChartNoAxesColumnIncreasing,
    text: "Understand why your current marketing is not bringing sales"
  },
  {
    icon: Target,
    text: "See what is missing in your strategy"
  },
  {
    icon: Check,
    text: "Learn how to get consistent customer inquiries online"
  },
  {
    icon: Route,
    text: "Get a clear plan you can follow step by step"
  },
  {
    icon: BrainCircuit,
    text: "Discover how AI can improve your marketing results"
  }
];

export function Benefits() {
  return (
    <section className="section-shell py-4 sm:py-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">How you benefit</p>
        <h2 className="mt-4 text-3xl font-black tracking-normal text-white sm:text-5xl">
          Get clarity before spending more online
        </h2>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.text} className="rounded-3xl border border-line bg-white/[0.045] p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon size={23} />
              </div>
              <p className="text-base font-semibold leading-6 text-slate-100">{benefit.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
