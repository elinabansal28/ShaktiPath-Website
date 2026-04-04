import React from 'react';

export const BrandLogo = ({ className = "h-full w-auto" }: { className?: string }) => (
  <img
    src="/logo.png"
    alt="ShaktiPath"
    className={className}
    style={{ objectFit: 'contain' }}
  />
);

export default BrandLogo;
