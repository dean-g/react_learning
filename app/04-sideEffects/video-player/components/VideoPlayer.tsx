import { useEffect, useRef } from "react";

export default function VideoPlayer({
  src,
  isPlaying,
}: {
  src: string;
  isPlaying: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null); // All refs have .current property

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);
  return (
    <>
      <video ref={videoRef} src={src} />
    </>
  );
}
