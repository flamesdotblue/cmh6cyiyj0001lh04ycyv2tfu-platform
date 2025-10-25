import { Users, Search, Shield, FileText, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Collaborative pipelines',
      desc: 'Custom stages, bulk actions, and @mentions keep hiring squads in flow.',
    },
    {
      icon: Search,
      title: 'AI-powered search',
      desc: 'Find ideal matches across resumes, profiles, and interviews in seconds.',
    },
    {
      icon: FileText,
      title: 'Smart parsing',
      desc: 'Accurate resume parsing auto-fills profiles and surfaces key skills.',
    },
    {
      icon: Shield,
      title: 'Secure by default',
      desc: 'Role-based access, audit trails, and data residency options.',
    },
    {
      icon: Zap,
      title: 'Automation',
      desc: 'Triggers, SLAs, and reminders reduce manual work by up to 60%.',
    },
    {
      icon: Search,
      title: 'Insights & analytics',
      desc: 'Time-to-hire, source quality, and funnel health at a glance.',
    },
  ];

  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-[1] opacity-40 bg-[radial-gradient(1000px_circle_at_20%_0%,rgba(249,115,22,0.08),transparent_60%),radial-gradient(800px_circle_at_100%_20%,rgba(244,63,94,0.06),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Everything you need to hire brilliantly
          </h2>
          <p className="mt-3 text-neutral-300">
            ATS Flow streamlines sourcing, screening, and scheduling so you can focus on human decisions.
          </p>
        </header>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />)
          )}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href="#/contact" className="inline-flex items-center rounded-xl bg-neutral-900/60 px-4 py-2 border border-neutral-800 hover:bg-neutral-900">
            Request a demo
          </a>
          <a href="#/pricing" className="inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 font-medium hover:brightness-110">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 hover:border-orange-500/40 transition">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-2xl" />
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-300">
        <Icon />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-300 text-sm">{desc}</p>
    </div>
  );
}
