import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-background-darker/95 backdrop-blur-md border-b border-primary/10' : 'py-6 bg-background-dark/80 backdrop-blur-md border-b border-primary/5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-heading font-semibold text-text-main" onClick={() => setIsOpen(false)}>
                    Hollywood <span className="text-primary italic">Clinic</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className={`font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-text-main'}`}>Home</Link>
                    <Link to="/services" className={`font-medium transition-colors hover:text-primary ${location.pathname === '/services' ? 'text-primary' : 'text-text-main'}`}>Our Services</Link>
                    <Link to="/contact" className={`font-medium transition-colors hover:text-primary ${location.pathname === '/contact' ? 'text-primary' : 'text-text-main'}`}>Contact Us</Link>
                    <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                        className="relative group overflow-hidden bg-white/5 border border-primary/50 text-primary px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                        <span className="absolute inset-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center gap-2">Book Now</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-text-main hover:text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-darker border-b border-primary/20 flex flex-col items-center py-6 space-y-6">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-main hover:text-primary">Home</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-main hover:text-primary">Our Services</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-text-main hover:text-primary">Contact Us</Link>
                    <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                        className="relative group overflow-hidden bg-primary text-background-darker px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_5px_15px_rgba(212,175,55,0.3)] mt-2">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-yellow-200 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center gap-2"><MessageCircle size={20} /> Book Now</span>
                    </a>
                </div>
            )}
        </nav>
    );
}
