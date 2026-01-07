
import React, { useState } from 'react';

interface ContactFormProps {
  title: string;
  description: string;
  theme?: 'light' | 'dark';
}

const ContactForm: React.FC<ContactFormProps> = ({ title, description, theme = 'light' }) => {
  const [consent, setConsent] = useState<'yes' | 'no' | null>(null);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (consent === 'yes' && !validateEmail(email)) {
      setError('Por favor, insira um e-mail válido para receber nossa resposta.');
      return;
    }

    if (!subject || !message) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de envio para samshinta@gmail.com
    console.log("Enviando formulário para samshinta@gmail.com", {
      sender: consent === 'yes' ? email : 'Anônimo (Sem consentimento)',
      subject,
      message,
      consent
    });

    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className={`p-8 text-center rounded-3xl border-2 border-dashed ${theme === 'dark' ? 'border-indigo-500/30' : 'border-indigo-200'}`}>
        <i className="fa-solid fa-paper-plane text-4xl text-indigo-500 mb-4"></i>
        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Mensagem enviada!</h3>
        <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          {consent === 'yes' 
            ? "Obrigado por entrar em contato. Responderemos em breve no seu e-mail." 
            : "Sua mensagem foi enviada. Como você optou por não autorizar o armazenamento do e-mail, não haverá retorno desta solicitação."}
        </p>
        <button 
          onClick={() => { setIsSent(false); setConsent(null); setEmail(''); setSubject(''); setMessage(''); }}
          className="mt-6 text-indigo-500 font-bold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl shadow-sm overflow-hidden ${theme === 'dark' ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-stone-200'}`}>
      <div className="p-6 md:p-8">
        <h2 className={`text-2xl font-bold mb-2 serif ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
        <p className={`mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>

        {/* Box de Permissão */}
        <div className={`mb-8 p-4 rounded-xl border-l-4 ${theme === 'dark' ? 'bg-slate-900/50 border-indigo-500' : 'bg-indigo-50 border-indigo-600'}`}>
          <div className="flex gap-3 items-start">
            <i className={`fa-solid fa-shield-halved mt-1 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}></i>
            <div>
              <p className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>
                Aviso de Privacidade: Solicitamos permissão para armazenar seu e-mail exclusivamente para que possamos responder sua mensagem.
              </p>
              <div className="flex gap-4">
                <button 
                  type="button"
                  onClick={() => setConsent('yes')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    consent === 'yes' 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : (theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-600 border border-slate-200')
                  }`}
                >
                  Concordo
                </button>
                <button 
                  type="button"
                  onClick={() => setConsent('no')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    consent === 'no' 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : (theme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-600 border border-slate-200')
                  }`}
                >
                  Não concordo
                </button>
              </div>
            </div>
          </div>
        </div>

        {consent !== null && (
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            {consent === 'no' && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-xs flex items-center gap-2">
                <i className="fa-solid fa-triangle-exclamation"></i>
                Você optou por não autorizar o armazenamento do e-mail. Não teremos como te dar um retorno desta mensagem.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  Seu E-mail {consent === 'no' && '(Opcional/Oculto)'}
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-none text-white focus:ring-indigo-500' 
                      : 'bg-stone-50 border border-stone-100 focus:ring-indigo-600'
                  }`}
                  disabled={consent === 'no'}
                />
              </div>
              <div className="space-y-1">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  Assunto
                </label>
                <input 
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Sugestão de sebo, dúvida..."
                  className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-none text-white focus:ring-indigo-500' 
                      : 'bg-stone-50 border border-stone-100 focus:ring-indigo-600'
                  }`}
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                Sua Mensagem
              </label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva aqui os detalhes..."
                className={`w-full px-4 py-3 rounded-xl outline-none focus:ring-2 transition-all resize-none ${
                  theme === 'dark' 
                    ? 'bg-slate-900 border-none text-white focus:ring-indigo-500' 
                    : 'bg-stone-50 border border-stone-100 focus:ring-indigo-600'
                }`}
                required
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-xs font-bold">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Enviar Mensagem <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
