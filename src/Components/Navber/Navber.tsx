
import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../assets/images/my-logo-removebg-preview.png";
import { Link as ScrollLink } from "react-scroll";
import "./Navber.css";

//style={{backdropFilter:'blur(50px)'}}
const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [sroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <nav
      id="nav"
      style={
        sroll
          ? { backdropFilter: "blur(50px)" }
          : { backgroundColor: "transparent" }
      }
      className={` w-full fixed top-0 z-50  transition-all ease-in duration-500  ${sroll ? "bg-slate-900 py-3" : "bg-white py-2"}`}>
      <div className="flex px-5 justify-between items-center   max-w-6xl mx-auto  ">
        {/* name */}
        <div className="w-[120px] uppercase">
          <h3 className="logo">S<span className={`${sroll ? "text-white" : "text-black"}`}>hafiq</span></h3>
        </div>
        {/* ul content */}
        <ul
          className={` flex uppercase  text-sm  cursor-pointer   ${
            isToggle
              ? "flex-col absolute md:block top-0 left-0 min-h-screen bg-slate-900  md:bg-transparent w-[70%] pt-14  rounded-l-sm shadow-2xl "
              : "hidden md:flex"
          } items-center gap-7 ${sroll ? "md:text-white text-white" : "md:text-black text-slate-300"}`}>
          <li>
            <ScrollLink
            onClick={()=>setIsToggle(false)}
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className={`group transition duration-300  ${
                !sroll ? "homeActive" : undefined
              }`}>
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </ScrollLink>
          </li>
         
          <li>
            <ScrollLink
            onClick={()=>setIsToggle(false)}
              to="education"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-50}
              className="group transition duration-300">
              Education
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
            onClick={()=>setIsToggle(false)}
              to="gallery"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-50}
              className="group transition duration-300">
              Gallery
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
            onClick={()=>setIsToggle(false)}
              to="contact"
              spy={true}
              activeClass="active"
              smooth={true}
              duration={500}
              offset={-50}
              className="group transition duration-300">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </ScrollLink>
          </li>
        </ul>
        <button
          className={`md:hidden text-3xl transition-all ease-in duration-300 z-50 ${sroll ? "text-white" : "text-black"}`}
          onClick={() => setIsToggle(!isToggle)}>
          {isToggle ? <IoMdClose /> : <FiAlignJustify />}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navber;