import Image from "next/image";
import video_img from "../../public/video_img.JPG";
import { damion } from "../lib/fonts";
import { FaPlay } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-6 lg:py-12 flex flex-col lg:flex-row">
      <div className="flex-1 relative h-[640px]">
        <Image src={video_img} alt="services image" className="w-full h-full" />
        <button
          type="button"
          className="play-btn absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-brown rounded-full w-16 h-16 flex items-center justify-center text-2xl text-black"
        >
          <FaPlay />
        </button>
      </div>
      <div className="flex-1 bg-gradient py-10 translate-x-">
        <h2 className={`text-brown text-center text-6xl ${damion.className}`}>
          What I do
        </h2>
        <div className="mt-6 flex gap-4">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
