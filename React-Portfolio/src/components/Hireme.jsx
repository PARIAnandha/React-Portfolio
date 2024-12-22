import React from 'react';
import hireMe from '../assets/HereMe.jpg';


const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-10 lg:max-w-4xl mx-auto min-h-[24rem] mt-10 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Do you need any work done?
          </h2>
          <p className="text-justify max-w-lg text-sm text-gray-200 leading-6">
          I am a Full Stack Developer skilled in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, Node js and Python. I also have extensive experience with Git, GitHub, Redux, and database technologies such as mongoDB , SQL.

I have worked on various projects using these technologies, creating user-friendly and responsive websites. With my proficiency in Python, I am capable of building efficient backends, handling server-side logic, and integrating APIs seamlessly.

I can turn design ideas into working web pages and ensure they look great and function well. Whether it’s front-end development using modern libraries and frameworks or backend development using Python and related technologies, I am well-equipped to handle the full scope of web development
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end ma">
          <img
            src={hireMe}
            alt="Hire Me"
            className="lg:h-72 h-56 lg:absolute lg:bottom-0 lg:right-3 object-cover rounded-lg"
          />
        </div>
      </div>

    </section>
  );
};

export default Hireme;
