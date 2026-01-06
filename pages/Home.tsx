
import React from 'react';
import { MOCK_BOOKS, MOCK_BLOG, MOCK_QUOTES } from '../constants';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-indigo-500/30 backdrop-blur-md rounded-full text-indigo-200 text-xs font-bold tracking-widest uppercase mb-6">
              Sincronizado com Amazon via n8n
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A curadoria definitiva para sua <span className="text-indigo-400">próxima leitura.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Analisamos milhares de títulos diariamente para trazer os melhores preços, 
              lançamentos e clássicos com a inteligência artificial do Google.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2">
                Ver Mais Vendidos <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full hidden lg:flex items-center justify-center">
             <div className="grid grid-cols-2 gap-4 -rotate-12 scale-110 opacity-40">
                {[...Array(4)].map((_, i) => (
                   <div key={i} className="w-32 h-48 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Os Queridinhos do Momento</h2>
            <p className="text-slate-500">Atualizado automaticamente há 2 horas.</p>
          </div>
          <a href="#/livros" className="text-indigo-600 font-bold hover:underline">Ver tudo</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_BOOKS.concat(MOCK_BOOKS).slice(0, 4).map((book, idx) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <i className="fa-solid fa-quote-left text-4xl text-indigo-200 mb-6"></i>
          <h2 className="text-3xl serif italic text-slate-800 leading-relaxed mb-6">
            "{MOCK_QUOTES[0].text}"
          </h2>
          <p className="font-bold text-slate-500 tracking-widest uppercase text-sm">— {MOCK_QUOTES[0].author}</p>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Blog MelhoresPreços</h2>
          <a href="#/blog" className="text-indigo-600 font-bold hover:underline">Ir para o Blog</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG.map(post => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm border border-stone-200">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-indigo-600 uppercase">{post.tags[0]}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 line-clamp-2 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
