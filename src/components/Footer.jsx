export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/80 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Portofolio. Dibuat dengan React & Tailwind CSS.</p>
    </footer>
  );
}