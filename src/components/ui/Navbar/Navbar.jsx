import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = ["home", "about", "inventory", "projects", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const lettersRef = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        const scrollY = window.scrollY;

        for (const id of navItems) {
          const section = document.getElementById(id);
          if (section) {
            const offsetTop = section.offsetTop - 100;
            const offsetHeight = section.offsetHeight;

            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
              setActiveSection(id);
              break;
            }
          }
        }

        throttleTimeout = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      initializeAnimations();
    };
    document.head.appendChild(script);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const initializeAnimations = () => {
    const letters = lettersRef.current.filter(Boolean);
    if (letters.length === 0 || !window.gsap) return;

    const gsap = window.gsap;
    
    // Initial dramatic entrance
    gsap.fromTo(letters, 
      {
        y: -100,
        opacity: 0,
        rotation: 360,
        scale: 0,
        filter: "blur(20px)"
      },
      {
        duration: 2,
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        filter: "blur(0px)",
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)"
      }
    );

    // Create infinite creative animation cycle
    const createInfiniteAnimation = () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      // Animation 1: Morphing Glow Effect
      tl.to(letters, {
        duration: 1.5,
        textShadow: "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff",
        color: "#00d4ff",
        scale: 1.1,
        stagger: 0.1,
        ease: "power2.inOut"
      })
      .to(letters, {
        duration: 1.5,
        textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        color: "#ffffff",
        scale: 1,
        stagger: 0.1,
        ease: "power2.inOut"
      })
      
      // Animation 2: Typewriter Effect
      .to({}, { duration: 1 }) // pause
      .to(letters, {
        duration: 0.1,
        scaleY: 0,
        transformOrigin: "bottom",
        stagger: 0.1,
        ease: "power2.in"
      })
      .to(letters, {
        duration: 0.8,
        scaleY: 1,
        transformOrigin: "bottom",
        stagger: 0.15,
        ease: "elastic.out(1, 0.3)"
      })
      
      // Animation 3: Breathing Effect
      .to({}, { duration: 1 }) // pause
      .to(letters, {
        duration: 2,
        scale: 1.2,
        opacity: 0.8,
        ease: "sine.inOut",
        stagger: 0
      })
      .to(letters, {
        duration: 2,
        scale: 1,
        opacity: 1,
        ease: "sine.inOut",
        stagger: 0
      })
      
      // Animation 4: Wave Rotation
      .to({}, { duration: 1 }) // pause
      .to(letters, {
        duration: 0.6,
        rotation: 15,
        y: -10,
        stagger: 0.08,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.6,
        rotation: -15,
        y: 10,
        stagger: 0.08,
        ease: "power2.inOut"
      })
      .to(letters, {
        duration: 0.6,
        rotation: 0,
        y: 0,
        stagger: 0.08,
        ease: "power2.out"
      })
      
      // Animation 5: Color Cascade
      .to({}, { duration: 1 }) // pause
      .to(letters, {
        duration: 0.5,
        color: "#ff6b6b",
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.5,
        color: "#4ecdc4",
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.5,
        color: "#45b7d1",
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.5,
        color: "#96ceb4",
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.5,
        color: "#ffeaa7",
        stagger: 0.1,
        ease: "power2.out"
      })
      .to(letters, {
        duration: 1,
        color: "#ffffff",
        stagger: 0.1,
        ease: "power2.out"
      });

      return tl;
    };

    // Continuous subtle floating animation
    letters.forEach((letter, index) => {
      if (letter) {
        gsap.to(letter, {
          duration: 3 + index * 0.3,
          y: -8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
        
        // Individual letter rotation
        gsap.to(letter, {
          duration: 4 + index * 0.5,
          rotation: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1
        });
      }
    });

    // Start main animation cycle
    setTimeout(() => {
      timelineRef.current = createInfiniteAnimation();
    }, 3000);
  };

  const letters = "Rifat".split("");

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Creatively Animated Logo */}
        <div className="flex items-center space-x-1">
          <h2 className="font-bold text-xl text-white font-serif md:text-2xl">Rifat</h2>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative text-white capitalize font-medium hover:text-cyan-300 transition-colors"
              >
                {activeSection === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-cyan-400 rounded"
                  />
                )}
                <span className={activeSection === item ? "text-cyan-300" : ""}>
                  {item}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-cyan-300"
          onClick={() => setIsMobile(!isMobile)}
        >
          <Menu />
        </Button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMobile && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 pb-4 space-y-3 bg-[#0a1e3b] text-white"
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block capitalize hover:text-cyan-300 transition-colors"
                onClick={() => setIsMobile(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}