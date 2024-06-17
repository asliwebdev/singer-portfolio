import MusicsContainer from "../components/MusicsContainer";
import { fjalla } from "../lib/fonts";

export const metadata = {
  title: "Musics",
};

const Music = () => {
  return (
    <div className="min-h-[calc(100vh-473px)] px-4 py-6 lg:px-16 lg:py-12">
      <h2
        className={`${fjalla.className} text-center text-4xl font-bold leading-[43.2px] text-brown sm:text-clampH2 lg:leading-[57.6px]`}
      >
        Music
      </h2>
      <MusicsContainer />
    </div>
  );
};

export default Music;
