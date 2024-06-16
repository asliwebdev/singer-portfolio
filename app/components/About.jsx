import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { fjalla } from "../lib/fonts";

const About = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 lg:px-36 lg:py-12">
      <div className="flex flex-col items-center gap-x-16 gap-y-8 lg:flex-row">
        <Image
          src="/home_about.JPG"
          width={500}
          height={400}
          alt="about image"
          className="hero-shadow hover:dark-shadow rounded-lg transition-all duration-300 hover:scale-[1.03]"
        />
        <div className="flex flex-col gap-4">
          <h2
            className={`text-4xl text-brown lg:text-5xl ${fjalla.className} max-lg:text-center`}
          >
            About me
          </h2>
          <p className="mt-2 max-w-lg lg:mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            tempora consectetur commodi ut eveniet, pariatur ab laborum
            quibusdam iure asperiores id, ratione illo unde. Officia quod
            nostrum alias atque, in officiis voluptates ut iure veniam,
            molestias et debitis labore mollitia!
          </p>
          <div className="mt-6 flex flex-shrink-0 items-center justify-start gap-2 lg:mt-20">
            <Link
              href="/about"
              className="group flex items-center gap-2 border-b border-brown border-opacity-60 py-3 text-lg font-bold text-brown transition-all duration-300 hover:border-opacity-100"
            >
              Read More{" "}
              <GoArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
