import React from 'react';
import { Scale, Leaf, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const nutritionalFacts = [
  { label: 'Proteínas', value: '20g', icon: Scale },
  { label: 'Fibras', value: '10g', icon: Leaf },
  { label: 'Gorduras Boas', value: '45g', icon: Heart },
];

export default function Properties() {
  const { ref, isInView } = useInView();

  return (
    <section id="propriedades" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Propriedades Nutricionais</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4">
          Descubra os nutrientes essenciais presentes no pistache e como eles contribuem para uma alimentação saudável.
        </p>
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up ${isInView ? 'in-view' : ''}`}>
          {nutritionalFacts.map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-white p-6 md:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <Icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">{label}</h3>
              <p className="text-3xl font-bold text-emerald-600">{value}</p>
              <p className="text-gray-600">por 100g</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}