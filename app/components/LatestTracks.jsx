"use client";

import Link from "next/link";
import { fjalla } from "../lib/fonts";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { useFetchMusics } from "../hooks/useFetchMusics";
import Loading from "../loading";

const colors = {
  playerBackground: "#242424",
  progressSlider: "#f3c23c",
  progressUsed: "#ffffff",
  progressLeft: "#696969",
  bufferLoaded: "#595959",
  volumeSlider: "#f3c23c",
  playlistBackground: "#242424",
  playlistText: "#ffffff",
  playlistTextHoverActive: "#f3c23c",
};

const LatestTracks = () => {
  const { musics, loading } = useFetchMusics();
  const tracks = musics?.slice(0, 3)?.map((music, index) => {
    return { url: music?.src, title: music?.title, tags: [index + 1] };
  });

  return (
    <div className="px-4 lg:px-36 py-8 lg:py-12">
      <div className="flex justify-between items-center">
        <h2 className={`text-brown text-center text-6xl ${fjalla.className}`}>
          Latest Tracks
        </h2>
        <Link
          className="shadow-none hover:shadow-2 bg-transparent hover:bg-brown py-3 px-6 rounded-lg text-center text-brown hover:text-black border border-brown transition-all duration-300"
          href="/music"
        >
          View All Tracks
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="mt-20 flex justify-center">
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={true}
            sortTracks={false}
            autoPlayNextTrack={true}
            customColorScheme={colors}
          />
        </div>
      )}
    </div>
  );
};

export default LatestTracks;
