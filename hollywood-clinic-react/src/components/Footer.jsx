import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-8 text-center border-t border-white/5 relative">
            <div className="container mx-auto px-6">

                <h2 className="font-heading text-4xl text-primary mb-4 font-semibold">Ready to transform?</h2>
                <p className="text-text-muted mb-8 text-lg">Schedule your consultation today or view our complete catalogue.</p>

                {/* Floating WhatsApp CTA */}
                <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                    className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 shadow-[0_4px_15px_rgba(30,189,116,0.4)] hover:bg-[#199e61] hover:scale-105 transition-all duration-300 mb-12">
                    <MessageCircle size={24} /> Chat with Us
                </a>

                {/* Location Details */}
                <div className="flex flex-col items-center gap-2 text-text-main mb-8">
                    <MapPin size={28} className="text-primary" />
                    <p className="leading-relaxed">
                        <strong>Hollywood Aesthetic Clinic</strong><br />
                        Vanike Road, Hafizabad
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mb-12">
                    <a href="https://www.facebook.com/search/top?q=hollywood%20aesthetic%20clinic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/hollywoodaestheticsclinic/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.youtube.com/@HollywoodAestheticClinic" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300">
                        <Youtube size={20} />
                    </a>
                    {/* TikTok uses a custom SVG usually, using Hash as placeholder for now if Lucide doesn't have it, or omit to keep clean */}
                    <a href="https://www.tiktok.com/@zoyazain901" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300 font-bold font-serif">
                        t
                    </a>
                </div>

                {/* Navigation Quick Links Below if need be, sticking to minimalist */}

                <div className="border-t border-white/5 pt-8 text-text-muted text-sm">
                    &copy; {new Date().getFullYear()} Hollywood Aesthetic Clinic. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
