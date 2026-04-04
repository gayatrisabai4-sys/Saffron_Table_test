import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-semibold transition-colors hover:text-saffron text-sm uppercase tracking-wider",
                location.pathname === link.path ? "text-saffron" : isScrolled ? "text-royal" : "text-white drop-shadow-md"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled ? "hover:bg-saffron/10 text-royal" : "hover:bg-white/10 text-white"
            )}
          >
            <User className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-royal" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-bold py-2 border-b border-gray-50",
                    location.pathname === link.path ? "text-saffron" : "text-royal"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/admin" 
                className="flex items-center gap-2 text-lg font-bold py-2 text-royal"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5" /> Admin Panel
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
