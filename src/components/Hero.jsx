import { motion } from 'framer-motion';
import { ArrowDown, Gift } from 'lucide-react';
import { birthdayInfo } from '../data/portfolioData';
import { Strawberry } from './Icons';
import Lanyard from './Lanyard';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 flex items-center max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

        {/* Kolom Kiri: Ucapan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 z-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pink-600 uppercase bg-white/80 border border-pink-200 rounded-full shadow-sm">
            <Gift size={14} /> Hari Spesial
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-pink-950 tracking-tight leading-tight">
            {birthdayInfo.headline},{' '}
            <span className="relative inline-block text-pink-500">
              {birthdayInfo.name}
              <Strawberry size={40} className="absolute -top-6 -right-9 rotate-12 animate-bounce" />
            </span>
            !
          </h1>
          <p className="mt-6 text-base sm:text-lg text-pink-900/70 leading-relaxed max-w-xl">
            {birthdayInfo.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#wishes"
              className="flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 transition-all"
            >
              Lihat Ucapan <ArrowDown size={18} />
            </a>
            <a
              href="#treats"
              className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-pink-50 text-pink-600 font-semibold rounded-xl border border-pink-200 transition-all"
            >
              Kue & Minuman
            </a>
          </div>
        </motion.div>

        {/* Kolom Kanan: 3D Lanyard */}
        <div className="lg:col-span-5 h-[450px] sm:h-[550px] w-full flex items-center justify-center">
          <Lanyard />
        </div>

      </div>
    </section>
  );
}
