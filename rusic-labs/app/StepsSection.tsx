import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StepsSection() {
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true });

  const steps = [
    {
      title: 'Share Your Goals',
      description: 'Tell us about your market intelligence needs, target metrics, and unique challenges.'
    },
    {
      title: 'We Gather & Analyze',
      description: 'Our team uses advanced methods to collect real-time data and deliver personalized insights.'
    },
    {
      title: 'Receive Actionable Reports',
      description: 'Get clear, data-driven recommendations to optimize decisions and drive business growth.'
    }
  ];

  return (
    <section ref={stepsRef} className="py-24 bg-gray-50">
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
            <li key={index} className="relative pl-20 pb-16 last:pb-0">
              {/* Timeline line */}
              <div 
                className={`absolute left-[25px] top-0 h-full w-[3px] ${
                  index === steps.length - 1 ? 'h-8' : 'h-full'
                } bg-gradient-to-b from-blue-500/80 to-blue-200/50`} 
              />
              
              {/* Timeline circle */}
              <div className="absolute left-0 top-0">
                <div className="relative flex items-center justify-center w-[50px] h-[50px]">
                  <span className="absolute inset-0 animate-ping bg-blue-100 rounded-full opacity-30" />
                  <span className="relative flex items-center justify-center w-full h-full bg-white rounded-full shadow-md border-2 border-blue-500">
                    <span className="text-blue-600 font-bold text-lg">
                      {index + 1}
                    </span>
                  </span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-gray-800 flex items-center">
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