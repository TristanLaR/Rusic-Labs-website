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
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Empower Your Business with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"> Real-Time Intelligence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Uncover insights that drive decisions, optimize strategies, and outpace the competition with our advanced market intelligence solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Request Free Consultation
          </button>
        </div>
        <div className="mt-12 text-sm text-gray-300">
          Trusted by over 100 leading businesses globally | Rated 4.9/5 for actionable insights
        </div>
      </motion.div>
    </section>
  );
}