import React from 'react';
import { Brain, Heart, Moon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const benefits = [
  {
    title: 'Saúde Cardiovascular',
    description: 'Rico em gorduras saudáveis que ajudam a manter o coração saudável.',
    icon: Heart,
  },
  {
    title: 'Função Cerebral',
    description: 'Contém nutrientes essenciais para o funcionamento do cérebro.',
    icon: Brain,
  },
  {
    title: 'Qualidade do Sono',
    description: 'Fonte natural de melatonina, que ajuda na regulação do sono.',
    icon: Moon,
  },
];

export default function Benefits() {
  const { ref, isInView } = useInView();

  return (
    <section id="beneficios" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Benefícios para a Saúde</h2>
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up ${isInView ? 'in-view' : ''}`}>
          {benefits.map(({ title, description, icon: Icon }) => (
            <div key={title} className="p-4 md:p-6 border border-emerald-100 rounded-lg hover:shadow-lg transition-shadow">
              <Icon className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}