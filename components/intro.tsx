"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="z-0 mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover
            border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0">
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Alqma.</span> I'm a{" "}
        <span className="font-bold">Full-Stack Web Developer</span> with{" "}
        <span className="font-bold">2+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row ">
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
          Contact me here <BsArrowRight />
        </Link>
        <a
          href=""
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full ">
          Download CV <HiDownload />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a
          href=""
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
