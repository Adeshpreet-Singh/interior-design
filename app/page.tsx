'use client';
import { useState, useEffect, useRef } from 'react';

const SERVICES = [
  { name: 'Residential Design', icon: '🏠', desc: 'Complete home transformations — from architectural millwork and built-in cabinetry to textiles, lighting, and art curation. We create spaces that balance timeless elegance with everyday comfort.' },
  { name: 'Commercial Spaces', icon: '🏢', desc: 'Offices, retail, restaurants, and hospitality venues designed to elevate brand identity and optimize human experience while meeting codes and accessibility standards.' },
  { name: 'Kitchen & Bath', icon: '🍳', desc: 'Specialized design for the two rooms that matter most. We handle space planning, cabinetry, countertops, fixtures, and lighting — marrying ergonomics with aesthetics.' },
  { name: 'Color Consultation', icon: '🎨', desc: 'Expert color strategy that sets the emotional tone of every room. We analyze natural light, architecture, and lifestyle to craft palettes that feel intentional and harmonious.' },
];

const PORTFOLIO = [
  { title: 'Nordic Living Room', cat: 'Residential', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
  { title: 'Modern Kitchen', cat: 'Kitchen & Bath', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { title: 'Boutique Hotel Lobby', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
  { title: 'Serene Master Bath', cat: 'Kitchen & Bath', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
  { title: 'Minimalist Office', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
  { title: 'Cozy Reading Nook', cat: 'Residential', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
];

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We listen deeply to your vision, lifestyle, and budget. Through site visits and collaborative conversations, we uncover the soul of your space.' },
  { step: '02', title: 'Concept', desc: 'Mood boards, material palettes, and spatial concepts come together. We present a cohesive design direction that resonates with your identity.' },
  { step: '03', title: 'Design', desc: 'Detailed floor plans, 3D renderings, and specification documents bring the concept to life. Every detail is intentional.' },
  { step: '04', title: 'Realize', desc: 'We manage procurement, coordinate contractors, and oversee installation — ensuring the final result exceeds your expectations.' },
];

const TESTIMONIALS = [
  { name: 'Emily Foster', role: 'Homeowner', text: 'Working with Studio Verdure was transformative. They turned our dated colonial into a warm, modern sanctuary. Every room tells a story.', rating: 5 },
  { name: 'David Park', role: 'Restaurant Owner', text: 'Our restaurant redesign led to a 40% increase in reservations. The atmosphere they created is exactly what we envisioned — elegant yet approachable.', rating: 5 },
  { name: 'Lisa Okonkwo', role: 'Tech CEO', text: 'The office redesign boosted team morale dramatically. The biophilic design elements and natural light integration were genius touches.', rating: 5 },
];

const AWARDS = [
  { year: '2025', title: 'Best Residential Interior', org: 'AIA Portland Chapter' },
  { year: '2024', title: 'Emerging Studio of the Year', org: 'Interior Design Magazine' },
  { year: '2024', title: 'Sustainable Design Award', org: 'USGBC Oregon' },
  { year: '2023', title: 'Best Commercial Space', org: 'IIDA Northern Pacific' },
];

const MATERIALS = [
  { name: 'White Oak', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop', use: 'Flooring & millwork' },
  { name: 'Carrara Marble', img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=300&h=300&fit=crop', use: 'Countertops & accents' },
  { name: 'Belgian Linen', img: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=300&fit=crop', use: 'Upholstery & drapery' },
  { name: 'Brushed Brass', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=300&h=300&fit=crop', use: 'Hardware & fixtures' },
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
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useReveal();

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-sage/10" style={{ background: 'rgba(250,248,245,0.85)', borderColor: 'rgba(135,168,120,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full sage-gradient flex items-center justify-center text-white font-bold">V</div>
            <span className="text-xl font-bold" style={{ color: '#2c2c2c' }}>Studio Verdure</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Portfolio', 'Process', 'Awards', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm transition-colors" style={{ color: '#6b7280' }}>{item}</a>
            ))}
          </div>
          <button className="btn-sage px-5 py-2.5 rounded-full text-sm font-semibold">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero — Editorial Split */}
      <section className="relative pt-28 pb-20 px-6 textured-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80" alt="Interior" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div>
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Interior Design Studio</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-normal mt-4 mb-6" style={{ color: '#1a1a1a' }}>
              Spaces that feel<br />
              <span style={{ color: '#87a878' }}>like home</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: '#6b7280' }}>
              We craft interiors that honor architecture, celebrate light, and reflect the people who live in them. From concept to completion, every detail is intentional. Over 250 projects delivered since 2008.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-sage px-8 py-4 rounded-full font-semibold">Start Your Project</button>
              <button className="px-8 py-4 rounded-full border-2 font-semibold transition-all" style={{ borderColor: '#87a878', color: '#87a878' }}>
                View Portfolio
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl" style={{ background: 'rgba(135,168,120,0.1)' }}></div>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80" alt="Beautiful interior" className="relative rounded-3xl shadow-xl w-full" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg">
              <div className="text-3xl font-bold" style={{ color: '#87a878' }}>250+</div>
              <div className="text-sm" style={{ color: '#6b7280' }}>Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="scroll-reveal py-12 warm-section">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: '250+', label: 'Projects' },
            { val: '17', label: 'Years' },
            { val: '98%', label: 'Satisfaction' },
            { val: '12', label: 'Awards' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#87a878' }}>{s.val}</div>
              <div className="text-xs uppercase tracking-wider mt-1" style={{ color: '#9ca3af' }}>{s.label}</div>
            </div>
          ))}
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
            {SERVICES.map((s, i) => (
              <div key={s.name} className="scroll-reveal card-elegant rounded-2xl p-6 sage-border-top" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a1a' }}>{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
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
            {PORTFOLIO.map((p, i) => (
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
            {PROCESS.map((p, i) => (
              <div key={p.step} className="scroll-reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full sage-gradient text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">{p.step}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Palette */}
      <section className="py-20 px-6 textured-bg">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Craftsmanship</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Our Materials</h2>
            <div className="process-line mx-auto mt-4"></div>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#6b7280' }}>We source the finest natural materials from trusted artisans worldwide. Quality you can see and feel.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MATERIALS.map((m, i) => (
              <div key={i} className="scroll-reveal card-elegant rounded-2xl overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="h-40 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover gallery-item" />
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold" style={{ color: '#1a1a1a' }}>{m.name}</h4>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>{m.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 px-6 warm-section">
        <div className="max-w-5xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <span className="sage-accent text-sm font-semibold tracking-wider uppercase">Recognition</span>
            <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Awards & Honors</h2>
            <div className="process-line mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((a, i) => (
              <div key={i} className="scroll-reveal card-elegant rounded-2xl p-6 flex items-center gap-6" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-16 h-16 rounded-full sage-gradient flex items-center justify-center text-white font-bold flex-shrink-0">{a.year}</div>
                <div>
                  <h4 className="font-bold text-lg" style={{ color: '#1a1a1a' }}>{a.title}</h4>
                  <p className="text-sm" style={{ color: '#6b7280' }}>{a.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project — Full Width */}
      <section className="scroll-reveal relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80" alt="Featured project" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(44,44,44,0.7)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: '#a3c294' }}>Featured Project</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">The Portland Residence</h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            A complete gut renovation of a 1920s craftsman home. We preserved original millwork and leaded glass while introducing modern open-plan living, a chef&apos;s kitchen, and a spa-inspired primary suite. The result honors the home&apos;s heritage while embracing contemporary comfort.
          </p>
          <button className="btn-sage px-8 py-4 rounded-full font-semibold">View Case Study</button>
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
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="scroll-reveal card-elegant rounded-2xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#87a878' }}>★</span>
                  ))}
                </div>
                <p className="leading-relaxed mb-6 italic" style={{ color: '#6b7280' }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full sage-gradient flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: '#1a1a1a' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#9ca3af' }}>{t.role}</div>
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
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Let&apos;s create something beautiful</h3>
                <p className="mb-6 leading-relaxed" style={{ color: '#6b7280' }}>Whether you&apos;re renovating a single room or designing an entire home, we&apos;d love to hear your vision.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📍</span>
                    </div>
                    <span className="text-sm" style={{ color: '#6b7280' }}>421 Elm Street, Suite 200, Portland, OR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📧</span>
                    </div>
                    <span className="text-sm" style={{ color: '#6b7280' }}>hello@studioverdure.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(135,168,120,0.1)' }}>
                      <span>📞</span>
                    </div>
                    <span className="text-sm" style={{ color: '#6b7280' }}>(503) 555-0142</span>
                  </div>
                </div>
                <div className="mt-8">
                  <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=250&fit=crop" alt="Studio" className="rounded-xl w-full h-40 object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4" style={{ color: '#87a878' }}>✓</div>
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Message Sent!</h4>
                    <p className="text-sm" style={{ color: '#6b7280' }}>We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <input type="text" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border bg-white text-sm transition-all" style={{ borderColor: '#e5e7eb' }} />
                    <input type="email" placeholder="Email Address" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border bg-white text-sm transition-all" style={{ borderColor: '#e5e7eb' }} />
                    <select className="w-full px-5 py-3 rounded-xl border bg-white text-sm transition-all" style={{ borderColor: '#e5e7eb', color: '#6b7280' }}>
                      <option value="">Project Type</option>
                      {SERVICES.map(s => <option key={s.name}>{s.name}</option>)}
                    </select>
                    <textarea placeholder="Tell us about your project..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border bg-white text-sm transition-all resize-none" style={{ borderColor: '#e5e7eb' }} />
                    <button onClick={() => setSubmitted(true)} className="btn-sage w-full py-3 rounded-xl font-semibold">Send Message</button>
                  </>
                )}
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
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>Crafting beautiful, livable spaces since 2008.</p>
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
                    <li key={link}><a href="#" className="text-sm transition-colors" style={{ color: '#9ca3af' }}>{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: '#374151' }}>
            <p className="text-sm" style={{ color: '#6b7280' }}>© 2026 Studio Verdure. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Sitemap'].map((link) => (
                <a key={link} href="#" className="text-sm transition-colors" style={{ color: '#6b7280' }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
