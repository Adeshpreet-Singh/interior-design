'use client';
import { useState } from 'react';

const services = [
  {
    name: 'Residential Design',
    icon: '🏠',
    desc: 'Complete home transformations from single rooms to full-house renovations. We curate every detail — from architectural millwork and built-in cabinetry to textiles, lighting, and art placement. Our residential projects balance timeless elegance with the everyday realities of lived-in spaces, ensuring your home is as functional as it is beautiful.',
  },
  {
    name: 'Commercial Spaces',
    icon: '🏢',
    desc: 'Offices, retail environments, restaurants, and hospitality venues designed to elevate brand identity and optimize human experience. We understand that commercial interiors must serve business objectives — driving foot traffic, encouraging collaboration, or creating a memorable dining atmosphere — while meeting building codes and accessibility standards.',
  },
  {
    name: 'Kitchen & Bath',
    icon: '🍳',
    desc: 'Specialized design for the two rooms that matter most to daily life. We handle space planning, cabinetry configuration, countertop and backsplash selection, fixture specification, and lighting design. Our kitchen and bath projects marry ergonomics with aesthetics, creating spaces where cooking feels effortless and bathing feels like a retreat.',
  },
  {
    name: 'Color Consultation',
    icon: '🎨',
    desc: 'A focused engagement where we develop a comprehensive color strategy for your space. We analyze natural light conditions, existing furnishings, architectural features, and your personal relationship with color. The deliverable is a detailed palette with specific paint codes, finish recommendations, and guidance on where each hue performs best.',
  },
  {
    name: 'Staging',
    icon: '✨',
    desc: 'Pre-sale staging that helps buyers envision their life in your property. We furnish and style vacant or occupied homes using a curated inventory of furniture, art, and accessories. Staged homes in San Francisco sell an average of 18 days faster and for 5-8% above asking price compared to unstaged comparables.',
  },
  {
    name: 'Project Management',
    icon: '📋',
    desc: 'End-to-end oversight of your renovation or construction project. We coordinate between architects, contractors, craftspeople, and vendors — managing timelines, budgets, and quality control so you don\'t have to. Weekly progress reports, site visits, and punch-list management ensure your project finishes on time and on budget.',
  },
];

const portfolio = [
  {
    name: 'Pacific Heights Residence',
    room: 'Full Home',
    style: 'Modern Victorian',
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
    desc: 'A 4,500-square-foot Victorian renovation in Pacific Heights that honors the home\'s 1890s bones — original crown moldings, pocket doors, and a grand staircase — while introducing contemporary comfort. Custom millwork in walnut, a chef\'s kitchen with marble waterfall counters, and a master suite that feels like a European boutique hotel.',
  },
  {
    name: 'SOMA Loft Conversion',
    room: 'Living Room & Kitchen',
    style: 'Industrial Warmth',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    desc: 'A 2,200-square-foot former warehouse in South of Market converted into a light-filled family home. Exposed steel beams and concrete floors meet hand-selected Moroccan tile, linen drapery, and a custom dining table milled from a single fallen Monterey cypress. The result is raw and refined in equal measure.',
  },
  {
    name: 'Napa Valley Retreat',
    room: 'Entire Property',
    style: 'Wine Country Modern',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    desc: 'A weekend escape designed for hosting. The great room features a 20-foot ceiling with reclaimed oak beams, a stone fireplace, and floor-to-ceiling windows framing vineyard views. Outdoor living spaces include a covered dining terrace, a fire pit lounge, and a pool house with its own bar and kitchen.',
  },
  {
    name: 'Tech CEO Executive Suite',
    room: 'Office & Boardroom',
    style: 'Biophilic Minimalism',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    desc: 'A corner office suite in SoMa designed around the principle that leadership thrives in calm. Living moss walls, a water feature, circadian-tuned lighting, and a concealed meditation nook create a space that regulates nervous systems while projecting quiet authority. Acoustic engineering ensures privacy without isolation.',
  },
  {
    name: 'Noe Valley Family Home',
    room: 'Living, Dining & Children\'s Rooms',
    style: 'Contemporary Comfort',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    desc: 'A young family\'s Edwardian reimagined for modern living. We preserved the home\'s street-facing facade and original details while opening the rear to a light-filled open plan. Performance fabrics, rounded-edge furniture, washable wallcoverings, and clever storage solutions prove that beautiful design and small children can coexist.',
  },
  {
    name: 'Hayes Valley Boutique Hotel Lobby',
    room: 'Lobby & Lounge',
    style: 'Eclectic Luxe',
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    desc: 'A 12-room boutique hotel lobby that tells the story of San Francisco through design. Local artists\' work lines the walls, custom furniture references mid-century modernism, and a curated library corner invites guests to linger. The space transitions seamlessly from a bright morning café atmosphere to an intimate evening lounge.',
  },
];

const process = [
  {
    step: 1,
    title: 'Discovery',
    desc: 'We begin with an in-depth conversation about how you live, what you love, and what frustrates you about your current space. We visit your home, take measurements and photographs, and listen carefully. This phase is about understanding your life, not just your taste.',
  },
  {
    step: 2,
    title: 'Concept Development',
    desc: 'Our team develops a design concept that translates your vision into a cohesive direction. You\'ll receive a mood board, preliminary floor plans, and a materials palette. We present options, not ultimatums — this is a collaborative process where your feedback shapes the outcome.',
  },
  {
    step: 3,
    title: 'Design Refinement',
    desc: 'Based on your input, we refine every element: final floor plans, furniture layouts, lighting schemes, material specifications, and custom details. We create 3D renderings so you can walk through your future space before a single wall is touched. Every decision is documented in a comprehensive design package.',
  },
  {
    step: 4,
    title: 'Procurement & Execution',
    desc: 'We manage ordering, lead times, and logistics — coordinating with craftspeople, contractors, and vendors on your behalf. Regular site visits ensure installation quality meets our standards. You receive weekly updates with photos and timeline tracking so you always know where things stand.',
  },
  {
    step: 5,
    title: 'Installation & Reveal',
    desc: 'The most satisfying day. We oversee the final installation of furniture, art, and accessories — styling every surface, hanging every piece, and adjusting every detail until the space feels complete. We hand you the keys to a home that is unmistakably yours.',
  },
];

const testimonials = [
  {
    quote: 'They didn\'t just design our home — they listened. Every room feels like us, but better. Our kitchen has become the heart of the house in a way it never was before. Friends walk in and can\'t believe the transformation.',
    name: 'Sarah & James Whitfield',
    project: 'Pacific Heights Residence',
  },
  {
    quote: 'Working with Atelier on our office was a revelation. Productivity went up, employee satisfaction scores improved, and clients consistently comment on the space. The biophilic elements they introduced changed the entire energy of our team.',
    name: 'David Chen, CEO',
    project: 'Tech CEO Executive Suite',
  },
  {
    quote: 'We were terrified of renovating with two toddlers. Atelier designed a home that is genuinely child-proof without looking like a daycare. The hidden storage alone was worth the investment. They gave us our home back.',
    name: 'Priya & Anand Mehta',
    project: 'Noe Valley Family Home',
  },
];

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'Most full-service residential projects take 4 to 6 months from initial consultation to final reveal. Smaller-scope projects like a single room or color consultation can be completed in 4 to 8 weeks. Commercial timelines vary based on scope and permitting requirements. We set realistic timelines at the outset and keep you informed of any adjustments.',
  },
  {
    q: 'Do you work within specific budgets?',
    a: 'Yes. We believe great design is about intelligent resource allocation, not unlimited spending. During our discovery phase, we discuss budget openly and design accordingly. Our fee structure is transparent — you\'ll know the full investment before we begin procurement. We also offer phased approaches for clients who prefer to tackle projects in stages.',
  },
  {
    q: 'How do you handle contractor and vendor relationships?',
    a: 'We maintain a vetted network of licensed contractors, craftspeople, and specialty vendors who have delivered consistent quality across dozens of projects. You are welcome to use your own contractors, and we are equally comfortable managing either arrangement. Our role is to ensure every trade professional executes to the design specification.',
  },
  {
    q: 'Can we keep some of our existing furniture?',
    a: 'Absolutely. We often incorporate existing pieces into new designs — reupholstering, refinishing, or simply repositioning items to create a fresh composition. During our discovery visit, we assess what works, what could work with modification, and what should be replaced. Your sentimental favorites almost always have a place.',
  },
  {
    q: 'Do you work outside San Francisco?',
    a: 'Our primary service area is the San Francisco Bay Area, but we take on select projects throughout Northern California, including Napa, Sonoma, and the Peninsula. For remote clients, our E-Design service delivers a complete room plan with mood boards, floor plans, product links, and installation guides that you can implement locally.',
  },
  {
    q: 'What makes Atelier different from other design firms?',
    a: 'Three things. First, we are obsessively client-centered — our portfolio is deliberately diverse because we design for your life, not our aesthetic. Second, we are transparent about costs, timelines, and trade-offs. Third, we stay involved through installation and beyond. We do not disappear after handing you a mood board.',
  },
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#f5f0e8ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #d4c9b8' }}>
        <div>
          <h1 className="int-heading text-xl font-light" style={{ color: 'var(--terracotta)' }}>Atelier Interiors</h1>
          <p className="text-base tracking-[0.3em] uppercase opacity-80">Interior Design · San Francisco</p>
        </div>
        <div className="hidden md:flex gap-6 text-base font-medium" style={{ color: '#5f5f5f' }}>
          {['services', 'portfolio', 'contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="capitalize" style={{ background: 'transparent', border: 'none', padding: '0.5rem 0', cursor: 'pointer', transition: 'color 0.2s', color: '#5f5f5f' }} onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1a1a1a'} onMouseOut={(e) => (e.target as HTMLElement).style.color = '#5f5f5f'}>{s}</button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} className="int-btn text-base px-5 py-2">Book Consult</button>
      </nav>

      <main>
        {/* Hero */}
        <section className="int-hero py-28 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-4 opacity-80">San Francisco · Since 2012</p>
              <h2 className="int-heading text-5xl md:text-6xl font-light mb-6 leading-tight">
                Spaces that<br/><em style={{ color: 'var(--terracotta)' }}>tell your story.</em>
              </h2>
              <p className="text-lg opacity-85 mb-8 leading-relaxed max-w-lg">
                At Atelier Interiors, we believe every space has a narrative waiting to be told. For over a decade, we have been designing homes and commercial environments in San Francisco that are deeply personal, rigorously functional, and quietly beautiful. We don&apos;t follow trends — we listen to the people who will live in the spaces we create.
              </p>
              <p className="text-base opacity-80 mb-8 leading-relaxed max-w-lg">
                Our team of designers, architects, and project managers brings together diverse perspectives united by a single commitment: to create interiors that feel inevitable, as though they could not have been designed any other way. Whether you are renovating a Victorian in Pacific Heights, furnishing a SOMA loft, or launching a boutique hotel, we meet you where you are and take you somewhere extraordinary.
              </p>
              <div className="flex gap-4">
                <button onClick={() => scrollTo('portfolio')} className="int-btn-outline px-8 py-3 font-medium">View Our Work</button>
                <button onClick={() => scrollTo('contact')} className="int-btn btn px-8 py-3 font-medium">Start a Project</button>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80" alt="Atelier Interiors — a thoughtfully designed living space" className="w-full h-96 object-cover img-hover" loading="lazy" />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="int-section-alt reveal py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80 text-center">What We Do</p>
            <h2 className="int-heading text-4xl font-light mb-4 text-center">Our Services</h2>
            <p className="text-center opacity-80 max-w-2xl mx-auto mb-16 leading-relaxed">Every project is unique, but our commitment to craft, communication, and client satisfaction is constant. Here is how we can help.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map(s => (
                <div key={s.name} className="int-card p-8 reveal">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="font-medium text-lg mb-3">{s.name}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="int-reveal py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80 text-center">Our Work</p>
            <h2 className="int-heading text-4xl font-light mb-4 text-center">Selected Projects</h2>
            <p className="text-center opacity-80 max-w-2xl mx-auto mb-16 leading-relaxed">A curated selection of recent work spanning residential, commercial, and hospitality interiors across the Bay Area.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map(p => (
                <div key={p.name} className="int-card overflow-hidden img-hover reveal">
                  <img src={p.img} alt={p.name} className="w-full h-56 object-cover" loading="lazy" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="badge">{p.room}</span>
                      <span className="badge">{p.style}</span>
                    </div>
                    <h3 className="font-medium text-lg mb-2">{p.name}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section id="process" className="int-section-alt reveal py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80">How It Works</p>
            <h2 className="int-heading text-4xl font-light mb-4">Our Design Process</h2>
            <p className="opacity-80 max-w-2xl mb-16 leading-relaxed">A structured, transparent approach that keeps you informed and involved at every stage. No surprises, no guesswork.</p>
            <div className="space-y-0">
              {process.map((p, i) => (
                <div key={p.step} className="flex gap-8 items-start p-8 reveal" style={{ borderBottom: i < process.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center heading text-xl font-light" style={{ background: 'var(--terracotta)', color: 'white' }}>
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{p.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="int-reveal py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80 text-center">Client Voices</p>
            <h2 className="int-heading text-4xl font-light mb-16 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(t => (
                <div key={t.name} className="int-card p-8 reveal">
                  <p className="text-sm opacity-90 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-sm opacity-90 mt-1">{t.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section id="philosophy" className="int-section-alt reveal py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80 text-center">Our Beliefs</p>
            <h2 className="int-heading text-4xl font-light mb-12 text-center">Design Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-medium text-lg mb-3">Form Follows Life</h3>
                <p className="text-sm opacity-85 leading-relaxed mb-6">We reject the idea that beautiful spaces must sacrifice livability. Every design decision — from the height of a countertop to the placement of a light switch — is evaluated against how it serves daily life. A well-designed home should make ordinary moments feel effortless and exceptional moments feel possible.</p>
                <h3 className="font-medium text-lg mb-3">Material Honesty</h3>
                <p className="text-sm opacity-85 leading-relaxed">We choose materials for their inherent beauty, durability, and story. Real wood ages with character. Natural stone develops a patina. Linen softens with use. We believe spaces gain soul when their surfaces carry the honest marks of time, rather than the manufactured perfection of synthetic substitutes.</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-3">Context Over Trends</h3>
                <p className="text-sm opacity-85 leading-relaxed mb-6">A home in Noe Valley with two young children demands different solutions than a Pacific Heights pied-a-terre. We design for the specific light, climate, culture, and life stage of each client. Our portfolio is deliberately eclectic because our clients are. We are not building a brand aesthetic — we are building your home.</p>
                <h3 className="font-medium text-lg mb-3">Sustainable by Default</h3>
                <p className="text-sm opacity-85 leading-relaxed">Sustainability is not an add-on or a marketing angle — it is a design constraint that produces better results. We source locally when possible, specify low-VOC finishes, recommend energy-efficient systems, and design for longevity rather than disposability. A well-designed space that lasts thirty years is inherently more sustainable than a trendy one replaced every five.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="int-reveal py-24 px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80 text-center">Questions</p>
            <h2 className="int-heading text-4xl font-light mb-4 text-center">Frequently Asked</h2>
            <p className="text-center opacity-80 max-w-xl mx-auto mb-16 leading-relaxed">Answers to the questions we hear most often. If yours isn&apos;t here, we welcome your call.</p>
            <div className="space-y-0">
              {faqs.map((f, i) => (
                <div key={i} className="border-b" style={{ borderColor: '#e5e5e5' }}>
                  <button className="int-btn w-full flex justify-between items-center py-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)} >
                    <span className="font-medium pr-4">{f.q}</span>
                    <span className="flex-shrink-0 text-lg opacity-90">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="text-sm opacity-85 leading-relaxed">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Booking */}
        <section id="contact" className="int-reveal py-24 px-8" style={{ background: 'var(--charcoal)', color: 'white' }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase mb-3 opacity-80">Get Started</p>
              <h2 className="int-heading text-4xl font-light mb-6">Book a Consultation</h2>
              <p className="opacity-85 leading-relaxed mb-6">
                Every project begins with a conversation. Tell us about your space, your vision, and your timeline. Our initial consultation is a focused 2-hour session where we walk your space, discuss possibilities, and provide a written action plan. If we are the right fit, we will outline a clear path forward with transparent pricing and realistic timelines.
              </p>
              <p className="opacity-85 leading-relaxed mb-8">
                There is no obligation and no hard sell. We earn projects by demonstrating value, not by pressuring decisions. If your project is better served by another approach, we will tell you honestly.
              </p>
              <div className="space-y-3 text-sm opacity-85">
                <p>📍 580 California St, Suite 400, San Francisco, CA 94104</p>
                <p>📧 <a href="mailto:studio@atelierinteriors.com" className="underline" style={{ color: 'var(--terracotta)' }}>studio@atelierinteriors.com</a></p>
                <p>📞 <a href="tel:(415) 555-0162" className="underline" style={{ color: 'var(--terracotta)' }}>(415) 555-0162</a></p>
                <p>🕐 Monday – Friday, 9 AM – 6 PM PST</p>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="h-full flex items-center">
                  <div>
                    <p className="int-heading text-2xl" style={{ color: 'var(--terracotta)' }}>Thank you.</p>
                    <p className="opacity-85 text-sm mt-2">We will review your inquiry and respond within 48 hours. In the meantime, feel free to browse our portfolio for inspiration.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4" style={{ color: 'var(--charcoal)' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First name" required className="w-full px-4 py-3 rounded border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                    <input type="text" placeholder="Last name" required className="w-full px-4 py-3 rounded border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                  </div>
                  <input type="email" placeholder="Email address" required className="w-full px-4 py-3 rounded border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                  <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                  <select className="w-full px-4 py-3 rounded border border-gray-300 " style={{ border: '1px solid #d4c9b8', background: 'white' }}>
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s.name}>{s.name}</option>)}
                  </select>
                  <input type="text" placeholder="Project address or neighborhood" className="w-full px-4 py-3 rounded border border-gray-300  border-2 border-current/20" style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                  <select className="w-full px-4 py-3 rounded border border-gray-300 " style={{ border: '1px solid #d4c9b8', background: 'white' }}>
                    <option value="">Estimated budget range</option>
                    <option>Under $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000 – $250,000</option>
                    <option>$250,000+</option>
                    <option>Not sure yet</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your project — what inspired you, what isn't working now, and what you envision..." className="w-full px-4 py-3 rounded border border-gray-300 " style={{ border: '1px solid #d4c9b8', background: 'white' }} />
                  <button type="submit" className="w-full py-3 font-medium rounded" style={{ background: 'var(--terracotta)', color: 'white' }}>Request Consultation</button>
                  <p className="text-sm opacity-90 text-center">We respond within 48 hours. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-8 text-center" style={{ borderTop: '1px solid #d4c9b8' }}>
        <p className="int-heading text-lg font-light mb-2" style={{ color: 'var(--terracotta)' }}>Atelier Interiors</p>
        <p className="text-sm opacity-90">580 California St, Suite 400, San Francisco, CA 94104</p>
        <p className="text-sm opacity-90 mt-1">© {new Date().getFullYear()} Atelier Interiors. All rights reserved.</p>
      </footer>
    </div>
  );
}
