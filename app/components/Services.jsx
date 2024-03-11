import Image from "next/image";
import video_img from "../../public/video_img.JPG";
import service_1 from "../../public/service-1.png";
import service_2 from "../../public/service-2.png";
import { fjalla } from "../lib/fonts";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  return (
    <div className="py-6 lg:py-12 flex flex-col lg:flex-row">
      <div className="flex-1 relative h-[640px]">
        <Image
          src={video_img}
          alt="services image"
          className="w-full h-full"
          priority
        />
        <Link
          href="/service"
          className="play-btn absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-brown rounded-full w-16 h-16 flex items-center justify-center text-2xl text-black"
        >
          <FaPlay />
        </Link>
      </div>
      <div className="flex-1 bg-gradient pt-6">
        <h2 className={`text-brown text-center text-6xl ${fjalla.className}`}>
          Where do I sing!
        </h2>
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="bg-black pt-[50px] pr-[30px] pb-[30px] pl-[50px] w-[90%]">
            <Image src={service_1} alt="first service img" />
            <h4 className="font-bold text-[26px] mt-[25px] mb-[10px]">
              Wedding
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="bg-black pt-[50px] pr-[30px] pb-[30px] pl-[50px] w-[90%]">
            <Image src={service_2} alt="second service img" />
            <h4 className="font-bold text-[26px] mt-[25px] mb-[10px]">
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
