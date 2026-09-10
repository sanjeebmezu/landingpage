type ThankYouVideoProps = {
  src: string;
};

export function ThankYouVideo({ src }: ThankYouVideoProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panelSoft to-ink">
      <div className="relative aspect-video bg-ink">
        <iframe
          className="h-full w-full"
          src={src}
          title="Watch This Before Your Call"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="p-5 text-center sm:p-6">
        <h2 className="text-2xl font-bold text-white">Watch This Before Your Call</h2>
      </div>
    </div>
  );
}
