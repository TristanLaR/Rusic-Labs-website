import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TransformationSection() {
  const [transformRef, transformInView] = useInView({ triggerOnce: true });

  return (
    <section ref={transformRef} className="py-24 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={transformInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Data-Driven Decisions, Delivered</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your business strategy with real-time market intelligence and actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Confidence in Every Move",
              description: "Make strategic decisions backed by comprehensive real-time data analysis."
            },
            {
              title: "Optimized Strategies",
              description: "Save time and resources with targeted actions based on accurate market insights."
            },
            {
              title: "Competitive Superiority",
              description: "Stay ahead of the competition with predictive analytics and trend forecasting."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={transformInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-white shadow-lg"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-primary-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}