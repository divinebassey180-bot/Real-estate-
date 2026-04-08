/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, Search, MapPin, Home, Phone, Instagram, Facebook, Twitter, Bed, Bath, Users, Quote } from "lucide-react";

const NavItem = ({ children }: { children: ReactNode }) => (
  <div className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] border-r border-ink/10 hover:bg-ink hover:text-paper transition-colors duration-300 cursor-pointer flex items-center justify-center">
    {children}
  </div>
);

const SearchBar = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="bg-white p-6 md:p-8 shadow-2xl border border-ink/5 w-full max-w-5xl mx-auto -mt-12 relative z-20"
  >
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-semibold text-ink/40">Location</label>
        <div className="relative">
          <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
          <input type="text" placeholder="City or Zip Code" className="w-full pl-6 py-2 border-b border-ink/10 focus:border-accent outline-none transition-colors text-sm" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-semibold text-ink/40">Price Range</label>
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Min" className="w-full py-2 border-b border-ink/10 focus:border-accent outline-none transition-colors text-sm" />
          <span className="text-ink/20">—</span>
          <input type="text" placeholder="Max" className="w-full py-2 border-b border-ink/10 focus:border-accent outline-none transition-colors text-sm" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-semibold text-ink/40">Bedrooms</label>
        <select className="w-full py-2 border-b border-ink/10 focus:border-accent outline-none transition-colors text-sm bg-transparent">
          <option>Any</option>
          <option>1+ Beds</option>
          <option>2+ Beds</option>
          <option>3+ Beds</option>
          <option>4+ Beds</option>
        </select>
      </div>
      <button className="w-full py-3 bg-ink text-paper text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500 flex items-center justify-center group">
        Search Properties
        <Search className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
      </button>
    </div>
  </motion.div>
);

const PropertyCard = ({ image, title, location, price, beds, baths, description }: { 
  image: string, 
  title: string, 
  location: string, 
  price: string,
  beds: number,
  baths: number,
  description: string
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer flex flex-col h-full"
  >
    <div className="relative overflow-hidden aspect-[4/5] mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 right-4 bg-paper/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
        Featured
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="font-serif text-2xl font-light mb-1">{title}</h3>
      <div className="flex items-center text-[10px] uppercase tracking-widest text-ink/60 mb-4">
        <MapPin className="w-3 h-3 mr-1" />
        {location}
      </div>
      <p className="text-ink/60 text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center gap-6 mb-6 border-y border-ink/5 py-3">
        <div className="flex items-center gap-2">
          <Bed className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium">{beds} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium">{baths} Baths</span>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p className="font-medium text-lg text-accent">{price}</p>
      <button className="text-[10px] uppercase tracking-[0.2em] font-semibold flex items-center group hover:text-accent transition-colors">
        View Details
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-paper">
      {/* Navigation Grid */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-ink/10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 px-8 py-4 flex items-center border-r border-ink/10">
            <span className="font-serif text-2xl tracking-tighter font-semibold">LUMINA</span>
            <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-accent">Estates</span>
          </div>
          <div className="hidden lg:block">
            <NavItem>Properties</NavItem>
          </div>
          <div className="hidden lg:block">
            <NavItem>Philosophy</NavItem>
          </div>
          <div className="hidden md:block">
            <NavItem>Contact</NavItem>
          </div>
          <div className="flex items-center justify-center px-6 py-4 hover:bg-ink hover:text-paper transition-colors duration-300 cursor-pointer">
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 pt-12 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 block">Curated Excellence</span>
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[120px] leading-[0.9] font-light mb-8">
                Living <br />
                <span className="italic">Redefined</span>
              </h1>
              <p className="max-w-md text-ink/70 leading-relaxed mb-10">
                Lumina Estates brings you an exclusive collection of architectural masterpieces, 
                where luxury meets legacy in the world's most coveted locations.
              </p>
              <div className="flex items-center gap-6">
                <button className="px-10 py-4 bg-ink text-paper text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500 flex items-center group">
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto"
            >
              <div className="oval-mask w-full h-full overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/luxury-home/800/1000" 
                  alt="Luxury Estate" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Vertical Text Graphic */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text text-[10px] uppercase tracking-[0.5em] text-ink/30 whitespace-nowrap">
                ESTABLISHED IN MCMXCVIII — LONDON • PARIS • NEW YORK
              </div>
            </motion.div>
          </div>
        </section>

        <SearchBar />

        {/* Featured Properties */}
        <section className="px-8 py-24 border-t border-ink/10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
                The <span className="italic">Portfolio</span>
              </h2>
              <p className="text-ink/60 text-sm leading-relaxed">
                Discover our latest acquisitions. Each property is hand-selected for its 
                unique architectural significance and unparalleled amenities.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center cursor-pointer hover:bg-ink hover:text-paper transition-all">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center cursor-pointer hover:bg-ink hover:text-paper transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PropertyCard 
              image="https://picsum.photos/seed/villa-1/600/800"
              title="Villa Azure"
              location="Côte d'Azur, France"
              price="$12,500,000"
              beds={6}
              baths={7}
              description="A stunning cliffside villa offering panoramic Mediterranean views and private beach access."
            />
            <PropertyCard 
              image="https://picsum.photos/seed/penthouse/600/800"
              title="The Obsidian Penthouse"
              location="Manhattan, New York"
              price="$24,000,000"
              beds={4}
              baths={5}
              description="Ultra-modern living in the heart of the city with 360-degree skyline views and a private rooftop garden."
            />
            <PropertyCard 
              image="https://picsum.photos/seed/modern-mansion/600/800"
              title="Echo Valley Residence"
              location="Aspen, Colorado"
              price="$8,900,000"
              beds={5}
              baths={6}
              description="A contemporary mountain retreat blending organic materials with state-of-the-art smart home technology."
            />
            <PropertyCard 
              image="https://picsum.photos/seed/london-townhouse/600/800"
              title="Mayfair Heritage"
              location="London, UK"
              price="£18,500,000"
              beds={7}
              baths={8}
              description="A meticulously restored Victorian townhouse featuring original period details and a private wine cellar."
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center border-t border-ink/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img 
                src="https://picsum.photos/seed/founder/800/1000" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-accent p-12 text-paper hidden md:block max-w-sm">
              <Quote className="w-8 h-8 mb-6 opacity-50" />
              <p className="font-serif text-xl italic mb-6 leading-relaxed">
                "Our mission is to bridge the gap between architectural art and daily living, ensuring every client finds their sanctuary."
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold">Julian Lumina — Founder</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-8 block">About Lumina</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              A Legacy of <span className="italic">Excellence</span> and Trust
            </h2>
            <div className="space-y-6 text-ink/70 leading-relaxed">
              <p>
                Founded in 1998, Lumina Estates has grown from a boutique London agency into a global leader in high-end real estate. With over two decades of experience, we have navigated the most complex markets with grace and precision.
              </p>
              <p>
                Our commitment to our clients goes beyond the transaction. We provide a bespoke concierge service that handles everything from architectural consultation to interior design, ensuring a seamless transition into your new home.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-serif text-3xl font-light">25+</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-medium text-ink/40">Years Experience</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-5 h-5 text-accent" />
                    <span className="font-serif text-3xl font-light">500+</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-medium text-ink/40">Properties Sold</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-ink text-paper px-8 py-24 overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-8 block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-6xl font-light mb-12 leading-tight">
                "We don't just sell properties; we curate <span className="italic text-accent">experiences</span> that last for generations."
              </h2>
              <div className="w-24 h-px bg-accent/30 mx-auto mb-12" />
              <p className="text-paper/60 max-w-2xl mx-auto leading-relaxed">
                At Lumina, we believe that a home is an extension of one's soul. 
                Our team of experts works tirelessly to match discerning clients with spaces 
                that inspire, comfort, and elevate their daily lives.
              </p>
            </motion.div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-paper rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-paper rounded-full" />
          </div>
        </section>

        {/* Contact / CTA */}
        <section className="px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Begin Your <span className="italic">Journey</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-paper border border-ink/10 rounded-full">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Inquiries</p>
                  <p className="text-lg">+1 (800) LUMINA-EST</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-paper border border-ink/10 rounded-full">
                  <Home className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Headquarters</p>
                  <p className="text-lg">5th Avenue, New York, NY 10011</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 shadow-2xl shadow-ink/5 border border-ink/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold">Full Name</label>
                  <input type="text" className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold">Email Address</label>
                  <input type="email" className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold">Interest</label>
                <select className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors bg-transparent">
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Investment Opportunities</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold">Message</label>
                <textarea className="w-full border-b border-ink/20 py-2 focus:border-accent outline-none transition-colors resize-none" rows={4} placeholder="Tell us about your requirements..." />
              </div>
              <button className="w-full py-4 bg-ink text-paper text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-ink/10 bg-paper">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="font-serif text-xl tracking-tighter font-semibold">LUMINA</span>
            <span className="ml-2 text-[8px] uppercase tracking-[0.3em] text-accent">Estates</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Careers</a>
          </div>
          <div className="flex gap-4">
            <Instagram className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
            <Twitter className="w-4 h-4 cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-ink/30">
          © 2026 Lumina Estates. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
