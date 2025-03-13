import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-metallic-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-metallic-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-metallic-800 dark:text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              Certifications
            </h3>
            <div className="space-y-6">
              {['MongoDB', 'Java', 'C'].map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-metallic-100 dark:bg-metallic-800 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-metallic-800 dark:text-white">
                      {cert} Certification
                    </h4>
                    <p className="text-metallic-500 dark:text-metallic-400 text-sm">
                      Professional Level
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-metallic-800 dark:text-white mb-8 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              Achievements
            </h3>
            <div className="space-y-6">
              {[
                'National Level Hackathon Participant',
                'Technical Workshop Certifications'
              ].map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-metallic-100 dark:bg-metallic-800 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                    <Trophy className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-metallic-800 dark:text-white">
                      {achievement}
                    </h4>
                    <p className="text-metallic-500 dark:text-metallic-400 text-sm">
                      {index === 0 ? '2023' : 'Multiple Certifications'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;