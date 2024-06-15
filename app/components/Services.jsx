import Image from "next/image";
import video_img from "../../public/video_img.JPG";
import service_1 from "../../public/service-1.png";
import service_2 from "../../public/service-2.png";
import { fjalla } from "../lib/fonts";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  return (
    <div className="bg-gradient flex flex-col py-6 lg:flex-row lg:bg-black lg:py-12">
      <div className="relative h-[640px] flex-1">
        <Image
          src={video_img}
          alt="services image"
          className="h-full w-full"
          priority
        />
        <Link
          href="/service"
          className="play-btn absolute left-[50%] top-[50%] flex h-16 w-16 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full bg-brown text-2xl text-black"
        >
          <FaPlay />
        </Link>
      </div>
      <div className="bg-gradient flex-1 pt-6">
        <h2
          className={`text-center text-4xl text-brown lg:text-5xl ${fjalla.className}`}
        >
          Where do I sing!
        </h2>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="w-[90%] rounded-lg bg-black pb-6 pl-8 pr-6 pt-8 lg:pb-[30px] lg:pl-[50px] lg:pr-[30px] lg:pt-[50px]">
            <Image
              src={service_1}
              alt="first service img"
              className="h-12 w-12 lg:h-[60px] lg:w-[60px]"
            />
            <h4 className="mb-[10px] mt-[25px] text-[26px] font-bold">
              Wedding
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="w-[90%] rounded-lg bg-black pb-6 pl-8 pr-6 pt-8 lg:pb-[30px] lg:pl-[50px] lg:pr-[30px] lg:pt-[50px]">
            <Image
              src={service_2}
              alt="second service img"
              className="h-12 w-12 lg:h-[60px] lg:w-[60px]"
            />
            <h4 className="mb-[10px] mt-[25px] text-[26px] font-bold">
              Corporate Events
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
