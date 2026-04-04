import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-saffron font-medium italic"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-gray-600 text-lg">
                Have a question about our menu, want to book a private event, or just want to say hello? Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-saffron/10 rounded-2xl text-saffron">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Our Location</h4>
                  <p className="text-gray-600">123 Royal Palace Road, Jaipur, Rajasthan 302001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-saffron/10 rounded-2xl text-saffron">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Phone Number</h4>
                  <p className="text-gray-600">+91 141 234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-saffron/10 rounded-2xl text-saffron">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Email Address</h4>
                  <p className="text-gray-600">info@saffrontable.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-saffron/10 rounded-2xl text-saffron">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-50"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-saffron focus:ring-0 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-saffron focus:ring-0 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-saffron focus:ring-0 transition-all outline-none appearance-none">
                    <option>General Inquiry</option>
                    <option>Table Reservation</option>
                    <option>Private Event</option>
                    <option>Catering Request</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-saffron focus:ring-0 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={formState === 'submitting'}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3"
                >
                  {formState === 'submitting' ? 'Sending...' : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
