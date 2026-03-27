import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "James T.",
    role: "Homeowner, London",
    text: "Dev & D Construction transformed our outdated house into a modern masterpiece. Their attention to detail and communication throughout the renovation was phenomenal. Highly recommended!"
  },
  {
    name: "Sarah Jenkins",
    role: "Property Developer",
    text: "As a developer, I need contractors who are reliable and stick to the budget. The team at Dev & D delivered our recent 4-flat conversion perfectly on time. Great craftsmanship."
  },
  {
    name: "Michael R.",
    role: "Business Owner",
    text: "We hired them for a complete commercial office fit-out. The disruption to our operations was minimal, and the final result exceeded our expectations. A truly professional outfit."
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-[#f8f9fa] border-y border-gray-200 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 skew-x-12 mr-32 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-2"
          >
            Client Reviews
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900"
          >
            What They Say <span className="text-primary">About Us</span>
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm relative">
                    <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-8 relative z-10">
                      "{review.text}"
                    </p>
                    
                    <div>
                      <div className="font-bold text-lg text-gray-900">{review.name}</div>
                      <div className="text-primary text-sm font-medium">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={scrollPrev} 
              className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext} 
              className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
