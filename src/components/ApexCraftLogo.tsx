import React from 'react';

interface ApexCraftLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'icon-only';
  showSubtitle?: boolean;
  className?: string;
  isDark?: boolean;
}

export const ApexCraftLogo: React.FC<ApexCraftLogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  showSubtitle = true,
  className = '',
  isDark = true,
}) => {
  // Dimension definitions
  const iconSizes = {
    sm: 32,
    md: 42,
    lg: 56,
    xl: 84,
  };

  const iconDim = iconSizes[size];

  // The 3D Glowing "A" Emblem with Orbital Energy Swoosh (Vector SVG matching exact uploaded brand logo)
  const LogoIcon = (
    <svg
      width={iconDim}
      height={iconDim}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="apexglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="strongGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* 3D Gradients */}
        <linearGradient id="apexLeftLeg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        <linearGradient id="apexRightLeg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        <linearGradient id="apexInnerLeg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        <linearGradient id="orbitSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>

        <linearGradient id="highlightReflect" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background Soft Ambient Light */}
      <circle cx="60" cy="60" r="40" fill="#00d2ff" opacity="0.15" filter="url(#strongGlow)" />

      {/* Back Half of Orbital Swoosh */}
      <path
        d="M 68 38 C 88 40 102 52 98 64 C 95 72 84 78 68 80"
        stroke="url(#orbitSwoosh)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Left Facet of "A" */}
      <path
        d="M 60 12 L 24 92 L 40 92 L 60 44 Z"
        fill="url(#apexLeftLeg)"
        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"
      />

      {/* Right Facet of "A" (Beveled 3D) */}
      <path
        d="M 60 12 L 60 44 L 80 92 L 96 92 Z"
        fill="url(#apexRightLeg)"
        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.6))"
      />

      {/* Sharp Triangular Inner Cutout Corner */}
      <path
        d="M 60 46 L 76 86 L 44 86 Z"
        fill="#030712"
        opacity="0.9"
      />

      {/* Front Dynamic Orbit Ring Swoosh cutting through the A */}
      <path
        d="M 44 82 C 60 76 80 62 82 48 C 84 36 74 30 62 30 C 50 30 42 42 36 54"
        stroke="url(#orbitSwoosh)"
        strokeWidth="6.5"
        strokeLinecap="round"
        filter="url(#apexglow)"
      />

      {/* Swoosh Sharp Blade Core */}
      <path
        d="M 46 80 Q 72 68 80 50 Q 84 38 72 34 Q 56 34 40 58 Q 58 66 74 54"
        fill="url(#apexRightLeg)"
        opacity="0.9"
      />

      {/* Apex Tip Glow Point */}
      <circle cx="60" cy="14" r="2.5" fill="#ffffff" filter="url(#apexglow)" />
      
      {/* 3D Highlight Edge Lines */}
      <path
        d="M 60 13 L 26 90"
        stroke="url(#highlightReflect)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 60 13 L 94 90"
        stroke="#7dd3fc"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{LogoIcon}</div>;
  }

  // Full Stacked Badge Variant (Matches the exact centered wallpaper logo uploaded)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none group ${className}`}>
        {/* Glow backdrop */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-150" />
          <div className="relative mb-2">
            <svg
              width={iconSizes[size] * 1.6}
              height={iconSizes[size] * 1.6}
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto drop-shadow-[0_10px_20px_rgba(0,180,216,0.3)] transition-transform duration-500 group-hover:scale-105"
            >
              <defs>
                <filter id="fullGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="fLeftLeg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="fRightLeg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9" />
                  <stop offset="40%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="fSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                  <stop offset="40%" stopColor="#00d2ff" />
                  <stop offset="100%" stopColor="#7dd3fc" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="45" fill="#00d2ff" opacity="0.2" filter="url(#fullGlow)" />
              <path d="M 68 38 C 88 40 102 52 98 64 C 95 72 84 78 68 80" stroke="url(#fSwoosh)" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
              <path d="M 60 12 L 24 92 L 40 92 L 60 44 Z" fill="url(#fLeftLeg)" />
              <path d="M 60 12 L 60 44 L 80 92 L 96 92 Z" fill="url(#fRightLeg)" />
              <path d="M 60 46 L 76 86 L 44 86 Z" fill="#030712" opacity="0.9" />
              <path d="M 44 82 C 60 76 80 62 82 48 C 84 36 74 30 62 30 C 50 30 42 42 36 54" stroke="url(#fSwoosh)" strokeWidth="7.5" strokeLinecap="round" filter="url(#fullGlow)" />
              <path d="M 46 80 Q 72 68 80 50 Q 84 38 72 34 Q 56 34 40 58 Q 58 66 74 54" fill="url(#fRightLeg)" opacity="0.95" />
              <circle cx="60" cy="14" r="3" fill="#ffffff" filter="url(#fullGlow)" />
            </svg>
          </div>
        </div>

        {/* Wordmark Row */}
        <div className="flex items-center justify-center gap-2.5 mt-1">
          <span className="font-heading font-black text-2xl sm:text-4xl tracking-tight text-white">
            APEX
          </span>
          <span className="font-heading font-black text-2xl sm:text-4xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]">
            CRAFT
          </span>
          <div className="px-2.5 py-0.5 rounded-lg border border-cyan-400/80 bg-cyan-950/30 text-cyan-400 font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            STUDIO
          </div>
        </div>

        {/* Laser Divider & Subtitle */}
        {showSubtitle && (
          <div className="mt-3 flex items-center justify-center gap-3 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase text-cyan-200">
              WEB ARCHITECT
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-400 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </div>
        )}
      </div>
    );
  }

  // Default Horizontal Navbar/Header Variant
  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* 3D Emblem Icon */}
      {LogoIcon}

      {/* Brand Text Stack */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-black tracking-tight text-lg sm:text-xl ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            APEX
          </span>
          <span className="font-heading font-black tracking-tight text-lg sm:text-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(14,165,233,0.4)]">
            CRAFT
          </span>
          <span className="px-1.5 py-0.5 rounded-[5px] border border-cyan-400/80 bg-cyan-950/40 text-cyan-400 font-mono text-[9px] font-bold tracking-wider uppercase ml-0.5">
            STUDIO
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1 leading-none">
            <span className="h-[1px] w-2.5 bg-cyan-400/60" />
            <span className="text-[8px] font-mono tracking-[0.2em] uppercase text-cyan-400 font-semibold">
              WEB ARCHITECT
            </span>
            <span className="h-[1px] w-2.5 bg-cyan-400/60" />
          </div>
        )}
      </div>
    </div>
  );
};
