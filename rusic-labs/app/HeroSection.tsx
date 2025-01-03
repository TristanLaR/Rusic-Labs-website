import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center z-10"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
          Empower Your Business with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"> Real-Time Intelligence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Unlock data-driven strategies to optimize decisions and outpace competitors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary relative overflow-hidden group bg-gradient-to-r from-blue-500 to-teal-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Request Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </div>
        {/* <div className="mt-12 text-sm text-gray-300">
          Trusted by over 100 leading businesses globally | Rated 4.9/5 for actionable insights
        </div> */}
      </motion.div>
    </section>
  );
}