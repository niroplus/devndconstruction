import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Modern Home Extension", category: "Residential", img: "portfolio-1.png" },
  { id: 2, title: "Luxury Full Renovation", category: "Refurbishment", img: "portfolio-2.png" },
  { id: 3, title: "Tech Office Fit-Out", category: "Commercial", img: "portfolio-3.png" },
  { id: 4, title: "Geometric Landscaping", category: "External Works", img: "portfolio-4.png" },
  { id: 5, title: "High-End Bathroom", category: "Interior", img: "portfolio-5.png" },
  { id: 6, title: "New Build Residence", category: "New Build", img: "portfolio-6.png" },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
            >
              Our Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h3>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact" 
            className="text-gray-900 hover:text-primary font-semibold flex items-center gap-2 transition-colors"
          >
            Start Your Project <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <img 
                src={`${import.meta.env.BASE_URL}images/${project.img}`} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 self-start">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="w-0 h-0.5 bg-primary group-hover:w-12 transition-all duration-500" />
              </div>

              {/* Hover Button */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                <ArrowUpRight className="w-6 h-6 text-gray-900" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
