import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:flex justify-between items-center py-2 px-6 lg:px-12 text-[#1a6b3a] text-sm border-b border-[#e6ac00]" style={{ backgroundColor: "#ffc20d" }}>
      <div className="flex items-center gap-6">
        <a href="tel:07479844578" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Phone className="w-4 h-4" />
          <span>07479844578</span>
        </a>
        <a href="mailto:info@devdconstruction.co.uk" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <Mail className="w-4 h-4" />
          <span>info@devdconstruction.co.uk</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>12 Builder's Way, London, SE1 7PB</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="hover:opacity-70 transition-opacity"><Facebook className="w-4 h-4" /></a>
        <a href="#" className="hover:opacity-70 transition-opacity"><Instagram className="w-4 h-4" /></a>
        <a href="#" className="hover:opacity-70 transition-opacity"><Linkedin className="w-4 h-4" /></a>
        <a href="#" className="hover:opacity-70 transition-opacity"><Twitter className="w-4 h-4" /></a>
      </div>
    </div>
  );
}
