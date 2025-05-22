"use client";
import React from "react";
import { Button } from "../ui";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-4 items-center justify-between text-center lg:text-left">
        <div className="relative mt-6 lg:mt-0 lg:w-[25rem] lg:h-[25rem] max-w-full w-64 h-64">
          <Image
            className="rounded-full object-cover"
            src="/my-image.webp"
            alt="My Image"
            quality={100}
            fill
            priority
          />
        </div>
        <div className="lg:max-w-[50%] flex flex-col justify-center items-center md:items-start gap-4">
          <h1 className="text-5xl leading-[3.75rem] font-extrabold">
            Hi, I am Beka, a Frontend Developer
          </h1>
          <p>
            I am a passionate frontend developer with a focus on creating
            intuitive and engaging user experiences. I love turning ideas into
            reality through clean, efficient code.
          </p>
          <Button className="mt-5" onClick={() => {}}>
            <p className="text-black font-semibold">Download CV</p>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center mt-16">
        <h3 className="text-xl leading-6 font-bold">About Me</h3>
        <p>
          Experienced Frontend Developer specializing in building scalable and
          user-centric web applications with modern technologies. Passionate
          about clean architecture, performance optimization, and delivering
          high- quality solutions for real-world business needs.
        </p>
        <p>
          Driven by continuous learning and personal growth, with a strong focus
          on expanding full-stack knowledge and technical leadership skills.
          Experienced in SaaS development, multi-tenant platforms, and complex
          UI/UX challenges. Committed to writing maintainable code, sharing
          knowledge within teams, and building products that bring real value to
          users and businesses.
        </p>
      </div>
    </section>
  );
};

export { Hero };
