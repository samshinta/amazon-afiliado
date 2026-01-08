import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Atendimento ao Leitor</h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto italic">
            Sugestões de conteúdo ou parcerias.
          </p>
        </div>

        <div className="shadow-2xl rounded-[2.5rem] overflow-hidden">
          <ContactForm 
            title="Envie um E-mail" 
            description="Utilize o formulário abaixo para entrar em contato diretamente com nossa equipe de curadoria."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
            <i className="fa-brands fa-instagram text-indigo-600 text-2xl mb-4"></i>
            <h4 className="font-bold text-slate-900 mb-2">Instagram</h4>
            <p className="text-sm text-slate-500 mb-2">Acompanhe nossas indicações diárias.</p>
            <a href="https://instagram.com/melhoresprecos.shop" target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-600 hover:underline font-bold">@melhoresprecos.shop</a>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
            <i className="fa-solid fa-clock text-indigo-600 text-2xl mb-4"></i>
            <h4 className="font-bold text-slate-900 mb-2">Horário</h4>
            <p className="text-sm text-slate-500">Segunda a Sexta</p>
            <p className="text-sm font-bold text-slate-700">09:00 às 18:00</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-400 italic">
            * Mensagens enviadas via formulário são processadas e respondidas via e-mail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;