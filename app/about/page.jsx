import Image from "next/image";
import { fjalla } from "../lib/fonts";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="min-h-[calc(100vh-473px)] px-4 py-6 lg:px-16 lg:py-12">
      <h2
        className={`${fjalla.className} text-center text-4xl font-bold leading-[43.2px] text-brown sm:text-clampH2 lg:leading-[57.6px]`}
      >
        About
      </h2>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-y-6 max-md:items-center md:flex-row md:justify-between md:gap-x-12">
        <Image
          src="/home_about.JPG"
          alt="about image"
          width={400}
          height={200}
          priority
        />
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          tenetur. Ea quidem possimus nesciunt! Fugit debitis perferendis atque
          repellendus? Ex tempore quasi dolore perspiciatis deleniti sunt sed
          repudiandae hic nesciunt explicabo. Molestiae et accusantium dolorum
          obcaecati quam dolor est voluptatem aliquam, architecto necessitatibus
          molestias mollitia a laborum consequuntur odio nisi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam, tenetur. Ea quidem
          possimus nesciunt! Fugit debitis perferendis atque repellendus? Ex
          tempore quasi dolore perspiciatis deleniti sunt sed repudiandae hic
          nesciunt explicabo. Molestiae et accusantium dolorum obcaecati quam
          dolor est voluptatem aliquam, architecto necessitatibus molestias
          mollitia a laborum consequuntur odio nisi.
        </p>
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-y-6 max-md:items-center md:flex-row-reverse md:justify-between md:gap-x-12">
        <Image
          src="/home_about.JPG"
          alt="about image"
          width={400}
          height={200}
          priority
        />
        <p className="max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          tenetur. Ea quidem possimus nesciunt! Fugit debitis perferendis atque
          repellendus? Ex tempore quasi dolore perspiciatis deleniti sunt sed
          repudiandae hic nesciunt explicabo. Molestiae et accusantium dolorum
          obcaecati quam dolor est voluptatem aliquam, architecto necessitatibus
          molestias mollitia a laborum consequuntur odio nisi. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam, tenetur. Ea quidem
          possimus nesciunt! Fugit debitis perferendis atque repellendus? Ex
          tempore quasi dolore perspiciatis deleniti sunt sed repudiandae hic
          nesciunt explicabo. Molestiae et accusantium dolorum obcaecati quam
          dolor est voluptatem aliquam, architecto necessitatibus molestias
          mollitia a laborum consequuntur odio nisi.
        </p>
      </div>
    </div>
  );
};

export default About;
