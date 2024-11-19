/* eslint-disable react/no-unescaped-entities */
import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import { StickyScroll } from "@/components/ui/StickyScrollRevel";
import Image from "next/image";
import img1 from "../../Assets/images/education-images/unseen-studio-s9CC2SKySJM-unsplash.jpg"
import img2 from "../../Assets/images/education-images/baim-hanif-pYWuOMhtc6k-unsplash.jpg"
import img3 from "../../Assets/images/education-images/scott-graham-5fNmWej4tAA-unsplash.jpg"


const content = [
  {
    title: "Secondary School Certificate",
    description:
      "In 2011, I successfully passed the Secondary School Certificate (SSC) examination, marking a significant milestone in my educational journey. This achievement reflects my dedication to academic excellence and sets the foundation for future educational pursuits and career endeavors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img1.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    year: "2011"
  },
  {
    title: "Higher Secondary Certificate",
    description:
      "In 2013, I successfully completed the Higher Secondary Certificate (HSC) examination, marking a pivotal moment in my academic journey. This achievement demonstrates my commitment to learning and signifies my readiness for higher education or entry into the professional world. It lays the groundwork for future aspirations and endeavors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={img3.src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    year: "2013"
  },
  {
    title: "Bacherlor of Social Science (Pass).",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src={img2.src}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
    year: "2017"
  }
];
const Education = () => {

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-sky-500">
              Educations <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none text-slate-200">
                Building the Foundation of Excellence
              </span>
            </h1>
          </>
        }
      >
     <StickyScroll content={content} />
      </ContainerScroll>
    </div>
  );
};

export default Education;
