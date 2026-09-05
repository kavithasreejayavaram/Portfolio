'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive');

        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-blue-400/40 transition-transform duration-150 ease-out ${
          isPointer ? 'w-10 h-10 -ml-5 -mt-5 bg-blue-500/10 border-blue-400 scale-110' : 'w-6 h-6 -ml-3 -mt-3 scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-0.75 -mt-0.75 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
}
