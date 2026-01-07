
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_AUTHORS, MOCK_BOOKS } from '../constants';

const Authors: React.FC = () => {
  // Função auxiliar para verificar se o livro existe na nossa base de Mais Vendidos
  const findInBestSellers = (title: string) => {
    return MOCK_BOOKS.find(b => b.title.toLowerCase().includes(title.toLowerCase()));
  };

  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mentes Brilhantes</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Conheça os autores por trás dos sucessos literários do momento. 
            Curiosidades, trajetórias e legados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MOCK_AUTHORS.map((author) => (
            <div 
              key={author.id} 
              className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all p-8 flex flex-col lg:flex-row gap-8"
            >
              {/* Photo & Basic Info */}
              <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden mb-4 border-4 border-indigo-50 shadow-inner">
                  <img 
                    src={author.imageUrl} 
                    alt={author.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 serif leading-tight mb-2">{author.name}</h3>
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  {author.category}
                </span>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><i className="fa-solid fa-earth-americas w-5 text-indigo-400"></i> {author.country}</p>
                  <p><i className="fa-solid fa-heart w-5 text-indigo-400"></i> {author.maritalStatus}</p>
                  <p><i className="fa-solid fa-child w-5 text-indigo-400"></i> {author.children}</p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-stone-100 pt-6 lg:pt-0 lg:pl-8">
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Biografia</h4>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    {author.bio}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">3 Obras Famosas</h4>
                    <ul className="space-y-1.5">
                      {author.topBooks.map((bookTitle, idx) => {
                        const bookInStock = findInBestSellers(bookTitle);
                        return (
                          <li key={idx} className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                            <i className="fa-solid fa-book text-[10px] text-indigo-300"></i> 
                            {bookInStock ? (
                              <Link 
                                to={`/livros?search=${encodeURIComponent(bookTitle)}`}
                                className="text-indigo-600 hover:text-indigo-800 hover:underline decoration-indigo-300 underline-offset-4 flex items-center gap-1 group/link"
                              >
                                {bookTitle}
                                <i className="fa-solid fa-arrow-right text-[8px] opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                              </Link>
                            ) : (
                              <span>{bookTitle}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Hobby & Paixões</h4>
                    <p className="text-sm text-indigo-600 italic font-medium">
                      <i className="fa-solid fa-star text-[10px] mr-1"></i> {author.hobby}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authors;
