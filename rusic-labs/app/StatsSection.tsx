import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatsSection() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true });

  return (
    <section ref={statsRef} className="py-24 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: "100+", label: "Enterprise Clients" },
            { number: "95%", label: "Client Retention" },
            { number: "24/7", label: "Real-time Monitoring" }
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}