import { HardHat, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                <HardHat className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-display font-bold text-xl leading-none text-white tracking-wide">
                  Dev & D
                </h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Construction LTD.
                </p>
              </div>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium construction and property solutions built on a foundation of trust, quality, and integrity.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Our Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['General Construction', 'Renovations', 'Home Extensions', 'Commercial Works', 'Project Management', 'Property Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>12 Builder's Way, London<br/>SE1 7PB, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:07479844578" className="hover:text-primary transition-colors">07479844578</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@devdconstruction.co.uk" className="hover:text-primary transition-colors">info@devdconstruction.co.uk</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dev & D Construction Company LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
