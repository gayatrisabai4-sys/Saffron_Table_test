import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_MENU, CATEGORIES, MenuItem } from '../data/menu';
import { cn } from '@/lib/utils';
import { MenuCard } from '../components/MenuCard';

export const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedMenu = localStorage.getItem('saffron_menu');
    if (savedMenu) {
      setMenuItems(JSON.parse(savedMenu));
    } else {
      setMenuItems(INITIAL_MENU);
      localStorage.setItem('saffron_menu', JSON.stringify(INITIAL_MENU));
    }
  }, []);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All';
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Royal Menu</h1>
        <div className="w-24 h-1 bg-saffron mx-auto rounded-full" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore our curated selection of authentic Indian delicacies.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for your favorite dish..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-saffron/50 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
          <button
            onClick={() => setActiveCategory('All')}
            className={cn(
              "px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap",
              activeCategory === 'All' ? "bg-saffron text-white shadow-md shadow-saffron/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            All
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap",
                activeCategory === category ? "bg-saffron text-white shadow-md shadow-saffron/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <div className="p-6 bg-gray-100 rounded-full inline-block">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold">No dishes found</h3>
          <p className="text-gray-500">Try searching for something else or change the category.</p>
        </div>
      )}
    </div>
  );
};
