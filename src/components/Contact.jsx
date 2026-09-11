import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/80 text-center">
      <h2 className="text-3xl font-bold text-white">Mari Terhubung</h2>
      <p className="text-slate-400 mt-3 max-w-xl mx-auto">
        Tertarik bekerja sama atau ingin mendiskusikan implementasi proyek IoT dan Web? Kirimkan pesan sekarang.
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-2xl shadow-xl shadow-sky-500/20 transition-all"
        >
          <Mail size={20} /> Kirim Email ke Saya <Send size={18} />
        </a>
      </div>
    </section>
  );
}