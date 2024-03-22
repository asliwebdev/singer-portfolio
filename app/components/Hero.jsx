import Image from "next/image";
import Link from "next/link";
import { fjalla } from "../lib/fonts";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-60px)]">
      <div className="min-h-[calc(100vh-60px)] flex flex-col-reverse gap-6 lg:flex-row justify-between px-4 lg:px-16">
        <div className="lg:pl-20 flex justify-end flex-col lg:p-6">
          <h1
            className={`text-clampH1 text-brown lg:text-left ${fjalla.className}`}
          >
            Asadbek Odilov
          </h1>
          <p className="mt-3 text-white sm:text-lg md:text-xl lg:text-2xl max-w-xl">
            a professional singer captivating hearts throughout whole Uzbekistan
          </p>
          <div className="mt-12 mb-32 flex flex-col-reverse lg:flex-row gap-8">
            <SocialLinks />
            <Link
              className="shadow-2 bg-brown py-3 px-6 rounded-lg text-center hover:bg-transparent hover:text-brown text-black border border-brown transition-colors duration-300"
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
            height={640}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
