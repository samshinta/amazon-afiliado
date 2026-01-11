
import React from 'react';
import { MOCK_OFFERS } from '../constants';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header SEO Optimized */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <i className="fa-solid fa-tag"></i> Ofertas Imbatíveis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Melhores Ofertas do Dia</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            Confira recomendações de produtos selecionados com os maiores descontos da Amazon Brasil. 
            
          </p>
        </div>

        {/* Ofertas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {MOCK_OFFERS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              {/* Product Image Area */}
              <div className="relative aspect-square overflow-hidden bg-white p-4">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-lg">
                  {product.discount}% OFF
                </div>
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md uppercase">
                  Oferta
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow border-t border-stone-50">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 h-14 serif leading-tight">
                  {product.title}
                </h3>
                
                <div className="mt-auto pt-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-black text-slate-900">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      De: R$ {product.oldPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mb-4 italic leading-tight">
                    Preço sujeito a alteração conforme disponibilidade na Amazon.
                  </p>
                  
                  <a 
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-900/10 transform active:scale-95"
                  >
                    Ver na Amazon <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info / Affiliate Disclosure */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-stone-200 text-center max-w-4xl mx-auto shadow-sm">
          <i className="fa-brands fa-amazon text-4xl text-amber-500 mb-6"></i>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 serif">Transparência e Confiança</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            O <strong>MelhoresPreços</strong> é um portal de curadoria que ajuda você a encontrar os melhores produtos. 
            Não somos uma loja. Ao clicar nos links de "Ver na Amazon", você será redirecionado para o site oficial da Amazon Brasil para concluir sua compra com total segurança.
          </p>
          <div className="inline-block p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs text-slate-500 font-medium italic">
            "Como associado da Amazon, o MelhoresPreços recebe uma pequena comissão por compras qualificadas, sem nenhum custo adicional para você. Isso nos ajuda a manter o portal ativo e atualizado."
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
