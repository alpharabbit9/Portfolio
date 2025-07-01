import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration:1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-10 text-white bg-[#0f172a] min-h-screen"
    >
      <div
        ref={contentRef}
        className="px-12 mx-auto text-center about-content"
      >
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
        <div className="md:flex text-left">
          <div className="md:w-2/3 p-7">
            <h2 className="text-3xl font-bold">
              Hi, I'm Rifat — a passionate and driven Full Stack Web Developer
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Hi, I'm{" "}
              <span className="text-white font-semibold">Rifat</span> — a
              passionate and driven{" "}
              <span className="text-cyan-300">Full Stack Web Developer</span>{" "}
              focused on building{" "}
              <span className="text-cyan-300 font-semibold">
                high-performance
              </span>
              ,{" "}
              <span className="text-cyan-300 font-semibold">scalable</span>,
              and user-centric applications.
            </p>
            <p className="text-lg mt-4 leading-8 text-slate-300">
              I specialize in the{" "}
              <span className="text-cyan-300 font-semibold">
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </span>{" "}
              with experience creating responsive UI with{" "}
              <span className="text-cyan-300">Tailwind CSS</span> and{" "}
              <span className="text-cyan-300">Daisy UI</span>, developing secure
              APIs, and handling deployments.
            </p>
            <p className="text-lg mt-4 leading-8 text-slate-300">
              My workflow centers on{" "}
              <span className="text-cyan-300 font-semibold">clean code</span>,{" "}
              <span className="text-cyan-300 font-semibold">
                component reusability
              </span>
              , and{" "}
              <span className="text-cyan-300 font-semibold">
                optimized performance
              </span>
              . Currently diving deeper into{" "}
              <span className="text-cyan-300 font-semibold">DevOps</span> and{" "}
              <span className="text-cyan-300 font-semibold">
                cloud infrastructure
              </span>{" "}
              to expand my backend skills.
            </p>
            <p className="text-lg mt-4 leading-8 text-slate-300">
              Beyond code, I’m passionate about solving{" "}
              <span className="text-cyan-300 font-semibold">
                real-world problems
              </span>{" "}
              by building impactful full-stack solutions from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-7">
            {[
              {
                title: "Web Development",
                text: "Passionate about creating modern web applications",
              },
              {
                title: "Technology Enthusiast",
                text: "Love exploring and tinkering with new technologies",
              },
              {
                title: "Programming",
                text: "Dedicated to writing clean, efficient code",
              },
              {
                title: "Computer Science Major",
                text: "Pursuing Bachelor in Computer Science",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="max-w-xs bg-gradient-to-br from-[#1e2a4a] to-[#22315a] rounded-xl border border-[#2b3a66] p-6 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e2a4a] mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#4ea8f7]"
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
  );
};

export default About;
