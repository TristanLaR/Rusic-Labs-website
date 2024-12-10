'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  ArrowPathIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  StarIcon,
  BuildingOfficeIcon,
  DocumentChartBarIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BeakerIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import Head from 'next/head';

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [problemRef, problemInView] = useInView({ triggerOnce: true });
  const [transformRef, transformInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true });
  const [useCasesRef, useCasesInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true });

  return (
    <>
      <Head>
        <title>Rusic Labs - Real-Time Market Intelligence & Data Analysis</title>
        <meta name="description" content="Transform your business with real-time market intelligence, competitor analysis, and data-driven insights. Get actionable intelligence to stay ahead of the competition." />
        <meta name="keywords" content="market intelligence, data analysis, competitor tracking, business intelligence, real-time analytics, data-driven decisions, market trends analysis" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Empower Your Business with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"> Real-Time Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Uncover insights that drive decisions, optimize strategies, and outpace the competition with our advanced market intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-12 text-sm text-gray-300">
              Trusted by over 100 leading businesses globally | Rated 4.9/5 for actionable insights
            </div>
          </motion.div>
        </section>

        {/* Problem Section */}
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
                Without tailored insights, businesses rely on guesswork or outdated data, risking missed opportunities and competitive disadvantages.
              </p>
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

        {/* Transformation Section */}
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

        {/* Features Section */}
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
                  description: "Stay ahead with real-time market insights and predictive analytics"
                },
                {
                  icon: LightBulbIcon,
                  title: "Competitor Tracking",
                  description: "Monitor competitor activities and strategies to maintain your edge"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Customer Sentiment Analysis",
                  description: "Understand your customers better with AI-powered sentiment analysis"
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

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from businesses that have transformed their decision-making with our market intelligence solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Rusic Labs has revolutionized how we approach market analysis. Their real-time insights have helped us stay ahead of trends and make better decisions.",
                  author: "Sarah Chen",
                  position: "CEO",
                  company: "TechVision Global",
                  rating: 5
                },
                {
                  quote: "The competitor tracking feature has been invaluable. We've identified multiple opportunities and improved our market position significantly.",
                  author: "Michael Rodriguez",
                  position: "Marketing Director",
                  company: "Innovate Corp",
                  rating: 5
                },
                {
                  quote: "Their customer sentiment analysis has transformed our product development process. We now understand our customers better than ever.",
                  author: "Emily Thompson",
                  position: "Product Manager",
                  company: "NextGen Solutions",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white shadow-lg"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                  <div className="text-sm text-primary-600">{testimonial.company}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
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

        {/* Use Cases Section */}
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
          </div>
        </section>

        {/* Stats Section */}
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

        {/* Final CTA Section */}
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
      </main>
    </>
  );
}
