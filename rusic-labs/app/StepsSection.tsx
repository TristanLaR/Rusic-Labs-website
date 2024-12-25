import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, ChartBar, BarChart } from 'lucide-react';

export default function StepsSection() {
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true });

  const steps = [
    {
      title: 'Share Your Goals',
      description: 'Tell us about your market intelligence needs, target metrics, and unique challenges.',
      icon: Target
    },
    {
      title: 'We Gather & Analyze',
      description: 'Our team uses advanced methods to collect real-time data and deliver personalized insights.',
      icon: ChartBar
    },
    {
      title: 'Receive Actionable Reports',
      description: 'Get clear, data-driven recommendations to optimize decisions and drive business growth.',
      icon: BarChart
    }
  ];

  return (
    <section ref={stepsRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Getting Started Is Easy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you quickly benefit from actionable market intelligence.
          </p>
        </motion.div>
        <ul className="relative max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <li key={index} className="relative md:pl-24 pl-6 pb-16 last:pb-0">
              {/* Timeline line */}
              <div 
                className={`absolute left-[31px] top-0 ${
                  index === steps.length - 1 ? 'h-8' : 'h-full'
                } w-[2px] bg-gradient-to-b from-blue-500/80 via-blue-300/50 to-transparent`} 
              />
              
              {/* Timeline circle with icon */}
              <div className="absolute left-0 top-0">
                <div className="relative flex items-center justify-center w-[62px] h-[62px]">
                  <span className="absolute inset-0 animate-pulse bg-blue-100 rounded-full opacity-40" />
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-10" />
                  <span className="relative flex items-center justify-center w-full h-full bg-white rounded-full shadow-lg border-2 border-blue-500/30">
                    {React.createElement(step.icon, { 
                      className: "w-6 h-6 text-blue-600",
                      strokeWidth: 2.5 
                    })}
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800 flex items-center gap-3">
                  <span className="text-blue-600 font-mono text-sm px-2 py-1 bg-blue-50 rounded">
                    STEP {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}