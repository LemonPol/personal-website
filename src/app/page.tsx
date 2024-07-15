"use client"

import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  const [animateContact, setAnimateContact] = useState(false);

  const handleClickContact = () => {
    setAnimateContact(true);
    setTimeout(() => {
      setAnimateContact(false);
    }, 800); 
  };

  useEffect(() => {
    const carouselContainer = document.getElementById('carousel');

    if (carouselContainer) {
      setTimeout(() => {
        carouselContainer.scrollTo({
          left: 1000,
          behavior: 'smooth'
        });

        setTimeout(() => {
          carouselContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }, 1000);
      }, 500);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-y-auto">
      <div className="py-12 min-h-full flex flex-col items-center justify-center text-center w-full overflow-y-auto">
        <div id="title" className="flex flex-col items-center justify-center text-center w-full mb-8">
          <h1 className="text-4xl font-bold mb-1">LEMON POLLOCK</h1>
          <h1 className="text-1xl font-bold mb-4">COMPUTER ENGINEERING STUDENT</h1>
        </div>
        <div id="about" className="flex flex-col items-center justify-center text-center w-full mb-10">
          <h1 className="text-3xl font-bold mb-4">ABOUT</h1>
          <p className="w-1/2 mb-4">Hey there! My name is Lemon and I&apos;m a computer engineering student at the University of British Columbia. I&apos;m fascinated by the inner workings of computers, with a particular interest in hardware and low-level programming. While I love diving into the nuts and bolts of systems, I&apos;m also eager to expand my skillset into web development.</p>
          <p className="w-1/2">I&apos;m committed to continuous learning and growth in both my professional and personal endeavors. If you&apos;re interested in discussing technology, collaboration opportunities, or sharing insights, please don&apos;t hesitate to</p>
          <a className="text-orange-500 hover:underline mx-4" href="#contacts" onClick={handleClickContact}>contact me.</a>
        </div>
        <div id="projects" className="flex flex-col items-center justify-center text-center w-full mb-10">
          <h1 className="text-3xl font-bold mb-4">PROJECTS</h1>
          <div className="flex justify-center items-center w-full">
            <div id="carousel" className="carousel carousel-center rounded-box gap-6 bg-orange-400 p-10 rounded-3xl w-2/3">
              <ProjectCard
                imageSrc="projectcard-1-image.png"
                imageAlt="Website screenshot"
                title="This Website!"
                subtitle=""
                description="Personal portfolio website made using Typescript, React, and Tailwind CSS."
                tags={['Typescript', 'React', 'Tailwind CSS']}
                link="https://personal-website-two-psi-10.vercel.app/"
              />
              <ProjectCard
                imageSrc="projectcard-4-image.png"
                imageAlt=""
                title="Multi-Base Calculator"
                subtitle=""
                description="Calculator app which supports instant converison between decimal, hexadecimal, and binary"
                tags={['HTML', 'CSS', 'Javascript']}
                link="https://multi-base-calculator.vercel.app/"
              />
              <ProjectCard
                imageSrc="projectcard-2-image.png"
                imageAlt=""
                title="Java IoT Project"
                subtitle=""
                description="Developed a scalable IoT server architecture optimized for reliability and efficiency, featuring robust event and request handling, and AWS Lambda integration for enhanced performance."
                tags={['Java', 'IoT', 'AWS Lambda']}
                link=""
              />
              <ProjectCard
                imageSrc="projectcard-3-image.png"
                imageAlt=""
                title="Simple RISC CPU Design"
                subtitle=""
                description="Designed and implemented a CPU using SystemVerilog, incorporating pipelining to enhance processing speed. The CPU was tested in ModelSim and deployed on a DE1-SoC board."
                tags={['SystemVerilog', 'ModelSim', 'Quartus']}
                link=""
              />
            </div>
          </div>
        </div>
        <div id="contacts" className={`flex flex-col items-center justify-center text-center w-1/3 p-5 pb-12 rounded-box ${animateContact ? 'shake-horizontal' : ''}`}>
          <h1 className="text-3xl font-bold mb-4">CONTACT</h1>
          <div className="flex items-center justify-center text-center w-full">
          <img src="email.png" className="size-7 mr-2"></img>
            <p>LemonPollock@gmail.com</p>
            <img src="github-mark.png" className="size-7 mr-2 ml-4"></img>
            <a href="https://github.com/LemonPol">@LemonPol</a>
          </div>
        </div>
      </div>
    </main>
  );
}