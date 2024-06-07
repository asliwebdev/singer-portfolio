"use client";

import Link from "next/link";
import { fjalla } from "../lib/fonts";
import { useFetchMusics } from "../hooks/useFetchMusics";
import Loading from "./Loading";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { MdForward } from "react-icons/md";
import LatestTracksPlayer from "./LatestTracksPlayer";
import { useState } from "react";

const LatestTracks = () => {
  const { musics, loading } = useFetchMusics();
  const latestTracks = musics?.slice(0, 3)?.map((music) => {
    const { artist, title, image, src, id } = music;
    return { title, artist, src, image, id };
  });

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  return (
    <div className="px-4 py-8 lg:px-36 lg:py-12">
      <div className="flex items-center justify-center sm:justify-between">
        <h2
          className={`text-center text-5xl text-brown lg:text-6xl ${fjalla.className}`}
        >
          Latest Tracks
        </h2>
        <Link
          className="hover:shadow-2 hidden rounded-lg border border-brown bg-transparent px-6 py-3 text-center text-brown shadow-none transition-all duration-300 hover:bg-brown hover:text-black sm:block"
          href="/music"
        >
          View All Tracks
        </Link>
      </div>
      {loading ? (
        <Loading height="h-[400px]" />
      ) : (
        <>
          <div className="mt-20 grid grid-cols-auto-fill-minmax justify-center gap-[2rem_2rem] lg:gap-x-[3rem] xl:gap-x-16">
            {latestTracks.map((track, index) => {
              const { title, artist, id, image } = track;
              return (
                <div
                  key={id}
                  className="group rounded-md bg-transparent p-2 transition-all duration-200 hover:bg-[#242424]"
                  onClick={() => setCurrentTrackIndex(index)}
                >
                  <div className="relative">
                    <Image
                      src={image}
                      alt="music poster image"
                      width={330}
                      height={300}
                      className="rounded-md"
                    />
                    <div className="absolute bottom-0 right-2 z-[1] flex h-12 w-12 shrink-0 items-center justify-center self-end transition-all duration-300 group-hover:bottom-2">
                      <button
                        type="button"
                        className="flex h-full w-full items-center justify-center rounded-full bg-brown text-lg text-black opacity-0 transition-all duration-300 hover:scale-110 group-hover:opacity-100"
                      >
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                  <div className="pt-2">
                    <h6>{title}</h6>
                    <p className="font-medium text-[#8c8c8c]">{artist}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <LatestTracksPlayer
            playlist={latestTracks}
            currentTrackIndex={currentTrackIndex}
            setCurrentTrackIndex={setCurrentTrackIndex}
          />
        </>
      )}
      <Link
        className="hover:shadow-2 mt-6 flex w-full justify-center gap-2 rounded-lg border border-brown bg-transparent px-6 py-3 text-center text-brown shadow-none transition-all duration-300 hover:bg-brown hover:text-black sm:hidden"
        href="/music"
      >
        View All Tracks
        <MdForward className="text-2xl" />
      </Link>
    </div>
  );
};

export default LatestTracks;
