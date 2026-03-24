/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Link as LinkIcon, 
  Users, 
  Target, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Quote,
  Share2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Creators', href: '#creators' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg shadow-brand-accent/20">
            <LinkIcon className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            InflyLink <span className="text-brand-saffron">Connects</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-saffron transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-saffron hover:bg-brand-saffron/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-saffron/20"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-saffron text-white py-3 rounded-xl font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-saffron/10 blur-[120px] rounded-full animate-pulse delay-700" />
        
        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: y1, opacity }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-accent/30 text-brand-accent text-sm font-bold mb-8"
          >
            <Share2 size={14} className="text-brand-accent" />
            <span>The Global Influencer Network</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] mb-8">
            Linking <span className="text-gradient">Brands</span> with <br />
            <span className="italic">Influencers</span> at Scale
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            InflyLink Connects is the ultimate ecosystem where high-growth brands meet world-class creators to build lasting digital impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-brand-accent/30 flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass px-10 py-4 rounded-full text-lg font-bold border-white/10 hover:bg-white/20 transition-all"
            >
              Our Network
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">Our Vision</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              The Link to <span className="text-brand-gold">Authentic</span> Growth
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              InflyLink Connects is built on the philosophy of seamless integration. We believe that every brand needs a high-speed link to reach its audience. Our network is the infrastructure for your digital success.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Authenticity First', desc: 'We only partner with creators who truly align with your brand values.' },
                { title: 'Data-Driven Results', desc: 'Every campaign is backed by analytics to ensure maximum ROI.' },
                { title: 'Seamless Execution', desc: 'From sourcing to reporting, we handle the entire lifecycle.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-saffron/20 flex items-center justify-center">
                    <CheckCircle2 className="text-brand-saffron w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4 relative z-10">
              <img 
                src="https://picsum.photos/seed/marketing/800/800" 
                alt="Marketing Bridge" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-saffron/20 blur-3xl rounded-full" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-8 rounded-2xl z-20 text-center min-w-[200px]">
              <div className="text-4xl font-bold text-brand-saffron mb-1">500+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider font-bold">Creators Joined</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Influencer Campaigns",
      desc: "End-to-end campaign management tailored to your brand goals and target audience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Creator Sourcing",
      desc: "We find the perfect match from our vetted network of high-engagement creators."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Content Strategy",
      desc: "Creative direction and strategy to ensure your brand story resonates with the audience."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Tracking",
      desc: "Real-time analytics and comprehensive reporting on campaign reach and engagement."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Our Premium Services</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-brand-saffron/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-saffron/10 flex items-center justify-center text-brand-saffron mb-6 group-hover:bg-brand-saffron group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Contact Us",
      desc: "Brands reach out with their vision and campaign objectives."
    },
    {
      number: "02",
      title: "Matchmaking",
      desc: "We handpick creators who align with your brand identity."
    },
    {
      number: "03",
      title: "Production",
      desc: "Creators produce high-quality reels and content for your brand."
    },
    {
      number: "04",
      title: "Results",
      desc: "Watch your brand grow with real engagement and ROI."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">How We Link Success</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-saffron/0 via-brand-saffron/50 to-brand-saffron/0 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-20 h-20 rounded-full glass border-brand-saffron/30 flex items-center justify-center mx-auto mb-8 text-2xl font-display font-bold text-brand-saffron shadow-lg shadow-brand-saffron/10">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CreatorsSection = () => {
  return (
    <section id="creators" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-saffron/5 -skew-y-3 origin-left" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass rounded-[40px] p-8 md:p-16 border-white/5 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">For Creators</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Turn Your <span className="text-gradient">Passion</span> Into Partnerships
              </h3>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Join our exclusive network of creators and get access to premium brand deals. We handle the business, you handle the creativity.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10M+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Total Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Campaigns</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-blue px-10 py-4 rounded-full text-lg font-bold flex items-center gap-2"
              >
                Join as a Creator <ChevronRight size={20} />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="space-y-4"
              >
                <img src="https://picsum.photos/seed/creator1/400/600" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/creator2/400/400" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="space-y-4 pt-12"
              >
                <img src="https://picsum.photos/seed/creator3/400/400" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/creator4/400/600" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO, TechNova",
      text: "InflyLink Connects transformed our digital presence. The creators they matched us with were perfect for our niche.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Founder, GlowUp Beauty",
      text: "The ROI we saw from our first campaign was incredible. Professional, data-driven, and highly effective.",
      rating: 5
    },
    {
      name: "Ankit Verma",
      role: "Marketing Head, FitLife",
      text: "Seamless campaign management. They truly understand the link between brands and creators.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">What Our Partners Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-saffron/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h5 className="font-bold text-white">{t.name}</h5>
                <p className="text-white/40 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-saffron/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-20 rounded-[40px] border-brand-saffron/20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Build Your <span className="text-brand-accent">Network</span>?
          </h2>
          <p className="text-white/70 text-lg mb-12">
            Start your campaign today and connect with the creators who will take your brand to the next level.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-accent text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl shadow-brand-accent/40"
          >
            Start Your Campaign
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <LinkIcon className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold">InflyLink Connects</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8">
              The premium influencer marketing agency linking visionary brands with authentic creators.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-saffron hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="font-bold mb-6">Quick Links</h6>
            <ul className="space-y-4 text-white/50">
              <li><a href="#about" className="hover:text-brand-saffron transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-saffron transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-saffron transition-colors">How It Works</a></li>
              <li><a href="#creators" className="hover:text-brand-saffron transition-colors">For Creators</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-6">Contact</h6>
            <ul className="space-y-4 text-white/50">
              <li>hello@inflylink.com</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2026 InflyLink Connects. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-saffron selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <CreatorsSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

