import { Element } from "react-scroll";
import Navber from "../Navber/Navber";
import Banner from "../Banner/Banner";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Education from "../Education/Education";

const HomePage = () => {
  return (
    <div>
      <Navber />
      <Element name="/" className="element">
        <Banner />
      </Element>
      <Element name="education" className="element">
        <Education />
      </Element>
      <Element name="gallery" className="element">
        <PhotoGallery />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer/>
    </div>
  );
};

export default HomePage;
