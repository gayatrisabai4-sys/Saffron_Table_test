import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-royal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Logo className="text-white" />
          <p className="text-gray-400 leading-relaxed">
            Experience the royal flavors of India in the heart of Jaipur. 
            Authentic recipes passed down through generations.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-saffron transition-colors rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-saffron transition-colors rounded-full">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-saffron transition-colors rounded-full">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-saffron">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-saffron">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li>Dine-in Experience</li>
            <li>Takeaway Service</li>
            <li>Online Ordering</li>
            <li>Royal Catering</li>
            <li>Event Hosting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-saffron">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-saffron shrink-0" />
              <span>123 Royal Palace Road, Jaipur, Rajasthan, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-saffron shrink-0" />
              <span>+91 141 234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-saffron shrink-0" />
              <span>info@saffrontable.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Saffron Table. All rights reserved. Designed with Royal Elegance.</p>
      </div>
    </footer>
  );
};
