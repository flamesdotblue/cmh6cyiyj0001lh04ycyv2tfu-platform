import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-neutral-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
            Red-orange slanted tiles. Dark mode. Interactive.
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Hire at the speed of intent with a modern ATS
          </h1>
          <p className="mt-4 text-neutral-300 text-lg">
            Centralize candidates, automate workflows, and make crystal-clear decisions. Built for recruiting teams who move fast without breaking quality.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#/pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 font-medium hover:brightness-110">
              Start free <ArrowRight size={18} />
            </a>
            <a href="#/about" className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-3 font-medium hover:bg-neutral-900">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
