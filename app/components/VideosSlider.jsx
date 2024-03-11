"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { fjalla } from "../lib/fonts";

const iframes = [
  "https://www.youtube.com/embed/9VlRFwMDbac?si=8c9Q0j2jGVcuJGag",
  "https://www.youtube.com/embed/uNn_pXTpUck?si=hPjJva51x5-Qk4EY",
  "https://www.youtube.com/embed/G8bZ4V52GB0?si=0FCduA1IzTEvsqyN",
];

const VideosSlider = () => {
  const handleClick = (index) => {
    const player = document.getElementById(`iframe${index}`);
    const temp = player.src;
    player.src = temp;
  };
  return (
    <div className="bg-gradient px-4 lg:px-36 py-6 lg:py-12">
      <h2 className={`text-brown text-5xl text-center ${fjalla.className}`}>
        Featured Videos
      </h2>
      <div className="mt-6 lg:mt-20 carousel w-full">
        {iframes.map((iframe, index) => {
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
              key={index}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              <iframe
                id={`iframe${index}`}
                src={iframe}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full lg:w-[70%] m-[0_auto]"
                height={400}
              ></iframe>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 lg:px-20">
                <Link
                  href={`#slide${prevIndex}`}
                  className="btn btn-circle border-brown text-brown hover:bg-brown hover:text-black transition-colors duration-300"
                  onClick={() => handleClick(index)}
                >
                  ❮
                </Link>
                <Link
                  href={`#slide${nextIndex}`}
                  className="btn btn-circle border-brown text-brown hover:bg-brown hover:text-black transition-colors duration-300"
                  onClick={() => handleClick(index)}
                >
                  ❯
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 w-full flex justify-end">
        <Link
          className="shadow-2 flex gap-2 items-center bg-brown py-3 px-6 rounded-lg text-center hover:bg-transparent hover:text-brown text-black border border-brown transition-colors duration-300"
          href="/videos"
        >
          watch more <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default VideosSlider;
