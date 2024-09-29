import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../components/useInView';
import Kind from '../assets/Kind.jpg';
import Friend from '../assets/Friend.jpeg';
import Socialize from '../assets/Socialize.jpg';
import Eagerness from '../assets/Eagerness.jpg';
import Workaholic from '../assets/Workaholic.jpeg';
import Pressure from '../assets/Pressure.jpg';

function Skills() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes me <span className="py-2 px-3 md:p-0 text-indigo-700 rounded md:bg-transparent md:dark:bg-transparent">special</span>?
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
            iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
            quibusdam, quos fuga minima.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {[
            { img: Kind, title: "Optimistic and Kind" },
            { img: Friend, title: "Friendly" },
            { img: Socialize, title: "Sociable" },
            { img: Eagerness, title: "Eagerness to Learn" },
            { img: Workaholic, title: "Workaholic" },
            { img: Pressure, title: "Work Under Pressure" }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-start gap-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl text-center font-bold">{skill.title}</h2>
              <motion.img
                className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]"
                src={skill.img}
                alt={skill.title}
                initial={{ scale: 0.9 }}
                animate={{ scale: isInView ? 1 : 1 }} 
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="w-[80%] border-b border-gray-400 dark:border-gray-700"></div>
      </div>
    </section>
  );
}

export default Skills;
