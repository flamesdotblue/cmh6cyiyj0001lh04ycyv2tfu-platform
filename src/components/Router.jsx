import Home from './Home';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

export default function Router({ route }) {
  const page = useMemo(() => {
    switch (route) {
      case '/':
      case '':
        return <Home />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  }, [route]);

  return <div className="pt-20 md:pt-24">{page}</div>;
}

function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      name: 'Starter',
      m: 0,
      y: 0,
      features: ['2 active jobs', 'Basic search', 'Email alerts', 'GDPR-friendly consent'],
      popular: false,
    },
    {
      name: 'Growth',
      m: 49,
      y: 39,
      features: ['10 active jobs', 'AI resume parsing', 'Team collaboration', 'Stage automations'],
      popular: true,
    },
    {
      name: 'Scale',
      m: 149,
      y: 129,
      features: ['Unlimited jobs', 'Advanced analytics', 'SSO', 'Priority support'],
      popular: false,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">Simple pricing for fast hiring</h1>
        <p className="mt-3 text-neutral-300">Start free. Scale as your team grows. No hidden fees.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1 text-sm">
          <button onClick={() => setAnnual(false)} className={'px-3 py-1.5 rounded-md ' + (!annual ? 'bg-white/10' : '')}>Monthly</button>
          <button onClick={() => setAnnual(true)} className={'px-3 py-1.5 rounded-md ' + (annual ? 'bg-white/10' : '')}>Annual <span className="ml-1 text-orange-400">-20%</span></button>
        </div>
      </header>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className={'relative rounded-2xl border p-6 md:p-7 ' + (p.popular ? 'border-orange-500/40 bg-white/[0.06] shadow-[0_0_40px_-12px_rgba(249,115,22,0.4)]' : 'border-white/10 bg-white/[0.03]')}>
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">Most Popular</div>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-4xl font-bold">${annual ? p.y : p.m}</span>
              <span className="text-neutral-400 mb-1">/mo</span>
            </div>
            <ul className="mt-5 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-neutral-300 text-sm">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#/contact" className={'mt-6 inline-flex justify-center items-center w-full rounded-lg px-4 py-2.5 text-sm font-medium transition ' + (p.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:brightness-110' : 'bg-white/5 border border-white/10 hover:bg-white/10')}>Choose plan</a>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-neutral-400 text-xs">All plans include secure hosting, export tools, and compliance-ready audit logs.</p>
    </main>
  );
}

function AboutPage() {
  const tabs = ['Mission', 'Security', 'Compliance'];
  const [tab, setTab] = useState('Mission');
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">About ATS Flow</h1>
      <p className="mt-4 max-w-2xl text-neutral-300">We build tools that keep recruiting teams in flow: minimal design, strong defaults, and performance that scales.</p>
      <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1 text-sm">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={'px-3 py-1.5 rounded-md ' + (tab === t ? 'bg-white/10' : '')}>{t}</button>
        ))}
      </div>
      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mt-6 max-w-3xl">
        {tab === 'Mission' && (
          <p className="text-neutral-300">We obsess over reducing recruiter toil, improving candidate experience, and making data actionable. Our interface is fast, workflows flexible, and analytics honest.</p>
        )}
        {tab === 'Security' && (
          <p className="text-neutral-300">Security is built-in: RBAC, SSO, encryption in transit and at rest, and detailed audit logs. Architecture favors isolation and least privilege access.</p>
        )}
        {tab === 'Compliance' && (
          <p className="text-neutral-300">Compliance-ready from day one with GDPR features, consent management, and regional data residency. We provide detailed export and deletion tooling.</p>
        )}
      </motion.div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{ l: 'Time-to-hire', v: '-43%' }, { l: 'Parsing accuracy', v: '>92%' }, { l: 'Uptime', v: '99.99%' }].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-2xl font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{s.v}</div>
            <div className="mt-1 text-sm text-neutral-400">{s.l}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  const [status, setStatus] = useState('idle');
  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 800);
  }
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">Talk to our team</h1>
      <p className="mt-3 text-neutral-300 max-w-2xl">Tell us about your hiring goals. We’ll tailor a demo and share a rollout plan.</p>
      <form onSubmit={onSubmit} className="mt-8 max-w-2xl space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="First name"><input required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" /></Field>
          <Field label="Last name"><input required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" /></Field>
        </div>
        <Field label="Work email"><input type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" /></Field>
        <Field label="Company"><input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" /></Field>
        <Field label="Message"><textarea rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" /></Field>
        <button disabled={status !== 'idle'} type="submit" className={'inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium ' + (status === 'idle' ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:brightness-110' : 'bg-white/10 text-neutral-300')}>
          {status === 'idle' && 'Request demo'}
          {status === 'loading' && 'Sending…'}
          {status === 'success' && 'Sent!'}
        </button>
      </form>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="mb-2 text-sm text-neutral-300">{label}</div>
      {children}
    </label>
  );
}

function NotFoundPage() {
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="mt-4 text-neutral-400">We couldn't find that page.</p>
      <a href="#/" className="mt-6 inline-block rounded-lg bg-white/5 px-5 py-3 border border-white/10 hover:bg-white/10">Back home</a>
    </main>
  );
}
