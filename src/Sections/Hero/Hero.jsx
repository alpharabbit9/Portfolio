import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown, Download, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
    const containerRef = useRef(null);
    const particlesRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const particles = particlesRef.current;
        
        // GSAP Timeline for complex animations
        const tl = gsap.timeline();
        
        // Animated background particles
        gsap.set(".particle", {
            x: () => gsap.utils.random(-50, window.innerWidth + 50),
            y: () => gsap.utils.random(-50, window.innerHeight + 50),
            scale: () => gsap.utils.random(0.1, 0.8),
            opacity: () => gsap.utils.random(0.1, 0.6),
        });

        gsap.to(".particle", {
            duration: () => gsap.utils.random(20, 40),
            x: () => gsap.utils.random(-100, window.innerWidth + 100),
            y: () => gsap.utils.random(-100, window.innerHeight + 100),
            rotation: 360,
            repeat: -1,
            ease: "none",
            stagger: {
                each: 0.1,
                from: "random"
            }
        });

        // Text reveal animation
        gsap.fromTo(".hero-text", 
            { 
                y: 100, 
                opacity: 0,
                rotationX: 90
            },
            { 
                y: 0, 
                opacity: 1,
                rotationX: 0,
                duration: 1.2,
                delay: 0.5,
                stagger: 0.2,
                ease: "back.out(1.7)"
            }
        );

        // Floating animation for social icons
        gsap.to(".social-icon", {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            stagger: 0.3
        });

        return () => {
            tl.kill();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            ref={containerRef}
            id="home"
            className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden flex items-center justify-center text-white p-6 md:p-16 py-28"
        >
            {/* Animated Background Particles */}
            <div ref={particlesRef} className="absolute inset-0 z-0">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
                    />
                ))}
            </div>

            {/* Glass Morphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5 backdrop-blur-sm z-0"></div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-between px-8 lg:px-16 lg:py-16">
                {/* Left Side - Profile Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6"
                >
                    {/* Profile Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center lg:items-start space-y-6"
                    >
                    {/* Enhanced Profile Image */}
                    <div className="relative">
                        {/* Outer Animated Ring */}
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-sm"
                        />
                        
                        {/* Middle Glow Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -inset-2 bg-cyan-400 rounded-full opacity-40 blur-md"
                        />

                        {/* Profile Image */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm"
                        >
                            <img
                                src={profile}
                                alt="Rifat"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </motion.div>
                    </div>

                        {/* Name and Title */}
                        <div className="text-center lg:text-left space-y-3">
                            <motion.h1 
                                variants={itemVariants}
                                className="hero-text text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight"
                            >
                                Hello, I'm{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                                    <Typewriter
                                        words={[
                                            "Rifat",
                                            "a Full Stack Developer",
                                            "a React Specialist",
                                            "a Problem Solver",
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                </span>
                            </motion.h1>

                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center justify-center lg:justify-start space-x-2 text-lg sm:text-xl text-gray-300"
                            >
                                <MapPin size={20} className="text-cyan-400" />
                                <span>Sylhet, Bangladesh</span>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p 
                            variants={itemVariants}
                            className="hero-text text-center lg:text-left text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed"
                        >
                            Passionate about creating beautiful, functional web experiences 
                            with modern technologies and innovative solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-6"
                        >
                            <a href="/Rifat Resume.pdf" download>
                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
                                >
                                    <Download size={18} />
                                    <span>Download Resume</span>
                                    <motion.div
                                        className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10"
                                        initial={false}
                                        animate={{ scale: [0, 1] }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.button>
                            </a>

                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "#06b6d4"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-gray-400 hover:border-cyan-400 text-white font-semibold rounded-full transition-all duration-300"
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                        {/* Social Media Icons */}
                        {/* <motion.div 
                            variants={itemVariants}
                            className="flex space-x-6 pt-8"
                        >
                            {[
                                { icon: "💼", label: "LinkedIn", href: "#" },
                                { icon: "📱", label: "Facebook", href: "#" },
                                { icon: "🐙", label: "GitHub", href: "#" },
                                { icon: "✉️", label: "Email", href: "mailto:contact@rifat.com" },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    className="social-icon w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl hover:bg-cyan-500/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50"
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 5
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div> */}
                    </motion.div>
                </motion.div>

                {/* Right Side - Creative Visual Element */}
                <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative">
                    {/* Floating Code Blocks */}
                    <div className="relative w-96 h-96">
                        {/* Main Code Window */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute top-0 right-0 w-80 h-48 bg-gray-900/80 backdrop-blur-md rounded-lg border border-cyan-400/30 shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-400 ml-2">portfolio.js</span>
                            </div>
                            <div className="p-4 text-sm font-mono text-green-400">
                                <div className="text-purple-400">const</div>
                                <div className="text-cyan-400">developer = {`{`}</div>
                                <div className="ml-4 text-orange-400">name: "Rifat",</div>
                                <div className="ml-4 text-blue-400">skills: ["React", "Node.js"],</div>
                                <div className="ml-4 text-pink-400">passion: "Innovation"</div>
                                <div className="text-cyan-400">{`}`}</div>
                            </div>
                        </motion.div>

                        {/* Floating Tech Icons */}
                        {[
                            { name: "React", icon: "⚛️", position: "top-12 left-8", delay: 0.8 },
                            { name: "JavaScript", icon: "🟨", position: "top-24 right-12", delay: 1.0 },
                            { name: "Node.js", icon: "🟢", position: "bottom-32 left-4", delay: 1.2 },
                            { name: "CSS", icon: "🎨", position: "bottom-16 right-16", delay: 1.4 },
                            { name: "Git", icon: "📋", position: "top-8 right-32", delay: 1.6 }
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    y: [0, -10, 0]
                                }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: tech.delay,
                                    y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className={`absolute ${tech.position} w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/20 shadow-lg`}
                            >
                                {tech.icon}
                            </motion.div>
                        ))}

                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <motion.path
                                d="M100 100 Q200 150 300 200"
                                stroke="rgba(6, 182, 212, 0.3)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 2 }}
                            />
                            <motion.path
                                d="M150 80 Q250 120 350 160"
                                stroke="rgba(147, 51, 234, 0.3)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 2.5 }}
                            />
                        </svg>

                        {/* Floating Geometric Shapes */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute bottom-8 left-16 w-12 h-12 border-2 border-cyan-400/50 rotate-45"
                        />

                        <motion.div
                            animate={{
                                rotate: -360,
                                y: [0, -20, 0]
                            }}
                            transition={{
                                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="absolute top-16 left-32 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-60"
                        />
                    </div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                    opacity: [0.5, 1, 0.5],
                    y: [0, 10, 0] 
                }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: 2
                }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}