
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with smoother and faster scrolling settings
    lenisRef.current = new Lenis({
      lerp: 0.08,  // Adjusted for smoother scrolling, increase to make it faster
      duration: 0.1, // Lower value for faster scroll
      
      // Disabling type errors for custom properties that may not exist in the type definition
      // @ts-ignore
      smooth: true, // Enable smoothing
      // @ts-ignore
      direction: 'vertical', // Scrolling direction
      // @ts-ignore
      gestureDirection: 'vertical', // Direction of user gesture
      // @ts-ignore
      smoothTouch: true, // Enable smooth scrolling on touch devices
      // @ts-ignore
      touchMultiplier: 2, // Speed on touch devices
    });

    // Animation loop
    const animate = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(animate);
    };

    // Start animation
    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return lenisRef.current; // Optional return in case you need access to the Lenis instance
};

export default useSmoothScroll;
