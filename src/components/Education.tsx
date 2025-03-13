import React from 'react';
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">B.Tech in Information Technology</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Meenakshi Sundararajan Engineering College</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">2022 - 2026</p>
                <p className="text-gray-600 dark:text-gray-300">CGPA: 8.5</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-start gap-4">
              <School className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Higher Secondary</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Senthil Matric Hr. Sec. School</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">2022</p>
                <p className="text-gray-600 dark:text-gray-300">Percentage: 91%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;