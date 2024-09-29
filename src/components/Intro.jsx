/* eslint-disable react/no-unescaped-entities */

import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from './useInView';
import Beach from '../assets/Beach.jpeg';
import Student from '../assets/Student.jpeg';

function Intro() {
    const ref = useRef();
    const isInView = useInView(ref);

    return (
        <section className="bg-white dark:bg-gray-900 text-black dark:text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <motion.div
                        className="lg:py-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 1}}
                        ref={ref}
                    >
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Hello, <span> I'm Jayvee Brian Ibale</span>
                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                            quidem quam repellat.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded bg-indigo-600 dark:bg-indigo-700 px-12 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Learn More About Me
                        </a>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <motion.img
                            alt="Student"
                            src={Student}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                            transition={{ duration: 1, delay: 0 }}
                        />

                        <motion.img
                            alt="Beach"
                            src={Beach}
                            className="h-40 w-full object-cover sm:h-56 md:h-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                            transition={{ duration: 1, delay: 0 }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-20 border-gray-300 dark:border-gray-700">
                <div className="w-[80%] border-b border-gray-400 dark:border-gray-600"></div>
            </div>
        </section>
    );
}

export default Intro;
