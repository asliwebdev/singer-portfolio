"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { fetchGraphQL } from "../lib/data";
import { useEffect, useState } from "react";
import { Loading } from "../components";

const VideosList = ({ activeIndex }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetchGraphQL(
        "query {asadbeksVideosCollection {items {title,src,channel, thumbnail, index}}}"
      );
      setIsLoading(false);
      setVideos(response.reverse());
    };

    fetchData();
  }, []);

  const handleClick = (index) => {
    const params = new URLSearchParams(searchParams);
    params.set("index", index);
    params.set("autoplay", true);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="h-[540px] overflow-y-scroll w-[calc(100%-1px)]">
      {isLoading ? (
        <Loading />
      ) : (
        videos?.map((video) => {
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
        })
      )}
    </div>
  );
};

export default VideosList;
