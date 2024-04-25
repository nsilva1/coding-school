import React from 'react';
import logo from '@/app/assets/images/logo.svg'
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className }: LogoProps) => {
  const sizeStyle = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  const baseStyle = `${sizeStyle[size]}`;

  return (
    <div>
      <Image src={logo} alt='Logo' className={`${baseStyle} ${className}`} />
    </div>
  );
};

export { Logo };
