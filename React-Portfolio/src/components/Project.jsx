import React from 'react';

const Project = () => {
  const projects = [
    {
      type: 'E-commerce',
      name: 'Juice-E-com',
      description: 'An e-commerce platform to sell juices with various flavors and categories.',
      github_link: 'https://github.com/PARIAnandha/Juice-E-com',
      live_link: 'https://pokemon-api-eight-inky.vercel.app/',
    },
    {
      type: 'College Application',
      name: 'College Application',
      description: 'A platform for students to apply for colleges and check admission status.',
      github_link: 'https://github.com/PARIAnandha/College-Application',
      live_link: 'https://college-application-frontend.onrender.com/',
    },
    {
      type: 'Portfolio',
      name: 'Personal Portfolio',
      description: 'A portfolio website to showcase my skills and projects.',
      github_link: 'https://github.com/PARIAnandha/Personal-Portfolio',
      live_link: 'https://pari-portfolio.com/',
    },
    {
      type: 'API Integration',
      name: 'Pokemon API',
      description: 'An API to fetch Pokémon data with detailed statistics and images.',
      github_link: 'https://github.com/PARIAnandha/Pokemon-API',
      live_link: 'https://pokemon-api-eight-inky.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Check out the amazing projects I've worked on.</p>
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {projects.map((project_info, i) => (
          <div key={i} className="bg-slate-700 rounded-xl p-6 sm:w-1/2 lg:w-1/2">
            <h3 className="text-xl text-cyan-600 mb-4">{project_info.name}</h3>
            <p className="text-gray-300 mb-4">{project_info.description}</p>
            <div className="flex gap-3">
              <a
                href={project_info.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm"
              >
                Github
              </a>
              <a
                href={project_info.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-3 py-2 rounded-md text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
