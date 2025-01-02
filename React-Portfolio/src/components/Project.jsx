import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons'; // React logo icon from free-brands-svg-icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // GitHub logo icon from free-brands-svg-icons
import { faLink } from '@fortawesome/free-solid-svg-icons'; // Link icon from free-solid-svg-icons
import project1 from '../assets/pokemon.png';
import project2 from '../assets/jujusu.jpg';
import project3 from '../assets/questions.avif'; 

const Project = () => {
  const projects = [
    {
      type: 'Own Project',
      name: 'Pokemon API',
      description: 'An API to fetch Pokémon data with detailed statistics and images.',
      github_link: 'https://github.com/PARIAnandha/Pokemon',
      live_link: 'https://pokemon-ten-ochre-66.vercel.app/',
      image: project1, // Correct usage of image variable
      icon: faReact,
    },
    {
      type: 'Own Project',
      name: 'Chainese Anime',
      description: 'A platform to explore and watch Chinese anime with details and episodes.',
      github_link: 'https://github.com/PARIAnandha/Chainese-Anime',
      live_link: 'https://chainese-anime.vercel.app/',
      image: project2, // Correct usage of image variable
      icon: faGithub,
    },
    {
      type: 'Freelancing Project',
      name: 'TNPSC Liard',
      description: 'A website for TNPSC exam preparation with detailed study materials and resources.',
      github_link: 'https://github.com/PARIAnandha/TNPSC',
      live_link: 'https://tnpsc-liard.vercel.app/',
      image: project3, // Correct usage of image variable
      icon: faGithub, // Use appropriate icon if needed
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Own Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Check out my amazing projects built from scratch!</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {projects.slice(0, 2).map((project_info, i) => (  // Only display the first two own projects
          <div key={i} className="bg-slate-700 rounded-xl p-6 sm:w-1/2 lg:w-1/2 shadow-xl">
            <div className="relative mb-6">
              <img src={project_info.image} alt={project_info.name} className="rounded-xl w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-cyan-600 px-3 py-1 rounded-full text-white text-sm">{project_info.type}</div>
            </div>
            <h3 className="text-xl text-cyan-600 mb-4">{project_info.name}</h3>
            <p className="text-gray-300 mb-4">{project_info.description}</p>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={project_info.icon} /> Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faLink} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Freelancing Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Check out my freelancing projects!</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {projects.slice(2).map((project_info, i) => (  // Only display the freelancing projects
          <div key={i} className="bg-slate-700 rounded-xl p-6 sm:w-1/2 lg:w-1/2 shadow-xl">
            <div className="relative mb-6">
              <img src={project_info.image} alt={project_info.name} className="rounded-xl w-full h-60 object-cover" />
              <div className="absolute top-2 left-2 bg-cyan-600 px-3 py-1 rounded-full text-white text-sm">{project_info.type}</div>
            </div>
            <h3 className="text-xl text-cyan-600 mb-4">{project_info.name}</h3>
            <p className="text-gray-300 mb-4">{project_info.description}</p>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={project_info.icon} /> Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faLink} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
