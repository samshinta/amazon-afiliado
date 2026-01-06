
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const response = await getGeminiResponse(userText);
      setMessages(prev => [...prev, { role: 'ai', text: response || "Desculpe, não consegui processar sua ideia." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Houve um erro técnico. Verifique se a sua API Key está configurada no ambiente." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <i className="fa-solid fa-brain text-2xl"></i>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 md:w-96 h-[80vh] md:h-[600px] bg-white rounded-2xl shadow-2xl z-[60] flex flex-col border border-stone-200 overflow-hidden">
          <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <span className="font-bold">Curador IA (Modo Profundo)</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50"
          >
            {messages.length === 0 && (
              <div className="text-center text-slate-400 mt-10 p-6">
                <i className="fa-solid fa-book-open text-4xl mb-4 opacity-20"></i>
                <p>Olá! Peça uma recomendação profunda de leitura. Ex: "Busco um livro que me ajude a entender a solidão urbana em São Paulo."</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-stone-200 rounded-tl-none shadow-sm'
                }`}>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-stone-200 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-stone-200 bg-white">
            <div className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pergunte ao curador..."
                className="w-full pl-4 pr-12 py-3 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm outline-none"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1.5 w-8 h-8 flex items-center justify-center text-indigo-600 hover:text-indigo-800 disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
