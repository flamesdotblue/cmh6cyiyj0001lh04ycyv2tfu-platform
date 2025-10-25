import { Rocket, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      <nav className="relative container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25">
            <Rocket size={18} />
          </span>
          <span className="text-white font-semibold tracking-tight text-lg group-hover:opacity-90">
            ATS Flow
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#/about" label="About" active={route === 'about'} />
          <NavLink href="#/pricing" label="Pricing" active={route === 'pricing'} />
          <NavLink href="#/contact" label="Contact" active={route === 'contact'} />
          <a href="#/pricing" className="ml-3 inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-medium hover:brightness-110">
            Get started
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 p-2">
          <Menu />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
          <div className="container mx-auto px-4 py-3 grid gap-2">
            <a href="#/about" className="rounded-lg px-3 py-2 hover:bg-neutral-900/60">About</a>
            <a href="#/pricing" className="rounded-lg px-3 py-2 hover:bg-neutral-900/60">Pricing</a>
            <a href="#/contact" className="rounded-lg px-3 py-2 hover:bg-neutral-900/60">Contact</a>
            <a href="#/pricing" className="mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-sm font-medium hover:brightness-110">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, active }) {
  return (
    <a
      href={href}
      className={
        'inline-flex items-center rounded-xl px-3 py-2 text-sm transition ' +
        (active ? 'text-white bg-neutral-900/60 border border-neutral-800' : 'text-neutral-300 hover:text-white hover:bg-neutral-900/40 border border-transparent')
      }
    >
      {label}
    </a>
  );
}
