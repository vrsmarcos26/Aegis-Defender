'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { translations } from '../../locales/translations';
import { ShieldCheck, ArrowRight, MapPin, Phone, Mail, Send, Calendar, Clock, Trash2, Plus, Info, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState('pt');
  const [theme, setTheme] = useState('light');

  const [activeTab, setActiveTab] = useState('quick');
  const [isCompletePentest, setIsCompletePentest] = useState(null);
  const [targetItems, setTargetItems] = useState({ rede: false, email: false, app: false, db: false });
  const [stakeholders, setStakeholders] = useState([{ id: 1, name: '', email: '', phone: '' }]);

  // Inicializa o estado de forma segura no cliente
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('lang') || 'pt';
    const savedTheme = localStorage.getItem('theme');
    
    setLang(savedLang);
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setTheme('light');
    }
  }, []);

  // Salva idioma quando muda
  useEffect(() => {
    if (mounted) localStorage.setItem('lang', lang);
  }, [lang, mounted]);

  // Salva tema quando muda
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  const t = translations[lang];

  const addStakeholder = () => {
    setStakeholders([...stakeholders, { id: Date.now(), name: '', email: '', phone: '' }]);
  };

  const removeStakeholder = (id) => {
    setStakeholders(stakeholders.filter(s => s.id !== id));
  };

  const toggleTarget = (item) => {
    setTargetItems({ ...targetItems, [item]: !targetItems[item] });
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0a0f1c] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-emerald-900 flex flex-col">
       
      {/* NAVBAR CONDICIONADA */}
      {mounted && <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />}

      <main className="pt-32 pb-24 px-6 flex-grow max-w-7xl mx-auto w-full">
        
        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-16 border-b border-slate-200 dark:border-slate-800 pb-4">
          <button 
            onClick={() => setActiveTab('quick')}
            className={`pb-2 text-sm sm:text-base font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'quick' ? 'text-blue-600 dark:text-emerald-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            {t.tab_quick}
            {activeTab === 'quick' && <div className="absolute -bottom-[17px] left-0 w-full h-[3px] bg-blue-600 dark:bg-emerald-400 rounded-t-full"></div>}
          </button>
          
          <button 
            onClick={() => setActiveTab('detailed')}
            className={`pb-2 text-sm sm:text-base font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'detailed' ? 'text-blue-600 dark:text-emerald-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            {t.tab_detailed}
            {activeTab === 'detailed' && <div className="absolute -bottom-[17px] left-0 w-full h-[3px] bg-blue-600 dark:bg-emerald-400 rounded-t-full"></div>}
          </button>
          
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`pb-2 text-sm sm:text-base font-bold uppercase tracking-wider transition-colors relative ${activeTab === 'schedule' ? 'text-blue-600 dark:text-emerald-400' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            {t.tab_schedule}
            {activeTab === 'schedule' && <div className="absolute -bottom-[17px] left-0 w-full h-[3px] bg-blue-600 dark:bg-emerald-400 rounded-t-full"></div>}
          </button>
        </div>

        {/* ABA 1: CONTATO RÁPIDO */}
        {activeTab === 'quick' && (
          <div className="grid lg:grid-cols-2 gap-16 animate-in fade-in duration-500">
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight uppercase">
                {t.contact_title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                {t.contact_desc}
              </p>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">{t.contact_email_direct}</p>
                <a href="mailto:comercial@enqsolucoes.com.br" className="flex items-center gap-3 text-xl font-bold text-blue-600 dark:text-emerald-400 hover:opacity-80 transition-opacity">
                  <Mail size={24} /> comercial@enqsolucoes.com.br
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm">
              {/* === MUDANÇA AQUI: FORM ACTION DO FORMSPREE === */}
              {/* TROQUE O 'SEU_CODIGO_AQUI' pelo código que o formspree.io gerar para você */}
              <form action="https://formspree.io/f/xnjyezqb" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.form_name}</label>
                    <input type="text" name="Nome" required className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.form_email}</label>
                    <input type="email" name="Email" required className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.form_company}</label>
                    <input type="text" name="Empresa" className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.form_sector}</label>
                    <input type="text" name="Setor" className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.form_msg}</label>
                  <textarea name="Mensagem" required rows="4" className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors"></textarea>
                </div>
                {/* === Botão tipo submit === */}
                <button type="submit" className="w-full sm:w-auto bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Send size={18} /> {t.btn_send}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ABA 2: COTAÇÃO DETALHADA */}
        {activeTab === 'detailed' && (
          <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold mb-4">{t.quote_title}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t.quote_desc}</p>
            </div>

            {/* TROQUE O 'SEU_CODIGO_AQUI' pelo código do formspree */}
            <form action="https://formspree.io/f/xnjyezqb" method="POST" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 rounded-3xl shadow-sm space-y-12">
              
              {/* Inputs invisíveis enviando dados complexos do state para o email */}
              <input type="hidden" name="Tipo_de_Formulario" value="Cotação Detalhada" />
              <input type="hidden" name="Pentest_Completo" value={isCompletePentest === true ? 'SIM' : isCompletePentest === false ? 'NÃO' : 'NÃO RESPONDIDO'} />
              <input type="hidden" name="Alvos_Selecionados" value={Object.entries(targetItems).filter(([k,v]) => v).map(([k]) => k).join(', ')} />

              {/* Nome do Cliente */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{t.q_client_name}</label>
                <input type="text" name="Nome_do_Cliente" required className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors" />
              </div>

              {/* 1) Stakeholders */}
              <div className="p-6 bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-2xl">
                <h3 className="font-extrabold uppercase tracking-wide mb-1">{t.q_step1}</h3>
                <p className="text-sm text-slate-500 mb-6">{t.q_step1_desc}</p>
                
                <div className="space-y-4">
                  {stakeholders.map((s, index) => (
                    <div key={s.id} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <input type="text" name={`Stakeholder_${index + 1}_Nome`} placeholder={t.q_placeholder_name} className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors text-sm" />
                      <input type="email" name={`Stakeholder_${index + 1}_Email`} placeholder={t.q_placeholder_email} className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors text-sm" />
                      <input type="text" name={`Stakeholder_${index + 1}_Telefone`} placeholder={t.q_placeholder_phone} className="flex-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors text-sm" />
                      {index > 0 && (
                        <button type="button" onClick={() => removeStakeholder(s.id)} className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" onClick={addStakeholder} className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-emerald-400 hover:opacity-80 transition-opacity">
                  <Plus size={16} /> {t.q_add_person}
                </button>
              </div>

              {/* 2) Pentest Completo? */}
              <div>
                <h3 className="font-extrabold uppercase tracking-wide mb-4">{t.q_step2}</h3>
                <div className="flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => setIsCompletePentest(true)}
                    className={`px-8 py-3 rounded-xl font-bold transition-colors ${isCompletePentest === true ? 'bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950' : 'bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-blue-400 dark:hover:border-emerald-400'}`}
                  >
                    {t.q_yes}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsCompletePentest(false)}
                    className={`px-8 py-3 rounded-xl font-bold transition-colors ${isCompletePentest === false ? 'bg-rose-500 text-white' : 'bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-rose-400'}`}
                  >
                    {t.q_no}
                  </button>
                </div>
              </div>

              {/* 3) Se NÃO for completo (Exibição Condicional) */}
              {isCompletePentest === false && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="font-extrabold uppercase tracking-wide mb-4 text-rose-500">{t.q_step3}</h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { id: 'rede', label: t.q_opt_net },
                      { id: 'email', label: t.q_opt_mail },
                      { id: 'app', label: t.q_opt_app },
                      { id: 'db', label: t.q_opt_db }
                    ].map(opt => (
                      <button 
                        key={opt.id}
                        type="button" 
                        onClick={() => toggleTarget(opt.id)}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors ${targetItems[opt.id] ? 'bg-slate-800 text-white border border-slate-800 dark:bg-slate-700 dark:border-slate-600' : 'bg-transparent border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-400'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 4) Informações do Ambiente */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-extrabold uppercase tracking-wide mb-6">{t.q_step4}</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { label: t.q_env_1, name: "Hosts" },
                    { label: t.q_env_2, name: "Subdominios" },
                    { label: t.q_env_3, name: "Dominios" },
                    { label: t.q_env_4, name: "IPs_Externos" },
                    { label: t.q_env_5, name: "Acesso_VPN_RDP" },
                    { label: t.q_env_6, name: "Emails_Nao_Testar" },
                    { label: t.q_env_7, name: "Qtd_Bancos_Dados" },
                    { label: t.q_env_8, name: "Qtd_Aplicacoes" },
                    { label: t.q_env_9, name: "Apps_Mobile" }
                  ].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 leading-tight h-8">{field.label}</label>
                      <input type="text" name={field.name} className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors text-sm" />
                    </div>
                  ))}
                </div>
              </div>

              {/* 5) Contexto */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="font-extrabold uppercase tracking-wide mb-4">{t.q_step5}</h3>
                <textarea name="Contexto_Adicional" rows="4" className="w-full bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 rounded-xl p-4 outline-none focus:border-blue-500 dark:focus:border-emerald-500 transition-colors"></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-8 py-5 rounded-xl font-extrabold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-lg">
                <Send size={20} /> {t.btn_quote_send}
              </button>
            </form>
          </div>
        )}

        {/* ABA 3: AGENDAMENTO (CALENDLY IFRAME) */}
        {activeTab === 'schedule' && (
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto animate-in fade-in duration-500">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-emerald-900/20 text-blue-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Calendar size={14} /> / Agendamento
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight uppercase">
                {t.sched_title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium">
                {t.sched_desc1}
              </p>
              <p className="text-slate-500 dark:text-slate-500">
                {t.sched_desc2}
              </p>
            </div>
            
            {/* IFRAME DO CALENDLY */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 h-[600px] w-full flex flex-col overflow-hidden">
              <div className="bg-blue-600 dark:bg-emerald-950/30 p-6 flex flex-col gap-2">
                <span className="text-white dark:text-emerald-400 font-bold uppercase text-sm">Ou agende uma reunião de 30 min</span>
                <span className="text-blue-200 dark:text-slate-400 text-xs">Fale ao vivo com nosso time. Sem compromisso.</span>
              </div>
              
              <div className="flex-1 w-full bg-slate-50 dark:bg-[#0a0f1c]">
                {/* TROQUE ESTE LINK PELA URL REAL DO SEU CALENDLY */}
                <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
                  <Calendar size={64} className="text-blue-600 dark:text-emerald-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Agende sua reunião</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
                    Escolha o melhor horário diretamente na nossa agenda oficial do Google.
                  </p>
                  <a 
                    href="https://calendar.app.google/4NMGqQfuvvZfkPnD7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                  >
                    Abrir Agenda do Google
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        )}

      </main>

      {/* RODAPÉ CONDICIONADO AO MOUNTED */}
      {mounted && (
        <footer className="bg-white dark:bg-[#060a13] pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 mt-auto transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
              
              <div className="lg:col-span-2">
                <div className="mb-6">
                    <Image 
                      src={theme === 'light' ? "/logo-enq-claro-sem-fundo.png" : "/logo-enq-dark-sem-fundo.png"} 
                      alt="ENQ Soluções Inteligentes" 
                      width={400} 
                      height={120} 
                      className={`w-auto object-contain opacity-90 hover:opacity-100 transition-all ${
                        theme === 'light' ? 'h-28 sm:h-32 scale-110 -ml-4' : 'h-20 sm:h-24'
                      }`}
                    />
                </div>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-sm">
                  {t.footer_desc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">{t.footer_sectors}</h4>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.sectors_1}</a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.sectors_2}</a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.sectors_3}</a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.sectors_6}</a></li>
                  <li><a href="/servicos" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors mt-2 inline-block font-medium">{t.btn_all_sectors}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">{t.footer_contact}</h4>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                  <li><a href="mailto:Comercial@enqsolucoes.com.br" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"><Mail size={16} /> Comercial@enqsolucoes.com.br</a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_pricing} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_schedule} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                  <li><a href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_reports}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Sedes</h4>
                <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400">
                  <div>
                    <strong className="text-slate-900 dark:text-slate-200 block mb-2">BRASÍLIA - DF</strong>
                    <a href="/contato" className="flex items-start gap-2 mb-2 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
                      <Phone size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-emerald-500" />
                      <span>(61) 3033-3228<br/>(61) 98409-0797<br/>(61) 98202-4068</span>
                    </a>
                    <a href="/contato" className="flex items-start gap-2 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
                      <MapPin size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-emerald-500" />
                      <span>SC/S QUADRA 1 BLOCO C<br/>SALA 611<br/>Brasília - DF</span>
                    </a>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-slate-200 block mb-2">ALEMANHA</strong>
                    <a href="/contato" className="flex items-start gap-2 mb-2 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
                      <Phone size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-emerald-500" />
                      <span>+49 176 29238326</span>
                    </a>
                    <a href="/contato" className="flex items-start gap-2 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
                      <MapPin size={14} className="shrink-0 mt-0.5 text-blue-600 dark:text-emerald-500" />
                      <span>Anne-Conway-Str. 1<br/>28359 Bremen, Germany<br/>USt./VATIN: DE 322 325 476</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800/50 text-xs text-slate-500 gap-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
                <a href="/contato" className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors">{t.footer_privacy}</a>
                <a href="/contato" className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors">{t.footer_cookies}</a>
                <a href="/contato" className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors">{t.footer_terms}</a>
                <a href="/contato" className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors">{t.footer_faq}</a>
              </div>
              <div>
                &copy; {new Date().getFullYear()} ENQ Soluções Inteligentes. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}