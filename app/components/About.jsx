import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <div className="px-4 lg:px-36 py-8 lg:py-12 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <Image
          src="/home_about.JPG"
          width={500}
          height={400}
          alt="about image"
          className="hero-shadow rounded-lg hover:dark-shadow transition-all duration-300 hover:scale-[1.03]"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-brown text-5xl">About me</h2>
          <p className="mt-10 max-w-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
            tempora consectetur commodi ut eveniet, pariatur ab laborum
            quibusdam iure asperiores id, ratione illo unde. Officia quod
            nostrum alias atque, in officiis voluptates ut iure veniam,
            molestias et debitis labore mollitia!
          </p>
          <div className="flex items-center justify-start gap-2 mt-10 lg:mt-20 flex-shrink-0">
            <Link
              href="/about"
              className="border-b border-brown text-brown border-opacity-60 py-3 font-bold text-lg flex items-center gap-2 hover:border-opacity-100 transition-all duration-300 group"
            >
              Read More{" "}
              <GoArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
