import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBagIcon, CurrencyDollarIcon, BeakerIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function UseCasesSection() {
  const [useCasesRef, useCasesInView] = useInView({ triggerOnce: true });

  return (
    <section ref={useCasesRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Industry Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how businesses across different industries leverage our market intelligence to drive growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShoppingBagIcon,
              title: "E-commerce",
              benefits: [
                "Optimize pricing strategies",
                "Track competitor promotions",
                "Analyze customer behavior",
                "Identify market trends"
              ],
              color: "blue"
            },
            {
              icon: CurrencyDollarIcon,
              title: "Finance",
              benefits: [
                "Monitor market sentiment",
                "Track regulatory changes",
                "Analyze investment trends",
                "Assess competitive landscape"
              ],
              color: "green"
            },
            {
              icon: BeakerIcon,
              title: "Healthcare",
              benefits: [
                "Track industry developments",
                "Monitor patient sentiment",
                "Analyze treatment trends",
                "Assess market needs"
              ],
              color: "purple"
            },
            {
              icon: TruckIcon,
              title: "Logistics",
              benefits: [
                "Optimize route planning",
                "Track industry capacity",
                "Monitor fuel prices",
                "Analyze demand patterns"
              ],
              color: "orange"
            }
          ].map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow group cursor-pointer
                ${useCase.color === 'blue' ? 'hover:bg-blue-50' : ''}
                ${useCase.color === 'green' ? 'hover:bg-green-50' : ''}
                ${useCase.color === 'purple' ? 'hover:bg-purple-50' : ''}
                ${useCase.color === 'orange' ? 'hover:bg-orange-50' : ''}`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
                ${useCase.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                ${useCase.color === 'green' ? 'bg-green-100 text-green-600' : ''}
                ${useCase.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                ${useCase.color === 'orange' ? 'bg-orange-100 text-orange-600' : ''}`}
              >
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-gray-600 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0
                      ${useCase.color === 'blue' ? 'bg-blue-400' : ''}
                      ${useCase.color === 'green' ? 'bg-green-400' : ''}
                      ${useCase.color === 'purple' ? 'bg-purple-400' : ''}
                      ${useCase.color === 'orange' ? 'bg-orange-400' : ''}`}
                    ></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className={`mt-4 text-sm font-semibold group-hover:translate-x-2 transition-transform
                ${useCase.color === 'blue' ? 'text-blue-600' : ''}
                ${useCase.color === 'green' ? 'text-green-600' : ''}
                ${useCase.color === 'purple' ? 'text-purple-600' : ''}
                ${useCase.color === 'orange' ? 'text-orange-600' : ''}`}
              >
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>

        <div className="my-16">
          <h3 className="text-2xl font-bold mb-2">Retail</h3>
          <p className="text-gray-600 mb-4">
            Achieved a 15% sales boost with on-demand competitor pricing data.
          </p>
          {/* ...similar layout for other industries... */}
        </div>
      </div>
    </section>
  );
}