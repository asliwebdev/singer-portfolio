import { fetchGraphQL } from "../lib/data";
import { fjalla } from "../lib/fonts";
import VideosList from "./VideosList";

const videosList = await fetchGraphQL(
  "query {asadbeksVideosCollection {items {title,src,channel, thumbnail, index}}}"
);

const Videos = ({ searchParams }) => {
  const activeIndex = Number(searchParams.index?.toString()) || 1;
  const autoplay = Number(Boolean(searchParams.autoplay));
  const activeVideo = videosList?.find((video) => video.index === activeIndex);

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
          <VideosList activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
};

export default Videos;
