
import React, { useState } from 'react';
import { MOCK_SEBOS } from '../constants';
import { Sebo } from '../types';
import ContactForm from '../components/ContactForm';

const Sebos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SP' | 'RJ' | 'MG'>('SP');

  const filteredSebos = MOCK_SEBOS.filter(sebo => sebo.state === activeTab);

  const states = [
    { id: 'SP', name: 'São Paulo', icon: 'fa-city' },
    { id: 'RJ', name: 'Rio de Janeiro', icon: 'fa-umbrella-beach' },
    { id: 'MG', name: 'Minas Gerais', icon: 'fa-mountain' },
  ] as const;

  return (
    <div className="min-h-screen py-12 bg-[#f4f1ea] relative overflow-hidden">
      {/* Textura sutil de papel físico (Consistência com Frases) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Garimpo de Sebos</h1>
          <div className="w-24 h-1 bg-amber-900/20 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto italic">
            Encontre tesouros literários nas melhores livrarias de usados do Brasil. 
            Mapeamos os locais mais icônicos para você.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => setActiveTab(state.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-bold transition-all shadow-sm ${
                activeTab === state.id
                  ? 'bg-indigo-600 text-white scale-105 shadow-md'
                  : 'bg-white text-slate-600 hover:bg-indigo-50 border border-stone-200'
              }`}
            >
              <i className={`fa-solid ${state.icon}`}></i>
              {state.name}
            </button>
          ))}
        </div>

        {/* Sebos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredSebos.map((sebo) => (
            <div 
              key={sebo.id} 
              className="bg-[#fffefc] rounded-2xl border border-stone-300 p-6 shadow-sm hover:shadow-md transition-shadow group"
              style={{ transform: `rotate(${(Math.random() - 0.5) * 0.5}deg)` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {sebo.city}
                </div>
                <div className="text-stone-300 group-hover:text-indigo-200 transition-colors">
                  <i className="fa-solid fa-book-bookmark text-xl"></i>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold serif text-slate-800 mb-4">{sebo.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-slate-600">
                  <i className="fa-solid fa-location-dot mt-1 text-indigo-400"></i>
                  <span className="text-sm">{sebo.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <i className="fa-solid fa-phone text-indigo-400"></i>
                  <a href={`tel:${sebo.phone.replace(/\D/g,'')}`} className="text-sm hover:text-indigo-600 transition-colors">
                    {sebo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <i className="fa-brands fa-instagram text-indigo-400"></i>
                  <a 
                    href={`https://instagram.com/${sebo.instagram.replace('@','')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-indigo-600 transition-colors"
                  >
                    {sebo.instagram}
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(sebo.name + ' ' + sebo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-stone-100 hover:bg-indigo-600 hover:text-white rounded-xl text-xs font-bold text-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-map-location-dot"></i> Ver no Mapa
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSebos.length === 0 && (
          <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-stone-300 mb-20">
            <i className="fa-solid fa-magnifying-glass text-4xl text-stone-200 mb-4"></i>
            <p className="text-stone-500">Nenhum sebo encontrado para esta região no momento.</p>
          </div>
        )}

        {/* Novo Formulário de Indicação de Sebo */}
        <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full -ml-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 serif">Conhece um sebo incrível?</h2>
              <p className="text-indigo-100/70 text-lg mb-8 leading-relaxed italic">
                A nossa base de dados é mantida pela comunidade. Se você frequenta uma livraria de usados que merece ser descoberta por mais pessoas, envie-nos os detalhes!
              </p>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Localização precisa</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Contato atualizado</li>
                <li className="flex items-center gap-3"><i className="fa-solid fa-check text-indigo-400"></i> Especialidade do acervo</li>
              </ul>
            </div>
            
            <ContactForm 
              theme="dark"
              title="Indicar novo Sebo"
              description="Sua sugestão será analisada por nossa IA e incluída na próxima sincronização."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sebos;
