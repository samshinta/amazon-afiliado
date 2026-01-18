
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-stone-200 overflow-hidden flex flex-col h-full">
      <Link to={`/livro/${book.slug}`} className="relative aspect-[2/3] overflow-hidden bg-stone-100 block">
        <img 
          src={book.imageUrl} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="bg-white/90 text-indigo-600 px-4 py-2 rounded-full font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg translate-y-2 group-hover:translate-y-0 duration-300">
            Ver Resumo e Frases
          </span>
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">
          {book.category}
        </div>
        <Link to={`/livro/${book.slug}`}>
          <h3 className="font-bold text-slate-800 line-clamp-2 mb-1 text-sm md:text-base hover:text-indigo-600 transition-colors" title={book.title}>
            {book.title}
          </h3>
        </Link>
        <p className="text-xs text-slate-500 mb-4">{book.author}</p>
        
        <div className="mt-auto pt-3 border-t border-stone-50">
          <div className="flex items-center justify-between mb-3">
             <div className="flex text-amber-400 text-[10px]">
               {[...Array(5)].map((_, i) => (
                 <i key={i} className={`fa-solid fa-star ${i >= Math.floor(book.rating) ? 'text-slate-200' : ''}`}></i>
               ))}
             </div>
             <span className="text-[10px] text-slate-400 font-bold uppercase">Amazon</span>
          </div>
          <Link 
            to={`/livro/${book.slug}`}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all font-bold text-xs"
          >
            Análise Completa <i className="fa-solid fa-chevron-right text-[10px]"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
