import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiDaisyui,
  SiShadcnui,
} from "react-icons/si";
import Particles from "../../Particle/Particles";

const frontend = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const frameworks = [
  { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
  { name: "ShadCN", icon: <SiShadcnui className="text-violet-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
];

const StackGrid = ({ title, items }) => (
  <div data-aos="fade-up">
    <h3 className="text-xl font-semibold text-cyan-400 mb-4 border-b border-cyan-400 pb-2">{title}</h3>
    <div className="grid grid-cols-3 gap-6">
      {items.map((tech, idx) => (
        <motion.div
          key={idx}
          className="group flex flex-col items-center justify-center p-4 bg-[#1a2235] rounded-xl shadow-md hover:shadow-cyan-400/30 hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
        >
          <div className="text-4xl mb-2">{tech.icon}</div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div id="inventory" className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x">
      {/* Particles behind */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#38bdf8"]}
          particleCount={120}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={20}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content on top */}
      <section id="inventory" className="relative z-10 max-w-6xl mx-auto py-20 px-6 text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-16">
          <StackGrid title="Frontend" items={frontend} />
          <StackGrid title="Backend" items={backend} />
          <StackGrid title="Frameworks & Tools" items={frameworks} />
        </div>
      </section>
    </div>
  );
};

export default TechStack;
