import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const recipes = [
  {
    title: 'Pesto de Pistache',
    description: 'Um molho versátil para massas e saladas.',
    image: 'https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/cooking/cropped_temp_147171338956141ab98e8814.59812671_.jpg',
    url: 'https://www.tudogostoso.com.br/noticias/pesto-de-pistache-e-o-molho-surpreendente-para-um-delicioso-almoco-em-familia-a11847.htm'
  },
  {
    title: 'Crosta de Pistache para Peixe',
    description: 'Uma cobertura crocante e saborosa.',
    image: 'https://tobemnacozinha.com.br/wp-content/uploads/2020/07/peixe-em-crosta-de-pistache1-scaled.jpg',
    url: 'https://www.receiteria.com.br/receita/linguado-com-crosta-de-pistache/'
  },
  {
    title: 'Cookies de Pistache',
    description: 'Biscoitos deliciosos e nutritivos.',
    image: 'https://acdn.mitiendanube.com/stores/001/428/310/products/matheus-_sessao-dois-56-391f48cc9c8782c8d317145161982678-640-0.jpg',
    url: 'https://www.uol.com.br/nossa/cozinha/receitas/2016/06/08/cookie-de-pistache-e-chocolate.htm'
  },
];

export default function Recipes() {
  const { ref, isInView } = useInView();

  return (
    <section id="receitas" className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <UtensilsCrossed className="w-6 md:w-8 h-6 md:h-8 text-emerald-600 mr-2 md:mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold">Receitas Deliciosas</h2>
        </div>
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 animate-fade-up ${isInView ? 'in-view' : ''}`}>
          {recipes.map(({ title, description, image, url }) => (
            <div key={title} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Ver receita →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}