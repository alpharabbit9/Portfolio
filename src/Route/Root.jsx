import React from 'react';
import Hero from '../Sections/Hero/Hero';
import Navbar from '../components/ui/Navbar/navbar';
import About from '../Sections/About/About';
import { Contact } from 'lucide-react';
import ContactMe from '../Sections/ContactMe/ContactMe';
import TechStack from '../Sections/TechStack.jsx/TechStack';

// make sure path is correct

const Root = () => {
    return (
        <div className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x min-h-screen">
             <div className="absolute inset-0 bg-white/5 backdrop-blur-md z-0"></div>
            <Navbar />

            <Hero />
            <About></About>
            <TechStack></TechStack>
            <ContactMe></ContactMe>
            
        </div>
    );
};

export default Root;
