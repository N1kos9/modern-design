import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Content = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(".textt h1") as Element[];
    elements.forEach((h1, i) => {
      gsap.fromTo(
        h1,
        { opacity: 0.1 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: h1,
            start: "top bottom-=20%",
            end: "bottom 93%",
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="md:h-[80%] h-[60%] flex">
        <div className="textt uppercase gap-4 w-full md:text-[8vw] mt-20 text-[12vw] justify-center flex-col flex">
          <h1>In the dance of light</h1>
          <hr />
          <h1>There is always</h1>
          <hr />
          <h1>Darkness</h1>
        </div>
      </div>
    </>
  );
};

export default Content;
