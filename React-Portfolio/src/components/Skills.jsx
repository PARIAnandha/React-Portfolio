import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faNodeJs, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'; // existing icons
import { faMdb } from '@fortawesome/free-brands-svg-icons'; // MongoDB
import { faServer } from '@fortawesome/free-solid-svg-icons'; // ExpressJS alternative
import { faCube } from '@fortawesome/free-solid-svg-icons'; // Material-UI alternative
import { faSyncAlt, faCodeBranch } from '@fortawesome/free-solid-svg-icons'; // Redux, Router alternatives

const Skills = () => {
  const skills = [
    {
      icon: faHtml5,
      level: 'HTML',
      count: 65,
    },
    {
      icon: faCss3,
      level: 'CSS',
      count: 86,
    },
    {
      icon: faNodeJs,
      level: 'NODE JS',
      count: 50,
    },
    {
      icon: faReact,
      level: 'React',
      count: 80,
    },
    {
      icon: faCss3,
      level: 'Tailwind CSS',
      count: 86,
    },
    {
      icon: faServer, // ExpressJS icon
      level: 'Express',
      count: 70,
    },
    {
      icon: faMdb, // MongoDB icon
      level: 'MongoDB',
      count: 75,
    },
    {
      icon: faCube, // Material UI icon
      level: 'Material UI',
      count: 60,
    },
    {
      icon: faSyncAlt, // Redux icon (alternative)
      level: 'Redux',
      count: 65,
    },
    {
      icon: faGithub, // GitHub icon
      level: 'GitHub',
      count: 90,
    },
    {
      icon: faCodeBranch, // React Router icon (alternative)
      level: 'React Router',
      count: 70,
    },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <FontAwesomeIcon icon={skill.icon} />
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
