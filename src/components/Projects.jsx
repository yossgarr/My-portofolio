import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white">Proyek Pilihan</h2>
        <p className="text-slate-400 mt-2">Beberapa karya nyata dan sistem yang telah saya kembangkan.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-4">
                <FolderGit2 className="text-sky-400" size={32} />
                <div className="flex gap-3 items-center">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-white transition-colors"
                    title="Source Code"
                  >
                    <Code2 size={20} />
                  </a>
                  {proj.demo !== "#" && (
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
              {proj.tech.map((t, tIdx) => (
                <span key={tIdx} className="text-xs text-sky-400 font-mono">
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}