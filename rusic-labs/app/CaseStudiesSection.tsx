import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BuildingOfficeIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesSection() {
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true });

  return (
    <section ref={caseStudiesRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading businesses have achieved remarkable results with our market intelligence solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: BuildingOfficeIcon,
              title: "E-commerce Giant Optimizes Pricing Strategy",
              industry: "E-commerce",
              results: [
                "35% increase in profit margins",
                "50% faster market response time",
                "20% improvement in customer satisfaction"
              ],
              description: "Learn how a leading e-commerce company used our real-time market intelligence to optimize their pricing strategy and improve customer satisfaction."
            },
            {
              icon: DocumentChartBarIcon,
              title: "Tech Startup Outmaneuvers Competitors",
              industry: "Technology",
              results: [
                "2x faster product development",
                "40% increase in market share",
                "60% better feature prioritization"
              ],
              description: "Discover how a tech startup used our competitor tracking to identify market gaps and accelerate their growth."
            }
          ].map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <study.icon className="w-12 h-12 text-primary-600 mb-4" />
              <div className="text-sm text-primary-600 mb-2">{study.industry}</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-600 transition-colors">{study.title}</h3>
              <p className="text-gray-600 mb-6">{study.description}</p>
              <div className="my-16">
                <img src="/logos/client-logo.png" alt="Client Logo" className="h-8 mb-4" />
                <ul>
                  <li><strong>+40%</strong> conversion rate increase</li>
                </ul>
              </div>
              <div className="space-y-2">
                {study.results.map((result, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                    {result}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                Read Full Case Study →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}