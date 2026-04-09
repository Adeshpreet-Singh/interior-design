'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 {{ACCENTBG}} text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* MINIMAL NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-extrabold uppercase tracking-tight">Luxe Interiors</h1>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo('work')} className="text-sm text-emerald-300 hover:text-emerald-300">Work</button>
            <button onClick={() => scrollTo('about')} className="text-sm text-emerald-300 hover:text-emerald-300">About</button>
            <button onClick={() => scrollTo('contact')} className="bg-emerald-300 text-white px-4 py-2 text-sm">Book Consultation</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO - Bold type only */}
        <section className="pt-24">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <p className="text-emerald-300 text-sm tracking-widest uppercase mb-8">Est. 2014</p>
            <h2 className="text-6xl md:text-9xl font-extrabold leading-[0.85] tracking-tighter max-w-4xl whitespace-pre-line">Spaces that
feel like you.</h2>
            <p className="text-emerald-300 text-xl mt-8 max-w-xl">Full-service interior design creating beautiful, functional spaces that reflect your personality and lifestyle.</p>
          </div>
        </section>
        {/* PORTFOLIO GRID */}
        <section id="work" className="py-24" aria-labelledby="work-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="work-heading" className="text-2xl font-bold mb-12 uppercase tracking-wider">Selected Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">🎨</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Full Room Design</div><div className="text-sm text-white/70">Concept to installation.</div></div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">🔨</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Renovation</div><div className="text-sm text-white/70">Kitchen and bath design.</div></div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">🛋️</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Furniture</div><div className="text-sm text-white/70">Custom and curated pieces.</div></div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">💡</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Lighting</div><div className="text-sm text-white/70">Design and specification.</div></div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">🏡</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Staging</div><div className="text-sm text-white/70">Home staging for sale.</div></div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="w-full h-full bg-emerald-900 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">💬</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity"><div className="font-bold">Consultation</div><div className="text-sm text-white/70">Hourly design advice.</div></div>
              </div>
            </div>
            </div>
          </div>
        </section>
        {/* ABOUT - Minimal */}
        <section id="about" className="py-24 bg-emerald-900" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 id="about-heading" className="text-4xl font-bold mb-6">Spaces that
feel like you.</h2>
              <p className="text-emerald-300 leading-relaxed mb-6">Full-service interior design creating beautiful, functional spaces that reflect your personality and lifestyle.</p>
            <div className="bg-emerald-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">CD</div>
              <h3 className="font-bold">Claire Dubois</h3><p className="text-sm text-emerald-300">Principal Designer</p><p className="text-sm text-emerald-300 mt-1">ASID certified</p></div>
            <div className="bg-emerald-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">AR</div>
              <h3 className="font-bold">Alex Rivera</h3><p className="text-sm text-emerald-300">Project Manager</p><p className="text-sm text-emerald-300 mt-1">LEED AP</p></div>
            <div className="bg-emerald-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">SK</div>
              <h3 className="font-bold">Sophie Kim</h3><p className="text-sm text-emerald-300">Designer</p><p className="text-sm text-emerald-300 mt-1">Parsons alum</p></div>
            <div className="bg-emerald-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">CM</div>
              <h3 className="font-bold">Carlos Mendez</h3><p className="text-sm text-emerald-300">Procurement</p><p className="text-sm text-emerald-300 mt-1">Trade vendor network</p></div>
            </div>
            <div className="grid grid-cols-2 gap-6">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-300">200+</div><div className="text-sm text-emerald-300 mt-1">Projects</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-300">10</div><div className="text-sm text-emerald-300 mt-1">Design awards</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-emerald-300">ASID</div><div className="text-sm text-emerald-300 mt-1">Member</div></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <h2 id="faq-heading" className="text-2xl font-bold mb-12 uppercase tracking-wider">FAQ</h2>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Budget?<span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">Projects start at $15K. We work within your budget.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Timeline?<span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">4-12 weeks depending on scope.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Style?<span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">We work in all styles: modern, traditional, eclectic.</p></details></div>
          </div>
        </section>
        {/* CONTACT - Minimal */}
        <section id="contact" className="py-24 bg-emerald-900" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <h2 id="contact-heading" className="text-4xl font-bold mb-8">Let's work together.</h2>
              <div className="text-emerald-300 space-y-4">                  <div><div className="font-bold">Phone</div><a href="tel:(555) 123-4569" class="text-emerald-300">(555) 123-4569</a></div>
                  <div><div className="font-bold">Address</div><p>300 Design District, Miami, FL</p></div>
                  <div><div className="font-bold">Hours</div><p>Mon–Fri 9 AM – 6 PM</p></div></div>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="w-full border-b border-current/20 bg-transparent px-0 py-3 focus:border-text-emerald-300 focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full border-b border-current/20 bg-transparent px-0 py-3 focus:outline-none" />
              <textarea rows={4} placeholder="Tell us about your project" className="w-full border-b border-current/20 bg-transparent px-0 py-3 resize-none focus:outline-none" />
              <button type="submit" className="bg-emerald-300 text-white px-8 py-3">Book Consultation</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-current/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm text-emerald-300">
          <span className="font-bold uppercase tracking-tight">Luxe Interiors</span>
          <span>&copy; 2026</span>
        </div>
      </footer>
    </div>
  );
}
