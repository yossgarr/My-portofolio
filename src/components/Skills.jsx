import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white">Tech Stack & Keahlian</h2>
        <p className="text-slate-400 mt-2">Peralatan dan teknologi yang saya gunakan sehari-hari.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-sky-400 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-xs px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-lg border border-slate-700/60 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}