import { motion } from "framer-motion";
import { Users, Award, Clock, MessageSquare, CreditCard, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Team", desc: "Our workforce consists of highly trained, certified professionals." },
  { icon: Award, title: "High Quality Finishes", desc: "We never cut corners. Every detail is finished to perfection." },
  { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensures we meet your deadlines." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "You are kept in the loop at every stage of the construction process." },
  { icon: CreditCard, title: "Competitive Pricing", desc: "Premium quality builds delivered at fair, market-competitive rates." },
  { icon: ShieldCheck, title: "Trusted & Certified", desc: "Fully licensed and insured for both residential and commercial projects." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#1a6b3a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Why Choose <span className="text-yellow-400">Dev & D</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            We don't just build structures; we build relationships. Here's why clients consistently trust us with their most important projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-colors">
                <item.icon className="w-5 h-5 text-yellow-400 group-hover:text-[#1a6b3a] transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
