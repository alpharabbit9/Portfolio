import React, { useEffect, useRef } from 'react';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientText from '../../components/ui/GradientText';
import Particles from '../../Particle/Particles';
import ShinyText from '../../components/ui/ShinyText';
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    const headerRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate header and subtitle first
            gsap.fromTo(headerRef.current,
                {
                    opacity: 0,
                    y: -50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            gsap.fromTo(subtitleRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate left section from left
            gsap.fromTo(leftSectionRef.current,
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftSectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate right section from right
            gsap.fromTo(rightSectionRef.current,
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    delay: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightSectionRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate individual info cards with stagger
            gsap.fromTo(leftSectionRef.current.querySelectorAll('.info-card'),
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftSectionRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate form fields with stagger
            gsap.fromTo(rightSectionRef.current.querySelectorAll('fieldset'),
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: 1.2,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: rightSectionRef.current,
                        start: "top 70%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <div id='contact' className='relative py-16 px-4 overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x'>
            {/* Particles Background */}
            <div className='absolute inset-0 z-0'>
                <Particles
                    particleColors={['#ffffff', '#38bdf8']}
                    particleCount={120}
                    particleSpread={10}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            {/* Content */}
            <div className='relative z-10 px-8 '>
                <div ref={headerRef}>
                    <GradientText
                        colors={['#38bdf8', '#06b6d4', '#14b8a6', '#22c55e', '#38bdf8']}
                        animationSpeed={2.5}
                        showBorder={false}
                        className='text-4xl font-extrabold text-center'
                    >
                        <h2>Get in Touch</h2>
                    </GradientText>
                </div>

                <div className='text-center mt-3' ref={subtitleRef}>
                    <ShinyText text=" Let's turn your ideas into reality. Whether you have a project in mind or just want
           to say hello, I'm always open to new opportunities." disabled={false} speed={3} className='custom-class text-center' />

                </div>



                <div className='mt-10 flex flex-col md:flex-row gap-8'>

                    {/* Left Info Section */}
                    <div className='w-full md:w-1/2' ref={leftSectionRef}>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-300'>
                            Your Idea, My Code
                        </h3>
                        <p className='text-md md:text-lg text-gray-400 mt-3'>
                            Whether it's a bug, a build, or a brainstorm — I'm just a message away.
                        </p>

                        <div className='space-y-6 mt-6'>
                            {/* Location */}
                            <div className='info-card text-white border p-6 bg-[#12253A] rounded-3xl'>
                                <p className='flex items-center gap-2 text-lg font-bold'>
                                    <FaLocationDot /> Location
                                </p>
                                <p className='text-lg'>Sylhet, Bangladesh</p>
                            </div>

                            {/* Email */}
                            <div className='info-card text-white border p-6 bg-[#12253A] rounded-3xl'>
                                <p className='flex items-center gap-2 text-lg font-bold'>
                                    <MdOutlineMailOutline /> Email
                                </p>
                                <p className='text-lg'>rifatahm033@gmail.com</p>
                            </div>

                            {/* Availability */}
                            <div className='info-card text-white border p-6 bg-[#12253A] rounded-3xl'>
                                <p className='flex items-center gap-2 text-lg font-bold'>
                                    <FaClock /> Availability
                                </p>
                                <p className='text-lg'>Open for freelance opportunities</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className='w-full md:w-1/2 p-6 md:p-10 bg-[#12253A] text-white rounded-2xl border' ref={rightSectionRef}>
                        <div className='mx-auto flex gap-3 justify-evenly'>
                            <div >
                                <a target='_blank' href="https://www.facebook.com/rifath.ahmed.188478/">
                                    <FaFacebookSquare  className='text-2xl text-cyan-400'/>
                                </a>
                            </div>
                            <div >
                                <a target='_blank' href="https://github.com/alpharabbit9">
                                <FaGithub  className='text-2xl text-cyan-400'/>
                                </a>
                            </div>
                            <div >
                                <a target='_blank' href="https://www.linkedin.com/in/rifat-ahmed-05a5742b6/">
                                <FaLinkedinIn  className='text-2xl text-cyan-400'/>
                                </a>
                            </div>
                        </div>
                        {/* Name */}
                        <fieldset className='mt-4'>
                            <legend className='text-gray-500 mb-2'>Name</legend>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='w-full p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border'
                            />
                        </fieldset>

                        {/* Email */}
                        <fieldset className='mt-4'>
                            <legend className='text-gray-500 mb-2'>Email</legend>
                            <input
                                type='email'
                                placeholder='Your Email'
                                className='w-full p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border'
                            />
                        </fieldset>

                        {/* Message */}
                        <fieldset className='mt-4'>
                            <legend className='text-gray-500 mb-2'>Message</legend>
                            <textarea
                                placeholder='Your Message'
                                className='w-full h-32 p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border resize-none'
                            />
                        </fieldset>

                        <button className='btn bg-cyan-400 px-6 py-2 text-white mt-3 rounded-3xl'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;