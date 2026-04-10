'use client';
import { useState } from 'react';
const portfolio = [
  { name: 'Pacific Heights Residence', type: 'Full Home', img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80', desc: 'A 4,500 sq ft Victorian renovation blending period details with modern comfort.' },
  { name: 'SOMA Loft', type: 'Living + Kitchen', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80', desc: 'Industrial loft transformed into a warm family home with custom millwork.' },
  { name: 'Napa Valley Retreat', type: 'Vacation Home', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', desc: 'Wine country weekend home designed for entertaining and relaxation.' },
  { name: 'Tech CEO Office', type: 'Commercial', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', desc: 'Executive office suite balancing productivity with biophilic design principles.' },
];
const services = [
  { name: 'Full-Service Design', desc: 'From concept through installation. We handle space planning, material selection, custom furniture, contractor management, and final styling. Timeline: 3-6 months.', price: 'Starting at $25K' },
  { name: 'Design Consultation', desc: 'A focused 2-hour session where we review your space, discuss your vision, and provide a written action plan you can implement yourself or with us.', price: '$450/session' },
  { name: 'E-Design', desc: 'Remote design service. We create a complete room plan with mood board, floor plan, product links, and installation guide. Perfect for out-of-town clients.', price: '$1,500/room' },
];
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}>
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#f5f0e8ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #d4c9b8' }}>
        <div><h1 className="heading-design text-xl font-light" style={{ color: 'var(--terracotta)' }}>Atelier Interiors</h1><p className="text-[9px] tracking-[0.3em] uppercase opacity-50">Interior Design · San Francisco</p></div>
        <div className="hidden md:flex gap-8 text-sm opacity-70">{['portfolio', 'services', 'contact'].map(s => <button key={s} onClick={() => scrollTo(s)} className="capitalize">{s}</button>)}</div>
        <button onClick={() => scrollTo('contact')} className="text-sm px-5 py-2" style={{ background: 'var(--charcoal)', color: 'white' }}>Book Consult</button>
      </nav>
      <main>
        <section className="py-28 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4 opacity-50">Since 2012</p>
              <h2 className="heading-design text-5xl md:text-6xl font-light mb-6">Spaces that<br/><em style={{ color: 'var(--terracotta)' }}>feel like you.</em></h2>
              <p className="text-lg opacity-60 mb-8 leading-relaxed max-w-lg">We design homes that are beautiful and livable. Spaces that reflect who you are, not who Pinterest thinks you should be.</p>
              <button onClick={() => scrollTo('portfolio')} className="px-8 py-3 font-medium" style={{ border: '2px solid var(--charcoal)' }}>View Our Work</button>
            </div>
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80" alt="Interior" className="w-full h-96 object-cover" loading="lazy" />
          </div>
        </section>
        <section id="portfolio" className="py-24 px-2" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-50 px-6">Portfolio</p>
            <h2 className="heading-design text-4xl font-light mb-12 px-6">Selected Projects</h2>
            <div className="grid grid-cols-2 gap-2">
              {portfolio.map(p => (
                <div key={p.name} className="portfolio-item">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className="info"><p className="text-xs opacity-60 mb-1">{p.type}</p><h3 className="font-medium">{p.name}</h3><p className="text-xs opacity-60 mt-1">{p.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-50">Services</p>
            <h2 className="heading-design text-4xl font-light mb-12">How We Work</h2>
            <div className="space-y-6">
              {services.map(s => (
                <div key={s.name} className="p-6" style={{ borderBottom: '1px solid #d4c9b8' }}>
                  <div className="flex justify-between items-start mb-3"><h3 className="font-medium text-lg">{s.name}</h3><p className="heading-design text-lg" style={{ color: 'var(--terracotta)' }}>{s.price}</p></div>
                  <p className="text-sm opacity-60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 px-8" style={{ background: 'var(--charcoal)', color: 'white' }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3 opacity-50">Get Started</p>
              <h2 className="heading-design text-4xl font-light mb-6">Book a Consultation</h2>
              <p className="opacity-60 leading-relaxed mb-6">Every project starts with a conversation. Tell us about your space, your style, and your budget. We will let you know if we are the right fit.</p>
              <div className="space-y-2 text-sm opacity-60"><p>📍 580 California St, Suite 400, San Francisco, CA 94104</p><p>📧 <a href="mailto:studio@atelierinteriors.com" style={{ color: 'var(--terracotta)' }}>studio@atelierinteriors.com</a></p><p>📞 <a href="tel:(415) 555-0162" style={{ color: 'var(--terracotta)' }}>(415) 555-0162</a></p></div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center"><div><p className="heading-design text-2xl" style={{ color: 'var(--terracotta)' }}>Thank you.</p><p className="opacity-60 text-sm mt-2">We will be in touch within 48 hours.</p></div></div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" style={{ color: 'var(--charcoal)' }}>
                  <input type="text" placeholder="Name" required className="w-full" />
                  <input type="email" placeholder="Email" required className="w-full" />
                  <select className="w-full"><option value="">Service</option>{services.map(s => <option key={s.name}>{s.name}</option>)}</select>
                  <input type="text" placeholder="Project location" className="w-full" />
                  <textarea rows={3} placeholder="Tell us about your project..." className="w-full" />
                  <button type="submit" className="w-full py-3 font-medium" style={{ background: 'var(--terracotta)', color: 'white' }}>Book Consultation</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs opacity-40"><p>Atelier Interiors. San Francisco, CA.</p></footer>
    </div>
  );
}