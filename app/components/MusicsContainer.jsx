"use client";

import Image from "next/image";
import { FaSpotify, FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
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

  useEffect(() => {
    if (activeMusic && audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [activeMusic, isPlaying]);

  useEffect(() => {
    if (audio) {
      const handleEnded = () => {
        setIsPlaying(false);
        const currentIndex = musics.findIndex(
          (music) => music.src === activeMusic
        );
        if (currentIndex < musics.length - 1) {
          const nextMusic = musics[currentIndex + 1];
          setActiveMusic(nextMusic.src);
          setIsPlaying(true);
          setAudio(new Audio(nextMusic.src));
        } else {
          setActiveMusic(musics[0].src);
          setIsPlaying(true);
          setAudio(new Audio(musics[0].src));
        }
      };

      audio.addEventListener("ended", handleEnded);
      return () => {
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [audio]);

  const playPreviousTrack = () => {
    const currentIndex = musics.findIndex((music) => music.src === activeMusic);
    setIsPlaying(false);
    audio?.pause();
    if (currentIndex > 0) {
      const previousMusic = musics[currentIndex - 1];
      setActiveMusic(previousMusic.src);
      setIsPlaying(true);
      setAudio(new Audio(previousMusic.src));
    } else {
      const previousMusic = musics[musics.length - 1];
      setActiveMusic(previousMusic.src);
      setIsPlaying(true);
      setAudio(new Audio(previousMusic.src));
    }
  };

  const playNextTrack = () => {
    const currentIndex = musics.findIndex((music) => music.src === activeMusic);
    setIsPlaying(false);
    audio?.pause();
    if (currentIndex < musics.length - 1) {
      const nextMusic = musics[currentIndex + 1];
      setActiveMusic(nextMusic.src);
      setIsPlaying(true);
      setAudio(new Audio(nextMusic.src));
    } else {
      const nextMusic = musics[0];
      setActiveMusic(nextMusic.src);
      setIsPlaying(true);
      setAudio(new Audio(nextMusic.src));
    }
  };

  return (
    <>
      {/* HEADER */}
      <div className="mt-8 bg-[#282828] p-6 rounded-t-xl flex gap-3 lg:gap-6 relative">
        <Image
          src="https://i.scdn.co/image/ab67616d00001e0251175b0dbe8af583e94137fe"
          alt="poster image"
          width={152}
          height={152}
          priority
          className="rounded-xl"
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-end">
            <Link
              href="https://open.spotify.com/artist/7uqisBAuFsJFShQECrcQDX"
              target="_blank"
              className="text-2xl"
            >
              <FaSpotify />
            </Link>
          </div>
          <div className="flex flex-col gap-y-0.5">
            <h2 className="text-white text-2xl font-bold">Asadbek Odilov</h2>
            <span className="text-[#b1b1b1] font-medium text-base">
              Top Tracks
            </span>
          </div>
          <div>
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
      {loading ? (
        <div className="bg-[#242424] h-[200px] rounded-b-xl relative">
          <Loading />
        </div>
      ) : (
        <div className="bg-[#242424] h-full rounded-b-xl">
          <div className="p-2 h-full overflow-y-auto scrollbar-color ps-2 me-2">
            <ol className="ms-0 me-2 ps-0 pe-0">
              {musics.map((music, index) => {
                const { artist, duration, title, src, id } = music;
                return (
                  <li
                    key={id}
                    className={`grid grid-cols-[auto,1fr,auto] py-2 hover:bg-[#1d1d1d] rounded group ${
                      activeMusic === src && "bg-[#1d1d1d]"
                    }`}
                  >
                    <div className="flex items-center justify-center w-8">
                      <span
                        className={`${
                          activeMusic === src && "hidden"
                        } group-hover:hidden`}
                      >
                        {index + 1}
                      </span>
                      <button
                        type="button"
                        className={`${
                          activeMusic !== src && "hidden"
                        } group-hover:block opacity-60`}
                        onClick={() => toggleActiveMusic(src)}
                      >
                        {activeMusic === src && isPlaying ? (
                          <FaPause className="text-brown text-xl" />
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
                    <div className="flex items-center justify-center w-14">
                      <span className="text-[14px] opacity-60">{duration}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicsContainer;
