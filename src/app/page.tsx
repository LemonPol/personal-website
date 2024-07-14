import React from 'react';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 m-0">
      <div id = "section-1" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">LEMON POLLOCK</h1>
        <div className="flex justify-center">
          <a href="#section-2" className="text-blue-600 hover:underline mx-4">About</a>
          <a href="#section-3" className="text-blue-600 hover:underline mx-4">Projects</a>
          <a href="#" className="text-blue-600 hover:underline mx-4">CV</a>
        </div>
      </div>
      <div id = "section-2" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">ABOUT</h1>
        <p className="w-1/2">words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words</p>
      </div>
      <div id = "section-3" className="flex flex-col items-center justify-center text-center h-screen w-full">
        <h1 className="text-3xl font-bold mb-4">PROJECTS</h1>
        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ProjectCard
              imageSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              imageAlt="Shoes"
              title="Shoes!"
              subtitle=""
              description="If a dog chews shoes whose shoes does he choose?"
              tags={['Typescript', 'React', 'Tailwind CSS']}
            />
            <ProjectCard
              imageSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              imageAlt="Shoes"
              title="Shoes!"
              subtitle=""
              description="If a dog chews shoes whose shoes does he choose?"
              tags={['Fashion', 'Products']}
            />
            <ProjectCard
              imageSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              imageAlt="Shoes"
              title="Shoes!"
              subtitle=""
              description="If a dog chews shoes whose shoes does he choose?"
              tags={['Fashion', 'Products']}
            />
          </div>
        </div>
      </div>
    </main>
  );
}