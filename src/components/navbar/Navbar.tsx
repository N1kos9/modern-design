"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { signOut, useSession } from "next-auth/react";
import Magnetic from "../magneticEffect/magnetic";
const Navbar = () => {
  const { data: session }: any = useSession();

  const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard", label: "Dashboard" },
    ...(session
      ? [{ path: "#", label: "Logout", action: () => signOut() }]
      : [
          { path: "/login", label: "Login" },
          { path: "/register", label: "Register" },
        ]),
  ];

  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });
    tl.current = gsap
      .timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: -0.75,
      });

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container font-loader" ref={container}>
      <div className="menu-bar fixed top-0 left-0 w-full p-8 flex justify-between items-center z-10">
        <div className="menu-logo">
          <Link href="/" className="text-[#000] cursor-pointer text-xl">
            ( Style )
          </Link>
        </div>
        <div className="md:text-4xl text-2xl">Revolutioning</div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="text-[#000] cursor-pointer text-xl">( Menu ) </p>
        </div>
      </div>

      <div className="menu-overlay fixed top-0 left-0 w-full h-full p-8 bg-[#000] z-20 flex clip-path-secondPolygon">
        <div className="menu-overlay-bar fixed top-0 left-0 w-full p-8 flex justify-between items-center z-10">
          <div className="menu-logo text-[#fff] text-xl">
            <Link href="/">( With everything )</Link>
          </div>

          <div className="menu-close">
            <p
              onClick={toggleMenu}
              className="text-[#fff] cursor-pointer text-xl"
            >
              ( Close )
            </p>
          </div>
        </div>

        <div
          className="menu-close-icon flex-2 hidden md:flex items-end cursor-pointer"
          onClick={toggleMenu}
        >
          <p className="text-[100px] text-[#fff]">&#x2715;</p>
        </div>
        <div className="menu-copy flex-4 flex flex-col justify-between md:pt-4 pt-12">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div
                key={index}
                className="menu-link-item w-max clip-path-polygonn"
              >
                <div
                  className="menu-link-item-holder flex flex-col relative"
                  onClick={() => {
                    toggleMenu();
                    if (link.action) link.action();
                  }}
                >
                  {link.label !== "Logout" ? (
                    <Link
                      className="menu-link text-[#fff] md:text-[80px] text-[60px]"
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <>
                      {session?.user?.email && (
                        <span className="menu-link mt-20 text-[#fff] md:text-[5vw] text-[11vw]">
                          {session.user.email}
                        </span>
                      )}

                      <button
                        onClick={() => {
                          signOut();
                        }}
                        className="md:text-[4vw] text-[11vw] hover:text-[5vw] w-fit duration-300 text-white text-left rounded-full"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info text-[#fff]">
            <div className="menu-info-col">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>info@nikos.com</p>
              <p>9999 9999 99</p>
            </div>
          </div>
        </div>
        <div className="menu-preview flex-4 hidden md:flex items-end justify-end text-[#fff]">
          <p>View ShowReel</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
