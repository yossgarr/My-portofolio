import { message } from '../data/portfolioData';
import { Heart, Strawberry } from './Icons';

export default function Message() {
  return (
    <section id="message" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="relative bg-white/90 border border-pink-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-pink-200/50">
        <Strawberry size={48} className="absolute -top-6 left-8 -rotate-12" />
        <Strawberry size={36} className="absolute -bottom-5 right-10 rotate-12" />
        <h2 className="text-3xl font-extrabold text-pink-950 flex items-center gap-2">
          {message.title} <Heart size={26} className="text-pink-500" />
        </h2>
        <div className="mt-6 space-y-4 text-pink-900/80 leading-relaxed text-base sm:text-lg">
          {message.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
