import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Heart, Award, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop" 
            alt="Indian Spices"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white font-serif"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-saffron font-medium italic"
          >
            A legacy of taste, tradition, and royal hospitality
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 mt-24 space-y-32">
        {/* Heritage Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-saffron font-bold tracking-widest uppercase text-sm">Since 1995</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">The Heritage of <br /><span className="text-royal">Saffron Table</span></h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in the heart of Jaipur, Saffron Table began as a small family kitchen with a big dream: to bring the authentic flavors of royal Rajasthan to the modern table. Our founder, inspired by his grandmother's secret spice blends, embarked on a journey to create a dining experience that feels like a royal feast.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Every dish we serve is a tribute to the rich culinary history of India. We source our spices directly from local farmers and use traditional cooking methods like slow-cooking in clay ovens (Tandoors) to ensure every bite is packed with flavor.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" 
                alt="Traditional Cooking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-saffron rounded-3xl -z-10 hidden md:block" />
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="bg-royal/5 rounded-[3rem] p-12 md:p-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Our Core Values</h2>
            <div className="w-24 h-1 bg-saffron mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-saffron">
                <Utensils className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Authenticity</h3>
              <p className="text-gray-600">We stay true to traditional recipes and cooking techniques passed down through generations.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-saffron">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Hospitality</h3>
              <p className="text-gray-600">"Atithi Devo Bhava" - The guest is God. We treat every visitor with royal warmth and respect.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto text-saffron">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Quality</h3>
              <p className="text-gray-600">Only the freshest ingredients and finest hand-picked spices make it into our kitchen.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Meet Our Master Chefs</h2>
            <p className="text-gray-600">The artists behind our royal flavors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop&sig=${i}`} 
                    alt="Chef"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold">Chef Vikram Singh</h4>
                  <p className="text-saffron font-medium">Executive Chef</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
