import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative mt-20 max-w-7xl mx-auto h-[500px]">
      <Image
        src="/asadbek_hero.JPG"
        alt="hero image"
        className="w-full rounded-3xl"
        fill
        priority
        style={{
          objectFit: "cover", // cover, contain, none
        }}
      />
    </div>
  );
};

export default Hero;
