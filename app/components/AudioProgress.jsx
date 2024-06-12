"use client";

import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep, FaBackwardStep, FaPause } from "react-icons/fa6";
import { formatTime } from "../lib/utils";

const AudioProgress = ({
  isPlaying,
  togglePlayPause,
  audio,
  playPreviousTrack,
  playNextTrack,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const updateProgress = () => {
    setCurrentTime(audio?.currentTime);
    setDuration(audio?.duration);
    const progressValue = (audio?.currentTime / audio?.duration) * 100;
    setProgress(progressValue);
  };

  useEffect(() => {
    audio?.addEventListener("timeupdate", updateProgress);
    audio?.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio?.removeEventListener("timeupdate", updateProgress);
      audio?.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [audio]);

  const seekAudio = (e) => {
    const width = e.target.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    if (audio) {
      audio.currentTime = (offsetX / width) * audio.duration;
    }
  };

  return (
    <div className="flex justify-between gap-4">
      <audio src={audio?.src} className="hidden"></audio>
      <div className="flex w-full items-end">
        <div className="flex w-full items-center gap-2">
          <button
            type="button"
            className="text-xl font-bold text-[#bfbfbf] transition-colors duration-300 hover:text-white"
            onClick={playPreviousTrack}
          >
            <FaBackwardStep />
          </button>
          <div
            className="relative h-1 w-[90%] rounded-[2px] bg-[#696969]"
            onClick={seekAudio}
          >
            <div
              className="h-1 rounded-[2px] bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            type="button"
            className="text-xl font-bold text-[#bfbfbf] transition-colors duration-300 hover:text-white"
            onClick={playNextTrack}
          >
            <FaForwardStep />
          </button>
          {/* --------DURATION---------- */}
          <span className="ml-2 w-[80px] text-[13px] font-medium leading-4 text-[#b6b6b6]">
            {formatTime(currentTime)}/{formatTime(duration)}
          </span>
        </div>
      </div>
      <div className="z-[1] flex h-12 w-12 shrink-0 items-center justify-center self-end">
        <button
          type="button"
          className="flex h-full w-full items-center justify-center rounded-full bg-white text-lg text-black transition-all duration-300 hover:scale-110"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default AudioProgress;
