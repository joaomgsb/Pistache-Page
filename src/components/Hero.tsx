import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center">
      <div 
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          backgroundImage: 'url("https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2023/10/o-que-e-e-origem-pistache.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-black/50" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white max-w-6xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
          Descubra o Poder do <span className="text-emerald-400">Pistache</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-emerald-50 animate-slide-up animate-delay-300">
          Uma jornada pelo mundo desta noz versátil e nutritiva, desde sua origem 
          até seus incríveis benefícios para a saúde e usos culinários.
        </p>
        <div className="mt-8 animate-slide-up animate-delay-600">
          <a 
            href="#beneficios" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base w-full md:w-auto text-center inline-block"
          >
            Explorar Benefícios
          </a>
        </div>
      </div>
    </section>
  );
}