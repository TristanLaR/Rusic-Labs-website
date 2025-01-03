import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export default function CaseStudiesSection() {
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true });

  const useCases = [
    {
      icon: MagnifyingGlassIcon,
      title: "Competitive Intelligence",
      description: "Stay ahead of competition with AI-powered competitive intelligence and real-time market insights.",
      features: [
        "Real-time competitor monitoring",
        "Automated price tracking",
        "Product launch analysis",
        "Market share insights"
      ]
    },
    {
      icon: ChartBarIcon,
      title: "Market Opportunity Detection",
      description: "Identify untapped opportunities and emerging trends before your competitors do.",
      features: [
        "Trend prediction",
        "Gap analysis",
        "Market sizing",
        "Growth opportunity mapping"
      ]
    },
    {
      icon: PresentationChartLineIcon,
      title: "Strategic Decision Making",
      description: "Make confident strategic decisions backed by comprehensive market intelligence.",
      features: [
        "Market entry analysis",
        "Investment opportunity assessment",
        "Risk evaluation",
        "Strategic planning support"
      ]
    },
    {
      icon: LightBulbIcon,
      title: "Product Innovation",
      description: "Drive innovation with data-driven insights into customer needs and market demands.",
      features: [
        "Feature demand analysis",
        "Customer feedback mining",
        "Innovation tracking",
        "Product-market fit assessment"
      ]
    }
  ];

  return (
    <section ref={caseStudiesRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <span className="text-primary-600 font-semibold mb-2 block">PLATFORM CAPABILITIES</span>
          <h2 className="text-4xl font-display font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how our platform adapts to your specific needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {useCase.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <CheckIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}