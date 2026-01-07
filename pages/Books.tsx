
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_BOOKS } from '../constants';
import BookCard from '../components/BookCard';

const Books: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Inicializa o filtro de busca se houver um parâmetro 'search' na URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search]);

  const categories = useMemo(() => {
    const cats = ['Todas', ...new Set(MOCK_BOOKS.map(b => b.category))];
    return cats.sort();
  }, []);

  const filteredBooks = useMemo(() => {
    return MOCK_BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Os 50 livros mais vendidos</h1>
          <p className="text-slate-500">
            Atualizado em: <span className="font-semibold">1º semana de janeiro de 2026</span>. 
            Dados sincronizados diretamente com o ranking da Amazon Brasil.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-grow relative">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Buscar por título ou autor..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-64">
            <select 
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
            <i className="fa-solid fa-book-open text-4xl text-stone-200 mb-4"></i>
            <p className="text-slate-500">Nenhum livro encontrado para sua busca.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }}
              className="mt-4 text-indigo-600 font-bold hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Disclaimer - Conforme Política da Amazon */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <i className="fa-brands fa-amazon text-3xl text-slate-300 mb-4"></i>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              Importante: O MelhoresPreços.shop não realiza a venda direta de nenhum produto aqui listado. 
              Somos uma plataforma de curadoria e recomendação literária.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "Como associado da Amazon, ganho com compras qualificadas." Todos os links de "Ver detalhes" redirecionam para a Amazon.com.br, onde a compra é finalizada com total segurança diretamente no marketplace deles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
