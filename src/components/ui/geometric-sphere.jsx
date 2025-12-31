import React, { useState, useEffect, useCallback, useRef } from "react";

// Configuration for the geometric sphere background
export const CONFIG = {
  // Brand colors (tariff.ai) - using RGB values
  primaryColor: "66, 192, 185", // #42C0B9 - Teal
  secondaryColor: "17, 75, 95", // #114B5F - Navy
  accentColor: "216, 156, 66", // #D89C42 - Gold

  // Animation speeds
  sphereRotationDuration: "200s",
  gridPanDuration: "150s",
  coreGlowDuration: "20s",

  // Visual intensity
  wireframeOpacity: 0.6,
  wireframeShadowIntensity: 60,
  coreBlur: 180,
  parallaxDepth: 25,
  lerpFactor: 0.08,
  sphereDensity: 14,
};

// Linear interpolation helper
const lerp = (a, b, t) => a + (b - a) * t;

/**
 * GeometricSphereBackground
 * Animated 3D sphere background with parallax effect
 */
export default function GeometricSphereBackground() {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef();

  const animateLerp = useCallback(() => {
    currentMousePos.current.x = lerp(
      currentMousePos.current.x,
      targetMousePos.x,
      CONFIG.lerpFactor
    );
    currentMousePos.current.y = lerp(
      currentMousePos.current.y,
      targetMousePos.y,
      CONFIG.lerpFactor
    );

    setTargetMousePos({
      x: currentMousePos.current.x,
      y: currentMousePos.current.y,
    });

    animationFrameRef.current = requestAnimationFrame(animateLerp);
  }, [targetMousePos.x, targetMousePos.y]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animateLerp);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animateLerp]);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (clientX - centerX) / centerX;
    const y = (clientY - centerY) / centerY;
    setTargetMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const { x: smoothX, y: smoothY } = currentMousePos.current;

  // Parallax calculations
  const parallaxDepth = CONFIG.parallaxDepth;
  const rotationStrength = 5;

  const baseTranslate = `translate3d(${smoothX * parallaxDepth}px, ${smoothY * parallaxDepth}px, 0)`;
  const gridTranslate = `translate3d(${-smoothX * (parallaxDepth / 2)}px, ${-smoothY * (parallaxDepth / 2)}px, 0)`;
  const hazeTranslate = `translate3d(${smoothX * (parallaxDepth / 2)}px, ${smoothY * (parallaxDepth / 2)}px, 0)`;

  const tiltRotateX = smoothY * rotationStrength;
  const tiltRotateY = -smoothX * rotationStrength;
  const tiltTransform = `rotateX(${tiltRotateX}deg) rotateY(${tiltRotateY}deg)`;

  // Generate sphere rings
  const sphereRings = Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 90 / (CONFIG.sphereDensity / 2);
    const angle = i * step;
    const rotateTransform = i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`;
    
    return (
      <div
        key={`ring-${i}`}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          border: `1px solid rgba(${CONFIG.primaryColor}, 0.6)`,
          borderRadius: "50%",
          boxShadow: `0 0 60px rgba(${CONFIG.primaryColor}, 0.3)`,
          transformStyle: "preserve-3d",
          transform: rotateTransform,
        }}
        aria-hidden="true"
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Layer 0: Panning Grid */}
      <div 
        className="absolute inset-0" 
        style={{
          transform: gridTranslate,
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(66, 192, 185, 0.08) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(66, 192, 185, 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.15,
        }}
      />

      {/* Layer 1: Volumetric Haze */}
      <div 
        className="absolute inset-0"
        style={{
          transform: hazeTranslate,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.12) 0%, transparent 50%)`,
          filter: "blur(150px)",
          opacity: 0.5,
          mixBlendMode: "screen",
        }}
      />

      {/* Layer 2: Core Glow */}
      <div 
        className="absolute inset-0"
        style={{
          transform: baseTranslate,
          backgroundImage: `radial-gradient(at 50% 50%, rgba(${CONFIG.primaryColor}, 0.06) 0%, transparent 70%)`,
        }}
      >
        <div 
          className="absolute rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.35) 0%, transparent 70%)`,
            filter: `blur(${CONFIG.coreBlur}px)`,
            boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 30px rgba(${CONFIG.primaryColor}, 0.15), 0 0 ${CONFIG.coreBlur}px 50px rgba(${CONFIG.accentColor}, 0.1)`,
          }}
        />
      </div>

      {/* Layer 3: Geometric Sphere */}
      <div 
        className="absolute z-10"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: "700px",
            height: "700px",
            transform: tiltTransform,
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
            position: "relative",
          }}
        >
          {sphereRings}
        </div>
      </div>

      {/* Layer 4: Soft Bloom */}
      <div 
        className="absolute inset-0"
        style={{
          transform: baseTranslate,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${CONFIG.primaryColor}, 0.25) 0%, transparent 50%), radial-gradient(circle at 10% 10%, rgba(${CONFIG.accentColor}, 0.15) 0%, transparent 30%)`,
          mixBlendMode: "screen",
          filter: "blur(100px)",
          opacity: 0.8,
        }}
      />

      {/* Layer 5: Noise Texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
          backgroundSize: "200px",
          opacity: 0.03,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}