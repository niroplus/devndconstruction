import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Paperclip, X, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Attach files under the matching field name
    files.forEach(file => {
      formData.append("attachments", file);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setFiles([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";

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

            {/* Success state */}
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 border border-green-200 bg-green-50 rounded-2xl">
                <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-6">Thank you for getting in touch. We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-green-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Required hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot — hidden from real users */}
                <div hidden>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      className={inputClass}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      className={inputClass}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={inputClass}
                    placeholder="07479844578"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
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
                      name="attachments"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                    />
                  </div>

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

                {/* Error state */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please try again or contact us directly at <a href="tel:07479844578" className="font-semibold underline">07479844578</a>.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-green-800 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info & Map */}
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
                    <p className="text-gray-600">12 Builder's Way, London<br />SE1 7PB, United Kingdom</p>
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
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
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
