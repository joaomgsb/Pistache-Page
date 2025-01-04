import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://img.freepik.com/fotos-premium/pistache-cru-fresco-em-fundo-natural-de-casca-pistaches-frescos-a-venda-em-um-mercado-de-rua-turco-conhecido-como-fistik-ou-antepfistigi_693630-3347.jpg',
    caption: 'Pistaches frescos'
  },
  {
    url: 'https://emporioxingu.com/wp-content/uploads/2022/02/pistache-torrado-salgado-tiny.jpg',
    caption: 'Pistaches torrados'
  },
  {
    url: 'https://images.tcdn.com.br/img/img_prod/1002447/pistache_sem_casca_natural_1kg_1561_1_85e1abf088d3c2bb365fbe05e20c7f67.jpg',
    caption: 'Pistaches descascados'
  },
  {
    url: 'https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/10/arvore-de-pistache.jpg?w=1024',
    caption: 'Semente de Pistache'
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Galeria de Fotos</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            {images.map((image, index) => (
              <div
                key={image.url}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-lg backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-emerald-600 w-4'
                    : 'bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}