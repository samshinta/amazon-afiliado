
import React, { useEffect, useState } from 'react';
import { MOCK_QUOTES } from '../constants';

const Quotes: React.FC = () => {
  const [shuffledQuotes, setShuffledQuotes] = useState([...MOCK_QUOTES]);

  useEffect(() => {
    // Embaralha as frases ao carregar
    setShuffledQuotes(prev => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="min-h-screen py-12 bg-[#f4f1ea] relative overflow-hidden">
      {/* Textura sutil de papel físico */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Frases & Inspirações</h1>
          <div className="w-24 h-1 bg-amber-900/20 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto italic">
            Trechos selecionados dos autores mais lidos da semana. 
            Palavras que transformam e inspiram, preservadas no tempo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledQuotes.map((quote, index) => (
            <div 
              key={quote.id} 
              className="bg-[#fffefc] p-8 rounded-sm border border-stone-300 shadow-[2px_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_10px_rgba(0,0,0,0.08)] transition-all group relative animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`, 
                animationFillMode: 'both',
                transform: `rotate(${(Math.random() - 0.5) * 1}deg)` // Leve rotação aleatória para parecer papel espalhado
              }}
            >
              <i className="fa-solid fa-quote-left text-3xl text-amber-100 absolute top-6 left-6 group-hover:text-amber-200/50 transition-colors"></i>
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl serif italic text-slate-800 leading-relaxed mb-8 border-l-2 border-amber-900/10 pl-4">
                  "{quote.text}"
                </blockquote>
                
                <div className="flex flex-col border-t border-stone-200 pt-4">
                  <span className="font-bold text-slate-900 serif">{quote.author}</span>
                  <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider mt-1 opacity-70">
                    {quote.book}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          .serif {
            font-family: 'Crimson Pro', serif;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Quotes;
