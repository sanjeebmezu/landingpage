"use client";

import { useState } from "react";
import { VideoOff } from "lucide-react";

type ThankYouVideoProps = {
  src: string;
};

export function ThankYouVideo({ src }: ThankYouVideoProps) {
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-panelSoft to-ink">
      <div className="relative aspect-video bg-ink">
        {hasVideoError ? (
          <div className="flex h-full flex-col items-center justify-center px-5 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 bg-brand/10 text-brand">
              <VideoOff size={32} strokeWidth={1.8} />
            </div>
            <p className="text-lg font-bold text-white">Video will appear here</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Add your video as <span className="font-semibold text-slate-200">thank-you-video.mp4</span>{" "}
              inside the public folder, then refresh this page.
            </p>
          </div>
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            controls
            muted
            preload="metadata"
            playsInline
            aria-label="Watch This Before Your Call"
            onError={() => setHasVideoError(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
        </div>
        <div className="p-5 text-center sm:p-6">
          <h2 className="text-2xl font-bold text-white">Watch This Before Your Call</h2>
        </div>
      </div>
  );
}
