import { Heart } from './Icons';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-pink-200 text-center text-pink-700/80 text-sm">
      <p className="flex items-center justify-center gap-1">
        Dibuat dengan <Heart size={14} className="text-pink-500" /> untuk Kimi
      </p>
    </footer>
  );
}
