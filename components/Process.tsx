const steps = [
  "We review your current marketing and business situation",
  "We identify what is not working and where you are losing customers",
  "You receive a customized AI marketing plan for your business"
];

export function Process() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Consultation process</p>
        <h2 className="mt-4 text-3xl font-black tracking-normal text-white sm:text-5xl">
          Three simple steps
        </h2>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-3xl border border-line bg-white/[0.045] p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-black text-ink">
              {index + 1}
            </div>
            <p className="text-lg font-bold text-white">Step {index + 1}</p>
            <p className="mt-3 text-base leading-7 text-slate-400">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
