import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current === null) return;

    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current.innerText
      .split(" ")
      .map((word: string) => `<span class="word">${word} </span>`)
      .join("");
    textRef.current.innerHTML = words;

    const wordElems = textRef.current.querySelectorAll(".word");

    gsap.set(wordElems, { x: 100, opacity: 0 });

    wordElems.forEach((word, i) => {
      gsap.to(word, {
        scrollTrigger: {
          trigger: word,
          start: "top bottom-=20%",
          toggleActions: "play none none reverse",
        },
        x: 0,
        opacity: 1,
        delay: i * 0.05,
        duration: 0.5,
      });
    });
  }, []);

  return (
    <div className="md:h-[60%] h-[40%] flex justify-center items-center">
      <div className="items-center justify-center flex text-center">
        <h1
          ref={textRef}
          className="md:text-8xl text-4xl font-thin leading-snug uppercase"
        >
          In the dance of light and shadow, our creations emerge—not as mere
          objects, but as silent narratives of the unseen.
        </h1>
      </div>
    </div>
  );
};

export default About;
