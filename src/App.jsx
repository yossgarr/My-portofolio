import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Komponen pembungkus animasi saat elemen masuk viewport
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  // Hook untuk menghitung posisi scroll layar
  const { scrollYProgress } = useScroll();
  
  // Menghaluskan pergerakan progress bar menggunakan spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* 1. Indikator Scroll Progress Bar di paling atas layar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 origin-left z-[100] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        style={{ scaleX }}
      />

      {/* 2. Background Glow Ambient (dekoratif subtle) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero tampil langsung tanpa delay scroll */}
        <Hero />

        {/* Section yang dianimasikan saat scroll ke bawah */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Projects />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}