'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { title: 'Residential Design', desc: 'Full-service interior design for homes, apartments, and private residences.', icon: '🏠' },
    { title: 'Commercial Spaces', desc: 'Offices, retail environments, and corporate interiors that inspire.', icon: '🏢' },
    { title: 'Hospitality Design', desc: 'Hotels, restaurants, and bars with unforgettable atmospheres.', icon: '✨' },
    { title: 'Renovation', desc: 'Complete interior transformations and thoughtful space reimagining.', icon: '🔨' },
    { title: 'Styling', desc: 'Furniture selection, art curation, and finishing touches.', icon: '🪑' },
    { title: '3D Visualization', desc: 'Photorealistic renderings to preview your space before construction.', icon: '📐' },
  ];

  const projects = [
    { name: 'Pacific Heights Residence', type: 'Residential', location: 'San Francisco, CA', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80', alt: 'Luxury living room with ocean views' },
    { name: 'The Greenwich Hotel Lobby', type: 'Hospitality', location: 'New York, NY', img: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600&q=80', alt: 'Elegant hotel lobby interior' },
    { name: 'SoHo Tech Office', type: 'Commercial', location: 'New York, NY', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', alt: 'Modern office interior' },
    { name: 'Beacon Hill Townhouse', type: 'Renovation', location: 'Boston, MA', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80', alt: 'Classic townhouse renovation' },
  ];

  const team = [
    { name: 'Isabella Romano', role: 'Principal Designer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80' },
    { name: 'Thomas Wright', role: 'Design Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Amelia Foster', role: 'Senior Stylist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' },
    { name: 'Marcus Chen', role: '3D Visualization Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  ];

  const testimonials = [
    { text: "Atelier transformed our house into a home that perfectly reflects our family's personality and lifestyle.", author: 'Christine & Mark Taylor', role: 'Residential Client' },
    { text: "The hotel lobby redesign increased our guest satisfaction scores by 35%. Truly exceptional work.", author: 'Jonathan Reed', company: 'The Greenwich Hotel', role: 'General Manager' },
    { text: "They created an office space that our employees actually enjoy coming to. Productivity has never been higher.", author: 'Sarah Mitchell', company: 'TechVentures', role: 'CEO' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1a202c] rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-[#1a202c]">Atelier</span>
                <span className="text-sm text-gray-500 block -mt-1">Interiors</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <a href="#services" className="text-gray-700 hover:text-[#1a202c] font-medium transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-[#1a202c] font-medium transition-colors">Portfolio</a>
              <a href="#team" className="text-gray-700 hover:text-[#1a202c] font-medium transition-colors">Team</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#1a202c] font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-[#1a202c] text-white px-6 py-2.5 rounded font-semibold hover:bg-[#2d3748] transition-colors">Book Consultation</a>
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
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-gray-700 hover:text-[#1a202c] font-medium">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-[#1a202c] font-medium">Portfolio</a>
                <a href="#team" className="text-gray-700 hover:text-[#1a202c] font-medium">Team</a>
                <a href="#testimonials" className="text-gray-700 hover:text-[#1a202c] font-medium">Testimonials</a>
                <a href="#contact" className="bg-[#1a202c] text-white px-6 py-2.5 rounded font-semibold text-center">Book Consultation</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[#f8f9fa] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#48bb78]/10 text-[#276749] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-[#68d391] rounded-full"></span>
                Award-Winning Design
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a202c] leading-tight mb-6">
                Spaces That Tell <span className="text-[#48bb78]">Your Story</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Atelier Interiors creates exceptional living and working environments that blend timeless elegance with modern functionality, tailored to your unique vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-[#1a202c] text-white px-8 py-4 rounded font-semibold text-center hover:bg-[#2d3748] transition-colors">
                  Book Free Consultation
                </a>
                <a href="#portfolio" className="border-2 border-[#1a202c] text-[#1a202c] px-8 py-4 rounded font-semibold text-center hover:bg-[#1a202c] hover:text-white transition-colors">
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Beautifully designed living room with natural light"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#1a202c]">300+</div>
                <div className="text-sm text-gray-600">Spaces Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <span className="font-semibold text-sm">ASID Member</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span className="font-semibold text-sm">NCIDQ Certified</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
              <span className="font-semibold text-sm">Best of Houzz 2024</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-6 h-6 text-[#48bb78]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-semibold text-sm">15 Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1a202c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">300+</div>
              <div className="text-[#a0aec0]">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">25</div>
              <div className="text-[#a0aec0]">Design Awards</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15</div>
              <div className="text-[#a0aec0]">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-[#a0aec0]">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design services for residential, commercial, and hospitality spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="card-pro bg-white p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#1a202c] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c] mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of thoughtfully designed spaces.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="card-pro bg-white overflow-hidden">
                <img src={project.img} alt={project.alt} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-semibold text-[#48bb78]">{project.type}</span>
                    <span className="text-sm text-gray-500">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a202c]">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c] mb-4">Our Designers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate designers dedicated to creating spaces that inspire.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <img src={member.img} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-bold text-[#1a202c]">{member.name}</h3>
                <p className="text-[#48bb78] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c] mb-4">Client Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#48bb78]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#1a202c]">{t.author}</div>
                  <div className="text-sm text-gray-500">{t.role}{t.company && `, ${t.company}`}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c] mb-6">Book Your Consultation</h2>
              <p className="text-lg text-gray-600 mb-8">
                Start your design journey with a complimentary consultation. We'll discuss your vision, space, and how we can bring your dream interior to life.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#48bb78]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#48bb78]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a202c]">Showroom</h3>
                    <p className="text-gray-600">520 Design Row, Suite 300<br />San Francisco, CA 94102</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#48bb78]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#48bb78]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a202c]">Email</h3>
                    <p className="text-gray-600">studio@atelierinteriors.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#48bb78] focus:border-transparent" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#48bb78] focus:border-transparent" placeholder="you@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select id="project-type" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#48bb78] focus:border-transparent">
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Space</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#48bb78] focus:border-transparent" placeholder="Describe your vision..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#1a202c] text-white py-4 rounded-lg font-semibold hover:bg-[#2d3748] transition-colors">
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a202c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-[#1a202c] font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Atelier</span>
              </div>
              <p className="text-[#a0aec0] text-sm">
                Creating exceptional spaces that tell your story through thoughtful interior design.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-[#a0aec0] text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Residential</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Commercial</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hospitality</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Renovation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-[#a0aec0] text-sm">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Affiliations</h3>
              <ul className="space-y-2 text-[#a0aec0] text-sm">
                <li>ASID Member</li>
                <li>NCIDQ Certified</li>
                <li>IIDA Member</li>
                <li>Best of Houzz</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2d3748] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a0aec0] text-sm">© 2024 Atelier Interiors. All rights reserved.</p>
            <div className="flex gap-6 text-[#a0aec0] text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
