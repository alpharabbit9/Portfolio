import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import Particles from '../../Particle/Particles'; // Make sure the path is correct

const projects = [
  {
    name: 'Leading University Website',
    image: 'https://i.ibb.co/JwbZBSkZ/leading-university-jet-vercel-app-1.png',
    liveLink: 'https://leading-university-jet.vercel.app/',
    githubLink: 'https://github.com/shahriaraf/Leading-University',
    description: 'An interactive MERN stack-based platform for Leading University that offers real-time bus schedules, result tracking, faculty details, and an integrated AI chatbot to enhance student support.',
  },
  {
    name: 'Eduverse Academy',
    image: 'https://i.ibb.co/2Y5BB2Yg/dcfdsfd.png',
    liveLink: 'https://eduverse-academy-df2b0.web.app/',
    githubLink: 'https://github.com/alpharabbit9/eduVerse-client',
    description: 'A modern e-learning platform where students can enroll in courses and instructors can easily manage and publish educational content.',
  },
  {
    name: 'Crowdspring - Fund The Future ',
    image: 'https://i.ibb.co/Pvv6VJZF/asdada.png',
    liveLink: 'https://crowdspring-95e1b.web.app/',
    githubLink: 'https://github.com/alpharabbit9/CrowdSpring-client',
    description: 'A crowdfunding platform that connects donors with impactful donation campaigns across various causes and regions.',
  },
  {
    name: 'ReclaimIT',
    image: 'https://i.ibb.co/YB8t3MZT/sfs.png',
    liveLink: 'https://reclaimit-e194f.web.app/',
    githubLink: 'https://github.com/alpharabbit9/reClaimIt-repolished',
    description: 'A lost-and-found web app that helps users report, search, and recover lost personal items efficiently.',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x">
      
      {/* 🔵 Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#7AE2CF', '#ffffff']}
          particleCount={100}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🟢 Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        <h2 className="bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent text-2xl md:text-4xl font-bold text-center mb-12">
          What I Have Built
        </h2>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="md:w-[700px] md:h-[520px] w-[300px] h-[500px]"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-[#0A0A0A] border-2 border-[#7AE2CF] rounded-xl p-5 mb-6 flex flex-col justify-between text-white shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-84 object-cover rounded-xl mb-4"
                />
                <h3 className="text-[#7AE2CF] text-2xl font-bold mb-2 text-center">
                  {project.name}
                </h3>
                <p className="md:text-sm text-[12px] text-gray-300 mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex justify-between mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:text-xl text-md text-[#7AE2CF] font-semibold hover:underline"
                  >
                    <CgWebsite />
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 md:text-xl text-md text-gray-400 font-semibold hover:underline"
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
