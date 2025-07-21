"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [IsScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          IsScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}>
        <a href="#top" className="cursor-pointer mr-14">
          Phoo Wai Ko
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            IsScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          }`}>
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#mywork" className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex item-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contact
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ------mobile menu------- */}
        <ul
          ref={sideMenuRef}
          className="md:hidden flex  flex-col gap-4 py-20 px-10 fixed -right-64 top-0 botton-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          <div className="absolute  right-6 top-6 }" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={openMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={openMenu} className="font-Ovo">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={openMenu} className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#mywork" onClick={openMenu} className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={openMenu} className="font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
