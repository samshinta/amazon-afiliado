
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-stone-200 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[2/3] overflow-hidden bg-stone-100">
        <img 
          src={book.imageUrl} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
          {book.category}
        </div>
        <h3 className="font-bold text-slate-800 line-clamp-2 mb-1 text-sm md:text-base" title={book.title}>
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 mb-4">{book.author}</p>
        
        <div className="flex items-center mt-auto pt-3 border-t border-stone-50">
          <a 
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all font-bold text-xs"
          >
            Ver detalhes na Amazon <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
