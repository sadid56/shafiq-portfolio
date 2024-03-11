import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Education = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <section className="max-w-7xl md:mx-auto mx-5">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl font-semibold text-center my-10 border-b-2 border-primary w-fit mx-auto">
        Education
      </h3>
      <div className="">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li data-aos="fade-up" data-aos-duration="2000">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 border rounded-md shadow-md p-3">
              <time className="font-mono italic">1984</time>
              <div className="text-lg font-black">SSC</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal
              role in establishing desktop publishing as a general office
              function. The motherboard, a 9 in (23 cm) CRT monitor, and a
              floppy drive were housed in a beige case with integrated carrying
              handle; it came with a keyboard and single-button mouse.
            </div>
            <hr />
          </li>
          <li data-aos="fade-up" data-aos-duration="2000">
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 border rounded-md shadow-md p-3">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">HSC</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of consumer
              desktop offerings since its debut in August 1998, and has evolved
              through seven distinct forms
            </div>
            <hr />
          </li>
          <li data-aos="fade-up" data-aos-duration="2000">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-primary">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 border rounded-md shadow-md p-3">
              <time className="font-mono italic">1984</time>
              <div className="text-lg font-black">SSC</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal
              role in establishing desktop publishing as a general office
              function. The motherboard, a 9 in (23 cm) CRT monitor, and a
              floppy drive were housed in a beige case with integrated carrying
              handle; it came with a keyboard and single-button mouse.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
