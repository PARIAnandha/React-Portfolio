import React from 'react';
import aboutImg from '../assets/hero.jpg';
import resume from '../../src/assets/pari-resume.png';

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold font-serif">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg font-mono">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto font-sans">
                Highly skilled MERN Stack and Python developer with extensive experience in designing, developing, and deploying dynamic web applications. Proficient in front-end and back-end technologies, including React.js, Node.js, MongoDB, Express.js, and Python. With a proven track record of meeting tight deadlines and delivering high-quality, scalable solutions, I bring a deep understanding of responsive design principles, cross-browser compatibility, and SEO-friendly architectures.
                <br /> <br />
                As a dedicated freelance professional, I have successfully delivered a diverse range of projects:
                <ul className="list-disc ml-5 mt-2">
                  <li>Developed responsive e-commerce platforms with user-friendly interfaces and efficient backend management systems.</li>
                  <li>Designed and deployed websites for small companies and grocery shops, ensuring tailored, client-focused solutions.</li>
                  <li>Provided end-to-end services, from conceptual design to development and deployment, optimizing for both performance and user engagement.</li>
                </ul>
                <br />
                A collaborative team player and self-starter, I am passionate about creating seamless user experiences and leveraging the latest technologies to solve complex challenges. My commitment to continuous learning ensures that I stay at the forefront of industry trends, enabling me to deliver innovative and impactful digital solutions.
              </p>
              <br />
              <a href={resume} download={resume}>
                <button className="btn-primary font-semibold">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImg}
                alt="About me"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
