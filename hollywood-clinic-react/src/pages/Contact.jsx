import { MapPin, Phone, Instagram, Youtube, MessageCircle, Gift, Sparkles, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">

            {/* Background Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[200px] -z-10 mix-blend-screen pointer-events-none animate-pulse-glow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">

                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold mb-4 block inline-flex items-center gap-2 border border-primary/20 px-4 py-1.5 rounded-full bg-primary/5 backdrop-blur-md">
                        <Sparkles size={16} /> Let's Connect
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-semibold mb-8 text-white">
                        Transform With <span className="text-gradient">Us</span>
                    </h1>
                    <p className="text-text-muted text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Reach out to schedule your elite consultation or enter our daily campaign to win premium rewards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Campaign/Conversion Card */}
                    <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="glass-card p-10 md:p-14 relative overflow-hidden isolate border-primary/30 h-full">
                            {/* Internal abstract glow */}
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl mix-blend-screen -z-10 animate-spin-slow"></div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="bg-primary/20 p-4 rounded-2xl border border-primary/30 text-primary shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    <Gift size={36} />
                                </div>
                                <div>
                                    <h2 className="font-heading text-4xl font-semibold text-white">The Daily Elite Draw</h2>
                                    <p className="text-primary font-semibold tracking-widest uppercase text-sm mt-1 flex items-center gap-2">
                                        Exclusive Rewards <Sparkles size={14} />
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-12">
                                <p className="text-text-main text-lg font-light leading-relaxed">
                                    Join our exclusive community across all platforms. The more you engage, the higher your chances of winning premium aesthetic treatments.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a href="https://www.youtube.com/@HollywoodAestheticClinic" target="_blank" rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#FF0000] hover:bg-white/10 transition-all group flex items-center gap-4">
                                        <div className="bg-[#FF0000]/20 p-3 rounded-xl text-[#FF0000] group-hover:scale-110 transition-transform"><Youtube size={24} fill="currentColor" /></div>
                                        <span className="text-white font-medium">Subscribe on YouTube</span>
                                    </a>
                                    <a href="https://whatsapp.com/channel/0029VbAX20nGk1G0nd0t6S1o" target="_blank" rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#25D366] hover:bg-white/10 transition-all group flex items-center gap-4">
                                        <div className="bg-[#25D366]/20 p-3 rounded-xl text-[#25D366] group-hover:scale-110 transition-transform"><MessageCircle size={24} fill="currentColor" /></div>
                                        <span className="text-white font-medium">Join WhatsApp Channel</span>
                                    </a>
                                    <a href="https://www.instagram.com/hollywoodaestheticsclinic/" target="_blank" rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-[#E1306C] hover:bg-white/10 transition-all group flex items-center gap-4">
                                        <div className="bg-[#E1306C]/20 p-3 rounded-xl text-[#E1306C] group-hover:scale-110 transition-transform"><Instagram size={24} /></div>
                                        <span className="text-white font-medium">Like our Instagram</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@zoyazain901" target="_blank" rel="noopener noreferrer"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all group flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl text-white group-hover:scale-110 transition-transform font-serif font-bold italic text-xl w-[48px] h-[48px] flex items-center justify-center">t</div>
                                        <span className="text-white font-medium">Follow our TikTok</span>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-2xl">
                                <p className="font-semibold text-white text-lg mb-4 flex items-center gap-2">
                                    <Send size={20} className="text-primary" /> Step 5: Claim Your Entry
                                </p>
                                <a href="https://wa.me/923001423044" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white text-background-darker px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all shadow-lg hover:-translate-y-1">
                                    WhatsApp Us Your Name
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details & Map */}
                    <div className="lg:col-span-5 flex flex-col gap-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

                        {/* Direct Contact Blocks */}
                        <div className="glass-card p-10 flex flex-col gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">Direct Consultation</h3>
                                <a href="https://wa.me/c/923001423044" target="_blank" rel="noopener noreferrer"
                                    className="w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:bg-[#1ebd5e] hover:-translate-y-1 transition-all">
                                    <MessageCircle size={24} /> View Treatment Catalogue
                                </a>
                            </div>

                            <div className="h-px bg-white/10 w-full"></div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                                        <Phone className="text-white group-hover:text-primary transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted mb-1 font-medium">Reach Us By Phone</p>
                                        <p className="font-heading text-2xl text-white">+92 300 142 3044</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                                        <MapPin className="text-white group-hover:text-primary transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-text-muted mb-1 font-medium">Clinic Address</p>
                                        <p className="text-white text-lg">Vanike Road, Hafizabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Location */}
                        <div className="glass-card p-2 flex-grow min-h-[300px] relative overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" alt="Clinic Location" className="w-full h-full object-cover rounded-xl transition-transform duration-1000 group-hover:scale-105 opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent flex items-end p-8">
                                <div className="backdrop-blur-md bg-black/50 border border-white/20 p-5 rounded-2xl shadow-2xl">
                                    <p className="font-semibold text-white flex items-center gap-3 text-lg">
                                        <MapPin size={20} className="text-primary" /> Hollywood Aesthetic Clinic
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
