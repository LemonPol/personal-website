import React from 'react';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main className="h-screen">
      <div id="section-1" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">LEMON POLLOCK</h1>
        <div className="flex justify-center">
          <a href="#about" className="text-orange-400 hover:underline mx-4">About</a>
          <a href="#projects" className="text-orange-400 hover:underline mx-4">Projects</a>
          <a href="#" className="text-orange-400 hover:underline mx-4">CV</a>
        </div>
      </div>
      <div id="about" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">ABOUT</h1>
        <p className="w-1/2">words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words</p>
      </div>
      <div id="projects" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">PROJECTS</h1>
        <div className="flex justify-center items-center w-full">
          <div className="carousel carousel-center rounded-box gap-6 bg-orange-400 p-10 rounded-3xl w-2/3">
            <ProjectCard
              imageSrc="projectcard-1-image.png"
              imageAlt="Website screenshot"
              title="This Website!"
              subtitle=""
              description="Personal portfolio website made using Typescript, React, and Tailwind CSS."
              tags={['Typescript', 'React', 'Tailwind CSS']}
            />
            <ProjectCard
              imageSrc="projectcard-2-image.png"
              imageAlt="Shoes"
              title="Java IoT Project"
              subtitle=""
              description="Developed a scalable IoT server architecture optimized for reliability and efficiency, featuring robust event and request handling, and AWS Lambda integration for enhanced performance."
              tags={['Java', 'IoT', 'AWS Lambda']}
            />
            <ProjectCard
              imageSrc="projectcard-3-image.png"
              imageAlt="Shoes"
              title="Simple RISC CPU Design"
              subtitle=""
              description="Designed and implemented a CPU using SystemVerilog, incorporating pipelining to enhance processing speed. The CPU was tested in ModelSim and deployed on a DE1-SoC board."
              tags={['SystemVerilog', 'ModelSim', 'Quartus']}
            />
            <ProjectCard
              imageSrc="projectcard-3-image.png"
              imageAlt="Shoes"
              title="Simple RISC CPU Design"
              subtitle=""
              description="Designed and implemented a CPU using SystemVerilog, incorporating pipelining to enhance processing speed. The CPU was tested in ModelSim and deployed on a DE1-SoC board."
              tags={['SystemVerilog', 'ModelSim', 'Quartus']}
            />
            <ProjectCard
              imageSrc="projectcard-3-image.png"
              imageAlt="Shoes"
              title="Simple RISC CPU Design"
              subtitle=""
              description="Designed and implemented a CPU using SystemVerilog, incorporating pipelining to enhance processing speed. The CPU was tested in ModelSim and deployed on a DE1-SoC board."
              tags={['SystemVerilog', 'ModelSim', 'Quartus']}
            />
          </div>
        </div>
      </div>
    </main>
  );
}