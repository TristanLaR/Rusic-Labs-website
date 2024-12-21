import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/outline';

export default function TestimonialsSection() {
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  return (
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
  );
}