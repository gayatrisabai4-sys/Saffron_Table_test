import React from 'react';
import { Utensils, Truck, Users, Wine, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Services = () => {
  const services = [
    {
      title: "Royal Dining",
      description: "Experience the grandeur of Jaipur's royal heritage with our authentic dining experience.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Private Events",
      description: "Celebrate your special moments in our elegant private dining areas with personalized service.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Catering Services",
      description: "Bring the royal flavors of Saffron Table to your home or office with our premium catering.",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Wine & Spirits",
      description: "A curated selection of fine wines and traditional spirits to complement your meal.",
      icon: Wine,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-saffron font-medium italic"
          >
            Exceptional hospitality tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6">
                <div className="w-16 h-16 bg-saffron/10 rounded-2xl flex items-center justify-center text-saffron">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-saffron font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-32 bg-royal rounded-[3rem] p-12 md:p-24 text-center text-white space-y-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Planning a Special Event?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether it's a wedding, corporate event, or a private celebration, our team is here to make it unforgettable with royal hospitality and authentic flavors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <button className="btn-primary w-full sm:w-auto">Contact Our Event Team</button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-royal w-full sm:w-auto">Download Catering Menu</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-0" />
        </section>
      </div>
    </div>
  );
};
