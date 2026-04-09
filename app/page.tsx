'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#052e16] text-green-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#052e16]/95 backdrop-blur-md border-b border-green-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-bold text-emerald-300">Luxe Interiors</h1><p className="text-[10px] tracking-[0.2em] text-green-600 uppercase">Interior Design — Miami</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('portfolio')} className="text-sm text-green-400 hover:text-emerald-300">Portfolio</button>
            <button onClick={() => scrollTo('services')} className="text-sm text-green-400 hover:text-emerald-300">Services</button>
            <button onClick={() => scrollTo('contact')} className="bg-emerald-600 text-white px-5 py-2.5 text-sm rounded-full hover:bg-emerald-500">Book Consultation</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-24 relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-white">
            <p className="text-emerald-300 text-sm tracking-[0.3em] uppercase mb-4">Full-Service Interior Design — Est. 2014</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] mb-6">Spaces that<br />feel like <span className="text-emerald-300">you.</span></h2>
            <p className="text-xl text-white/80 max-w-lg mb-10">Full-service interior design creating beautiful, functional spaces that reflect your personality and lifestyle.</p>
            <div className="flex gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-emerald-600 text-white px-8 py-4 text-lg rounded-full hover:bg-emerald-500">Book Consultation</button>
              <button onClick={() => scrollTo('portfolio')} className="border-2 border-white/50 text-white px-8 py-4 text-lg rounded-full hover:bg-white/10">View Portfolio</button>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-bold">Services</h2></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Full Room Design', desc: 'Concept to installation. We handle everything.', icon: '🎨', price: 'From $15K' },
                { name: 'Renovation', desc: 'Kitchen and bath design with contractor coordination.', icon: '🔨', price: 'From $25K' },
                { name: 'Furniture', desc: 'Custom and curated pieces for your space.', icon: '🛋️', price: 'Varies' },
                { name: 'Lighting', desc: 'Design and specification for ambiance and function.', icon: '💡', price: 'From $3K' },
                { name: 'Staging', desc: 'Home staging for sale. Sell faster, sell higher.', icon: '🏡', price: 'From $5K' },
                { name: 'Consultation', desc: 'Hourly design advice and direction.', icon: '💬', price: '$250/hr' },
              ].map((s, i) => (
                <div key={i} className="border border-green-800 rounded-xl p-8 hover:border-emerald-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                  <p className="text-green-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-emerald-400 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-green-950/30" aria-labelledby="portfolio-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="portfolio-heading" className="text-4xl font-bold">Portfolio</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80',
                'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80',
                'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80',
                'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=80',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden group">
                  <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24" aria-labelledby="contact-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 id="contact-heading" className="text-4xl font-bold mb-4">Book a Consultation</h2>
            <p className="text-green-400 mb-10">Free 30-minute discovery call to discuss your project.</p>
            <form className="border border-green-800 rounded-xl p-8 space-y-5 text-left" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 4000); }}>
              <div className="grid grid-cols-2 gap-5">
                <div><label className="block text-sm mb-2 text-green-400">Name</label><input type="text" placeholder="Your name" required className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-emerald-500 focus:outline-none" /></div>
                <div><label className="block text-sm mb-2 text-green-400">Email</label><input type="email" placeholder="you@email.com" required className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-emerald-500 focus:outline-none" /></div>
              </div>
              <div><label className="block text-sm mb-2 text-green-400">Project Type</label>
                <select className="w-full border border-green-800 bg-[#052e16] px-4 py-3 rounded-lg focus:border-emerald-500 focus:outline-none text-green-100">
                  <option>Full Room Design</option><option>Renovation</option><option>Staging</option><option>Consultation</option>
                </select>
              </div>
              <div><label className="block text-sm mb-2 text-green-400">Tell us about your space</label><textarea rows={3} placeholder="Rooms, style preferences, budget..." className="w-full border border-green-800 bg-transparent px-4 py-3 rounded-lg placeholder:text-green-700 focus:border-emerald-500 focus:outline-none resize-none" /></div>
              <button type="submit" disabled={submitted} className="w-full bg-emerald-600 text-white py-4 rounded-lg font-bold hover:bg-emerald-500 transition-colors disabled:opacity-60">{submitted ? '✓ Booked! We\'ll confirm shortly' : 'Book Consultation'}</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-green-900 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-green-600 text-sm">© {new Date().getFullYear()} Luxe Interiors. Miami, FL. ASID Member.</div></footer>
    </div>
  );
}
