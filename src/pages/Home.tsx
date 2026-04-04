import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { INITIAL_MENU, getImagePath, IMAGE_FALLBACKS } from '../data/menu';

export const Home = () => {
  const featuredDishes = INITIAL_MENU.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              Saffron<span className="text-saffron">Table</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide mt-4 italic drop-shadow-md">
              Authentic Indian Flavors Served with Royal Elegance
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/menu" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-lg py-4">
              View Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-royal w-full sm:w-auto justify-center text-lg py-4">
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* Floating Info Cards */}
        <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-saffron/20 rounded-full text-saffron">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <p className="text-sm text-gray-600">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-saffron/20 rounded-full text-saffron">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-sm text-gray-600">Jaipur, Rajasthan</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                <div className="p-3 bg-saffron/20 rounded-full text-saffron">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Royal Experience</h4>
                  <p className="text-sm text-gray-600">Authentic Jaipur Taste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Delicacies</h2>
          <div className="w-24 h-1 bg-saffron mx-auto rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that represent the true essence of Indian royal cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={getImagePath(dish.name)} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = IMAGE_FALLBACKS["default-food"];
                  }}
                />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{dish.name}</h3>
                  <span className="text-saffron font-bold text-xl">₹{dish.price}</span>
                </div>
                <p className="text-gray-600 line-clamp-2 text-sm">{dish.description}</p>
                <Link to="/menu" className="inline-flex items-center gap-2 text-saffron font-bold hover:gap-3 transition-all">
                  Order Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Preview */}
      <section className="bg-royal py-24 overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              A Journey Through <br />
              <span className="text-saffron">Indian Royal Heritage</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Saffron Table, we don't just serve food; we serve stories. Our recipes are inspired by the royal kitchens of Jaipur, where spices were treated like gold and every meal was a celebration.
            </p>
            <div className="grid grid-cols-2 gap-8 text-white">
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-saffron">25+</h4>
                <p className="text-gray-400">Authentic Spices</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-saffron">15+</h4>
                <p className="text-gray-400">Master Chefs</p>
              </div>
            </div>
            <Link to="/about" className="btn-primary inline-block">
              Learn Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" 
                alt="Chef Cooking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-saffron/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl -z-0" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
