import React from 'react';
import { Code, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-screen-xl px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-primary-dark mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-primary-100 dark:border-primary-900"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Code className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Passionate about creating responsive and user-friendly web applications using modern technologies. Experienced in building full-stack applications with React and Node.js.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-primary-100 dark:border-primary-900"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Database className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Database Management</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Experienced in designing and managing both SQL and NoSQL databases for efficient data handling. Proficient in Firebase, MongoDB, and MySQL for building scalable applications.
            </p>
          </motion.div>
         
        </div>
      </div>
    </div>
  );
};

export default About;