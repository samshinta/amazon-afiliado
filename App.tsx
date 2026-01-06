
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';

// Placeholder Pages for future phases
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
      <i className="fa-solid fa-construction text-3xl text-indigo-600"></i>
    </div>
    <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
    <p className="text-slate-500 max-w-md">Esta seção está sendo populada automaticamente via n8n e IA. Em breve teremos conteúdos atualizados aqui!</p>
    <a href="#/" className="mt-8 text-indigo-600 font-bold hover:underline">Voltar ao Início</a>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Placeholder title="Mais Vendidos Amazon" />} />
            <Route path="/blog" element={<Placeholder title="Blog Literário" />} />
            <Route path="/autores" element={<Placeholder title="Enciclopédia de Autores" />} />
            <Route path="/frases" element={<Placeholder title="Frases e Citações" />} />
            <Route path="/sebos" element={<Placeholder title="Garimpo em Sebos" />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <i className="fa-solid fa-book-open text-indigo-400 text-2xl"></i>
                  <span className="text-xl font-bold tracking-tight text-white">MelhoresPreços<span className="text-indigo-400">.shop</span></span>
                </div>
                <p className="max-w-sm mb-6">
                  Seu portal inteligente para encontrar o próximo livro. 
                  Automatizado com n8n e alimentado pela IA de ponta do Google.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <i className="fa-brands fa-instagram text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                    <i className="fa-brands fa-twitter text-white"></i>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Navegação</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#/livros" className="hover:text-indigo-400">Mais Vendidos</a></li>
                  <li><a href="#/blog" className="hover:text-indigo-400">Blog</a></li>
                  <li><a href="#/autores" className="hover:text-indigo-400">Autores</a></li>
                  <li><a href="#/sebos" className="hover:text-indigo-400">Sebos</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Informações</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-indigo-400">Privacidade</a></li>
                  <li><a href="#" className="hover:text-indigo-400">Termos de Uso</a></li>
                  <li><a href="#" className="hover:text-indigo-400">Contato</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
              <p>&copy; {new Date().getFullYear()} MelhoresPreços.shop - Participamos do Programa de Associados da Amazon.</p>
            </div>
          </div>
        </footer>

        <AIAssistant />
      </div>
    </Router>
  );
};

export default App;
