import React from 'react';

export const BrandLogo = ({ className = "h-full w-auto" }: { className?: string }) => (
  <svg 
    viewBox="0 0 300 300" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    aria-label="ShaktiPath Logo"
  >
    <defs>
      <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <path id="textCurve" d="M 30,120 Q 150,20 270,120" fill="transparent" />
    </defs>

    {/* Sun/Halo Background */}
    <circle cx="150" cy="180" r="60" fill="url(#sunGradient)" opacity="0.8" />
    
    {/* Rays */}
    {[0, 45, 90, 135, 180].map((deg, i) => (
      <rect key={i} x="148" y="100" width="4" height="20" fill="#fbbf24" transform={`rotate(${deg - 90} 150 180)`} opacity="0.6" />
    ))}

    {/* Swooshes (Abstract Wings) */}
    <path d="M 60,180 Q 40,250 150,280" fill="none" stroke="#22d3ee" strokeWidth="0" />
    <path d="M 50,160 Q 20,220 130,280" fill="#06b6d4" opacity="0.8" /> 
    <path d="M 250,160 Q 280,220 170,280" fill="#06b6d4" opacity="0.8" />

    {/* Girl Silhouette */}
    <g transform="translate(110, 120) scale(0.8)">
       {/* Head */}
       <circle cx="40" cy="40" r="18" fill="#0e7490" />
       {/* Ponytail */}
       <path d="M 25,35 Q 10,40 15,60" fill="none" stroke="#0e7490" strokeWidth="8" strokeLinecap="round" />
       {/* Body */}
       <path d="M 40,60 C 10,70 10,160 50,180 L 80,180 C 110,160 90,80 70,60" fill="#0e7490" />
       {/* Arm holding torch */}
       <path d="M 70,70 Q 90,60 100,20" fill="none" stroke="#0e7490" strokeWidth="10" strokeLinecap="round" />
       {/* Torch Handle */}
       <line x1="100" y1="20" x2="100" y2="30" stroke="#713f12" strokeWidth="4" />
       {/* Flame */}
       <path d="M 100,25 Q 85,0 100,-20 Q 115,0 100,25" fill="url(#flameGradient)" />
    </g>

    {/* Arched Text: Shakti Path */}
    <text width="300">
      <textPath 
        href="#textCurve" 
        startOffset="50%" 
        textAnchor="middle" 
        fill="#0e7490" 
        style={{ fontSize: '42px', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}
      >
        Shakti Path
      </textPath>
    </text>

    {/* Bottom Text: Empowering Her */}
    <text x="150" y="290" textAnchor="middle" fill="#0e7490" style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '1px' }}>
      Empowering Her
    </text>
  </svg>
);

export default BrandLogo;