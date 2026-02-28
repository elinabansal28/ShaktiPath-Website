import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-surface py-20 min-h-screen">
       <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
             <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
             <p className="text-gray-600">Have questions about workshops, volunteering, or partnerships?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <Mail className="mx-auto text-brand-magenta mb-4" size={32} />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-sm text-gray-500">hello@shaktipath.org</p>
             </div>
             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <MapPin className="mx-auto text-brand-magenta mb-4" size={32} />
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-sm text-gray-500">Kalyan, Maharashtra, India</p>
             </div>
             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
                <Phone className="mx-auto text-brand-teal mb-4" size={32} />
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-500">+91 98XXX XXXXX</p>
             </div>
          </div>

          <form className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
             <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                   <input type="text" className="w-full bg-brand-surface border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                   <input type="email" className="w-full bg-brand-surface border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta" />
                </div>
             </div>
             <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-brand-surface border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-magenta"></textarea>
             </div>
             <button className="w-full bg-brand-magenta text-white font-bold py-4 rounded-lg hover:bg-brand-magentaDark transition-colors">
                Send Message
             </button>
          </form>
       </div>
    </div>
  );
};

export default Contact;