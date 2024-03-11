/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animatio from "../../Assets/animation/shap.json";
import img from "../../Assets/images/bannerPhoto.jpg";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { IoShareSocial } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
const Banner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        // Handle autoplay error, if any
        console.error('Autoplay error:', error);
      });
    }
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
      <header className="flex flex-col-reverse md:flex-row items-center h-[95vh] max-w-6xl mx-auto justify-center">
      <video ref={videoRef} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://firebasestorage.googleapis.com/v0/b/drivepulse-6194b.appspot.com/o/TQkWFLawI6MVaSxgJJDX3OvE3102%2Fsamiya.mp4?alt=media&token=ec1f7a21-8a46-4ad7-8091-d92d1cc0f32d" type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
        </video>
        <div className="space-y-5">
          <h3 style={{fontFamily:"cursive"}}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-4xl font-semibold text-center text-white">
            I'am <span className="text-primary">Shafiq,</span>
          </h3>
          <h1
            data-aos="fade-right"
            data-aos-duration="2000"
            className=" text-3xl md:text-6xl font-bold text-white text-center">
       
            <Typewriter
              words={["Bangladesh Army.", "Designation: NCO", "Core of Enginears."]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              cursorColor="#e00549"
              typeSpeed={200}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </h1>

          
        </div>
       
      </header>
  );
};

export default Banner;
