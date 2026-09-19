import { wishes } from '../data/portfolioData';
import { Strawberry, StrawberryCake, StrawberryMilk } from './Icons';

const icons = {
  cake: <StrawberryCake size={72} />,
  strawberry: <Strawberry size={64} />,
  milk: <StrawberryMilk size={72} />,
};

export default function Wishes() {
  return (
    <section id="wishes" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-950">
        Doa & Harapan <span className="text-pink-500">untuk Kimi</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishes.map((wish) => (
          <div
            key={wish.title}
            className="bg-white/80 backdrop-blur border border-pink-100 rounded-3xl p-8 text-center shadow-lg shadow-pink-200/40 hover:-translate-y-1 transition-transform"
          >
            <div className="flex justify-center h-20 items-center">{icons[wish.icon]}</div>
            <h3 className="mt-4 text-xl font-bold text-pink-900">{wish.title}</h3>
            <p className="mt-2 text-pink-900/70 leading-relaxed">{wish.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
