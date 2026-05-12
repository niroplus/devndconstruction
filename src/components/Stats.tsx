import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "100%", label: "On-Time Delivery" },
];

export default function Stats() {
  return (
    <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-8 overflow-hidden relative">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
        
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`text-center ${idx !== stats.length - 1 ? 'md:border-r border-border/50' : ''} px-4`}
          >
            <div className="text-4xl md:text-5xl font-display font-black text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
