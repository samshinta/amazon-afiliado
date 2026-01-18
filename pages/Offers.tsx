
import React from 'react';
import { MOCK_OFFERS } from '../constants';
import SEO from '../components/SEO';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <SEO 
        title="Destaques e Sugestões" 
        description="Encontre Kindles, livros e produtos de tecnologia selecionados na Amazon Brasil. Curadoria atualizada frequentemente."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <i className="fa-solid fa-star"></i> Sugestões Selecionadas
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Destaques Recomendados</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            Confira nossa seleção de produtos e dispositivos que facilitam sua rotina de leitura e produtividade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {MOCK_OFFERS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-white p-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow border-t border-stone-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-3 h-20 serif leading-tight">
                  {product.title}
                </h3>
                
                <div className="mt-auto">
                  <a 
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    Ver Ofertas na Amazon <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-200 text-center max-w-4xl mx-auto shadow-sm">
          <i className="fa-brands fa-amazon text-4xl text-amber-500 mb-6"></i>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 serif">Transparência e Confiança</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Não exibimos preços fixos para garantir que você sempre veja o valor mais atualizado e as melhores condições diretamente no site oficial da Amazon Brasil.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Offers;
