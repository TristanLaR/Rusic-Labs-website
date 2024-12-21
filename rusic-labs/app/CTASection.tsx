import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CTASection() {
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true });

  return (
    <section ref={ctaRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation and discover how our market intelligence can drive your success.
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Schedule Your Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )}
