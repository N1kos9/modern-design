import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HorizontalScroll = () => {
  const racesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (racesRef.current) {
      const races = racesRef.current;

      const getScrollAmount = () => {
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
      };

      const tween = gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      const trigger = ScrollTrigger.create({
        trigger: races,
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        tween.kill();
        trigger.kill();
      };
    }
  }, []);
  return (
    <div>
      <div className="space-50vh lightBG"></div>

      <div className="racesWrapper overflow-x-hidden -z-10">
        <div ref={racesRef} className="races w-fit flex flex-nowrap">
          <h2>Minimalism</h2>
          <h2>Innovation</h2>
          <h2>Functionality</h2>
          <h2>Sustainability</h2>
          <h2>Smart Homes</h2>
        </div>
      </div>

      <div className="space-100vh lightBG"></div>
    </div>
  );
};

export default HorizontalScroll;
