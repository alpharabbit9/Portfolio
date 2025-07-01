import React from 'react';
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';




const ContactMe = () => {
    return (
        <div id='contact' className='py-16 px-4'>
            <h2 className="text-4xl text-center text-cyan-400 font-bold mb-4 mx-auto">
                Get in Touch
            </h2>

           









            <p className='text-center text-gray-400 text-lg md:text-xl mt-4'>
                Let's turn your ideas into reality. Whether you have a project in mind or just want <br className='hidden md:block' /> to say hello, I'm always open to new opportunities.
            </p>

            <div className='mt-10 flex flex-col md:flex-row gap-8'>
                {/* Left Info Section */}
                <div className='w-full md:w-1/2'>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-300'>
                        Your Idea, My Code
                    </h3>
                    <p className='text-md md:text-lg text-gray-400 mt-3'>
                        Whether it’s a bug, a build, or a brainstorm — I’m just a message away.
                    </p>

                    {/* Contact Details */}
                    <div className='space-y-6 mt-6'>
                        {/* Location */}
                        <div className='text-white border p-6 bg-[#12253A] rounded-3xl'>
                            <p className='flex items-center gap-2 text-lg font-bold'>
                                <FaLocationDot /> Location
                            </p>
                            <p className='text-lg'>Sylhet, Bangladesh</p>
                        </div>

                        {/* Email */}
                        <div className='text-white border p-6 bg-[#12253A] rounded-3xl'>
                            <p className='flex items-center gap-2 text-lg font-bold'>
                                <MdOutlineMailOutline /> Email
                            </p>
                            <p className='text-lg'>rifatahm033@gmail.com</p>
                        </div>

                        {/* Availability */}
                        <div className='text-white border p-6 bg-[#12253A] rounded-3xl'>
                            <p className='flex items-center gap-2 text-lg font-bold'>
                                <FaClock /> Availability
                            </p>
                            <p className='text-lg'>Open for freelance opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className='w-full md:w-1/2 p-6 md:p-10 bg-[#12253A] text-white rounded-2xl border'>
                    {/* Name */}
                    <fieldset className="mt-4">
                        <legend className="text-gray-500 mb-2">Name</legend>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border"
                        />
                    </fieldset>

                    {/* Email */}
                    <fieldset className="mt-4">
                        <legend className="text-gray-500 mb-2">Email</legend>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border"
                        />
                    </fieldset>

                    {/* Message */}
                    <fieldset className="mt-4">
                        <legend className="text-gray-500 mb-2">Message</legend>
                        <textarea
                            placeholder="Your Message"
                            className="w-full h-32 p-3 rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:400%_400%] animate-gradient-x border resize-none"
                        />
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
