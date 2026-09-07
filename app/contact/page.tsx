import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Book Free Consultation"
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <section className="section-shell pt-8 text-center sm:pt-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Free AI Marketing Consultation
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-black leading-[1.08] tracking-normal text-white sm:text-6xl">
          Book Your Consultation Call
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Get a clear AI marketing plan made for your business.
        </p>
      </section>
      <CTAForm />
    </main>
  );
}
