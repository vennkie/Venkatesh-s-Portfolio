import type { FC } from 'react';
import { motion } from 'framer-motion';
const Hero: FC = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{ 
        backgroundColor: '#F8F9FA',
        backgroundImage: 'url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-screen-xl px-4 py-8 text-center lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="text-left">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none" style={{ color: '#212529' }}>
            Hi, I'm <span style={{ color: '#007BFF' }}>
              Venkatesh C
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-black">
            A passionate software developer with a keen interest in web development and databases. 
            I love solving complex problems and creating innovative solutions that make a difference.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg transition-colors hover:bg-[#1e90ff]"
              style={{ backgroundColor: '#0088ff' }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border transition-colors hover:bg-[#e6f0ff] hover:border-[#007BFF]"
              style={{ color: '#007BFF', borderColor: '#007BFF' }}
            >
              View Projects
            </a>
          </div>
        </div>
        
        <motion.div 
          className="relative w-80 aspect-square"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.3 }
          }}
        >
          <img
            src="/Venkat_portimag.png"
            alt="Venkatesh C"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;