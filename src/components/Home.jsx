import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Users, Search, BarChart3, Clock } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ParallaxScene, ParallaxLayer, fadeInUp } from './Parallax';

export default function Home() {
  return (
    <main className="relative isolate">
      <HeroSection />
      <LogoStrip />
      <FeaturesSection />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section ref={heroRef} className="pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-60, -10]) }} className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(249,115,22,0.07),transparent_60%),radial-gradient(900px_circle_at_90%_10%,rgba(244,63,94,0.06),transparent_60%)]" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }} className="pointer-events-none absolute -top-20 -right-10 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500/15 to-red-500/10 blur-3xl" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div style={{ y: titleY }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
              Corporate-grade, minimal, mobile-first
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              A clean, modern ATS to hire with clarity and speed
            </h1>
            <p className="mt-4 text-neutral-300 text-base md:text-lg">
              Centralize candidates, automate workflows, and move decisions forward. Simple. Secure. Scalable.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#/pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 font-medium hover:brightness-110">
                Start free <ArrowRight size={18} />
              </a>
              <a href="#/about" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium hover:bg-white/10">
                Learn more
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div style={{ y: cardY }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <ParallaxScene>
            {({ scrollYProgress: p }) => (
              <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4">
                <div className="h-full w-full rounded-xl bg-neutral-900/50 border border-white/10 grid grid-rows-3 gap-3 p-3 overflow-hidden relative">
                  <ParallaxLayer progress={p} output={[-12, 12]} className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 blur-2xl" />
                  <div className="flex items-center gap-2 relative z-10">
                    <Badge>Pipeline</Badge>
                    <Badge>Automations</Badge>
                    <Badge>Analytics</Badge>
                  </div>
                  <ParallaxLayer progress={p} output={[-8, 16]} className="rounded-lg bg-white/5 border border-white/10 h-full" />
                  <div className="grid grid-cols-3 gap-3 relative z-10">
                    <ParallaxLayer progress={p} output={[10, -10]} className="rounded-lg bg-white/5 border border-white/10" />
                    <ParallaxLayer progress={p} output={[6, -6]} className="rounded-lg bg-white/5 border border-white/10" />
                    <ParallaxLayer progress={p} output={[2, -2]} className="rounded-lg bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            )}
          </ParallaxScene>
        </motion.div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const logos = useMemo(() => ['Acme', 'Globex', 'Umbrella', 'Soylent', 'Initech', 'Hooli', 'Vehement'], []);
  return (
    <section aria-label="Trusted by" className="py-8 border-t border-b border-neutral-900/80 bg-neutral-950/60">
      <div className="container mx-auto px-4">
        <p className="text-center text-neutral-400 text-xs uppercase tracking-widest">Trusted by fast-growing teams</p>
        <div className="mt-4 overflow-hidden">
          <motion.div className="flex gap-10 whitespace-nowrap" initial={{ x: 0 }} animate={{ x: ['0%', '-50%'] }} transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}>
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="text-neutral-400 text-sm md:text-base px-2">{l}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const items = [
    { icon: Users, title: 'Collaborative pipelines', desc: 'Custom stages, bulk actions, SLAs and notes that keep teams aligned.' },
    { icon: Search, title: 'AI-powered search', desc: 'Surface best-fit candidates across resumes, profiles, and notes in seconds.' },
    { icon: Shield, title: 'Enterprise-grade security', desc: 'Role-based access, SSO, audit trails, and regional data residency.' },
    { icon: BarChart3, title: 'Clear analytics', desc: 'Time-to-hire, source quality, and funnel health at a glance.' },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Everything you need, nothing you don’t</h2>
          <p className="mt-2 text-neutral-300">Simple building blocks that scale from 5 to 5,000 hires.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((f, i) => (
            <motion.div key={f.title} {...fadeInUp(i * 0.05)} className="group rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-300">
                <f.icon size={18} />
              </div>
              <h3 className="mt-3 font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Create your pipeline', desc: 'Define stages that match your workflow.', icon: CheckCircle },
    { title: 'Automate busywork', desc: 'Triggers for emails, reminders, and status updates.', icon: Clock },
    { title: 'Collaborate', desc: 'Share notes and decisions with hiring managers.', icon: Users },
    { title: 'Decide with clarity', desc: 'See funnel health and make confident offers.', icon: BarChart3 },
  ];
  return (
    <section className="py-14 md:py-20 border-t border-neutral-900/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <p className="mt-2 text-neutral-300">Onboard in minutes, ship a better process in days.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} {...fadeInUp(i * 0.06)} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-orange-300">
                <s.icon size={16} />
              </div>
              <div className="mt-2 font-medium">{s.title}</div>
              <p className="mt-1 text-sm text-neutral-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const data = [
    { k: 'Time-to-hire', v: '-43%' },
    { k: 'Resume parsing accuracy', v: '>92%' },
    { k: 'Uptime', v: '99.99%' },
    { k: 'Hiring velocity', v: '+2.3x' },
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((d, i) => (
          <motion.div key={d.k} {...fadeInUp(i * 0.05)} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
            <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{d.v}</div>
            <div className="mt-1 text-xs md:text-sm text-neutral-400">{d.k}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: 'Alex P.', role: 'Head of Talent', quote: 'We cut our time-to-hire by 40% in the first quarter. The UI is refreshingly simple.' },
    { name: 'Morgan S.', role: 'Recruiting Lead', quote: 'Candidates finally get a seamless experience. Our team loves the automations.' },
    { name: 'Priya R.', role: 'People Ops', quote: 'Clean, fast, and secure. The analytics made monthly reporting painless.' },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 4200);
    return () => clearInterval(id);
  }, [items.length]);
  const t = items[idx];

  return (
    <section className="py-14 md:py-20 border-t border-neutral-900/80">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold">Teams are hiring better with ATS Flow</h2>
          <p className="mt-2 text-neutral-300">Simple, minimal, and built for momentum.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
          <motion.blockquote key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-lg leading-relaxed">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-neutral-400">{t.name} · {t.role}</footer>
          </motion.blockquote>
          <div className="grid grid-cols-3 gap-3">
            {items.map((it, i) => (
              <button key={it.name} onClick={() => setIdx(i)} className={'rounded-xl border px-3 py-4 text-left transition ' + (i === idx ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5 hover:bg-white/10')}>
                <div className="text-sm font-medium">{it.name}</div>
                <div className="text-xs text-neutral-400">{it.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState('');
  const qas = [
    { q: 'Is there a free plan?', a: 'Yes. Our Starter plan is free with up to 2 active jobs and core features.' },
    { q: 'Do you support SSO?', a: 'Yes. SAML/SSO is available on Scale with granular RBAC and audit logs.' },
    { q: 'Where is data hosted?', a: 'We offer regional data residency options and maintain strict compliance controls.' },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-white/10 border border-white/10 rounded-xl overflow-hidden">
          {qas.map((item, i) => (
            <div key={item.q} className="bg-white/[0.02]">
              <button onClick={() => setOpen((v) => (v === item.q ? '' : item.q))} className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left">
                <span className="font-medium">{item.q}</span>
                <motion.span animate={{ rotate: open === item.q ? 45 : 0 }} className="text-neutral-400">+</motion.span>
              </button>
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: open === item.q ? 'auto' : 0, opacity: open === item.q ? 1 : 0 }} transition={{ duration: 0.3 }} className="px-4 overflow-hidden">
                <p className="pb-4 text-neutral-300 text-sm">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.08, 0.02]);
  return (
    <section ref={ref} className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.div style={{ boxShadow: glow.to((v) => `0 0 120px rgba(249,115,22,${v})`) }} className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Hire brilliantly with a minimal ATS</h3>
            <p className="mt-1 text-neutral-300">Start free and scale as your team grows. No lock-in.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#/pricing" className="inline-flex items-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 font-medium hover:brightness-110">See pricing</a>
            <a href="#/contact" className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10">Request demo</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-300">{children}</span>;
}
