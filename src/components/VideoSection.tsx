import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8 md:mb-12">
          <Play className="w-6 md:w-8 h-6 md:h-8 text-emerald-600 mr-2 md:mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold">Vídeos Relacionados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/30k1uN-wTIQ?si=KGq1H7iE2voJLXtI"
              title="Benefícios do Pistache"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/l9G57ZBCWAM?si=O-rVL89Uhg_Q95E_"
              title="Receitas com Pistache"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}