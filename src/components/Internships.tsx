import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Internships = () => {
  return (
    <section id="internships" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Internships</h2>
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Java Development Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Codsoft IT Solutions</p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2">
                  <Calendar size={16} />
                  <span>December 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Web Development Intern</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Eagle-HiTech Softclou Pvt Ltd</p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2">
                  <Calendar size={16} />
                  <span>February 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;