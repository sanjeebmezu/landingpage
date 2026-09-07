import Image from "next/image";

export function Header() {
  return (
    <header className="section-shell flex min-h-24 items-center justify-center py-6">
      <Image
        src="/Logo.png"
        alt="MezuStudio"
        width={180}
        height={52}
        priority
        className="h-auto w-40 brightness-0 invert sm:w-48"
      />
    </header>
  );
}
