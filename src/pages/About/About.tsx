import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img1 from "../../Assets/images/img1.jpg";
import img2 from "../../Assets/images/img2.jpg";
import img3 from "../../Assets/images/img3.jpg";
import img4 from "../../Assets/images/img4.jpg";
import img5 from "../../Assets/images/img5.jpg";
import img6 from "../../Assets/images/img6.jpg";
import img7 from "../../Assets/images/img7.jpg";
import img8 from "../../Assets/images/img8.jpg";
import img9 from "../../Assets/images/img9.jpg";
import img10 from "../../Assets/images/img10.jpg";
import img11 from "../../Assets/images/img11.jpg";
import img12 from "../../Assets/images/img12.jpg";
import img13 from "../../Assets/images/img13.jpg";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black/[0.96] pt-48 md:pt-0">
      <div className="max-w-[1320px] mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-sky-500 font-bold">
            Better every day
          </span>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-200 opacity-90">
            A Journey of Honor and Dedication
          </h3>
          <p className="text-base md:text-lg text-slate-300 my-4 md:my-6">
            I am a proud member of the Bangladesh Army, embodying discipline,
            courage, and resilience. A dedicated and honorable individual
            committed to serving my nation, while embracing strength,
            leadership, and the unwavering pursuit of excellence in every
            endeavor.
          </p>
          <Link
            href={"https://www.facebook.com/tuhin.shafi.79"}
            target="_blank"
          >
            <button className="bg-sky-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-sky-600 active:scale-95">
              Connect Me
            </button>
          </Link>
        </div>
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img2,
  },
  {
    id: 9,
    src: img4,
  },
  {
    id: 10,
    src: img8,
  },
  {
    id: 11,
    src: img1,
  },
  {
    id: 12,
    src: img9,
  },
  {
    id: 13,
    src: img10,
  },
  {
    id: 14,
    src: img11,
  },
  {
    id: 15,
    src: img12,
  },
  {
    id: 16,
    src: img13,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src?.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default AboutMe;
