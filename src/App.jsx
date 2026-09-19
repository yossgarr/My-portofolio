import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wishes from './components/Wishes';
import Treats from './components/Treats';
import Message from './components/Message';
import Footer from './components/Footer';
import { Strawberry, StrawberryCake, StrawberryMilk } from './components/Icons';

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

// Ikon melayang dekoratif di latar belakang
const floaters = [
  { Icon: Strawberry, size: 40, left: '6%', delay: 0, duration: 9 },
  { Icon: StrawberryCake, size: 64, left: '18%', delay: 2, duration: 12 },
  { Icon: Strawberry, size: 32, left: '32%', delay: 4, duration: 10 },
  { Icon: StrawberryMilk, size: 60, left: '48%', delay: 1, duration: 13 },
  { Icon: Strawberry, size: 44, left: '62%', delay: 3, duration: 9 },
  { Icon: StrawberryCake, size: 52, left: '76%', delay: 5, duration: 11 },
  { Icon: StrawberryMilk, size: 48, left: '88%', delay: 2.5, duration: 12 },
  { Icon: Strawberry, size: 36, left: '95%', delay: 6, duration: 10 },
];

export default function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-pink-50 to-pink-100 text-pink-950 font-sans selection:bg-pink-300 selection:text-pink-950 overflow-x-hidden">

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-600 origin-left z-[100] shadow-[0_0_12px_rgba(244,63,94,0.5)]"
        style={{ scaleX }}
      />

      {/* Glow ambient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[140px]" />
      </div>

      {/* Ikon strawberry / kue / susu yang melayang naik */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floaters.map(({ Icon, size, left, delay, duration }, i) => (
          <div
            key={i}
            className="absolute bottom-[-100px] opacity-40"
            style={{
              left,
              animation: `rise ${duration}s linear ${delay}s infinite`,
            }}
          >
            <Icon size={size} />
          </div>
        ))}
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <ScrollReveal>
          <Wishes />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Treats />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Message />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
