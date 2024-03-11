import Link from "next/link";
import { fjalla } from "../lib/fonts";

const LatestTracks = () => {
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
      <div className="mt-20 flex justify-between">
        <audio controls src="/Maftunam.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
};

export default LatestTracks;
