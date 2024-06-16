"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { fjalla } from "../lib/fonts";
import { useFetchFeaturedVideos } from "../hooks/useFetchFeatured";
import Loading from "./Loading";

const VideosSlider = () => {
  const { loading, featuredVideos } = useFetchFeaturedVideos();

  const handleClick = (index) => {
    const player = document.getElementById(`iframe${index}`);
    const temp = player.src;
    player.src = temp;
  };
  return (
    <div className="bg-gradient px-4 py-6 lg:px-36 lg:py-12">
      <h2
        className={`text-center text-4xl text-brown lg:text-5xl ${fjalla.className}`}
      >
        Featured Videos
      </h2>
      {loading ? (
        <Loading height="h-[400px]" />
      ) : (
        <div className="carousel mt-6 w-full lg:mt-12">
          {featuredVideos.map((video, index) => {
            const { id, iframeUrl } = video;
            let nextIndex, prevIndex;
            if (index === 0) {
              nextIndex = 1;
              prevIndex = 2;
            } else if (index === 1) {
              nextIndex = 2;
              prevIndex = 0;
            } else {
              nextIndex = 0;
              prevIndex = 1;
            }
            return (
              <div
                key={id}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <iframe
                  id={`iframe${index}`}
                  src={iframeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="m-[0_auto] w-full lg:w-[70%]"
                  height={400}
                ></iframe>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between lg:px-20">
                  <Link
                    href={`#slide${prevIndex}`}
                    className="btn btn-circle border-brown text-brown transition-colors duration-300 hover:bg-brown hover:text-black"
                    onClick={() => handleClick(index)}
                  >
                    ❮
                  </Link>
                  <Link
                    href={`#slide${nextIndex}`}
                    className="btn btn-circle border-brown text-brown transition-colors duration-300 hover:bg-brown hover:text-black"
                    onClick={() => handleClick(index)}
                  >
                    ❯
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 flex w-full justify-end">
        <Link
          className="shadow-2 flex items-center justify-center gap-2 rounded-lg border border-brown bg-brown px-6 py-3 text-center text-black transition-colors duration-300 hover:bg-transparent hover:text-brown max-md:w-full"
          href="/videos"
        >
          watch more <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default VideosSlider;
