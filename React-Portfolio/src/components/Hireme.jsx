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
      <div className="bg-gray-700 relative px-8 rounded-2xl py-10 lg:max-w-4xl mx-auto min-h-[24rem] mt-10 flex gap-6 flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Do you need any work done?
          </h2>
          <p className="text-justify max-w-lg text-sm text-gray-200 leading-6">
            I am a Full Stack Developer skilled in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, Node.js, and MongoDB. I also have extensive experience with Git, GitHub, and Redux for state management.
            <br /><br />
            I have worked on various projects using these technologies, creating user-friendly and responsive websites. I excel at turning design ideas into functional web pages that look great and perform efficiently. Whether it’s front-end development using modern libraries and frameworks or backend development with Node.js and Express.js, I am well-equipped to handle the full scope of web development.
          </p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <img
            src={hireMe}
            alt="Hire Me"
            className="h-64 lg:h-72 w-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hireme;
