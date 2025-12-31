import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function SideNav() {
  const { t, isRTL } = useLanguage();
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const sections = [
    { id: 'hero', key: 'home', offset: 0 },
    { id: 'problem', key: 'problem', offset: 100 },
    { id: 'about', key: 'about', offset: 100 },
    { id: 'features', key: 'features', offset: 100 },
    { id: 'how-it-works', key: 'howItWorks', offset: 100 },
    { id: 'pricing', key: 'pricing', offset: 100 },
    { id: 'testimonials', key: 'testimonials', offset: 100 },
    { id: 'faq', key: 'faq', offset: 100 },
    { id: 'contact', key: 'contact', offset: 100 },
  ];

  // Calculate timeline height
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [sections]);

  // Scroll progress for timeline animation
  const { scrollYProgress } = useScroll();
  const activeIndex = sections.findIndex(s => s.id === activeSection);
  const progressTarget = activeIndex >= 0 ? (activeIndex + 0.5) / sections.length : 0;
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      setIsVisible(window.scrollY > 300);

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = id === 'hero' ? 0 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`fixed inset-y-0 ${isRTL ? 'right-8' : 'left-8'} z-40 hidden xl:flex items-center`}
        >
          <div 
            ref={containerRef}
            className="relative flex flex-col gap-3 max-h-[80vh] overflow-y-auto scrollbar-hide py-4"
          >
            {/* Animated Timeline Background - Base Line */}
            <div className="absolute top-0 bottom-0 left-[17px] w-[2px] overflow-hidden">
              {/* Base gradient line */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent from-[0%] via-[#42C0B9]/30 dark:via-[#42C0B9]/40 to-transparent to-[100%]"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
                }}
              />
              
              {/* Animated progress line */}
              <motion.div
                style={{
                  height: `${(activeIndex + 1) / sections.length * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#42C0B9] via-[#3ab0a9] to-[#42C0B9]/60 shadow-[0_0_8px_rgba(66,192,185,0.6)]"
              />

              {/* Glow effect at progress point */}
              <motion.div
                style={{
                  top: `${(activeIndex + 0.5) / sections.length * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#42C0B9] blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.4, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Navigation Items */}
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              const isHovered = hoveredSection === section.id;
              
              return (
                <motion.div
                  key={section.id}
                  className="relative z-10 flex items-center py-3"
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {/* Timeline Dot Container */}
                  <div className="relative flex items-center">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="group relative flex items-center justify-center w-9 h-9"
                    >
                      {/* Outer ring - visible on hover or active */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{
                          borderColor: isActive ? '#42C0B9' : 'transparent',
                        }}
                        animate={{
                          scale: isActive ? [1, 1.15, 1] : 1,
                          borderColor: isActive ? '#42C0B9' : (isHovered ? '#42C0B980' : 'transparent'),
                        }}
                        transition={{
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          borderColor: { duration: 0.3 }
                        }}
                      />

                      {/* Main dot with frosted glass effect */}
                      <motion.div
                        className="relative rounded-full backdrop-blur-xl border transition-all duration-300"
                        style={{
                          width: isActive ? '20px' : '14px',
                          height: isActive ? '20px' : '14px',
                          backgroundColor: isActive 
                            ? 'rgba(66, 192, 185, 0.2)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          borderColor: isActive ? '#42C0B9' : 'rgba(66, 192, 185, 0.3)',
                          boxShadow: isActive 
                            ? '0 0 20px rgba(66, 192, 185, 0.4), inset 0 1px 1px rgba(255,255,255,0.3)' 
                            : 'none'
                        }}
                        whileHover={{
                          scale: 1.3,
                          backgroundColor: 'rgba(66, 192, 185, 0.3)',
                          borderColor: '#42C0B9',
                        }}
                      >
                        {/* Inner glow - only when active */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-[#42C0B9]"
                            animate={{
                              scale: [0.4, 0.6, 0.4],
                              opacity: [0.8, 0.3, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}
                      </motion.div>

                      {/* Center dot - always visible */}
                      <motion.div
                        className="absolute rounded-full"
                        style={{
                          width: '4px',
                          height: '4px',
                          backgroundColor: isActive ? '#fff' : '#42C0B9',
                        }}
                        animate={isActive ? {
                          scale: [1, 1.3, 1],
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </button>
                  </div>

                  {/* Label - appears on hover or when active */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.div
                        initial={{ opacity: 0, x: isRTL ? 10 : -10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: isRTL ? 10 : -10, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`absolute ${isRTL ? 'right-12' : 'left-12'} pointer-events-none`}
                      >
                        <div className="relative px-4 py-2 rounded-xl frosted-glass-light dark:frosted-glass border border-[#42C0B9]/40 dark:border-[#42C0B9]/30 shadow-xl shadow-[#42C0B9]/10 whitespace-nowrap">
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#42C0B9]/5 to-transparent" />
                          
                          <span className="relative text-sm font-bold text-[#114B5F] dark:text-white">
                            {t.nav[section.key]}
                          </span>

                          {/* Connection line to dot */}
                          <div 
                            className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-full' : 'left-full'} w-2 h-px bg-gradient-to-${isRTL ? 'l' : 'r'} from-[#42C0B9]/40 to-transparent`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}