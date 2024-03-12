"use client";
import React, { useEffect, useState } from "react";
import gsap, { selector, Power2, Power4 } from "gsap";
import anime, { stagger } from "animejs";
import Marquee from "@/components/marquee/marquee";
import Content from "@/components/content";
import HorizontalScroll from "@/components/horizontalScroll";
import { Footer } from "@/components/footer";

// import Projects from "@/components/projects";
// import Modal from "@/components/projects/secondModal";
import Modal from "@/components/project/modal";
import Project from "@/components/project/project";
import Link from "next/link";
import Magneticc from "@/components/magneticEffect/magnetic";
import About from "@/components/about";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

const Loader: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    let currentValue = 0;

    function updateCounter() {
      const counterElement = document.querySelector(".count p");
      if (currentValue < 100 && counterElement) {
        let increment = Math.floor(Math.random() * 10) + 1;
        currentValue = Math.min(currentValue + increment, 100);
        counterElement.textContent = `${currentValue}%`;

        let delay = Math.floor(Math.random() * 200) + 25;
        setTimeout(updateCounter, delay);
      }
    }

    updateCounter();

    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.25 });

    let textWrapper = document.querySelector(".ml16");
    if (textWrapper) {
      textWrapper.innerHTML =
        textWrapper.textContent?.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        ) || "";

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: (el, i) => 30 * i,
        })
        .add({
          targets: ".ml16 .letter",
          translateY: [0, 100],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (el, i) => 2000 + 30 * i,
        });
    }

    const animations = [
      {
        selector: ".count",
        details: {
          opacity: 0,
          ease: Power2.easeInOut,
          duration: 0.5,
          delay: 3.75,
          onComplete: () => gsap.set(".count", { display: "none" }),
        },
      },
      {
        selector: ".pre-loader",
        details: {
          scale: 0.5,
          ease: Power4.easeInOut,
          duration: 2,
          delay: 3,
          onComplete: () => gsap.set(".pre-loader", { display: "none" }),
        },
      },
      {
        selector: ".loader",
        details: {
          height: "0",
          ease: Power4.easeInOut,
          duration: 1.5,
          delay: 3.75,
          onComplete: () => gsap.set(".loader", { display: "none" }),
        },
      },
      {
        selector: ".loader-bg",
        details: {
          height: "0",
          ease: Power4.easeInOut,
          duration: 1.5,
          delay: 4,
          onComplete: () => gsap.set(".loader-bg", { display: "none" }),
        },
      },
      {
        selector: ".loader-2",
        details: {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: Power4.easeInOut,
          duration: 1.5,
          delay: 3.5,
          onComplete: () => gsap.set(".loader-2", { display: "none" }),
        },
      },
      {
        selector: ".header .h11",
        details: {
          y: -100,
          ease: Power4.easeInOut,
          duration: 1.5,
          delay: 4.0,
          stagger: 0.05,
        },
      },
      {
        selector: ".scroll",
        details: {
          y: 100,
          ease: Power4.easeInOut,
          duration: 1.5,
          delay: 4.0,
          stagger: 0.05,
        },
      },
    ];

    animations.forEach(({ selector, details }) => {
      gsap.to(selector, details);
    });
  }, []);

  return (
    <>
      <div className="h-[100rem]">
        <div className="container font-loader">
          <div className="pre-loader fixed top-0 w-full h-full clip-path-polygonn">
            <div className="loader absolute top-0 w-full h-full bg-[#000] text-[#fff] flex items-center justify-center"></div>
            <div className="loader-bg absolute block top-0 w-full h-full bg-red-500 -z-10"></div>
          </div>
          <div className="loader-content fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex md:w-[400px] w-[300px] text-center z-20 text-[#fff]">
            <div className="count flex-2 text-center leading-none px-2">
              <p>0</p>
            </div>
            <div className="copy text-[20px] md:text-[30px] leading-none uppercase">
              <p className="ml16 overflow-hidden">New way of styling</p>
            </div>
            <div className="loader-2 absolute top-0 w-full h-full bg-loaderBg clip-path-secondPolygon"></div>
          </div>
        </div>
        <div className="header flex flex-col justify-center items-center w-full h-[100vh] text-center">
          <div className="wrapping-title flex-col flex">
            <h1 className="h11 text-[5vw] uppercase text-center mt-12 leading-none ">
              Modern
            </h1>
            <h1 className="h11 md:text-[20vw] mt-16 text-[28vw] uppercase text-center  leading-none ">
              Style
            </h1>
          </div>
          <div className="scroll footer-copy justify-center flex">
            <p className="text-3xl text-center">( Scroll )</p>
          </div>
        </div>

        <Marquee />
        <About />
        <main>
          <div>
            {projects.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />
        </main>
        <Content />
        <HorizontalScroll />
        <Footer />
      </div>
    </>
  );
};

export default Loader;
