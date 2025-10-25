import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './components/Router';

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

  const page = useMemo(() => route, [route]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/30 selection:text-white">
      <Navbar route={page} />
      <Router route={page} />
      <Footer />
    </div>
  );
}
