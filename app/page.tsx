'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-300 text-black px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-emerald-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-tight font-bold">Luxe Interiors</h1>
              <p className="text-xs text-emerald-300 tracking-wider uppercase">Est. 2014</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('services')} className="text-sm text-emerald-300 hover:text-emerald-300 transition-colors">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-emerald-300 hover:text-emerald-300 transition-colors">Team</button>
              <button onClick={() => scrollTo('faq')} className="text-sm text-emerald-300 hover:text-emerald-300 transition-colors">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-emerald-300 hover:text-emerald-300 transition-colors">Contact</button>
              <button onClick={() => scrollTo('contact')} className="bg-emerald-300 text-black px-6 py-2.5 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                Book Consultation
              </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-emerald-950 border-t border-current/10 px-6 py-4 space-y-1">
              <button onClick={() => scrollTo('services')} className="block w-full text-left px-4 py-3 text-emerald-300 hover:text-emerald-300">Services</button>
              <button onClick={() => scrollTo('team')} className="block w-full text-left px-4 py-3 text-emerald-300 hover:text-emerald-300">Team</button>
              <button onClick={() => scrollTo('faq')} className="block w-full text-left px-4 py-3 text-emerald-300 hover:text-emerald-300">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-3 text-emerald-300 hover:text-emerald-300">Contact</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-emerald-300 text-sm tracking-widest uppercase mb-6">Est. 2014</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-8 whitespace-pre-line">
                Spaces that
feel like you.
              </h2>
              <p className="text-xl text-emerald-300 max-w-xl leading-relaxed mb-10">
                Full-service interior design creating beautiful, functional spaces that reflect your personality and lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-emerald-300 text-black px-8 py-4 text-lg font-medium rounded-full hover:opacity-90 transition-opacity">
                  Book Consultation
                </button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 text-lg font-medium rounded-full hover:bg-current/5 transition-colors">
                  Portfolio
                </button>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300">200+</div>
              <div className="text-sm text-emerald-300 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300">10</div>
              <div className="text-sm text-emerald-300 mt-1">Design awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-300">ASID</div>
              <div className="text-sm text-emerald-300 mt-1">Member</div>
            </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-emerald-300 text-sm tracking-widest uppercase mb-3">What We Offer</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Full Room Design</h3>
              <p className="text-emerald-300 leading-relaxed">Concept to installation.</p>
            </article>
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🔨</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Renovation</h3>
              <p className="text-emerald-300 leading-relaxed">Kitchen and bath design.</p>
            </article>
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🛋️</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Furniture</h3>
              <p className="text-emerald-300 leading-relaxed">Custom and curated pieces.</p>
            </article>
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">💡</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Lighting</h3>
              <p className="text-emerald-300 leading-relaxed">Design and specification.</p>
            </article>
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">🏡</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Staging</h3>
              <p className="text-emerald-300 leading-relaxed">Home staging for sale.</p>
            </article>
            <article className="bg-emerald-900 border border-emerald-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4" aria-hidden="true">💬</div>
              <h3 className="text-xl font-bold mb-3 text-emerald-50">Consultation</h3>
              <p className="text-emerald-300 leading-relaxed">Hourly design advice.</p>
            </article>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-emerald-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-emerald-300 text-sm tracking-widest uppercase mb-3">Our Team</p>
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">Meet the experts</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">CD</div>
              <h3 className="font-bold text-emerald-50">Claire Dubois</h3>
              <p className="text-sm text-emerald-300">Principal Designer</p>
              <p className="text-sm text-emerald-300 mt-1">ASID certified</p>
            </div>
            <div className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">AR</div>
              <h3 className="font-bold text-emerald-50">Alex Rivera</h3>
              <p className="text-sm text-emerald-300">Project Manager</p>
              <p className="text-sm text-emerald-300 mt-1">LEED AP</p>
            </div>
            <div className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">SK</div>
              <h3 className="font-bold text-emerald-50">Sophie Kim</h3>
              <p className="text-sm text-emerald-300">Designer</p>
              <p className="text-sm text-emerald-300 mt-1">Parsons alum</p>
            </div>
            <div className="bg-emerald-900 border border-emerald-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-300/20 flex items-center justify-center text-2xl font-bold text-emerald-300">CM</div>
              <h3 className="font-bold text-emerald-50">Carlos Mendez</h3>
              <p className="text-sm text-emerald-300">Procurement</p>
              <p className="text-sm text-emerald-300 mt-1">Trade vendor network</p>
            </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-emerald-300 text-sm tracking-widest uppercase mb-3">Questions</p>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold">FAQ</h2>
            </div>
            <div className="space-y-4">
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-emerald-50">
                Budget?
                <span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">Projects start at $15K. We work within your budget.</p>
            </details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-emerald-50">
                Timeline?
                <span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">4-12 weeks depending on scope.</p>
            </details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-emerald-50">
                Style?
                <span className="ml-4 text-emerald-300 group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <p className="mt-3 text-emerald-300 text-sm leading-relaxed">We work in all styles: modern, traditional, eclectic.</p>
            </details>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-emerald-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-emerald-300 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Book Consultation</h2>
                <div className="space-y-6 text-emerald-300">
                  <div>
                    <div className="font-bold text-emerald-50">Phone</div>
                    <a href="tel:(555) 123-4569" className="hover:text-emerald-300 transition-colors">(555) 123-4569</a>
                  </div>
                  <div>
                    <div className="font-bold text-emerald-50">Address</div>
                    <p className="whitespace-pre-line">300 Design District, Miami, FL</p>
                  </div>
                  <div>
                    <div className="font-bold text-emerald-50">Hours</div>
                    <p>Mon–Fri 9 AM – 6 PM</p>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="How can we help?" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-emerald-300 text-black py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    {submitted ? "Sent! We'll be in touch." : "Book Consultation"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 border-t border-current/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-lg">Luxe Interiors</div>
            <p className="text-sm text-emerald-300">Est. 2014</p>
          </div>
          <p className="text-sm text-emerald-300">&copy; 2026 Luxe Interiors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
