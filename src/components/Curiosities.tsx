import React from 'react';
import { Sparkles, TreePine, Globe2, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const funFacts = [
  {
    icon: TreePine,
    title: 'Origem Milenar',
    description: 'Originário do Oriente Médio, o pistache é cultivado há mais de 9.000 anos.'
  },
  {
    icon: Globe2,
    title: 'Produção Mundial',
    description: 'Irã e Estados Unidos são os maiores produtores mundiais de pistache.'
  },
  {
    icon: Clock,
    title: 'Crescimento Lento',
    description: 'Uma árvore de pistache leva 7-10 anos para começar a produzir frutos.'
  },
  {
    icon: Sparkles,
    title: 'Som da Qualidade',
    description: 'O som do "crack" ao abrir indica que o pistache está fresco e de boa qualidade.'
  }
];

export default function Curiosities() {
  const { ref, isInView } = useInView();

  return (
    <section id="curiosidades" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Curiosidades</h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          Descubra fatos fascinantes sobre esta noz que conquistou o mundo.
        </p>
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-up ${isInView ? 'in-view' : ''}`}>
          {funFacts.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}