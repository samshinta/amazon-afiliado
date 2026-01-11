import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BLOG } from '../constants';
import SEO from '../components/SEO';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_BLOG.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-indigo-600 font-bold hover:underline">Voltar para o Blog</Link>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('###')) {
        return <h3 key={i} className="text-2xl font-bold text-slate-800 mt-10 mb-4 serif">{trimmed.replace('###', '')}</h3>;
      }
      if (trimmed.startsWith('>')) {
        return (
          <blockquote key={i} className="border-l-4 border-indigo-200 pl-6 py-2 my-8 italic text-slate-600 bg-indigo-50/30 rounded-r-lg">
            {trimmed.replace('>', '').trim()}
          </blockquote>
        );
      }
      if (trimmed === '') return <br key={i} />;
      
      const parts = line.split('**');
      return (
        <p key={i} className="text-slate-700 leading-relaxed mb-4 text-lg">
          {parts.map((part, index) => index % 2 === 1 ? <strong key={index} className="text-slate-900 font-bold">{part}</strong> : part)}
        </p>
      );
    });
  };

  return (
    <article className="min-h-screen bg-white">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.imageUrl,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "datePublished": post.date
        }}
      />
      {/* Cover */}
      <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-white bg-indigo-600 px-3 py-1 rounded-full uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-6xl font-bold leading-tight serif">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-12 border-b border-stone-100 pb-8 text-slate-500">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
            {post.author[0]}
          </div>
          <div>
            <p className="font-bold text-slate-900">{post.author}</p>
            <p className="text-sm">{new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <div className="ml-auto flex gap-4">
             <Link to="/" className="text-indigo-600 hover:underline font-bold text-sm">Início</Link>
             <Link to="/blog" className="text-indigo-600 hover:underline font-bold text-sm">Blog</Link>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;