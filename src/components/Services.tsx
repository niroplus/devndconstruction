import { motion } from "framer-motion";
import { Hammer, Wrench, Home, Trees, Store, Building, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Home Refurbishments & Renovations",
    desc: "From full-property gut refurbs to room-by-room transformations, we deliver high-quality renovations that modernise your home while preserving its character — on time and within budget."
  },
  {
    icon: Wrench,
    title: "Property Maintenance Services",
    desc: "Keeping your property in top condition year-round. We provide reliable, responsive maintenance covering plumbing, electrics, plastering, decorating, and general repairs for residential and commercial landlords alike."
  },
  {
    icon: Home,
    title: "Roofing & Exterior Solutions",
    desc: "From flat roof repairs and re-felting to full pitched roof replacements, fascias, soffits, and guttering — we protect your property from the outside in with durable, weatherproof solutions."
  },
  {
    icon: Trees,
    title: "Landscaping & Outdoor Living",
    desc: "Transform your outdoor space into something extraordinary. We design and build patios, driveways, garden walls, fencing, decking, and bespoke outdoor areas tailored to your lifestyle."
  },
  {
    icon: Store,
    title: "Shop Remodelling",
    desc: "Specialist commercial remodelling for retail units, restaurants, and franchise fit-outs. We work to brand specifications and tight programme schedules, delivering high-impact interiors that attract customers."
  },
  {
    icon: Building,
    title: "Complete Building & Construction Works",
    desc: "Full-scope new build and structural construction projects managed from groundworks to final handover. Whether it's an extension, conversion, or new build, we self-deliver every stage with a skilled in-house team."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            What We Do
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900"
          >
            Our Core <span className="text-primary">Services</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10 group-hover:scale-150" />
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors relative z-10">
                <srv.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{srv.title}</h4>
              <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                {srv.desc}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary hover:underline relative z-10">
                Discuss Project <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
