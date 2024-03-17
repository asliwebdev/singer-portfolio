"use client";

import { videos } from "../lib";
import Image from "next/image";
import { fjalla } from "../lib/fonts";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Videos = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeIndex = Number(searchParams.get("index")?.toString()) || 1;
  const autoplay = Number(Boolean(searchParams.get("autoplay")));
  const activeVideo = videos.find((video) => video.index === activeIndex);

  const handleClick = (index) => {
    const params = new URLSearchParams(searchParams);
    params.set("index", index);
    params.set("autoplay", true);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="px-4 lg:px-16 py-6 lg:py-12">
      <h2
        className={`${fjalla.className} text-center text-brown font-bold text-4xl sm:text-clampH2 leading-[43.2px] lg:leading-[57.6px]`}
      >
        Videos
      </h2>
      <div className="mt-8 lg:mt-20 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <iframe
            src={activeVideo.src}
            className="rounded-xl w-full"
            height={600}
            autoPlay={autoplay}
            allowFullScreen
          />
          <p className="mt-3 text-2xl font-bold">{activeVideo.title}</p>
        </div>
        <div className="lg:col-span-4 border border-[#484a48] rounded-xl">
          <div className="bg-gradient h-[100px] py-7 rounded-t-xl">
            <h6
              className={`text-brown text-center text-4xl ${fjalla.className}`}
            >
              Asadbek Odilov
            </h6>
          </div>
          <div className="h-[540px] overflow-y-scroll w-[calc(100%-1px)]">
            {videos.map((video) => {
              const { title, channel, index, thumbnail } = video;
              return (
                <div
                  key={index}
                  className={`${
                    index === activeIndex && "bg-gradient"
                  } flex items-center gap-2 cursor-pointer ${
                    index !== videos.length && "mb-4"
                  } pl-5 hover:bg-gradient transition-colors duration-300`}
                  onClick={() => handleClick(index)}
                >
                  <Image
                    src={thumbnail}
                    alt="video poster image"
                    width={140}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col gap-1">
                    <p>{title}</p>
                    <span className="text-[13px] text-gray-400">{channel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
