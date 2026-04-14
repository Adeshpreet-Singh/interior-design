'use client';
import { useState, useEffect, useRef } from 'react';

const services = [
  { name: 'Residential Design', icon: '🏠', desc: 'Complete home transformations — from architectural millwork and built-in cabinetry to textiles, lighting, and art curation. We create spaces that balance timeless elegance with everyday comfort.' },
  { name: 'Commercial Spaces', icon: '🏢', desc: 'Offices, retail, restaurants, and hospitality venues designed to elevate brand identity and optimize human experience while meeting codes and accessibility standards.' },
  { name: 'Kitchen & Bath', icon: '🍳', desc: 'Specialized design for the two rooms that matter most. We handle space planning, cabinetry, countertops, fixtures, and lighting — marrying ergonomics with aesthetics.' },
  { name: 'Color Consultation', icon: '🎨', desc: 'Expert color strategy that sets the emotional tone of every room. We analyze natural light, architecture, and lifestyle to craft palettes that feel intentional and harmonious.' },
];

const portfolio = [
  { title: 'Nordic Living Room', cat: 'Residential', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
  { title: 'Modern Kitchen', cat: 'Kitchen & Bath', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { title: 'Boutique Hotel Lobby', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
  { title: 'Serene Master Bath', cat: 'Kitchen & Bath', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
  { title: 'Minimalist Office', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { title: 'Cozy Reading Nook', cat: 'Residential', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We listen deeply to your vision, lifestyle, and budget. Through site visits and collaborative conversations, we uncover the soul of your space.' },
  { step: '02', title: 'Concept', desc: 'Mood boards, material palettes, and spatial concepts come together. We present a cohesive design direction that resonates with your identity.' },
  { step: '03', title: 'Design', desc: 'Detailed floor plans, 3D renderings, and specification documents bring the concept to life. Every detail is intentional.' },
  { step: '04', title: 'Realize', desc: 'We manage procurement, coordinate contractors, and oversee installation — ensuring the final result exceeds your expectations.' },
];

const testimonials = [
  { name: 'Emily Foster', role: 'Homeowner', text: 'Working with Studio Verdure was transformative. They turned our dated colonial into a warm, modern sanctuary. Every room tells a story.', rating: 5 },
  { name: 'David Park', role: 'Restaurant Owner', text: 'Our restaurant redesign led to a 40% increase in reservations. The atmosphere they created is exactly what we envisioned — elegant yet approachable.', rating: 5 },
  { name: 'Lisa Okonkwo', role: 'Tech CEO', text: 'The office redesign boosted team morale dramatically. The biophilic design elements and natural light integration were genius touches.', rating: 5 },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function InteriorDesign() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full sage-gradient flex items-center justify-center text-white font-bold">V</div>
            <span className="text-xl font-bold" style={{ color: '#2c2c2c' }}>Studio Verdure</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-sage-deep transition-colors" style={{ color: '#6b7280' }}>{item}</a>
            ))}
          </div>
          <button className="btn-sage px-5 py-2.5 rounded-full text-sm font-semibold">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 textured-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80" alt="Interior" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Interior Design Studio</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4 mb-6" style={{ color: '#1a1a1a' }}>
              Spaces that feel<br />
              <span style={{ color: '#87a878' }}>like home</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              We craft interiors that honor architecture, celebrate light, and reflect the people who live in them. From concept to completion, every detail is intentional.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-sage px-8 py-4 rounded-full font-semibold">Start Your Project</button>
              <button className="px-8 py-4 rounded-full border-2 font-semibold transition-all hover:bg-sage/5" style={{ borderColor: '#87a878', color: '#87a878' }}>
                View Portfolio
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl" style={{ background: 'rgba(135,168,120,0.1)' }}></div>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80" alt="Beautiful interior" className="relative rounded-3xl shadow-xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg">
              <div className="text-3xl font-bold" style={{ color: '#87a878' }}>250+</div>
              <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 warm-section">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Our Services</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.name} className="scroll-reveal card-elegant rounded-2xl p-6 sage-border-top" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 textured-bg">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Our Work</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Portfolio Gallery</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p, i) => (
              <div key={p.title} className="scroll-reveal gallery-item rounded-2xl overflow-hidden relative cursor-pointer" style={{ transitionDelay: `${i * 80}ms` }}>
                <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover" />
                <div className="gallery-overlay absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-sm font-medium" style={{ color: '#a3c294' }}>{p.cat}</span>
                  <span className="text-white text-xl font-bold">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 px-6 warm-section">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">How We Work</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Our Process</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.step} className="scroll-reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full sage-gradient text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 textured-bg">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Client Stories</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="scroll-reveal card-elegant rounded-2xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#87a878' }}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full sage-gradient flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 warm-section">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal text-center mb-12">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Start Your Project</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="scroll-reveal card-elegant rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Let's create something beautiful</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Whether you're renovating a single room or designing an entire home, we'd love to hear your vision.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📍</span>
                    </div>
                    <span className="text-gray-600 text-sm">421 Elm Street, Suite 200, Portland, OR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📧</span>
                    </div>
                    <span className="text-gray-600 text-sm">hello@studioverdure.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📞</span>
                    </div>
                    <span className="text-gray-600 text-sm">(503) 555-0142</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all" />
                <input type="email" placeholder="Email Address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all" />
                <textarea placeholder="Tell us about your project..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all resize-none" />
                <button className="btn-sage w-full py-3 rounded-xl font-semibold">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6" style={{ background: '#2c2c2c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full sage-gradient flex items-center justify-center text-white font-bold">V</div>
                <span className="text-xl font-bold text-white">Studio Verdure</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Crafting beautiful, livable spaces since 2008.</p>
            </div>
            {[
              { title: 'Services', links: ['Residential', 'Commercial', 'Kitchen & Bath', 'Color Consulting'] },
              { title: 'Studio', links: ['About Us', 'Our Team', 'Careers', 'Press'] },
              { title: 'Connect', links: ['Instagram', 'Pinterest', 'Houzz', 'Blog'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2026 Studio Verdure. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Sitemap'].map((link) => (
                <a key={link} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
