import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";
import { navLinks } from "../lib";

const Footer = () => {
  return (
    <div className="px-4 lg:px-36 bg-gradient flex flex-col items-center justify-center">
      <div className="py-16 lg:py-20 flex flex-wrap flex-col-reverse lg:flex-row justify-between gap-4 gap-y-16 w-full">
        {/* CONTACT INFO */}
        <div className="flex flex-col justify-center items-center gap-8">
          <Link
            href="tel:+998 (90) 123-45-67"
            className="flex gap-x-4 items-center text-brown"
          >
            <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-brown text-black">
              <FaPhone className="text-xl" />
            </span>{" "}
            <p className="flex flex-col gap-y-2">
              <span className="text-white">Phone</span>+998 (90) 123-45-67
            </p>
          </Link>
          <Link
            href="mailto:asadbek@gmail.com"
            className="flex gap-x-4 items-center text-brown"
          >
            <span className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-brown text-black">
              <MdMail className="text-xl" />
            </span>{" "}
            <p className="flex flex-col gap-y-2">
              <span className="text-white">Email</span>asadbek@gmail.com
            </p>
          </Link>
        </div>
        {/* SOCIAL LINKS */}
        <div className="flex justify-center">
          <div className="border-l border-r border-brown px-6 sm:px-10 lg:px-16 pt-2 pb-6 text-3xl">
            <Link href="/" className="text-brown font-bold text-center">
              Asadbek Odilov
            </Link>
            <SocialLinks margin="mt-8" />
          </div>
        </div>
        {/* PAGE LINKS */}
        <div className="flex gap-12 justify-center lg:pr-20 xl:pr-40">
          <ul className="flex flex-col items-center gap-4">
            {navLinks
              .slice(0, Math.ceil(navLinks.length / 2))
              .map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-brown hover:text-white transition-colors duration-300"
                  >
                    <Link href={link.url} className="capitalize text-[16px]">
                      {link.text}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <ul className="flex flex-col items-center gap-4">
            {navLinks
              .slice(Math.ceil(navLinks.length / 2))
              .map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-brown hover:text-white transition-colors duration-300"
                  >
                    <Link href={link.url} className="capitalize text-[16px]">
                      {link.text}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="border-t border-brown flex items-center justify-center w-full py-10">
        <p className="text-center">
          © {new Date().getFullYear()}{" "}
          <span className="text-brown text-lg mr-2">Asadbek Odilov.</span>Barcha huquqlar
          himoyalangan!
        </p>
      </div>
    </div>
  );
};

export default Footer;
