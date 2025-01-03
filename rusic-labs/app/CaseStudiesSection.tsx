import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  ChartBarIcon, 
  MagnifyingGlassIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export default function CaseStudiesSection() {
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true });
  type UseCase = 'analysis' | 'research' | 'strategy' | 'innovation';
  const [activeTab, setActiveTab] = useState<UseCase>('analysis');

  const getActiveUseCase = () => {
    const useCases = {
      analysis: {
        icon: MagnifyingGlassIcon,
        title: "Competitive Intelligence",
        description: "Stay ahead of competition with AI-powered competitive intelligence and real-time market insights.",
        features: [
          { title: "Real-time competitor monitoring", description: "Monitor competitors in real-time to stay ahead." },
          { title: "Automated price tracking", description: "Track competitor prices automatically." },
          { title: "Product launch analysis", description: "Analyze competitor product launches." },
          { title: "Market share insights", description: "Gain insights into market share." }
        ]
      },
      research: {
        icon: ChartBarIcon,
        title: "Market Opportunity Detection",
        description: "Identify untapped opportunities and emerging trends before your competitors do.",
        features: [
          { title: "Trend prediction", description: "Predict market trends." },
          { title: "Gap analysis", description: "Analyze market gaps." },
          { title: "Market sizing", description: "Determine market size." },
          { title: "Growth opportunity mapping", description: "Map growth opportunities." }
        ]
      },
      strategy: {
        icon: PresentationChartLineIcon,
        title: "Strategic Decision Making",
        description: "Make confident strategic decisions backed by comprehensive market intelligence.",
        features: [
          { title: "Market entry analysis", description: "Analyze market entry strategies." },
          { title: "Investment opportunity assessment", description: "Assess investment opportunities." },
          { title: "Risk evaluation", description: "Evaluate risks." },
          { title: "Strategic planning support", description: "Support strategic planning." }
        ]
      },
      innovation: {
        icon: LightBulbIcon,
        title: "Product Innovation",
        description: "Drive innovation with data-driven insights into customer needs and market demands.",
        features: [
          { title: "Feature demand analysis", description: "Analyze feature demand." },
          { title: "Customer feedback mining", description: "Mine customer feedback." },
          { title: "Innovation tracking", description: "Track innovations." },
          { title: "Product-market fit assessment", description: "Assess product-market fit." }
        ]
      }
    };
    return useCases[activeTab];
  };

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

        <div className="flex justify-center mb-12 space-x-4">
          {['analysis', 'research', 'strategy', 'innovation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as UseCase)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all
                ${activeTab === tab 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="gap-12">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            {(() => {
              const ActiveIcon = getActiveUseCase().icon;
              return <ActiveIcon className="w-12 h-12 text-primary-600 mb-6" />;
            })()}
            <h3 className="text-2xl font-bold mb-4">{getActiveUseCase().title}</h3>
            <p className="text-gray-600 mb-8">{getActiveUseCase().description}</p>
            <div className="space-y-4">
              {getActiveUseCase().features.map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mt-1 mr-3">
                    <CheckIcon className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}