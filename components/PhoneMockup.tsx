import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';

interface PhoneMockupProps {
  children: React.ReactNode;
  label?: string;
  compact?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, label, compact = false }) => {
  if (compact) {
    return (
      <div className="flex flex-col items-center">
        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[7px] rounded-[1.8rem] h-[330px] w-[185px] shadow-xl overflow-hidden">
          {/* Notch */}
          <div className="h-[20px] w-[90px] bg-gray-900 absolute -top-[1px] left-1/2 -translate-x-1/2 rounded-b-[0.65rem] z-20"></div>
          {/* Status Bar */}
          <div className="h-[20px] w-full bg-white absolute top-0 left-0 z-10 flex justify-between items-center px-3 pt-0.5">
            <span className="text-[7px] font-bold text-gray-800">8:18</span>
            <div className="flex gap-0.5 text-gray-800">
              <Signal size={8} />
              <Wifi size={8} />
              <Battery size={8} />
            </div>
          </div>
          {/* Screen Content */}
          <div className="rounded-[1.1rem] overflow-hidden w-full h-full bg-white pt-[20px] flex flex-col relative font-sans text-left">
            {children}
          </div>
        </div>
        {label && <p className="mt-3 text-xs font-medium text-gray-500 italic">{label}</p>}
      </div>
    );
  }

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