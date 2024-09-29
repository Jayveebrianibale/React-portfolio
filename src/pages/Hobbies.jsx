import { useRef } from 'react';
import { motion } from 'framer-motion';
import useInView from '../components/useInView'; // Ensure this hook is correctly imported
import Basket from '../assets/Basket.jpg';
import Music from '../assets/Music.jpg';
import Skies from '../assets/Skies.jpg';
import Camera from '../assets/Camera.jpg';
import Hikes from '../assets/Hikes.jpg';
import Movies from '../assets/Movies.jpg';

function Hobbies() {
  const ref = useRef();
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Quickstart with my Hobbies</h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 text-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { img: Basket, title: "Basketball" },
            { img: Music, title: "Music" },
            { img: Skies, title: "Watching Skies" },
            { img: Camera, title: "Photography" },
            { img: Hikes, title: "Hiking" },
            { img: Movies, title: "Watching Movies" }
          ].map((hobby, index) => (
            <motion.a
              key={index}
              className="block rounded-xl border border-gray-800 dark:border-gray-600 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: index * 0}}
            >
              <img className='rounded-xl' src={hobby.img} alt={hobby.title} />

              <h2 className="mt-4 text-xl font-bold text-black dark:text-white">{hobby.title}</h2>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                distinctio alias voluptatum blanditiis laudantium.
              </p>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center h-20 border-gray-300 dark:border-gray-600">
        <div className="w-[80%] border-b border-gray-400 dark:border-gray-700"></div>
      </div>
    </section>
  );
}

export default Hobbies;
