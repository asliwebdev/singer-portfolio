import {
  About,
  Hero,
  LatestTracks,
  Services,
  VideosSlider,
} from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideosSlider />
      <About />
      <Services />
      <LatestTracks />
    </div>
  );
}
