import React from 'react';
import hero from '../assets/hero1.jpg';

const Hero = () => {
    const social_media = [
        { link: 'https://www.instagram.com/pari_anandha/', icon: "logo-instagram" },
        { link: 'https://www.facebook.com/profile.php?id=100082765497256', icon: "logo-facebook" },
        { link: 'https://www.linkedin.com/in/pari-arul-5092322b3/', icon: "logo-linkedin" },
        { link: 'https://github.com/PARIAnandha', icon: "logo-github" }, // Add GitHub link here
    ];

    return (
        <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full">
                <img src={hero} alt="" className="h-60 md:w-11/12 md:h-full object-cover rounded-md" />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span className='text-4xl'>PARI</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                        Full Stack Developer
                    </h4>
                    <button className="btn-primary mt-8">Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        {social_media?.map((icon) => (
                            <div key={icon.link} className="text-gray-600 hover:text-white cursor-pointer">
                                <a href={icon.link}>
                                    <ion-icon name={icon.icon}></ion-icon>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
