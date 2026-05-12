import { useParams, useLocation } from "wouter";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, MapPin, Clock, Calendar, Wrench } from "lucide-react";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const project = projects.find(p => p.slug === slug);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-600 text-lg">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-primary text-white font-semibold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const otherProjects = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />

      {/* Page content offset for fixed header */}
      <div className="pt-28">

        {/* Breadcrumb / Back */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate("/#projects")}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>

        {/* Hero title area */}
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-2">
              {project.title}
            </h1>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-gray-100">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {project.images.map((image, i) => (
                  <div
                    key={i}
                    className="relative flex-[0_0_100%] min-w-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${image.src}`}
                      alt={image.caption}
                      className="w-full aspect-[16/9] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5 text-gray-900" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === selectedIndex ? "bg-primary w-6" : "bg-white/70"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-sm text-gray-500 text-center italic">
            {project.images[selectedIndex]?.caption}
          </p>
        </motion.div>

        {/* Description + Details */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">

          {/* Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">About This Project</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>

            <div className="mt-8">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-green-800 transition-colors shadow-lg shadow-primary/20"
              >
                Start a Similar Project
              </a>
            </div>
          </motion.div>

          {/* Project Details card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-5">
              <h3 className="font-display font-bold text-gray-900 text-lg">Project Details</h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Location</p>
                  <p className="text-gray-800 font-medium">{project.details.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Year</p>
                  <p className="text-gray-800 font-medium">{project.details.year}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Duration</p>
                  <p className="text-gray-800 font-medium">{project.details.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Scope of Works</p>
                  <p className="text-gray-800 font-medium">{project.details.scope}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Projects */}
        <div className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map(p => (
                <motion.button
                  key={p.id}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer text-left w-full"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${p.coverImg}`}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="inline-block px-2.5 py-0.5 bg-primary text-white text-xs font-bold rounded-full mb-2 self-start">
                      {p.category}
                    </span>
                    <h4 className="text-white font-bold text-lg">{p.title}</h4>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
