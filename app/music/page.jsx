import MusicsContainer from "../components/MusicsContainer";
import { fjalla } from "../lib/fonts";

const Music = () => {
  return (
    <div className="px-4 lg:px-16 py-6 lg:py-12">
      <h2
        className={`${fjalla.className} text-center text-brown font-bold text-4xl sm:text-clampH2 leading-[43.2px] lg:leading-[57.6px]`}
      >
        Music
      </h2>
      <MusicsContainer />
    </div>
  );
};

export default Music;
