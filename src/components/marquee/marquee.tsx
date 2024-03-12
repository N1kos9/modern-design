import React, { useEffect } from "react";
import gsap, { Linear, Power1 } from "gsap";

const Marquee = () => {
  useEffect(() => {
    let currentScroll = 0;
    let isScrollingDown = true;
    const arrows = document.querySelectorAll(".arrow");

    // Initialize the GSAP animation
    const tween = gsap
      .to(".marquee__part", {
        xPercent: -100,
        repeat: -1,
        duration: 1,
        ease: Linear.easeIn,
      })
      .totalProgress(0.5);

    gsap.set(".marquee__inner", { xPercent: -50 });

    const onScroll = () => {
      if (window.pageYOffset > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      arrows.forEach((arrow) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });

      currentScroll = window.scrollY;
    };

    // Add event listener
    window.addEventListener("scroll", onScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <section className="spacer"></section>

      <section className="marquee -z-10 relative bg-[#0f0f0f] text-[#d3cdcd] py-8 text-[40px] uppercase overflow-hidden font-semibold">
        <div className="marquee__inner flex w-fit flex-auto flex-row">
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
          <div className="marquee__part flex items-center shrink-0 px-4">
            modern style
            <div className="arrow">
              <img src="./arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="spacer"></section>
    </>
  );
};

export default Marquee;
