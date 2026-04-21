'use client';

import { useState } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [openFaq, setOpenFaq] = useState<number | null>(null);
 const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

 const services = [
 { title: 'Residential Design', desc: 'Full-service interior design for homes, apartments, and private residences.', icon: '🏠' },
 { title: 'Commercial Spaces', desc: 'Offices, retail environments, and corporate interiors that inspire.', icon: '🏢' },
 { title: 'Hospitality Design', desc: 'Hotels, restaurants, and bars with unforgettable atmospheres.', icon: '✨' },
 { title: 'Renovation', desc: 'Complete interior transformations and thoughtful space reimagining.', icon: '🔨' },
 { title: 'Styling & Staging', desc: 'Furniture selection, art curation, and finishing touches.', icon: '🪑' },
 { title: '3D Visualization', desc: 'Photorealistic renderings to preview your space before construction.', icon: '📐' },
 ];

 const designProcess = [
 { step: '01', title: 'Discovery', desc: 'We begin with a complimentary consultation to understand your vision, lifestyle, and budget.' },
 { step: '02', title: 'Concept', desc: 'Our team develops mood boards, material palettes, and spatial concepts for your approval.' },
 { step: '03', title: 'Design', desc: 'Detailed floor plans, 3D renderings, and specifications bring your vision to life.' },
 { step: '04', title: 'Realization', desc: 'We manage procurement, contractors, and installation to deliver a flawless result.' },
 ];

 const projects = [
 { name: 'Pacific Heights Residence', type: 'Residential', location: 'San Francisco, CA', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', alt: 'Luxury living room with ocean views' },
 { name: 'The Greenwich Hotel Lobby', type: 'Hospitality', location: 'New York, NY', img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&q=80', alt: 'Elegant hotel lobby interior' },
 { name: 'SoHo Tech Office', type: 'Commercial', location: 'New York, NY', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Modern office interior' },
 { name: 'Beacon Hill Townhouse', type: 'Renovation', location: 'Boston, MA', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Classic townhouse renovation' },
 { name: 'Napa Valley Estate', type: 'Residential', location: 'Napa, CA', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', alt: 'Wine country estate living room' },
 { name: 'Tribeca Penthouse', type: 'Residential', location: 'New York, NY', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=600&q=80', alt: 'Modern penthouse with city views' },
 ];

 const team = [
 { name: 'Isabella Romano', role: 'Principal Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
 { name: 'Thomas Wright', role: 'Design Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
 { name: 'Amelia Foster', role: 'Senior Stylist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
 { name: 'Marcus Chen', role: '3D Visualization Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
 ];

 const testimonials = [
 { text: "Atelier transformed our house into a home that perfectly reflects our family's personality and lifestyle. Every detail was thoughtfully considered.", author: 'Christine & Mark Taylor', role: 'Residential Client' },
 { text: "The hotel lobby redesign increased our guest satisfaction scores by 35%. Truly exceptional work that elevated our brand.", author: 'Jonathan Reed', company: 'The Greenwich Hotel', role: 'General Manager' },
 { text: "They created an office space that our employees actually enjoy coming to. Productivity and morale have never been higher.", author: 'Sarah Mitchell', company: 'TechVentures', role: 'CEO' },
 ];

 const faqs = [
 { q: 'What is your design process?', a: 'Our process begins with a complimentary discovery consultation, followed by concept development, detailed design, and full project realization. We guide you through every step.' },
 { q: 'What is the typical project timeline?', a: 'Timelines vary by scope. A single room refresh takes 4-8 weeks, while full-home designs typically span 3-6 months. We provide a detailed timeline during our initial consultation.' },
 { q: 'Do you work with specific budgets?', a: 'We work across a range of budgets and are transparent about costs from the start. During discovery, we align on investment levels and find creative solutions that maximize value.' },
 { q: 'Can I see samples before committing?', a: 'Absolutely. Our concept phase includes physical material samples, digital mood boards, and 3D renderings so you can visualize the result before any purchases are made.' },
 ];

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setFormStatus('sending');
 try {
 const res = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
 body: JSON.stringify({
 access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
 name: formData.name,
 email: formData.email,
 phone: formData.phone,
 message: formData.message,
 subject: 'New Consultation Request - Atelier Interiors',
 }),
 });
 const data = await res.json();
 if (data.success) {
 setFormStatus('sent');
 setFormData({ name: '', email: '', phone: '', message: '' });
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 return (
 <div className="min-h-screen">

 {/* ===== HEADER ===== */}
 <header className="int-nav">
 <div className=" section-container">
 <a href="#" className="flex items-center gap-2 no-underline">
 <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--sage-deep)]">
 <span className="text-white font-bold text-lg">A</span>
 </div>
 <div>
 <span className="text-lg font-bold">Atelier</span>
 <span className="block text-xs">Interiors</span>
 </div>
 </a>

 <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
 <a href="#services" className="int-nav-link">Services</a>
 <a href="#process" className="int-nav-link">Process</a>
 <a href="#portfolio" className="int-nav-link">Portfolio</a>
 <a href="#team" className="int-nav-link">Team</a>
 <a href="#testimonials" className="int-nav-link">Testimonials</a>
 <a href="#contact" className="int-btn">Book Consultation</a>
 </nav>

 <button
 className="md:hidden p-2"
 onClick={() => setMenuOpen(!menuOpen)}
 aria-expanded={menuOpen}
 aria-label="Toggle menu"
 >
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
 </svg>
 </button>
 </div>

 {menuOpen && (
 <nav className="md:hidden py-4 border-t" aria-label="Mobile navigation">
 <div className=" section-container">
 <a href="#services" className="int-nav-link" onClick={() => setMenuOpen(false)}>Services</a>
 <a href="#process" className="int-nav-link" onClick={() => setMenuOpen(false)}>Process</a>
 <a href="#portfolio" className="int-nav-link" onClick={() => setMenuOpen(false)}>Portfolio</a>
 <a href="#team" className="int-nav-link" onClick={() => setMenuOpen(false)}>Team</a>
 <a href="#testimonials" className="int-nav-link" onClick={() => setMenuOpen(false)}>Testimonials</a>
 <a href="#contact" className="int-btn text-center" onClick={() => setMenuOpen(false)}>Book Consultation</a>
 </div>
 </nav>
 )}
 </header>

 {/* ===== HERO ===== */}
 <section className="int-hero">
 <div className="int-organic-shape"></div>
 <div className="int-leaf"></div>
 <div className=" section-container">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div className="int-reveal">
 <span className="int-badge mb-6 inline-block">Award-Winning Design Studio</span>
 <h1 className="int-heading text-4xl lg:text-5xl xl:text-6xl mb-6">
 Spaces That Tell <span>Your Story</span>
 </h1>
 <p className="int-body text-lg mb-8 max-w-xl">
 Atelier Interiors creates exceptional living and working environments that blend timeless elegance with modern functionality, tailored to your unique vision.
 </p>
 <div className="flex flex-col sm:flex-row gap-4">
 <a href="#contact" className="int-btn text-center">Book Free Consultation</a>
 <a href="#portfolio" className="int-btn-outline text-center">View Portfolio</a>
 </div>
 </div>
 <div className="relative int-reveal">
 <img
 src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
 alt="Beautifully designed living room with natural light"
 className="rounded-2xl shadow-lg"
 />
 <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[var(--cream)] shadow-lg">
 <div className="text-3xl font-bold">300+</div>
 <div className="text-sm">Spaces Transformed</div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ===== TRUST BAR ===== */}
 <section className="py-8">
 <div className=" section-container">
 <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
 {[
 { icon: '★', label: 'ASID Member' },
 { icon: '✓', label: 'NCIDQ Certified' },
 { icon: '♥', label: 'Best of Houzz 2024' },
 { icon: '◷', label: '15 Years Experience' },
 ].map((t, i) => (
 <div key={i} className="flex items-center gap-2">
 <span className="text-lg">{t.icon}</span>
 <span className="font-semibold text-sm">{t.label}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== STATS ===== */}
 <section className="py-16 int-section-wash">
 <div className=" section-container">
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { num: '300+', label: 'Projects Completed' },
 { num: '25', label: 'Design Awards' },
 { num: '15', label: 'Years of Excellence' },
 { num: '98%', label: 'Client Satisfaction' },
 ].map((s, i) => (
 <div key={i} className="int-stat int-reveal">
 <div className="int-stat-num">{s.num}</div>
 <div className="int-stat-label">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== SERVICES ===== */}
 <section id="services" className="int-section">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">What We Do</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Our Services</h2>
 <p className="int-body mt-4 max-w-2xl mx-auto">Comprehensive interior design solutions for every space and every vision.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((s, i) => (
 <div key={i} className="int-card int-reveal">
 <span className="text-3xl mb-4 block">{s.icon}</span>
 <h3 className="int-subheading text-lg mb-2">{s.title}</h3>
 <p className="int-body text-sm">{s.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== DESIGN PROCESS ===== */}
 <section id="process" className="int-section int-section-alt">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">How We Work</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Design Process</h2>
 <p className="int-body mt-4 max-w-2xl mx-auto">A proven four-step approach that turns your vision into reality.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {designProcess.map((p, i) => (
 <div key={i} className="int-reveal text-center">
 <div className="text-5xl font-extralight mb-4">{p.step}</div>
 <h3 className="int-subheading text-lg mb-2">{p.title}</h3>
 <p className="int-body text-sm">{p.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== PORTFOLIO ===== */}
 <section id="portfolio" className="int-section">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">Our Work</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Featured Projects</h2>
 <p className="int-body mt-4 max-w-2xl mx-auto">A curated selection of our most distinguished interior design projects.</p>
 </div>
 <div className="int-gallery">
 {projects.map((p, i) => (
 <div key={i} className="int-gallery-item int-reveal">
 <img src={p.img} alt={p.alt} />
 <div className="int-project-info">
 <span className="int-badge text-xs mb-2 inline-block">{p.type}</span>
 <h3 className="int-subheading text-base">{p.name}</h3>
 <p className="text-sm">{p.location}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== TEAM ===== */}
 <section id="team" className="int-section int-section-alt">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">Who We Are</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Meet the Team</h2>
 <p className="int-body mt-4 max-w-2xl mx-auto">Passionate designers dedicated to transforming your space.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {team.map((m, i) => (
 <div key={i} className="int-reveal text-center">
 <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
 <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
 </div>
 <h3 className="int-subheading text-base">{m.name}</h3>
 <p className="int-body text-sm">{m.role}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== TESTIMONIALS ===== */}
 <section id="testimonials" className="int-section">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">Client Stories</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">What Our Clients Say</h2>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map((t, i) => (
 <div key={i} className="int-quote int-reveal">
 <p className="mb-4">{t.text}</p>
 <div className="not-italic">
 <div className="font-semibold">{t.author}</div>
 <div className="text-sm">{t.role}{t.company ? `, ${t.company}` : ''}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== FAQ ===== */}
 <section className="int-section int-section-alt">
 <div className=" section-container">
 <div className="text-center mb-12 int-reveal">
 <span className="int-label">Questions</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Frequently Asked</h2>
 </div>
 <div className="int-reveal">
 {faqs.map((f, i) => (
 <div key={i}>
 <button
 className="int-faq-trigger"
 onClick={() => setOpenFaq(openFaq === i ? null : i)}
 aria-expanded={openFaq === i}
 >
 <span>{f.q}</span>
 <span>+</span>
 </button>
 {openFaq === i && (
 <div className="int-body text-sm px-0 pb-6">
 {f.a}
 </div>
 )}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== CTA BANNER ===== */}
 <section className="py-20 text-center int-section-alt">
 <div className=" section-container">
 <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
 <p className="text-lg mb-8">Book a complimentary consultation and let us bring your vision to life.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="#contact" className="int-btn">Get Free Consultation</a>
 <a href="tel:+14155551234" className="int-btn-outline">Call (415) 555-1234</a>
 </div>
 </div>
 </section>

 {/* ===== CONTACT ===== */}
 <section id="contact" className="int-section">
 <div className=" section-container">
 <div className="text-center mb-16 int-reveal">
 <span className="int-label">Get in Touch</span>
 <h2 className="int-heading text-3xl lg:text-4xl mt-3">Book a Consultation</h2>
 <p className="int-body mt-4 max-w-2xl mx-auto">We would love to hear about your project. Reach out and let us start the conversation.</p>
 </div>

 <div className="grid lg:grid-cols-2 gap-12">
 {/* Contact Form - Web3Forms */}
 <div className="int-reveal">
 <form onSubmit={handleSubmit} className="space-y-5">
 <div>
 <label htmlFor="name" className="block int-label mb-2">Full Name</label>
 <input
 id="name"
 type="text"
 name="name"
 className="int-input"
 placeholder="Your full name"
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 required
 />
 </div>
 <div>
 <label htmlFor="email" className="block int-label mb-2">Email Address</label>
 <input
 id="email"
 type="email"
 name="email"
 className="int-input"
 placeholder="your@email.com"
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 required
 />
 </div>
 <div>
 <label htmlFor="phone" className="block int-label mb-2">Phone Number</label>
 <input
 id="phone"
 type="tel"
 name="phone"
 className="int-input"
 placeholder="(415) 555-1234"
 value={formData.phone}
 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
 />
 </div>
 <div>
 <label htmlFor="message" className="block int-label mb-2">Tell Us About Your Project</label>
 <textarea
 id="message"
 name="message"
 className="int-input"
 rows={5}
 placeholder="Describe your space, style preferences, and budget range..."
 value={formData.message}
 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
 required
 />
 </div>
 <button
 type="submit"
 className="int-btn w-full text-center"
 disabled={formStatus === 'sending'}

 >
 {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
 </button>
 {formStatus === 'sent' && (
 <p className="text-sm text-center">Thank you! We will be in touch within 24 hours.</p>
 )}
 {formStatus === 'error' && (
 <p className="text-sm text-center">Something went wrong. Please try again or call us directly.</p>
 )}
 </form>
 </div>

 {/* Contact Info */}
 <div className="space-y-8 int-reveal">
 {/* Contact Details */}
 <div>
 <h3 className="int-subheading text-lg mb-4">Contact Information</h3>
 <div className="space-y-4">
 <a href="mailto:hello@atelierinteriors.com" className="flex items-center gap-3 int-nav-link">
 <span>✉</span>
 hello@atelierinteriors.com
 </a>
 <a href="tel:+14155551234" className="flex items-center gap-3 int-nav-link">
 <span>☎</span>
 (415) 555-1234
 </a>
 <a
 href="https://wa.me/14155551234?text=Hi%20Atelier%20Interiors%2C%20I%27d%20like%20to%20book%20a%20consultation."
 target="_blank"
 rel="noopener noreferrer"
 className="flex items-center gap-3 int-nav-link"
 >
 <span>💬</span>
 Chat on WhatsApp
 </a>
 <div className="flex items-center gap-3">
 <span>⊕</span>
 <span>456 Design Avenue, Suite 200<br />San Francisco, CA 94102</span>
 </div>
 </div>
 </div>

 {/* Business Hours */}
 <div>
 <h3 className="int-subheading text-lg mb-4">Studio Hours</h3>
 <div className="space-y-2 text-sm">
 <div className="flex justify-between">
 <span>Monday - Friday</span>
 <span>9:00 AM - 6:00 PM</span>
 </div>
 <div className="flex justify-between">
 <span>Saturday</span>
 <span>10:00 AM - 4:00 PM</span>
 </div>
 <div className="flex justify-between">
 <span>Sunday</span>
 <span>By Appointment</span>
 </div>
 </div>
 </div>

 {/* Social Links */}
 <div>
 <h3 className="int-subheading text-lg mb-4">Follow Us</h3>
 <div className="flex gap-4">
 <a
 href="https://instagram.com/atelierinteriors"
 target="_blank"
 rel="noopener noreferrer"
 className="int-btn-outline"
 aria-label="Follow us on Instagram"
 >
 Instagram
 </a>
 <a
 href="https://pinterest.com/atelierinteriors"
 target="_blank"
 rel="noopener noreferrer"
 className="int-btn-outline"
 aria-label="Follow us on Pinterest"
 >
 Pinterest
 </a>
 </div>
 </div>

 {/* Google Maps Embed */}
 <div>
 <h3 className="int-subheading text-lg mb-4">Find Us</h3>
 <div className="rounded-xl overflow-hidden">
 <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977837983904!2d-122.41941568468204!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
 width="100%"
 height="250"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 title="Atelier Interiors Location"
 ></iframe>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ===== FOOTER ===== */}
 <footer className="py-12" style={{ background: 'var(--charcoal)', color: 'var(--sage-muted)' }}>
 <div className=" section-container">
 <div className="grid md:grid-cols-4 gap-8 mb-8">
 <div>
 <div className="flex items-center gap-2 mb-4">
 <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--sage-deep)]">
 <span className="text-white font-bold">A</span>
 </div>
 <span className="text-white font-bold text-lg">Atelier Interiors</span>
 </div>
 <p className="text-sm">Creating exceptional spaces that blend timeless elegance with modern functionality since 2009.</p>
 </div>
 <div>
 <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
 <div className="space-y-2 text-sm">
 <a href="#services" className="block int-nav-link">Services</a>
 <a href="#portfolio" className="block int-nav-link">Portfolio</a>
 <a href="#team" className="block int-nav-link">Team</a>
 <a href="#contact" className="block int-nav-link">Contact</a>
 </div>
 </div>
 <div>
 <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
 <div className="space-y-2 text-sm">
 <a href="mailto:hello@atelierinteriors.com" className="block">hello@atelierinteriors.com</a>
 <a href="tel:+14155551234" className="block">(415) 555-1234</a>
 <p>456 Design Avenue, Suite 200<br />San Francisco, CA 94102</p>
 </div>
 </div>
 <div>
 <h4 className="text-white font-semibold mb-4 text-sm">Social</h4>
 <div className="space-y-2 text-sm">
 <a href="https://instagram.com/atelierinteriors" target="_blank" rel="noopener noreferrer" className="block">Instagram</a>
 <a href="https://pinterest.com/atelierinteriors" target="_blank" rel="noopener noreferrer" className="block">Pinterest</a>
 <a href="https://wa.me/14155551234" target="_blank" rel="noopener noreferrer" className="block">WhatsApp</a>
 </div>
 </div>
 </div>
 <div className="pt-8 text-center text-sm">
 <p>&copy; {new Date().getFullYear()} Atelier Interiors. All rights reserved.</p>
 </div>
 </div>
 </footer>

 {/* ===== FLOATING WHATSAPP BUTTON ===== */}
 <a
 href="https://wa.me/14155551234?text=Hi%20Atelier%20Interiors%2C%20I%27d%20like%20to%20book%20a%20consultation."
 target="_blank"
 rel="noopener noreferrer"
 aria-label="Chat on WhatsApp"
 className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 bg-[var(--sage-deep)] text-white"

 >
 <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
 </svg>
 </a>
 </div>
 );
}
