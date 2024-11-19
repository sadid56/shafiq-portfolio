import { Element } from "react-scroll";
import Navber from "../../shared/Navber/Navber";
import Banner from "../../pages/Banner/Banner";
import Contact from "../../pages/Contact/Contact";
import Footer from "../../shared/Footer/Footer";
import Education from "../../pages/Education/Education";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import AboutMe from "../About/About";

const HomePage = () => {
  return (
    <div className="bg-black/[0.96]">
      <Navber />
      <Element name="/" className="element">
        <Banner />
      </Element>
      <Element name="about" className="element">
        <AboutMe/>
      </Element>
      <Element name="education" className="element">
        <Education />
      </Element>
      {/* <Element name="gallery" className="element">
        <PhotoGallery />
      </Element> */}
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer/>
    </div>
  );
};

export default HomePage;
