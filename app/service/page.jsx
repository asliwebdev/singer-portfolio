"use client";

import { useEffect, useRef } from "react";

export const metadata = {
  title: "Services",
};

const page = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    const playHandler = () => {
      if (video) {
        video.muted = false;
      }
    };

    if (video) {
      video.addEventListener("play", playHandler);
    }

    return () => {
      if (video) {
        video.removeEventListener("play", playHandler);
      }
    };
  }, []);

  return (
    <div className="grid place-items-center bg-gradient min-h-[calc(100vh-60px)]">
      <video
        ref={videoRef}
        width="900"
        height="600"
        controls
        loop
        autoPlay
        preload="none"
        className="object-cover max-h-[600px] border-none rounded-xl"
        muted
      >
        <source src="/service.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default page;
