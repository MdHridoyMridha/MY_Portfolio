import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CursorFollower() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Spotlight Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
      />

      {/* Terminal-style Cursor */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 20,
          height: isHovering ? 60 : 20,
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.2)' : 'rgba(34, 211, 238, 1)',
          border: isHovering ? '1px solid rgba(34, 211, 238, 0.5)' : 'none',
        }}
        className="absolute rounded-sm flex items-center justify-center overflow-hidden"
      >
        {/* Coding "Bits" inside cursor on hover */}
        {isHovering && (
          <div className="text-[8px] font-mono text-cyan-400 opacity-50 animate-pulse">
            {"{ }"}
          </div>
        )}
      </motion.div>

      {/* Floating Code Snippets (Coding Vibe) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '20px',
          translateY: '-20px',
        }}
        className="absolute text-[10px] font-mono text-cyan-500/40 whitespace-nowrap"
      >
        <div className="animate-bounce">{"const hridoy = { status: 'coding' };"}</div>
      </motion.div>

      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-120px',
          translateY: '30px',
        }}
        className="absolute text-[8px] font-mono text-purple-500/30 whitespace-nowrap"
      >
        <div className="animate-pulse">{"import { creativity } from 'mind';"}</div>
      </motion.div>
    </div>
  );
}
