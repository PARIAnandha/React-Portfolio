import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Pagination and Autoplay from 'swiper/modules'
import { Pagination, Autoplay } from 'swiper/modules';

import project1 from '../assets/project1.png';
import CollegeImg from '../assets/College Inter Face.png'


import project_person from '../assets/Project-removebg-preview.png';

const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Pokemon API',
      github_link: 'https://github.com/PARIAnandha/Pokemon-API',
      live_link: 'https://pokemon-api-eight-inky.vercel.app/',
    },
    {
      img: CollegeImg,
      name: 'College Application',
      github_link: 'https://github.com/PARIAnandha/College-Application',
      live_link: 'https://college-application-front.vercel.app/',
    },


  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]} // Corrected modules
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg h-40 w-60" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden size-72 mx-8">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
