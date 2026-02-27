import { ArrowRight, MessageCircle, Star, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen overflow-hidden">

            {/* Hero Section */}
            <section className="relative min-h-[100vh] flex items-center pt-24 pb-16 lg:pt-32 px-6">
                {/* Glowing Background Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow mix-blend-screen -z-10"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen -z-10" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -z-10"></div>

                <div className="container mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Hero Content */}
                    <div className="lg:col-span-7 mt-8 md:mt-0 relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in-up">
                            <Sparkles size={16} className="text-primary animate-pulse" />
                            <span className="text-primary uppercase tracking-[0.2em] text-xs font-semibold">
                                Hafizabad's Premier Clinic
                            </span>
                        </div>

                        <h1 className="font-heading text-6xl md:text-8xl font-semibold leading-[1.1] mb-8 animate-fade-in-up text-white" style={{ animationDelay: '0.1s' }}>
                            Redefining <br />
                            <span className="text-gradient">Aesthetic</span> <br />
                            Excellence.
                        </h1>

                        <p className="text-text-muted text-lg md:text-xl max-w-xl mb-12 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
                            Experience world-class treatments designed to enhance your natural glow. From advanced laser care to bespoke styling, your transformation starts here.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                                className="relative group overflow-hidden bg-primary text-background-darker px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-yellow-200 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                <span className="relative z-10 flex items-center gap-3"><MessageCircle size={22} /> View Catalogue</span>
                            </a>
                            <Link to="/services"
                                className="border border-white/20 bg-white/5 backdrop-blur-md text-text-main px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-3 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                                Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="flex -space-x-4">
                                <img className="w-12 h-12 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="Client" />
                                <img className="w-12 h-12 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop" alt="Client" />
                                <img className="w-12 h-12 rounded-full border-2 border-background-dark object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Client" />
                                <div className="w-12 h-12 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-background-darker font-bold text-sm">
                                    +2k
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-primary mb-1">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                </div>
                                <span className="text-sm text-text-muted font-medium">Trusted by 2,000+ clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image/Abstract Art */}
                    <div className="lg:col-span-5 relative hidden md:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800" alt="Aesthetic Care" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
                            <div className="absolute inset-0 border border-white/10 rounded-[2rem] mix-blend-overlay"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -left-8 glass-card p-6 flex items-center gap-4 animate-float">
                            <div className="bg-primary/20 text-primary p-3 rounded-xl isolate">
                                <Award size={32} />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-2xl text-white">#1</p>
                                <p className="text-sm text-text-muted font-medium">Rated in Hafizabad</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Stats Divider */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
                        <div>
                            <h4 className="text-4xl font-heading font-bold text-white mb-2">10+</h4>
                            <p className="text-sm text-primary uppercase tracking-wider font-semibold">Expert Services</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-heading font-bold text-white mb-2">100%</h4>
                            <p className="text-sm text-primary uppercase tracking-wider font-semibold">Client Satisfaction</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-heading font-bold text-white mb-2">5</h4>
                            <p className="text-sm text-primary uppercase tracking-wider font-semibold">Star Google Rating</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-heading font-bold text-white mb-2">Top</h4>
                            <p className="text-sm text-primary uppercase tracking-wider font-semibold">Tier Equipment</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Gallery Highlights - Editorial Layout */}
            <section className="py-32 px-6 relative">
                <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse-glow"></div>

                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="max-w-xl">
                            <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-4 block flex items-center gap-2">
                                <div className="w-8 h-[1px] bg-primary"></div> Portfolio
                            </span>
                            <h2 className="font-heading text-5xl md:text-6xl font-semibold mb-6">Masterpieces in <span className="text-gradient">Motion</span></h2>
                            <p className="text-text-muted text-lg">Witness the results of our dedication to aesthetic perfection. Real stories, real transformations.</p>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center gap-3 border border-white/20 hover:border-primary text-text-main px-8 py-4 rounded-full font-medium transition-all duration-300 group mt-8">
                            View All Work <ArrowRight size={20} className="group-hover:translate-x-1 group-hover:text-primary transition-all" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

                        {/* Left Big Card */}
                        <div className="md:col-span-7 group relative rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] border border-white/5 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" alt="Treatments" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-10 md:p-12 w-full z-10">
                                <span className="bg-primary/90 backdrop-blur-sm shadow-xl text-background-darker text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full mb-6 inline-block">Advanced Skin</span>
                                <h3 className="text-3xl md:text-5xl font-heading font-semibold text-white mb-4 drop-shadow-md">Rejuvenation Therapy</h3>
                                <p className="text-zinc-200 text-lg max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 drop-shadow-sm">
                                    Restore your youth with our signature Hydrafacial and PRP treatments.
                                </p>
                            </div>
                        </div>

                        {/* Right Stacked Cards */}
                        <div className="md:col-span-5 flex flex-col gap-8 lg:gap-12">
                            <div className="group relative rounded-[2rem] overflow-hidden flex-1 min-h-[300px] border border-white/5 shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Aligners" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2 drop-shadow-md">Invisible Aligners</h3>
                                    <Link to="/services" className="inline-flex items-center gap-2 text-primary uppercase text-sm font-bold tracking-wider hover:text-white transition-colors">
                                        Discover More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="group relative rounded-[2rem] overflow-hidden flex-1 min-h-[300px] border border-white/5 shadow-xl">
                                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" alt="Clinic Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-2 drop-shadow-md">Luxury Facilities</h3>
                                    <Link to="/contact" className="inline-flex items-center gap-2 text-primary uppercase text-sm font-bold tracking-wider hover:text-white transition-colors">
                                        Take a Tour <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-12 md:hidden">
                        <Link to="/services" className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-primary text-text-main px-8 py-4 rounded-full font-medium transition-all duration-300">
                            View All Work <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    );
}
