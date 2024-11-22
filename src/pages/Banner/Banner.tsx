import "aos/dist/aos.css";
import { Spotlight } from "@/components/ui/SpotLigth";
import { FlipWords } from "@/components/ui/FlipWords";
import BannerGlob from "./BannerGlob";
const Banner = () => {
  // const videoRef = useRef(null);
  // --
  const words = ["Bangladesh Army.", "Designation: NCO", "Core of Enginears."];

  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.play().catch(error => {
  //       // Handle autoplay error, if any
  //       console.error('Autoplay error:', error);
  //     });
  //   }
  // }, []);
  return (
    <header className="h-screen  w-full  pt-40 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-xl">Hello There,</span> <br /> I&lsquo;am Shafiq <FlipWords words={words} />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
        Disciplined and courageous, embodying leadership, resilience, and loyalty. Committed to serving the nation with honor, maintaining physical and mental strength, and upholding the core values of dedication, teamwork, and integrity.
        </p>
      </div>

      <BannerGlob/>

    </header>
  );
};

export default Banner;
