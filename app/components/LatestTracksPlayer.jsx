"use client";

import { useState, useEffect } from "react";
import useSound from "use-sound";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep, FaBackwardStep, FaPause } from "react-icons/fa6";
import { formatTime } from "./../lib/utils";

const LatestTracksPlayer = ({
  playlist,
  setCurrentTrackIndex,
  currentTrackIndex,
}) => {
  const [volume, setVolume] = useState(1);
  const [seekTime, setSeekTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const { src, image, title, artist } = playlist?.[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist?.length);
  };

  const [play, { pause, sound }] = useSound(src, {
    volume,
    onend: handleNext,
    onload: () => setDuration(sound?.duration()),
  });

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
      sound.seek(seekTime);
    }
  }, [volume, seekTime, sound]);

  const handlePlayPause = () => {
    if (sound.playing()) {
      pause();
    } else {
      play();
    }
  };

  const handlePrev = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + playlist?.length) % playlist?.length,
    );
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleSeekChange = (e) => {
    setSeekTime(e.target.value);
  };

  const isPlaying = true;

  return (
    <div
      className={`${isPlaying ? "flex" : "hidden"} fixed bottom-0 left-0 right-0 z-10 justify-between bg-black p-4`}
    >
      <div className="flex gap-4">
        <Image
          src={image}
          alt={title}
          width={110}
          height={60}
          className="rounded-md"
        />
        <div className="flex flex-col justify-center gap-0.5">
          <h5 className="text-sm font-semibold">{title}</h5>
          <p className="text-[12px] font-medium text-[#8c8c8c]">{artist}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center justify-center gap-6 text-xl">
          <button type="button" onClick={handlePrev}>
            <FaBackwardStep />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-black"
            onClick={handlePlayPause}
          >
            <FaPlay className="translate-x-[5%]" />
          </button>
          <button type="button" onClick={handleNext}>
            <FaForwardStep />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span>00:00</span>
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={seekTime}
            onChange={handleSeekChange}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div>
        <input
          id="volume-range"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default LatestTracksPlayer;
