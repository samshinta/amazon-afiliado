import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_BOOKS } from '../constants';
import { fetchBooksFromSheet } from '../services/sheetService';
import { Book } from '../types';
import BookCard from '../components/BookCard';
import SEO from '../components/SEO';

const Books: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [allBooks, setAllBooks] = useState<Book[]>(MOCK_BOOKS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      try {
        const sheetBooks = await fetchBooksFromSheet();
        if (sheetBooks.length > 0) {
          // Unifica: Remove duplicados baseados no título se necessário e combina
          const unified = [...sheetBooks, ...MOCK_BOOKS.filter(mb => !sheetBooks.some(sb => sb.title === mb.title))];
          setAllBooks(unified);
        }
      } catch (error) {
        console.error("Erro ao carregar livros dinâmicos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, [location.search]);

  const categories = useMemo(() => {
    const cats = ['Todas', ...new Set(allBooks.map(b => b.category))];
    return cats.sort();
  }, [allBooks]);

  const filteredBooks = useMemo(() => {
    return allBooks.filter(book => {
      const title = book.title || "";
      const author = book.author || "";
      const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Todas' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, allBooks]);

  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <SEO 
        title="Livros Mais Vendidos" 
        description="Explore nossa lista unificada dos livros mais vendidos na Amazon Brasil. Atualizado via automação em tempo real."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Os Mais Vendidos</h1>
          <p className="text-slate-500">
            Curadoria exclusiva atualizada via n8n diretamente da Amazon Brasil.
          </p>
        </div>

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
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm appearance-none cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden h-80">
                <div className="w-full h-48 skeleton"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 w-2/3 skeleton rounded"></div>
                  <div className="h-4 w-full skeleton rounded"></div>
                  <div className="h-4 w-1/2 skeleton rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="animate-fade-in">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && filteredBooks.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
            <i className="fa-solid fa-book-open text-4xl text-stone-200 mb-4"></i>
            <p className="text-slate-500">Nenhum livro encontrado para sua busca.</p>
          </div>
        )}

        <div className="mt-16 p-8 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <i className="fa-brands fa-amazon text-3xl text-slate-300 mb-4"></i>
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "Como associado da Amazon, ganho com compras qualificadas." Os preços e disponibilidade podem sofrer alterações conforme o estoque da Amazon Brasil. Dados unificados via n8n.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;