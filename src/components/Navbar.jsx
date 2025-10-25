import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar({ route }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-900/70 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#/" className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-gradient-to-r from-orange-500 to-red-500" />
          <span className="text-white font-semibold tracking-tight">ATS Flow</span>
        </a>
        <div className="hidden md:flex items-center gap-1 text-sm">
          <NavLink href="#/about" active={route === 'about'}>About</NavLink>
          <NavLink href="#/pricing" active={route === 'pricing'}>Pricing</NavLink>
          <NavLink href="#/contact" active={route === 'contact'}>Contact</NavLink>
          <a href="#/pricing" className="ml-2 inline-flex items-center rounded-lg bg-white/5 px-3 py-2 border border-white/10 hover:bg-white/10">
            Get started
          </a>
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950">
          <div className="container mx-auto px-4 py-3 grid gap-2 text-sm">
            <a href="#/about" className="rounded-lg px-3 py-2 hover:bg-white/5">About</a>
            <a href="#/pricing" className="rounded-lg px-3 py-2 hover:bg-white/5">Pricing</a>
            <a href="#/contact" className="rounded-lg px-3 py-2 hover:bg-white/5">Contact</a>
            <a href="#/pricing" className="mt-1 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 font-medium hover:bg-white/20">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, active, children }) {
  return (
    <a
      href={href}
      className={
        'inline-flex items-center rounded-lg px-3 py-2 border transition ' +
        (active
          ? 'border-white/10 bg-white/10 text-white'
          : 'border-transparent text-neutral-300 hover:text-white hover:bg-white/5')
      }
    >
      {children}
    </a>
  );
}
