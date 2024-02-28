import Image from "next/image";
import { socialLinks } from "../lib";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-60px)]">
      <div className="min-h-[calc(100vh-60px)] flex flex-col-reverse lg:flex-row justify-between px-4 lg:pl-16 lg:pr-0">
        <div className="flex justify-end flex-col p-6">
          <h1 className="text-clampH1 text-brown">Asadbek Odilov</h1>
          <p className="mt-3 text-white sm:text-lg md:text-xl lg:text-3xl max-w-3xl">
            a professional singer captivating hearts throughout whole Uzbekistan
          </p>
          <div className="mt-12 mb-32 flex flex-col-reverse lg:flex-row gap-8">
            <ul className="flex items-center justify-center gap-8">
              {socialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-brown text-3xl hover:text-white transition-colors duration-300"
                      target="_blank"
                    >
                      {link.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              className="bg-brown py-3 px-6 rounded-lg text-center hover:bg-transparent hover:text-brown text-neutral-content border border-brown transition-colors duration-300"
              href="/music"
            >
              Listen to my musics
            </Link>
          </div>
        </div>
        <div className="flex items-center p-6">
          <Image
            src="/asadbek_hero.JPG"
            alt="hero image"
            width={630}
            height={600}
            priority
            className="rounded-3xl hero-shadow max-lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
