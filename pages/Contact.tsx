
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 serif">Entre em Contato</h1>
          <p className="text-lg text-slate-500 max-w-lg mx-auto italic">
            Dúvidas, sugestões ou parcerias? Estamos à disposição para ouvir você.
          </p>
        </div>

        <ContactForm 
          title="Fale Conosco" 
          description="Preencha o formulário abaixo e nossa equipe entrará em contato em até 48 horas úteis."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <i className="fa-solid fa-envelope text-indigo-600 text-2xl mb-4"></i>
            <h4 className="font-bold text-slate-900 mb-2">E-mail Direto</h4>
            <p className="text-sm text-slate-500">contato@melhoresprecos.shop</p>
          </div>
          <div className="p-6">
            <i className="fa-brands fa-instagram text-indigo-600 text-2xl mb-4"></i>
            <h4 className="font-bold text-slate-900 mb-2">Social</h4>
            <p className="text-sm text-slate-500">@melhoresprecos.shop</p>
          </div>
          <div className="p-6">
            <i className="fa-solid fa-clock text-indigo-600 text-2xl mb-4"></i>
            <h4 className="font-bold text-slate-900 mb-2">Atendimento</h4>
            <p className="text-sm text-slate-500">Seg a Sex, 09h às 18h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
