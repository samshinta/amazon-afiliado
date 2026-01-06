
import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-stone-200 overflow-hidden">
      <div className="relative aspect-[2/3] overflow-hidden bg-stone-100">
        <img 
          src={book.imageUrl} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.oldPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{Math.round(((book.oldPrice - book.price) / book.oldPrice) * 100)}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
          {book.category}
        </div>
        <h3 className="font-bold text-slate-800 line-clamp-1 mb-1" title={book.title}>
          {book.title}
        </h3>
        <p className="text-xs text-slate-500 mb-3">{book.author}</p>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400 text-[10px]">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fa-solid fa-star ${i < Math.floor(book.rating) ? '' : 'text-stone-300'}`}></i>
            ))}
          </div>
          <span className="text-[10px] text-slate-400">({book.reviewsCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-lg font-bold text-slate-900">R$ {book.price.toFixed(2)}</span>
            {book.oldPrice && (
              <span className="text-xs text-slate-400 line-through ml-2">R$ {book.oldPrice.toFixed(2)}</span>
            )}
          </div>
          <a 
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
