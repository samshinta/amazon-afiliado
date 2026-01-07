
import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_BLOG } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Blog MelhoresPreços</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Insights, curiosidades e análises profundas sobre o universo literário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MOCK_BLOG.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="group bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
