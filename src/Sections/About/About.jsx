import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../../components/ui/GradientText";
import Particles from "../../Particle/Particles";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    const animation = gsap.fromTo(
      element,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // animation starts when section top reaches 80% of viewport
          end: "bottom top",
          toggleActions: "play none none reverse",
          // markers: true, // uncomment to debug
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div id="about" className="relative min-h-screen overflow-hidden bg-[#0a192f]">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#38bdf8"]}
          particleCount={120}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={2}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* About Section */}
      <section
        id="about"
        ref={sectionRef}
        className="relative z-10 py-20 px-4 text-white min-h-screen"
      >
        <div className="max-w-6xl mx-auto text-center">
          <GradientText
            colors={["#38bdf8", "#06b6d4", "#14b8a6", "#22c55e", "#38bdf8"]}
            animationSpeed={2.5}
            showBorder={false}
            className="text-4xl font-extrabold text-center mb-10"
          >
            <h2>About Me</h2>
          </GradientText>

          <div className="md:flex text-left">
            <div className="md:w-2/3 p-6">
              <h2 className="text-3xl font-bold mb-4">
                Hi, I'm Rifat — a passionate and driven Full Stack Web Developer
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                I specialize in the{" "}
                <span className="text-cyan-300 font-semibold">
                  MERN stack (MongoDB, Express.js, React.js, Node.js)
                </span>{" "}
                and enjoy building{" "}
                <span className="text-cyan-300 font-semibold">
                  high-performance, scalable
                </span>{" "}
                web applications.
              </p>
              <p className="text-lg mt-4 leading-8 text-slate-300">
                My focus is on{" "}
                <span className="text-cyan-300 font-semibold">clean code</span>,{" "}
                <span className="text-cyan-300 font-semibold">
                  reusable components
                </span>
                , and{" "}
                <span className="text-cyan-300 font-semibold">
                  performance optimization
                </span>
                . I'm also exploring{" "}
                <span className="text-cyan-300 font-semibold">DevOps</span> and{" "}
                <span className="text-cyan-300 font-semibold">Cloud</span>{" "}
                technologies to broaden my backend expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {[
                {
                  title: "Web Development",
                  text: "Passionate about building responsive web apps",
                },
                {
                  title: "Tech Enthusiast",
                  text: "Always exploring new tools and frameworks",
                },
                {
                  title: "Clean Code Advocate",
                  text: "Focus on performance and readability",
                },
                {
                  title: "CS Major",
                  text: "Pursuing Bachelor's in Computer Science",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-5 shadow-lg transition-transform hover:scale-105"
                >
                  <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-cyan-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-cyan-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[#9aa7bb] text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
