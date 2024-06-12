"use client";

import { useState, useEffect } from "react";
import useSound from "use-sound";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaForwardStep, FaBackwardStep } from "react-icons/fa6";
import { GiPauseButton } from "react-icons/gi";
import { formatTime } from "./../lib/utils";

const LatestTracksPlayer = ({
  playlist,
  setCurrentTrackIndex,
  currentTrackIndex,
  isPlaying,
  setIsPlaying,
  handlePlayPause,
}) => {
  const [volume, setVolume] = useState(1);
  const [seekTime, setSeekTime] = useState(0);

  const { src, image, title, artist } = playlist?.[currentTrackIndex];
  const [prevSrc, setPrevSrc] = useState(null);

  const [play, { pause, sound, duration }] = useSound(src, {
    volume,
    onend: handleNext,
  });

  // TO MAKE SURE THAT WHENEVER ANOTHER MUSIC CLICKS PREVIOUS WILL BE STOPPED !!!
  useEffect(() => {
    if (prevSrc !== src) {
      if (sound) {
        sound.stop();
        sound.unload();
      }
      setPrevSrc(src);
    }
  }, [src]);

  // TO PLAY AND PAUSE MUSIC WHENEVER CONDITIONS CHANGE
  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, currentTrackIndex, play, pause, sound]);

  sound?.on("end", function () {
    if (sound) {
      sound.stop();
      sound.unload();
    }
  });

  const handlePrev = () => {
    if (sound) {
      sound.stop();
      sound.unload();
    }
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + playlist?.length) % playlist?.length,
    );
    setIsPlaying(true);
  };

  function handleNext() {
    if (sound) {
      sound.stop();
      sound.unload();
    }
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist?.length);
    setIsPlaying(true);
  }

  // TO UPDATE THE SEEK TIME ON EVERY SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeekTime(sound.seek());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  const handleSeekChange = (e) => {
    const newSeekTime = parseFloat(e.target.value);
    setSeekTime(newSeekTime);
    if (sound) {
      sound.seek(newSeekTime);
    }
  };

  // TO MAKE SURE WHEN THE COMPOUND UNMOUNTED(NAVIGATES TO THE ANOTHER PAGE) THE SOUND WILL BE STOPPED
  useEffect(() => {
    return () => {
      if (sound) {
        sound.stop();
        sound.unload();
      }
    };
  }, [sound]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-10 flex justify-between bg-black p-4`}
    >
      <div className="flex gap-4">
        <Image
          src={image}
          alt={title}
          width={110}
          height={60}
          className="rounded-md max-sm:h-[50px] max-sm:w-[80px]"
        />
        <div className="flex flex-col justify-center gap-0.5">
          <h5 className="text-sm font-semibold">{title}</h5>
          <p className="text-[12px] font-medium text-[#8c8c8c]">{artist}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center justify-center gap-3 sm:gap-6 sm:text-xl">
          <button type="button" onClick={handlePrev}>
            <FaBackwardStep />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-black"
            onClick={() => handlePlayPause(currentTrackIndex)}
          >
            {!isPlaying ? (
              <FaPlay className="translate-x-[5%]" />
            ) : (
              <GiPauseButton />
            )}
          </button>
          <button type="button" onClick={handleNext}>
            <FaForwardStep />
          </button>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <span>{formatTime(seekTime)}</span>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            step="1"
            value={seekTime}
            onChange={handleSeekChange}
          />
          <span>{formatTime(duration / 1000)}</span>
        </div>
      </div>
      <div className="hidden md:block">
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
