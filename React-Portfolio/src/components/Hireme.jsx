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
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you need any work done?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I am a Full Stack Developer skilled in HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and I have extensive experience with Git, GitHub, and Redux. 
            I have worked on various projects using these technologies, creating user-friendly and responsive websites. 
            I can turn design ideas into working web pages and make sure they look great and work well. 
            I use Git for version control, GitHub for collaboration, and Redux for state management in my applications. 
            If you need someone reliable and skilled to handle your web development tasks, I'd be happy to help.
          </p>
        </div>
        <img
          src={hireMe}
          alt="Hire Me"
          className="lg:h-56 h-56 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
