import Image from "next/image";
import Link from "next/link";
import { fjalla } from "../lib/fonts";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-60px)]">
      <div className="flex min-h-[calc(100vh-60px)] flex-col-reverse gap-6 px-4 lg:flex-row lg:justify-between lg:px-16">
        <div className="flex flex-col justify-start lg:justify-end lg:p-6 lg:pl-20">
          <h1
            className={`text-clampH1 text-brown lg:text-left ${fjalla.className}`}
          >
            Asadbek Odilov
          </h1>
          <p className="mt-3 max-w-xl text-white sm:text-lg md:text-xl lg:text-2xl">
            a professional singer captivating hearts throughout whole Uzbekistan
          </p>
          <div className="my-12 flex flex-col-reverse gap-8 lg:mb-32 lg:flex-row">
            <SocialLinks />
            <Link
              className="shadow-2 rounded-lg border border-brown bg-brown px-6 py-3 text-center text-black transition-colors duration-300 hover:bg-transparent hover:text-brown"
              href="/music"
            >
              Listen to my musics
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-start lg:p-6 lg:pb-0">
          <Image
            src="/asadbek.png"
            alt="hero image"
            width={650}
            height={650}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
