import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

export type ScrollAnimationType = 
  | 'pop' 
  | 'slide-up' 
  | 'slide-left' 
  | 'slide-right' 
  | 'flip-up' 
  | 'scale-up' 
  | 'unfold';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: ScrollAnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
  stagger?: boolean;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'pop',
  delay = 0,
  duration = 650,
  className = '',
  id,
  stagger = false,
  threshold = 0.12,
  once = false,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          // Allow re-trigger when scrolling back up/down for dynamic feel
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  return (
    <div
      ref={elementRef}
      id={id}
      className={`scroll-reveal-container reveal-${animation} ${isVisible ? 'is-revealed' : 'is-hidden'} ${
        stagger ? 'stagger-children' : ''
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};
