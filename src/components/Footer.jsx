export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/80 bg-neutral-950">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold">ATS Flow</div>
            <p className="mt-1 text-neutral-400 text-sm">Modern applicant tracking, minimal and fast.</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
            <a href="#/about" className="hover:text-white">About</a>
            <a href="#/pricing" className="hover:text-white">Pricing</a>
            <a href="#/contact" className="hover:text-white">Contact</a>
            <a href="#/" className="hover:text-white">Home</a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-neutral-900 pt-6 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ATS Flow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
