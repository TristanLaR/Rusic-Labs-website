import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBagIcon, CurrencyDollarIcon, BeakerIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function UseCasesSection() {
  const [useCasesRef, useCasesInView] = useInView({ triggerOnce: true });

  return (
    <section ref={useCasesRef} className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold mb-2 block">INDUSTRY SOLUTIONS</span>
          <h2 className="text-4xl font-display font-bold mb-4">Trusted Across Industries</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join leading companies that use our platform to drive growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: ShoppingBagIcon,
              title: "E-commerce",
              stat: "156%",
              statText: "Average ROI",
              quote: "Transformed our pricing strategy completely.",
              company: "Major EU Retailer"
            },
            {
              icon: CurrencyDollarIcon,
              title: "Finance",
              stat: "2.4x",
              statText: "Faster Analysis",
              quote: "Cut research time by more than half.",
              company: "Global Investment Firm"
            },
            {
              icon: BeakerIcon,
              title: "Healthcare",
              stat: "89%",
              statText: "Accuracy Rate",
              quote: "Better market trend predictions.",
              company: "Healthcare Network"
            },
            {
              icon: TruckIcon,
              title: "Logistics",
              stat: "32%",
              statText: "Cost Reduction",
              quote: "Optimized routes and capacity.",
              company: "Logistics Leader"
            }
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary-500 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 text-primary-400 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary-400">{industry.stat}</div>
                <div className="text-sm text-gray-400">{industry.statText}</div>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-300 italic mb-2">"{industry.quote}"</p>
                <p className="text-xs text-gray-400">{industry.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
            <div className="text-gray-300">Enterprise Clients</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
            <div className="text-gray-300">Retention Rate</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
            <div className="text-gray-300">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}