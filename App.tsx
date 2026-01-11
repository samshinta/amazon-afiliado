import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sebos from './pages/Sebos';
import Books from './pages/Books';
import Quotes from './pages/Quotes';
import Authors from './pages/Authors';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import Contact from './pages/Contact';
import Offers from './pages/Offers';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros" element={<Books />} />
            <Route path="/ofertas" element={<Offers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/autores" element={<Authors />} />
            <Route path="/frases" element={<Quotes />} />
            <Route path="/sebos" element={<Sebos />} />
            <Route path="/contato" element={<Contact />} />
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
                  Este site não realiza vendas diretas; todos os produtos são vendidos e entregues pela Amazon.
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
                  <li><Link to="/livros" className="hover:text-indigo-400">Mais Vendidos</Link></li>
                  <li><Link to="/blog" className="hover:text-indigo-400">Blog</Link></li>
                  <li><Link to="/autores" className="hover:text-indigo-400">Autores</Link></li>
                  <li><Link to="/frases" className="hover:text-indigo-400">Frases</Link></li>
                  <li><Link to="/sebos" className="hover:text-indigo-400">Sebos</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Informações</h4>
                <ul className="space-y-4 text-sm">
                  <li><a href="#" className="hover:text-indigo-400">Privacidade</a></li>
                  <li><a href="#" className="hover:text-indigo-400">Termos de Uso</a></li>
                  <li><Link to="/contato" className="hover:text-indigo-400">Email</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs space-y-2">
              <p>&copy; {new Date().getFullYear()} MelhoresPreços.shop - Todos os direitos reservados.</p>
              <p className="text-slate-500 font-medium italic">"Como associado da Amazon, ganho com compras qualificadas."</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;