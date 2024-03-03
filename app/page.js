import { About, Hero, Services, VideosSlider } from "./components";

export default function Home() {
  return (
    <div>
      <Hero />
      <VideosSlider />
      <About />
      <Services />
    </div>
  );
}
