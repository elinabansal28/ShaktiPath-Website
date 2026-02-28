import React, { useState } from 'react';
import { Heart, Users, Briefcase, DollarSign } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'mentor' | 'partner' | 'donate'>('volunteer');

  const tabs = [
    { id: 'volunteer', label: 'Volunteer', icon: <Heart size={18} /> },
    { id: 'mentor', label: 'Mentor', icon: <Users size={18} /> },
    { id: 'partner', label: 'Partner (NGO/School)', icon: <Briefcase size={18} /> },
    { id: 'donate', label: 'Donate', icon: <DollarSign size={18} /> },
  ];

  return (
    <div className="bg-brand-surface min-h-screen py-16">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
             <h1 className="text-4xl font-bold mb-4">Join Us</h1>
             <p className="text-gray-600">Choose how you want to contribute to the movement.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
             {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                     activeTab === tab.id 
                     ? 'bg-brand-magenta text-white shadow-lg scale-105' 
                     : 'bg-white text-gray-600 hover:bg-brand-surface'
                  }`}
                >
                   {tab.icon} {tab.label}
                </button>
             ))}
          </div>

          {/* Content Area */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">
             
             {activeTab === 'volunteer' && (
                <div className="space-y-6 animate-fade-in">
                   <h2 className="text-2xl font-bold text-gray-900">Become a Volunteer</h2>
                   <p className="text-gray-600">We need passionate individuals to help organize workshops, document stories, and manage logistics.</p>
                   <div className="bg-brand-surface p-4 rounded-xl border border-brand-magenta/20">
                      <h4 className="font-bold text-brand-magentaDark text-sm mb-2">Typical Commitment</h4>
                      <p className="text-sm text-brand-magenta">4-6 hours per month. Weekend availability preferred.</p>
                   </div>
                   <form className="space-y-4">
                      <input type="text" placeholder="Full Name" className="w-full p-3 bg-brand-surface rounded-lg border border-gray-200 focus:border-brand-magenta outline-none" />
                      <input type="email" placeholder="Email Address" className="w-full p-3 bg-brand-surface rounded-lg border border-gray-200 focus:border-brand-magenta outline-none" />
                      <input type="text" placeholder="City" className="w-full p-3 bg-brand-surface rounded-lg border border-gray-200 focus:border-brand-magenta outline-none" />
                      <button className="bg-brand-magenta text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-magentaDark transition-colors">Apply to Volunteer</button>
                   </form>
                </div>
             )}

             {activeTab === 'mentor' && (
                <div className="space-y-6 animate-fade-in">
                   <h2 className="text-2xl font-bold text-gray-900">Mentor a Girl</h2>
                   <p className="text-gray-600">Share your professional journey. Guide a student through their project. Be the role model you wish you had.</p>
                   <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                      <li>Monthly 1:1 check-ins (virtual/app-based)</li>
                      <li>Review student projects</li>
                      <li>Safe, moderated environment</li>
                   </ul>
                   <button className="bg-brand-magenta text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-magentaDark transition-colors">Start Mentor Application</button>
                </div>
             )}

             {activeTab === 'partner' && (
                <div className="space-y-6 animate-fade-in">
                   <h2 className="text-2xl font-bold text-gray-900">Partner with Us</h2>
                   <p className="text-gray-600">Schools, NGOs, and CSR initiatives: let's bring ShaktiPath to your community.</p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-gray-200 rounded-xl">
                         <h4 className="font-bold mb-2">For Schools</h4>
                         <p className="text-xs text-gray-500">We provide curriculum + facilitators.</p>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-xl">
                         <h4 className="font-bold mb-2">For CSR</h4>
                         <p className="text-xs text-gray-500">Sponsor a cohort with measurable impact reports.</p>
                      </div>
                   </div>
                   <button className="bg-brand-teal text-white px-8 py-3 rounded-lg font-bold">Request Partnership Deck</button>
                </div>
             )}

             {activeTab === 'donate' && (
                <div className="space-y-6 animate-fade-in text-center">
                   <h2 className="text-2xl font-bold text-gray-900">Fuel the Mission</h2>
                   <p className="text-gray-600 max-w-xl mx-auto">Your contribution goes directly to device procurement, workshop materials, and facilitator training.</p>
                   <div className="flex flex-wrap justify-center gap-4 my-8">
                      {['₹500', '₹2,000', '₹10,000'].map(amt => (
                         <button key={amt} className="border-2 border-brand-magenta text-brand-magenta font-bold text-xl px-8 py-4 rounded-xl hover:bg-brand-magenta hover:text-white transition-colors">
                            {amt}
                         </button>
                      ))}
                   </div>
                   <p className="text-xs text-gray-400">Secure payment gateway. 80G Tax Exemption available (Placeholder).</p>
                </div>
             )}
          </div>
       </div>
    </div>
  );
};

export default GetInvolved;