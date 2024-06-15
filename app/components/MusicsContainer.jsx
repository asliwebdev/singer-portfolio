"use client";

import Image from "next/image";
import { FaSpotify, FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import Link from "next/link";
import AudioProgress from "./AudioProgress";
import { useFetchMusics } from "../hooks/useFetchMusics";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const MusicsContainer = () => {
  const { musics, loading } = useFetchMusics();
  const [activeMusic, setActiveMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const togglePlayPause = () => {
    if (!activeMusic && musics.length > 0) {
      const firstMusic = musics[0].src;
      setActiveMusic(firstMusic);
      setIsPlaying(true);
      setAudio(new Audio(firstMusic));
    } else if (activeMusic && audio) {
      setIsPlaying((prevState) => !prevState);
    }
  };

  const toggleActiveMusic = (src) => {
    if (activeMusic === src) {
      if (isPlaying) {
        setIsPlaying(false);
        audio.pause();
      } else {
        setIsPlaying(true);
        audio.play();
      }
    } else {
      setActiveMusic(src);
      setIsPlaying(true);
      audio?.pause();
      setAudio(new Audio(src));
    }
  };

  // TO PLAY AND PAUSE THE MUSIC BASED ON THE STATE CONDITIONS
  useEffect(() => {
    if (activeMusic && audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [activeMusic, isPlaying]);

  // TO MAKE SURE THAT AFTER THE ENDING OF THE MUSIC NEXT WILL BE PLAYED
  // AND WHENEVER COMPONENT UNMOUNTS(NAVIGATES TO ANOTHER PAGE) AUDIO WILL BE STOPPED
  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", playNextTrack);
      return () => {
        audio.removeEventListener("ended", playNextTrack);
        if (audio || isPlaying) {
          audio.pause();
          audio.currentTime = 0; // Reset playback position
          audio.src = ""; // Remove the audio source
          audio.load(); // Reload the audio element
        }
      };
    }
  }, [audio]);

  const playPreviousTrack = () => {
    const currentIndex = musics.findIndex((music) => music.src === activeMusic);
    setIsPlaying(false);
    audio?.pause();
    const previousMusic =
      musics[(currentIndex - 1 + musics?.length) % musics?.length];
    setActiveMusic(previousMusic.src);
    setIsPlaying(true);
    setAudio(new Audio(previousMusic.src));
  };

  const playNextTrack = () => {
    const currentIndex = musics.findIndex((music) => music.src === activeMusic);
    setIsPlaying(false);
    audio?.pause();
    const nextMusic = musics[(currentIndex + 1) % musics?.length];
    setActiveMusic(nextMusic.src);
    setIsPlaying(true);
    setAudio(new Audio(nextMusic.src));
  };

  return (
    <>
      {/* HEADER */}
      <Header
        isPlaying={isPlaying}
        audio={audio}
        togglePlayPause={togglePlayPause}
        playNextTrack={playNextTrack}
        playPreviousTrack={playPreviousTrack}
      />
      {/* MUSIC */}
      {loading ? (
        <div className="relative h-[200px] rounded-b-xl bg-[#242424]">
          <Loading />
        </div>
      ) : (
        <div className="h-full rounded-b-xl bg-[#242424]">
          <div className="scrollbar-color me-2 h-full overflow-y-auto p-2 ps-2">
            <ol className="me-2 ms-0 pe-0 ps-0">
              {musics.map((music, index) => (
                <MusicItem
                  key={music.id}
                  music={music}
                  isPlaying={isPlaying}
                  index={index}
                  activeMusic={activeMusic}
                  toggleActiveMusic={toggleActiveMusic}
                />
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicsContainer;

function MusicItem({
  activeMusic,
  index,
  toggleActiveMusic,
  isPlaying,
  music,
}) {
  const { artist, duration, title, src } = music;

  const handleDownload = async () => {
    const proxyUrl = `/api/download?url=${encodeURIComponent(src)}`;

    try {
      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${title}.mp3`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <li
      className={`group grid grid-cols-[auto,1fr,auto,auto] rounded py-2 hover:bg-[#1d1d1d] ${
        activeMusic === src && "bg-[#1d1d1d]"
      }`}
    >
      <div className="flex w-8 items-center justify-center">
        <span
          className={`${activeMusic === src && "hidden"} group-hover:hidden`}
        >
          {index + 1}
        </span>
        <button
          type="button"
          className={`${
            activeMusic !== src && "hidden"
          } opacity-60 group-hover:block`}
          onClick={() => toggleActiveMusic(src)}
        >
          {activeMusic === src && isPlaying ? (
            <FaPause className="text-xl text-brown" />
          ) : (
            <FaPlay />
          )}
        </button>
      </div>
      <div>
        <h3
          className={`text-[14px] font-medium ${
            activeMusic === src && "text-brown"
          }`}
        >
          {title}
        </h3>
        <h4 className="text-[11px] opacity-60">{artist}</h4>
      </div>
      <div className="flex w-14 items-center justify-center">
        <span className="text-[14px] opacity-60">{duration}</span>
      </div>
      <div className="flex w-14 items-center justify-center">
        <button type="button" onClick={() => handleDownload(src)}>
          <LuDownload />
        </button>
      </div>
    </li>
  );
}

function Header({
  isPlaying,
  audio,
  togglePlayPause,
  playPreviousTrack,
  playNextTrack,
}) {
  return (
    <div className="relative mt-8 flex min-h-[200px] gap-3 rounded-t-xl bg-[#282828] p-4 max-sm:min-h-[220px] lg:gap-6 lg:p-6">
      <Image
        src="https://i.scdn.co/image/ab67616d00001e0251175b0dbe8af583e94137fe"
        alt="poster image"
        width={152}
        height={152}
        priority
        className="image-transition img-shadow rounded-xl max-sm:h-[112px] max-sm:w-[112px]"
      />
      <div className="flex w-full flex-col">
        <div className="flex justify-end max-sm:mb-1">
          <Link
            href="https://open.spotify.com/artist/7uqisBAuFsJFShQECrcQDX"
            target="_blank"
            className="text-2xl"
          >
            <FaSpotify />
          </Link>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Asadbek Odilov
          </h2>
          <span className="text-[0.875rem] font-medium text-[#b1b1b1] lg:text-base">
            Top Tracks
          </span>
          <div className="pt-2">
            <Link
              href="https://www.instagram.com/asadbekodilov1"
              target="_blank"
              className="rounded-[4px] border border-[hsl(0,0%,33%)] py-1 pe-4 ps-4 text-[0.8125rem] font-bold transition-all duration-300 hover:text-[0.9rem]"
            >
              Follow
            </Link>
          </div>
        </div>
        <div className="max-sm:absolute max-sm:bottom-6 max-sm:left-0 max-sm:w-full max-sm:px-4">
          <AudioProgress
            isPlaying={isPlaying}
            audio={audio}
            togglePlayPause={togglePlayPause}
            playPreviousTrack={playPreviousTrack}
            playNextTrack={playNextTrack}
          />
        </div>
      </div>
    </div>
  );
}
