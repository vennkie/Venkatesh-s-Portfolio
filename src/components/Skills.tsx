import React from 'react';
import { Code2, Globe, Database, Wrench, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillCard
            icon={<Code2 className="w-8 h-8" />}
            title="Languages"
            skills={['Java', 'C', 'SQL']}
          />
          <SkillCard
            icon={<Globe className="w-8 h-8" />}
            title="Web Development"
            skills={['HTML', 'CSS', 'JavaScript', 'MERN Stack']}
          />
          <SkillCard
            icon={<Database className="w-8 h-8" />}
            title="Databases"
            skills={['MySQL', 'MongoDB', 'Firebase']}
          />
          <SkillCard
            icon={<Wrench className="w-8 h-8" />}
            title="Frameworks & Tools"
            skills={['React', 'Node.js', 'Express.js']}
          />
          <SkillCard
            icon={<Brain className="w-8 h-8" />}
            title="Other Skills"
            skills={['Data Structures & Algorithms (DSA)', 'RESTful APIs', 'Git']}
          />
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="text-primary-600 dark:text-primary-400 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li 
            key={index}
            className="text-gray-600 dark:text-gray-300 flex items-center gap-3 text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;