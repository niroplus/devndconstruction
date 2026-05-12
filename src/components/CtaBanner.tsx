import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-white/80 text-xl max-w-xl font-medium">
              Contact us today for a free consultation and no-obligation quote. Let's build something great together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
