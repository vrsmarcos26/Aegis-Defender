'use client';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { translations } from '../../locales/translations';
import { 
  ShieldCheck, Crosshair, MapPin, Phone, Mail, ArrowRight, Globe, Smartphone, 
  Target, Cloud, Server, Cpu, Users, Wifi, Layout, Zap, Calculator, Layers, 
  Network, Lock, BadgeCheck, Check, DollarSign, Eye, XCircle, Search, FileText, 
  Info, Bug, CloudOff, Clock, AlertOctagon, Landmark, HeartPulse, ShoppingCart, Dices, CheckCircle2 
} from 'lucide-react';

export default function ServicesPage() {
  // Lógica de Persistência (Mesma do Contato)
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('lang') || 'pt';
    return 'pt';
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('theme') || 'light';
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [lang, theme]);

  const t = translations[lang];

  const services = [
    { id: 'web', icon: Globe, title: t.srv_web_title, desc: t.srv_web_desc },
    { id: 'mobile', icon: Smartphone, title: t.srv_mobile_title, desc: t.srv_mobile_desc },
    { id: 'redteam', icon: Target, title: t.srv_redteam_title, desc: t.srv_redteam_desc, highlight: true },
    { id: 'cloud', icon: Cloud, title: t.srv_cloud_title, desc: t.srv_cloud_desc },
    { id: 'infra', icon: Server, title: t.srv_infra_title, desc: t.srv_infra_desc },
    { id: 'llm', icon: Cpu, title: t.srv_llm_title, desc: t.srv_llm_desc, highlight: true },
    { id: 'social', icon: Users, title: t.srv_social_title, desc: t.srv_social_desc },
    { id: 'wifi', icon: Wifi, title: t.srv_wifi_title, desc: t.srv_wifi_desc },
    { id: 'wp', icon: Layout, title: t.srv_wp_title, desc: t.srv_wp_desc },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0a0f1c] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-emerald-900 flex flex-col">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <main className="pt-32 pb-0 flex-grow overflow-hidden">
        
        {/* HEADER DOS SERVIÇOS */}
        <section className="max-w-4xl mx-auto px-6 text-center pt-8 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-emerald-900/20 text-blue-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-blue-200/50 dark:border-emerald-800/30 mb-6">
            <ShieldCheck size={14} /> {t.srv_header_badge}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
            {t.srv_header_title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-emerald-400 dark:to-teal-500">
              {t.srv_header_title_highlight}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t.srv_header_desc}
          </p>
        </section>

        {/* GRID DE SERVIÇOS */}
        <section className="max-w-7xl mx-auto px-6 pb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-blue-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`group flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1 
                  ${service.highlight 
                    ? 'bg-gradient-to-b from-white to-blue-50/50 dark:from-slate-900 dark:to-[#0a0f1c] border-blue-200 dark:border-emerald-800/60 shadow-lg shadow-blue-500/5 dark:shadow-emerald-500/5 relative overflow-hidden' 
                    : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-emerald-700 shadow-sm hover:shadow-md'
                  }`
                }
              >
                {service.highlight && (
                  <div className="absolute top-0 right-8 bg-blue-500 dark:bg-emerald-500 text-white dark:text-slate-950 text-[10px] font-black px-3 py-1 rounded-b-lg uppercase tracking-widest">
                    Avançado
                  </div>
                )}

                <div className="mb-6 flex items-center justify-between">
                  <div className={`p-4 rounded-2xl transition-colors ${service.highlight ? 'bg-blue-100 dark:bg-emerald-950/50 text-blue-600 dark:text-emerald-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950' : 'bg-slate-100 dark:bg-[#0a0f1c] text-blue-600 dark:text-emerald-400 group-hover:bg-blue-100 dark:group-hover:bg-emerald-900/30'}`}>
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                  {service.desc}
                </p>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <a href="/contato" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-emerald-400 group-hover:gap-3 transition-all">
                    Cotar escopo <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMO CALCULAMOS O VALOR */}
        <section className="bg-slate-100 dark:bg-slate-900/30 py-24 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-emerald-900/30 text-blue-600 dark:text-emerald-400 rounded-full mb-6">
                <Calculator size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">{t.srv_calc_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.srv_calc_desc}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Network, title: t.srv_calc_1_title, desc: t.srv_calc_1_desc },
                { icon: Layers, title: t.srv_calc_2_title, desc: t.srv_calc_2_desc },
                { icon: Eye, title: t.srv_calc_3_title, desc: t.srv_calc_3_desc }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#0a0f1c] border border-slate-200 dark:border-slate-800 p-8 rounded-3xl text-center hover:-translate-y-1 transition-transform shadow-sm">
                  <div className="mx-auto w-16 h-16 bg-slate-50 dark:bg-slate-900 flex items-center justify-center rounded-full mb-6 text-blue-500 dark:text-emerald-500">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANOS E PRECIFICAÇÃO */}
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">{t.srv_pricing_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{t.srv_pricing_desc}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.srv_plan1_name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">{t.srv_plan1_desc}</p>
                <div className="mb-6 text-3xl font-black text-slate-900 dark:text-white">
                  {t.srv_plan1_price}
                </div>
                <ul className="space-y-4 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan1_f1}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan1_f2}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan1_f3}</li>
                </ul>
                <a href="/contato" className="block w-full text-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  {t.btn_cta}
                </a>
              </div>

              <div className="bg-slate-900 dark:bg-black border-2 border-blue-500 dark:border-emerald-500 p-10 rounded-3xl shadow-2xl shadow-blue-500/20 dark:shadow-emerald-500/20 transform lg:-translate-y-4 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-500 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs font-black px-4 py-1 rounded-b-lg uppercase tracking-widest">
                  Mais Escolhido
                </div>
                <h3 className="text-xl font-bold text-white mb-2 mt-2">{t.srv_plan2_name}</h3>
                <p className="text-sm text-slate-400 mb-6 h-10">{t.srv_plan2_desc}</p>
                <div className="mb-6 text-4xl font-black text-white">
                  {t.srv_plan2_price}
                </div>
                <ul className="space-y-4 mb-8 text-sm font-medium text-slate-200">
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-400 dark:text-emerald-400" /> {t.srv_plan2_f1}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-400 dark:text-emerald-400" /> {t.srv_plan2_f2}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-400 dark:text-emerald-400" /> {t.srv_plan2_f3}</li>
                </ul>
                <a href="/contato" className="block w-full text-center bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950 py-4 rounded-xl font-extrabold hover:opacity-90 transition-opacity">
                  {t.btn_cta}
                </a>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{t.srv_plan3_name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 h-10">{t.srv_plan3_desc}</p>
                <div className="mb-6 text-3xl font-black text-slate-900 dark:text-white">
                  {t.srv_plan3_price}
                </div>
                <ul className="space-y-4 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan3_f1}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan3_f2}</li>
                  <li className="flex items-center gap-3"><Check size={18} className="text-blue-500 dark:text-emerald-500" /> {t.srv_plan3_f3}</li>
                </ul>
                <a href="/contato" className="block w-full text-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Falar com Especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ANCORAGEM DE PREÇO (MERCADO INTERNACIONAL) */}
        <section className="pb-24 pt-8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">{t.srv_compare_title}</h2>
              <p className="text-base text-slate-600 dark:text-slate-400">{t.srv_compare_desc}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center">
              <div className="flex-1 bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl opacity-90">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-slate-400 dark:text-slate-500" size={24} />
                  <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">{t.srv_compare_intl_title}</h3>
                </div>
                <div className="mb-6">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Custo Médio</span>
                  <span className="text-2xl font-black text-slate-800 dark:text-slate-400">{t.srv_compare_intl_price}</span>
                </div>
                <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-3"><XCircle size={18} className="text-red-400 shrink-0 mt-0.5" /> {t.srv_compare_intl_p1}</li>
                  <li className="flex items-start gap-3"><XCircle size={18} className="text-red-400 shrink-0 mt-0.5" /> {t.srv_compare_intl_p2}</li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-slate-400 shrink-0 mt-0.5" /> {t.srv_compare_intl_p3}</li>
                </ul>
              </div>

              <div className="flex-1 bg-white dark:bg-[#0a0f1c] border-2 border-blue-500 dark:border-emerald-500 p-8 rounded-3xl shadow-xl shadow-blue-500/10 dark:shadow-emerald-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-blue-600 dark:text-emerald-400" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.srv_compare_aegis_title}</h3>
                </div>
                <div className="mb-6">
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Custo Médio</span>
                  <span className="text-2xl font-black text-blue-600 dark:text-emerald-400">{t.srv_compare_aegis_price}</span>
                </div>
                <ul className="space-y-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 dark:text-emerald-500 shrink-0 mt-0.5" /> {t.srv_compare_aegis_p1}</li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 dark:text-emerald-500 shrink-0 mt-0.5" /> {t.srv_compare_aegis_p2}</li>
                  <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-blue-500 dark:text-emerald-500 shrink-0 mt-0.5" /> {t.srv_compare_aegis_p3}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* O VALOR REAL (ROI) */}
        <section className="bg-blue-600 dark:bg-black border-y border-blue-700 dark:border-slate-800 py-24 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-blue-900/50 dark:bg-emerald-900/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">{t.srv_roi_title}</h2>
              <p className="text-lg text-blue-100 dark:text-slate-400">{t.srv_roi_desc}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="flex flex-col items-center">
                <DollarSign size={48} className="text-blue-300 dark:text-emerald-500 mb-6 opacity-80" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3">{t.srv_roi_1_title}</h3>
                <p className="text-blue-100 dark:text-slate-400 text-sm leading-relaxed">{t.srv_roi_1_desc}</p>
              </div>
              <div className="flex flex-col items-center">
                <Target size={48} className="text-blue-300 dark:text-emerald-500 mb-6 opacity-80" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3">{t.srv_roi_2_title}</h3>
                <p className="text-blue-100 dark:text-slate-400 text-sm leading-relaxed">{t.srv_roi_2_desc}</p>
              </div>
              <div className="flex flex-col items-center">
                <BadgeCheck size={48} className="text-blue-300 dark:text-emerald-500 mb-6 opacity-80" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3">{t.srv_roi_3_title}</h3>
                <p className="text-blue-100 dark:text-slate-400 text-sm leading-relaxed">{t.srv_roi_3_desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">{t.cta_title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {t.cta_desc}
          </p>
          <a href="/contato" className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            {t.cta_btn} <ArrowRight size={20} />
          </a>
        </section>

      </main>

      {/* RODAPÉ */}
      {/* RODAPÉ */}
      <footer className="bg-white dark:bg-[#060a13] pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2">
              <div className="mb-6">
                 {typeof window !== 'undefined' && (
                    <Image 
                      src={theme === 'light' ? "/logo-enq-claro-sem-fundo.jpg" : "/logo-enq-dark-sem-fundo.png"} 
                      alt="ENQ Soluções Inteligentes" 
                      width={200} 
                      height={60} 
                      className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                 )}
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-sm">
                {t.footer_desc}
              </p>
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
                {/* Escritório Brasil */}
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
                {/* Escritório Alemanha */}
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
    </div>
  );
}