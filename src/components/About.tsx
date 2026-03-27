import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const values = [
    "Uncompromising Quality & Craftsmanship",
    "Dependable & Transparent Reliability",
    "Strict Adherence to Safety Standards",
    "Guaranteed On-Budget Delivery",
    "100% Client Satisfaction Focus"
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f9fa] border-y border-gray-200 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 -ml-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Building Excellence <br />Since <span className="text-primary">2012</span>
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dev & D Construction Company LTD. is a premier construction firm dedicated to transforming visions into reality. With over a decade of industry experience, we have established ourselves as a dependable UK construction partner.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We specialize in both residential and commercial sectors, managing every phase of the project with meticulous attention to detail. Our philosophy is simple: build it right, build it to last.
            </p>

            <ul className="space-y-4 mb-8">
              {values.map((val, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 font-medium">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  {val}
                </li>
              ))}
            </ul>

            <a href="#projects" className="px-8 py-3.5 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors inline-block shadow-lg">
              Explore Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Styled Accent Block */}
            <div className="relative rounded-2xl bg-white border-l-4 border-primary p-8 md:p-12 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-[100px] opacity-5" />
              
              <div className="mb-8">
                <div className="text-primary font-display font-black text-7xl leading-none mb-2">12+</div>
                <div className="text-xl font-bold text-gray-900 uppercase tracking-wide">Years of Industry Excellence</div>
              </div>

              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">We provide in-depth planning and consultation before a single brick is laid to ensure perfect execution.</p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Sustainable Practices</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Committed to using eco-friendly materials and sustainable building methods wherever possible.</p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#1a6b3a_2px,transparent_2px)] [background-size:10px_10px] opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
