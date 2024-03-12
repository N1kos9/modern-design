import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
import Magnetic from "./magneticEffect/magnetic";

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={footerRef}
      className="-z-10  uppercase flex flex-col md:text-3xl text-xl gap-8 items-center justify-center w-full bg-black text-white p-8 text-center"
    >
      <h1 className="mt-8">You can learn how to make modern designs aswell</h1>
      <h2 className="text-2xl">
        ( register now ) <br /> <br /> &#8595;
      </h2>
      <div className="flex gap-8 justify-center text-[5vw] md:text-4xl">
        <Magnetic>
          <Link
            href="/register"
            className="btn bg-white text-black rounded-full p-6 px-12 mix-blend-difference"
          >
            Register
          </Link>
        </Magnetic>
      </div>
    </div>
  );
};
