"use client";

import { useEffect, useRef } from "react";

type Variant = "hero" | "dashboard" | "interview" | "report";

const settings: Record<Variant, { desktop: number; mobile: number; alpha: number; distance: number; speed: number }> = {
  hero: { desktop: 105, mobile: 42, alpha: 0.55, distance: 128, speed: 0.18 },
  dashboard: { desktop: 62, mobile: 28, alpha: 0.27, distance: 105, speed: 0.12 },
  interview: { desktop: 42, mobile: 20, alpha: 0.16, distance: 92, speed: 0.08 },
  report: { desktop: 28, mobile: 14, alpha: 0.1, distance: 78, speed: 0.05 },
};

type Particle = { x: number; y: number; vx: number; vy: number; size: number };
type Ripple = { x: number; y: number; started: number };

export function NeuralParticleField({ variant, className = "" }: { variant: Variant; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touch = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches) return;
    const config = settings[variant];
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    let width = 0, height = 0, frame = 0, dpr = 1;
    let pointer = { x: -9999, y: -9999, active: false };
    let particles: Particle[] = [];
    const ripples: Ripple[] = [];
    const random = (min: number, max: number) => min + Math.random() * (max - min);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height; dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(width * dpr)); canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = touch.matches ? config.mobile : config.desktop;
      particles = Array.from({ length: count }, () => ({ x: random(0, width), y: random(0, height), vx: random(-config.speed, config.speed), vy: random(-config.speed, config.speed), size: random(0.65, 1.65) }));
    };
    const toLocal = (event: PointerEvent | MouseEvent) => { const rect = canvas.getBoundingClientRect(); return { x: event.clientX - rect.left, y: event.clientY - rect.top }; };
    const move = (event: PointerEvent) => { pointer = { ...toLocal(event), active: true }; };
    const leave = () => { pointer.active = false; };
    const click = (event: MouseEvent) => { const point = toLocal(event); ripples.push({ ...point, started: performance.now() }); if (ripples.length > 3) ripples.shift(); };
    window.addEventListener("pointermove", move, { passive: true }); window.addEventListener("pointerleave", leave); window.addEventListener("click", click, { passive: true });
    const observer = new ResizeObserver(resize); observer.observe(canvas); resize();

    const draw = (now: number) => {
      context.clearRect(0, 0, width, height);
      const attraction = touch.matches ? 0 : variant === "hero" ? 0.018 : 0.009;
      for (const particle of particles) {
        if (pointer.active) { const dx = pointer.x - particle.x, dy = pointer.y - particle.y, distance = Math.hypot(dx, dy); if (distance < 180 && distance > 1) { particle.vx += (dx / distance) * attraction; particle.vy += (dy / distance) * attraction; } }
        particle.x += particle.vx; particle.y += particle.vy; particle.vx *= 0.994; particle.vy *= 0.994;
        if (particle.x < -8 || particle.x > width + 8) particle.vx *= -1; if (particle.y < -8 || particle.y > height + 8) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(width, particle.x)); particle.y = Math.max(0, Math.min(height, particle.y));
      }
      context.lineWidth = 0.55;
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) { const a = particles[i], b = particles[j], distance = Math.hypot(a.x - b.x, a.y - b.y); if (distance < config.distance) { const opacity = (1 - distance / config.distance) * config.alpha * 0.42; context.strokeStyle = `hsla(243, 91%, 67%, ${opacity})`; context.beginPath(); context.moveTo(a.x, a.y); context.lineTo(b.x, b.y); context.stroke(); } }
      for (const particle of particles) { const pulse = pointer.active && Math.hypot(pointer.x - particle.x, pointer.y - particle.y) < 110 ? 1.55 : 1; context.fillStyle = `hsla(243, 91%, 72%, ${config.alpha})`; context.beginPath(); context.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2); context.fill(); }
      if (pointer.active && !touch.matches) { const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 115); glow.addColorStop(0, `hsla(250, 100%, 75%, ${config.alpha * 0.12})`); glow.addColorStop(1, "transparent"); context.fillStyle = glow; context.beginPath(); context.arc(pointer.x, pointer.y, 115, 0, Math.PI * 2); context.fill(); }
      for (let index = ripples.length - 1; index >= 0; index--) {
  const ripple = ripples[index];

  const elapsed = Math.max(0, now - ripple.started);
  const progress = Math.min(1, elapsed / 700);

  if (progress >= 1) {
    ripples.splice(index, 1);
    continue;
  }

  context.strokeStyle = `hsla(32, 100%, 70%, ${
    (1 - progress) * config.alpha * 0.4
  })`;

  context.lineWidth = 1;
  context.beginPath();

  context.arc(
    ripple.x,
    ripple.y,
    12 + progress * 105,
    0,
    Math.PI * 2
  );

  context.stroke();
}
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("pointermove", move); window.removeEventListener("pointerleave", leave); window.removeEventListener("click", click); };
  }, [variant]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
