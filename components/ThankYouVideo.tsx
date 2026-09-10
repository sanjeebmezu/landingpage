"use client";

import { useEffect, useRef, useState } from "react";
import { Play, VideoOff, Volume2 } from "lucide-react";

type ThankYouVideoProps = {
  src: string;
};

export function ThankYouVideo({ src }: ThankYouVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasVideoError) return;

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    const playWithSound = async () => {
      try {
        video.muted = false;
        await video.play();
        setIsAutoplayBlocked(false);
      } catch {
        setIsAutoplayBlocked(true);
      }
    };

    void playWithSound();

    const handleCanPlay = () => {
      void playWithSound();
    };

    video.addEventListener("canplay", handleCanPlay, { once: true });

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [hasVideoError]);

  async function handleManualPlay() {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.defaultMuted = false;
    video.volume = 1;

    try {
      await video.play();
      setIsAutoplayBlocked(false);
    } catch {
      setIsAutoplayBlocked(true);
    }
  }

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
          <>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              controls
              preload="auto"
              playsInline
              aria-label="Watch This Before Your Call"
              onError={() => setHasVideoError(true)}
            >
              <source src={src} type="video/mp4" />
            </video>
            {isAutoplayBlocked ? (
              <button
                type="button"
                onClick={handleManualPlay}
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink/78 px-5 text-center text-white backdrop-blur-sm transition hover:bg-ink/70"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink shadow-glow">
                  <Play size={28} fill="currentColor" />
                </span>
                <span className="text-lg font-black">Tap to play with sound</span>
              </button>
            ) : (
              <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/70 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                <Volume2 size={15} />
                Sound on
              </div>
            )}
          </>
        )}
      </div>
      <div className="p-5 text-center sm:p-6">
        <h2 className="text-2xl font-bold text-white">Watch This Before Your Call</h2>
      </div>
    </div>
  );
}
