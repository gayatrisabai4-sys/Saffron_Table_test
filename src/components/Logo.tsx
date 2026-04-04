import React from 'react';
import { motion } from 'motion/react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`flex items-center gap-2 ${className}`}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-saffron rounded-full rotate-45 opacity-20" />
      <div className="absolute inset-0 bg-gold rounded-full -rotate-45 opacity-20" />
      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 text-saffron fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C12 2 15 6 15 10C15 14 12 18 12 18C12 18 9 14 9 10C9 6 12 2 12 2Z" />
        <path d="M12 22C12 22 16 18 16 14C16 10 12 6 12 6C12 6 8 10 8 14C8 18 12 22 12 22Z" opacity="0.6" />
      </svg>
    </div>
    <span className="font-serif text-2xl font-bold tracking-tight">
      Saffron<span className="text-saffron">Table</span>
    </span>
  </motion.div>
);
