/* eslint-disable react/no-unescaped-entities */
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
              <time className="font-mono italic">2011</time>
              <div className="text-lg font-black">Secondary School Certificate</div>
             
In 2011, I successfully passed the Secondary School Certificate (SSC) examination, marking a significant milestone in my educational journey. This achievement reflects my dedication to academic excellence and sets the foundation for future educational pursuits and career endeavors.
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
              <time className="font-mono italic">2013</time>
              <div className="text-lg font-black">Higher Secondary Certificate</div>
              <h2 className="font-semibold">GPA: 4.17</h2>
             
In 2013, I successfully completed the Higher Secondary Certificate (HSC) examination, marking a pivotal moment in my academic journey. This achievement demonstrates my commitment to learning and signifies my readiness for higher education or entry into the professional world. It lays the groundwork for future aspirations and endeavors.
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
              <time className="font-mono italic">2017</time>
              <div className="text-lg font-black">Bacherlor of Social Science (Pass).</div>
              <h1 className="font-semibold">CGPA: 2.61</h1>
              Obtaining a Bachelor of Social Science degree has equipped me with a deep understanding of human behavior and societal dynamics. Through diverse coursework, I've gained insights into key social issues and developed critical thinking skills to analyze and address them effectively. This qualification prepares me for a wide range of careers in fields such as social work, public policy, and community development.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
