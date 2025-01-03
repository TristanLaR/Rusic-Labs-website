import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChartBarIcon, LightBulbIcon, ShieldCheckIcon, AcademicCapIcon, Cog6ToothIcon, TrophyIcon } from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });

  return (
    <div>
      <section ref={featuresRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Our Expertise, Your Success</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your business decisions with our comprehensive market intelligence solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ChartBarIcon,
              title: "Market Trends Analysis",
              description: "Stay ahead with real-time market shifts."
            },
            {
              icon: LightBulbIcon,
              title: "Competitor Tracking",
              description: "Monitor competitor activities and strategies to maintain your edge"
            },
            {
              icon: ShieldCheckIcon,
              title: "Customer Sentiment Analysis",
              description: "Understand your market better with AI-powered sentiment analysis"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
