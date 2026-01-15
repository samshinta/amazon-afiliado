import React from 'react';
import { MOCK_OFFERS } from '../constants';
import SEO from '../components/SEO';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <SEO 
        title="Ofertas do Dia" 
        description="Encontre os melhores descontos em Kindles, livros e produtos de tecnologia na Amazon Brasil. Atualizado diariamente."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <i className="fa-solid fa-tag"></i> Ofertas Imbatíveis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Melhores Ofertas do Dia</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto italic">
            Confira recomendações de produtos selecionados com os maiores descontos da Amazon Brasil. 
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
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-lg">
                  {product.discount}% OFF
                </div>
              </div>

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
                  <a 
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    Ver na Amazon <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
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
            Não somos uma loja. Ao clicar nos links de "Ver na Amazon", você será redirecionado para o site oficial da Amazon Brasil para concluir sua compra com total segurança.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Offers;