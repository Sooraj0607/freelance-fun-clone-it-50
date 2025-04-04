
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

const Logo = ({ className, textClassName }: LogoProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div 
      className={cn("flex items-center gap-2 cursor-pointer", className)} 
      onClick={triggerAnimation}
    >
      <div className={cn(
        "bg-primary/10 p-1.5 rounded-md transition-all duration-300", 
        isAnimating && "scale-110 rotate-6"
      )}>
        <Zap 
          className={cn(
            "h-6 w-6 text-primary transition-all duration-300", 
            isAnimating && "text-primary/80"
          )} 
        />
      </div>
      <span className={cn(
        "font-bold text-xl text-primary transition-all duration-300", 
        isAnimating && "scale-105",
        textClassName
      )}>
        SemiXpertz
      </span>
    </div>
  );
};

export default Logo;
