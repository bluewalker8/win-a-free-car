import { useEffect, useRef, type RefObject } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  videoRef?: RefObject<HTMLVideoElement | null>;
};

export function AutoVideo({
  src,
  poster,
  className,
  muted = true,
  loop = true,
  videoRef,
}: Props) {
  const localRef = useRef<HTMLVideoElement>(null);
  const ref = videoRef ?? localRef;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = () => {
      void video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      observer.disconnect();
    };
  }, [ref, src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted={muted}
      loop={loop}
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
