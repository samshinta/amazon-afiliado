import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_BOOKS, MOCK_BLOG, MOCK_QUOTES } from '../constants';
import BookCard from '../components/BookCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const featuredBooks = MOCK_BOOKS.slice(0, 4);

  return (
    <div className="space-y-16 py-8">
      <SEO 
        title="Início" 
        description="MelhoresPreços.shop - Sua curadoria inteligente para livros e ofertas exclusivas na Amazon Brasil." 
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "MelhoresPreços.shop",
          "url": "https://melhoresprecos.shop/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://melhoresprecos.shop/livros?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 bg-indigo-500/30 backdrop-blur-md rounded-full text-indigo-200 text-xs font-bold tracking-widest uppercase mb-6">
              Curadoria Inteligente
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A curadoria definitiva para sua <span className="text-indigo-400">próxima leitura.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Analisamos as tendências literárias para trazer as obras que realmente importam. Descubra livros que mudam perspectivas e expandem horizontes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/livros" className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-lg shadow-white/10">
                Explorar Mais Vendidos <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Destaques da Semana</h2>
            <p className="text-slate-500">Títulos que estão dando o que falar nas comunidades literárias.</p>
          </div>
          <Link to="/livros" className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
            Ver todos
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone-100 py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
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
          <Link to="/blog" className="text-indigo-600 font-bold hover:underline">Ir para o Blog</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer block">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm border border-stone-200">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-indigo-600 uppercase">{post.tags[0]}</span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
                <p className="text-slate-500 line-clamp-2 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;