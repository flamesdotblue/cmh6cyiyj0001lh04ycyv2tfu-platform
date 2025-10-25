import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function getRouteFromHash() {
  const hash = window.location.hash || '#/';
  const clean = hash.replace('#', '');
  const path = clean.startsWith('/') ? clean.slice(1) : clean;
  const route = path.split('?')[0].split('#')[0];
  return route || '/';
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const page = useMemo(() => {
    switch (route) {
      case '/':
        return (
          <>
            <Hero />
            <Features />
          </>
        );
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

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/30 selection:text-white">
      <Navbar route={route} />
      {page}
      <Footer />
    </div>
  );
}

function PricingPage() {
  return (
    <main className="relative isolate">
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
            Simple pricing for fast hiring
          </h1>
          <p className="mt-4 text-neutral-300 text-lg">
            Start free. Scale as your team grows. No hidden fees.
          </p>
        </header>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
            name="Starter"
            price="$0"
            period="/mo"
            features={[
              'Up to 2 active jobs',
              'Basic candidate search',
              'Email notifications',
              'GDPR-friendly consent',
            ]}
            highlight={false}
          />
          <PlanCard
            name="Growth"
            price="$49"
            period="/mo"
            features={[
              '10 active jobs',
              'AI resume parsing',
              'Team collaboration',
              'Automated stage workflows',
            ]}
            highlight
          />
          <PlanCard
            name="Scale"
            price="$149"
            period="/mo"
            features={[
              'Unlimited jobs',
              'Advanced analytics',
              'SAML/SSO & SSO',
              'Priority support',
            ]}
            highlight={false}
          />
        </div>
        <p className="mt-8 text-center text-neutral-400 text-sm">
          All plans include secure hosting, export tools, and compliance-ready audit logs.
        </p>
      </section>
    </main>
  );
}

function PlanCard({ name, price, period, features, highlight }) {
  return (
    <div
      className={
        'relative rounded-2xl border bg-neutral-900/40 backdrop-blur-sm p-6 md:p-8 ' +
        (highlight
          ? 'border-orange-500/40 shadow-[0_0_40px_-12px_rgba(249,115,22,0.5)]'
          : 'border-neutral-800')
      }
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-neutral-400 mb-1">{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-neutral-300">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#/contact"
        className={
          'mt-8 inline-flex justify-center items-center w-full rounded-xl px-4 py-3 text-sm font-medium transition ' +
          (highlight
            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:brightness-110'
            : 'bg-neutral-800 hover:bg-neutral-700')
        }
      >
        Start now
      </a>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20 container mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
          About ATS Flow
        </h1>
        <p className="mt-6 text-neutral-300 leading-relaxed">
          ATS Flow is a modern applicant tracking system engineered for velocity and clarity. We obsess over reducing recruiter toil, boosting candidate experience, and making hiring data actionable. Our interface is fast, our workflows are flexible, and our analytics are honest.
        </p>
        <p className="mt-4 text-neutral-300 leading-relaxed">
          Built with privacy and security from day one, ATS Flow helps teams of all sizes hire better together.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Time-to-hire" value="-43%" />
        <Stat label="Resume parsing accuracy" value=">92%" />
        <Stat label="Uptime" value="99.99%" />
      </div>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
      <div className="text-3xl font-semibold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="mt-2 text-neutral-400 text-sm">{label}</div>
    </div>
  );
}

function ContactPage() {
  return (
    <main className="pt-28 md:pt-36 pb-20 container mx-auto px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
          Talk to our team
        </h1>
        <p className="mt-4 text-neutral-300">
          Tell us about your hiring goals. We’ll tailor a demo and share a custom rollout plan.
        </p>
      </div>
      <form className="mt-10 max-w-2xl space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="First name">
            <input required className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" />
          </Field>
          <Field label="Last name">
            <input required className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" />
          </Field>
        </div>
        <Field label="Work email">
          <input type="email" required className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" />
        </Field>
        <Field label="Company">
          <input className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" />
        </Field>
        <Field label="Message">
          <textarea rows={5} className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" />
        </Field>
        <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-medium hover:brightness-110">
          Request demo
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
    <main className="pt-28 md:pt-36 pb-32 container mx-auto px-4 text-center">
      <h1 className="text-6xl font-semibold">404</h1>
      <p className="mt-4 text-neutral-400">We couldn't find that page.</p>
      <a href="#/" className="mt-6 inline-block rounded-xl bg-neutral-800 px-5 py-3 hover:bg-neutral-700">
        Back home
      </a>
    </main>
  );
}
