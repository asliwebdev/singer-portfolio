import { fjalla } from "../lib/fonts";

const Music = () => {
  return (
    <div className="px-4 lg:px-16 py-6 lg:py-12">
      <h2
        className={`${fjalla.className} text-center text-brown font-bold text-4xl sm:text-clampH2 leading-[43.2px] lg:leading-[57.6px]`}
      >
        Music
      </h2>
      <iframe
        src="https://open.spotify.com/embed/artist/7uqisBAuFsJFShQECrcQDX?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="mt-8"
      ></iframe>
    </div>
  );
};

export default Music;
