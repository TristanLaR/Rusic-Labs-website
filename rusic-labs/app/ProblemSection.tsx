import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowPathIcon, UserGroupIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

export default function ProblemSection() {
  const [problemRef, problemInView] = useInView({ triggerOnce: true });

  return (
    <section ref={problemRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={problemInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">The Cost of Staying in the Dark</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lost opportunities. Outdated strategies. Each day without real-time intel widens the gap between you and the competition.
          </p>
          <ul className="text-xl text-gray-600 max-w-2xl mx-auto">
            <li><strong>Wasted Resources</strong> – Higher costs, slower growth</li>
            <li><strong>Hidden Risks</strong> – Decisions made on guesswork</li>
            <li><strong>Falling Behind</strong> – Competitors gain an edge</li>
          </ul>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ArrowPathIcon,
              title: "Missed Market Trends",
              description: "Falling behind in fast-moving markets due to delayed or incomplete market intelligence."
            },
            {
              icon: UserGroupIcon,
              title: "Inefficient Strategies",
              description: "Wasting resources on misaligned decisions based on outdated or incomplete data."
            },
            {
              icon: CubeTransparentIcon,
              title: "Lost Competitive Edge",
              description: "Competitors gaining advantage through better market insights and faster decision-making."
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={problemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-red-50 border border-red-100"
            >
              <problem.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}