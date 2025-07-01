import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // your button component
import { Menu } from "lucide-react";

const navItems = ["home", "about","inventory", "projects", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        const scrollY = window.scrollY;

        for (const id of navItems) {
          const section = document.getElementById(id);
          if (section) {
            const offsetTop = section.offsetTop - 100; // adjust offset for fixed navbar
            const offsetHeight = section.offsetHeight;

            if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
              setActiveSection(id);
              break; // stop checking other sections once matched
            }
          }
        }

        throttleTimeout = null;
      }, 100); // throttle every 100ms
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-sm">
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-white">Rifat</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative text-white capitalize font-medium"
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
          className="md:hidden text-white"
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
                className="block capitalize"
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
