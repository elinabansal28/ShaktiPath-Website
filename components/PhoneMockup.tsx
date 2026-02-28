import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

interface PhoneMockupProps {
  children: React.ReactNode;
  label?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mx-auto border-gray-900 bg-gray-900 border-[10px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="h-[28px] w-[140px] bg-gray-900 absolute -top-[1px] left-1/2 -translate-x-1/2 rounded-b-[1rem] z-20"></div>
        
        {/* Status Bar */}
        <div className="h-[28px] w-full bg-white absolute top-0 left-0 z-10 flex justify-between items-center px-5 pt-1">
            <span className="text-[9px] font-bold text-gray-800">10:42</span>
            <div className="flex gap-1 text-gray-800">
                <Signal size={10} />
                <Wifi size={10} />
                <Battery size={10} />
            </div>
        </div>

        {/* Screen Content */}
        <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white pt-[28px] flex flex-col relative font-sans text-left">
           {children}
        </div>
      </div>
      {label && <p className="mt-4 text-sm font-medium text-gray-500 italic">{label}</p>}
    </div>
  );
};

export default PhoneMockup;