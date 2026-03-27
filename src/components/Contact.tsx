import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Paperclip, X } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selected]);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      (e.target as HTMLFormElement).reset();
      setFiles([]);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
              Let's Discuss Your <span className="text-primary">Project</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="07479844578"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Project Details *</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              {/* File Attachment */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Attachments <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div
                  className="w-full border-2 border-dashed border-gray-300 rounded-xl px-4 py-5 flex flex-col items-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                  <p className="text-sm text-gray-500 group-hover:text-primary transition-colors text-center">
                    Click to attach files <span className="text-gray-400">(plans, photos, documents)</span>
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                  />
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <ul className="space-y-2 mt-2">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Paperclip className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-gray-700 truncate">{file.name}</span>
                          <span className="text-gray-400 shrink-0">
                            ({(file.size / 1024).toFixed(0)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-green-800 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-1">Office Location</h5>
                    <p className="text-gray-600">12 Builder's Way, London<br/>SE1 7PB, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-1">Phone Number</h5>
                    <a href="tel:07479844578" className="text-gray-600 hover:text-primary transition-colors">07479844578</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-1">Email Address</h5>
                    <a href="mailto:info@devdconstruction.co.uk" className="text-gray-600 hover:text-primary transition-colors">info@devdconstruction.co.uk</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-1">Working Hours</h5>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[250px] relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop')] bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 font-medium text-gray-900 shadow-lg">
                View on Google Maps
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
