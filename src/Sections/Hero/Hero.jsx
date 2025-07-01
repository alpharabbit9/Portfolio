import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
    return (
        <div
            id="home"
            className="relative
             min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x flex items-center justify-center text-white px-4"
        >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md z-0"></div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center"
            >
                {/* Profile Image with Glowing Neon Effect */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto mb-6 w-60 h-60"
                >
                    {/* Outer Glowing Ring */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 0.1, 0.6],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl z-0"
                    />

                    {/* Inner Subtle Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute inset-2 rounded-full bg-cyan-300 blur-xl z-0"
                    />

                    {/* Actual Profile Picture */}
                    <div className="relative z-10 w-full h-full rounded-full border-4 border-cyan-400 shadow-xl overflow-hidden">
                        <img
                            src={profile}
                            alt="Rifat"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Typewriter Text */}
                <h2 className="text-4xl sm:text-6xl font-bold">
                    I am{" "}
                    <span className="text-cyan-300 font-semibold">
                        <Typewriter
                            words={[
                                "Rifat",
                                "a Full Stack Developer",
                                "a React Developer",
                                "a Tech Enthusiast",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>

                <p className="text-xl">from Bangladesh</p>

                {/* CTA Button */}
                <a href="/Rifat.pdf" download>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-lg font-medium shadow-lg"
                    >
                        Download CV
                    </motion.button>
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 z-10 text-white"
            >
                <ChevronDown size={32} strokeWidth={2} />
            </motion.div>
        </div>
    );
}
