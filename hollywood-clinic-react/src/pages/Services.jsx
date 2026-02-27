import ServiceCard from '../components/ServiceCard';
import {
    Droplets,
    Sparkles,
    Syringe,
    TestTube,
    Scissors,
    Leaf,
    Stethoscope,
    SmilePlus,
    Aperture,
    Eraser,
    MessageCircle
} from 'lucide-react';

export default function Services() {
    const servicesList = [
        { id: 1, title: 'Hydrafacial', description: 'Deep cleansing and hydration for a radiant, youthful, glowing complexion.', icon: Droplets },
        { id: 2, title: 'Laser Hair Removal', description: 'Safe and effective long-term hair reduction for silky smooth skin forever.', icon: Sparkles },
        { id: 3, title: 'PRP (Skin & Hair)', description: 'Platelet-Rich Plasma therapy to rejuvenate skin and stimulate hair growth naturally.', icon: Syringe },
        { id: 4, title: 'Microneedling', description: 'Collagen-inducing therapy for minimizing scars and improving overall texture.', icon: TestTube },
        { id: 5, title: 'Hair Straightening', description: 'Get perfectly straight, sleek, and manageable hair effortlessly every day.', icon: Scissors },
        { id: 6, title: 'Keratin Treatment', description: 'Restore protein and eliminate frizz for deeply nourished, luxurious locks.', icon: Leaf },
        { id: 7, title: 'Hair Transplant', description: 'Advanced restoration techniques for natural, permanent growth and confidence.', icon: Stethoscope },
        { id: 8, title: 'Dental Aligners', description: 'Invisible braces and dental aligners for a perfectly straight, confident smile.', icon: SmilePlus },
        { id: 9, title: 'Teeth Whitening', description: 'Professional whitening treatments for a brilliant, dazzling Hollywood smile.', icon: Sparkles },
        { id: 10, title: 'Carbon Peel Facial', description: 'Laser skin rejuvenation to cleanly exfoliate and purify your complexion.', icon: Aperture },
        { id: 11, title: 'Tattoo Removal', description: 'Safe, advanced, and precise laser treatments to clear unwanted ink entirely.', icon: Eraser },
        { id: 12, title: 'Weight Loss Drips', description: 'Premium wellness IV therapies to aid in weight management and daily vitality.', icon: Droplets },
    ];

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">

            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-24 animate-fade-in-up">
                    <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-4 block inline-flex items-center gap-2">
                        <Sparkles size={16} /> Elite Treatments
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-8 text-white">
                        Curated <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-text-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Every procedure is a masterpiece. Explore our comprehensive range of specialized aesthetic, dermatological, and dental treatments designed exclusively for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${(index % 3) * 0.15 + 0.2}s` }}>
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                linkTo="/contact"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <div className="mt-32 max-w-5xl mx-auto glass-card p-12 md:p-16 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mb-6 relative z-10">Ready to start your journey?</h2>
                    <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto relative z-10">
                        Consult with our specialists today and discover the perfect treatment plan tailored to your unique goals.
                    </p>
                    <div className="relative z-10">
                        <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                            className="bg-primary text-background-darker px-10 py-5 rounded-full font-bold inline-flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] transition-all duration-300">
                            <MessageCircle size={24} /> Book Your Consultation Now
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
