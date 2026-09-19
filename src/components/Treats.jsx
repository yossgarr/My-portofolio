import { motion } from 'framer-motion';
import { Strawberry, StrawberryCake, StrawberryMilk } from './Icons';

const treats = [
  { name: "Strawberry Cake", desc: "Kue lembut dengan krim putih dan strawberry segar di atasnya.", icon: <StrawberryCake size={140} /> },
  { name: "Strawberry Milk", desc: "Susu strawberry dingin yang manis, favorit sepanjang masa.", icon: <StrawberryMilk size={140} /> },
  { name: "Fresh Strawberry", desc: "Strawberry merah segar, manis dan sedikit asam.", icon: <Strawberry size={110} /> },
];

export default function Treats() {
  return (
    <section id="treats" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-950">
        Sajian <span className="text-pink-500">Spesial</span>
      </h2>
      <p className="mt-3 text-center text-pink-900/70">Khusus buat merayakan harimu.</p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {treats.map((t, i) => (
          <motion.div
            key={t.name}
            whileHover={{ rotate: i % 2 ? 2 : -2, scale: 1.04 }}
            className="bg-gradient-to-b from-white to-pink-50 border border-pink-100 rounded-3xl p-6 text-center shadow-lg shadow-pink-200/40"
          >
            <div className="h-36 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.4}s` }}>
              {t.icon}
            </div>
            <h3 className="mt-4 text-lg font-bold text-pink-900">{t.name}</h3>
            <p className="mt-1 text-sm text-pink-900/70">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
