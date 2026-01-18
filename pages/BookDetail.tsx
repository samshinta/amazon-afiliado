
import React, { useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BOOKS } from '../constants';
import SEO from '../components/SEO';

const BookDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const book = useMemo(() => {
    return MOCK_BOOKS.find(b => b.slug === slug);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Livro não encontrado</h1>
        <Link to="/livros" className="text-indigo-600 font-bold hover:underline">Ver todos os livros</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <SEO 
        title={`${book.title} vale a pena? Resumo e Frases`} 
        description={`Leia o resumo completo de ${book.title}, descubra se vale a pena comprar e veja as melhores frases do livro de ${book.author}.`}
      />

      {/* Hero Mini Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Link to="/" className="hover:text-indigo-600">Início</Link>
          <i className="fa-solid fa-chevron-right text-[8px]"></i>
          <Link to="/livros" className="hover:text-indigo-600">Mais Vendidos</Link>
          <i className="fa-solid fa-chevron-right text-[8px]"></i>
          <span className="text-slate-900 font-bold truncate">{book.title}</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Lado Esquerdo - Fixo/Sticky no Desktop */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-stone-200">
                <img 
                  src={book.imageUrl} 
                  alt={`Capa do livro ${book.title}`} 
                  className="w-full rounded-2xl aspect-[2/3] object-cover shadow-sm"
                />
              </div>

              <div className="bg-indigo-900 p-8 rounded-3xl text-white shadow-lg space-y-6">
                <div>
                  <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest mb-1">Disponibilidade</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">Confira as Ofertas</span>
                  </div>
                </div>

                <a 
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 text-center rounded-xl font-black transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-amazon text-xl"></i> VER PREÇO NA AMAZON
                </a>
                <p className="text-[10px] text-center text-indigo-300 italic">
                  * Os preços e disponibilidade são definidos pela Amazon.
                </p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo SEO */}
          <div className="lg:col-span-8 space-y-12">
            <header>
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                {book.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 serif leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-slate-500 mt-2">Um guia completo por <span className="font-bold text-slate-900">{book.author}</span></p>
            </header>

            {/* BOX: Vale a Pena? */}
            <section id="vale-a-pena" className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <i className="fa-solid fa-circle-check text-8xl text-indigo-600"></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm">
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                O livro {book.title} vale a pena?
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">
                {book.worthItReason || `Sim! ${book.title} é uma das obras mais recomendadas na categoria ${book.category}. Sua abordagem prática e insights profundos fazem dele um investimento essencial para sua biblioteca pessoal.`}
              </p>
            </section>

            {/* BOX: Resumo */}
            <section id="resumo" className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 serif">Resumo Detalhado</h2>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="leading-relaxed text-lg">
                  {book.fullSummary || book.description}
                </p>
              </div>
            </section>

            {/* BOX: Melhores Frases */}
            <section id="frases" className="bg-stone-100 rounded-[2.5rem] p-8 md:p-12 border border-stone-200">
              <h2 className="text-3xl font-bold text-slate-900 serif mb-8">Melhores Frases de {book.title}</h2>
              <div className="grid gap-6">
                {book.bestQuotes && book.bestQuotes.length > 0 ? (
                  book.bestQuotes.map((quote, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-indigo-500 relative">
                      <i className="fa-solid fa-quote-left text-indigo-100 text-4xl absolute top-4 left-4 -z-0"></i>
                      <p className="text-lg italic text-slate-800 relative z-10">"{quote}"</p>
                    </div>
                  ))
                ) : (
                  <p className="text-slate-500 italic">As frases mais impactantes deste autor serão adicionadas em breve.</p>
                )}
              </div>
            </section>

            {/* CTA Final */}
            <div className="py-12 text-center border-t border-stone-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 serif">Pronto para transformar sua leitura?</h3>
              <a 
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-2xl hover:-translate-y-1"
              >
                VER OFERTAS NA AMAZON <i className="fa-solid fa-arrow-right"></i>
              </a>
              <p className="mt-4 text-sm text-slate-400 flex items-center justify-center gap-2">
                <i className="fa-solid fa-shield-halved"></i> Compra segura via Amazon Brasil
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
