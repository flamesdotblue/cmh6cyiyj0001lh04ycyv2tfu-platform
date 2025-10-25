import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxHeader({ title, subtitle, height = 'h-[240px] md:h-[320px]' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBack = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yMid = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yFore = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className={`relative isolate overflow-hidden ${height} border-b border-neutral-900/70`}>      
      <motion.div style={{ y: yBack, opacity }} className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-orange-500/15 to-red-500/10 blur-3xl" />
      <motion.div style={{ y: yMid, opacity }} className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-gradient-to-tr from-red-500/15 to-orange-500/10 blur-3xl" />
      <motion.div style={{ y: yFore, opacity }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_60%_40%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative z-10 container mx-auto h-full px-4 flex items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? <p className="mt-3 text-neutral-300 max-w-2xl">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}

export function ParallaxScene({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return (
    <div ref={ref} className="relative isolate overflow-hidden">
      {typeof children === 'function' ? children({ scrollYProgress }) : children}
    </div>
  );
}

export function ParallaxLayer({ progress, range = [0, 1], output = [-30, 30], className = '', children }) {
  const y = useTransform(progress, range, output);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export const fadeInUp = (delay = 0, distance = 12) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay }
});
