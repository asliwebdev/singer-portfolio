"use client";

import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep, FaBackwardStep, FaPause } from "react-icons/fa6";

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

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
    <div className="flex gap-4 justify-between">
      <audio src={audio?.src} className="hidden"></audio>
      <div className="flex items-end w-full">
        <div className="flex gap-2 items-center w-full">
          <button
            type="button"
            className="font-bold text-xl text-[#bfbfbf] transition-colors duration-300 hover:text-white"
            onClick={playPreviousTrack}
          >
            <FaBackwardStep />
          </button>
          <div
            className="relative w-[90%] bg-[#696969] rounded-[2px] h-1"
            onClick={seekAudio}
          >
            <div
              className="h-1 bg-white rounded-[2px] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button
            type="button"
            className="font-bold text-xl text-[#bfbfbf] transition-colors duration-300 hover:text-white"
            onClick={playNextTrack}
          >
            <FaForwardStep />
          </button>
          {/* --------DURATION---------- */}
          <span className="text-[#b6b6b6] font-medium text-[13px] leading-4 ml-2 w-[80px]">
            {formatTime(currentTime)}/{formatTime(duration)}
          </span>
        </div>
      </div>
      <div className="w-12 h-12 self-end z-[1] flex items-center justify-center shrink-0">
        <button
          type="button"
          className="w-full h-full bg-white text-black text-lg flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default AudioProgress;
