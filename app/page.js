'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { translations } from '../locales/translations';
import { ShieldCheck, Lock, AlertTriangle, Crosshair, CheckCircle2, XCircle, Database, Users, Building2, Activity, Zap, TerminalSquare, Eye, FileCode2, Check, ArrowRight, Info, Search, FileText, Target, ShieldAlert, Award, ChevronRight, Bug, CloudOff, Clock, DollarSign, AlertOctagon, Landmark, HeartPulse, ShoppingCart, Dices, MapPin, Phone, Mail } from 'lucide-react';

export default function Home() {
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

  const companies = [
    { name: "Tesla", slug: "tesla" },
    { name: "Uber", slug: "uber" },
    { name: "Netflix", slug: "netflix" },
    { name: "Airbnb", slug: "airbnb" },
    { name: "Google", slug: "google" },
    { name: "Meta", slug: "meta" },
    { name: "Amazon", slug: "amazon" },
    { name: "PayPal", slug: "paypal" },
    { name: "Spotify", slug: "spotify" },
    { name: "Nubank", slug: "nubank" }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#0a0f1c] min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-emerald-900 flex flex-col">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
      `}} />
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />

      <main className="pt-32 overflow-hidden flex-grow">
        
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 py-12 lg:py-20">
          <div className="flex-1 space-y-8 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-emerald-900/20 text-blue-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-blue-200/50 dark:border-emerald-800/30">
              <Crosshair size={14} /> {t.hero_badge}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {t.hero_title1} <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-emerald-400 dark:to-teal-500">
                {t.hero_title2}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero_desc}
            </p>
            <div className="pt-4">
              <a href="/contato" className="inline-flex items-center justify-center gap-2 bg-blue-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
                {t.btn_cta} <Zap size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative flex justify-center w-full max-w-md lg:max-w-none">
            <div className="absolute inset-0 bg-blue-400/20 dark:bg-emerald-500/10 blur-[100px] rounded-full"></div>
            <ShieldCheck size={280} strokeWidth={1} className="text-blue-600 dark:text-emerald-400 relative z-10 drop-shadow-2xl" />
            
            <div className="absolute top-10 -left-4 sm:-left-12 bg-white dark:bg-slate-800/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full"><CheckCircle2 size={20} className="text-green-600 dark:text-green-400" /></div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{t.float_1}</span>
            </div>

            <div className="absolute bottom-20 -right-4 sm:-right-12 bg-white dark:bg-slate-800/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '4s'}}>
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full"><Activity size={20} className="text-blue-600 dark:text-blue-400" /></div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{t.float_2}</span>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF (CARROSSEL COM LOGOS) */}
        <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">{t.trust_title}</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              {t.trust_desc}
            </p>
          </div>
          
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 dark:from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 dark:from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-[200%] animate-marquee items-center">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="w-48 sm:w-64 flex items-center justify-center shrink-0">
                <img 
                  src={`https://cdn.simpleicons.org/${company.slug}/94a3b8`} 
                  alt={company.name} 
                  className="h-8 sm:h-10 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-300 select-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* O QUE É UM PENTEST */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{t.what_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.what_desc}
              </p>

              <div className="bg-blue-50/80 dark:bg-emerald-950/20 border-l-4 border-blue-600 dark:border-emerald-500 p-5 rounded-r-2xl">
                <div className="flex gap-4">
                  <Info className="text-blue-600 dark:text-emerald-500 shrink-0 mt-1" size={24} />
                  <p className="text-blue-900 dark:text-emerald-100 font-medium italic leading-relaxed text-sm sm:text-base">
                    "{t.what_highlight}"
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                    <CheckCircle2 className="text-green-500" size={20} /> {t.pros_title}
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 shrink-0 mt-0.5" /> {t.pros_1}</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 shrink-0 mt-0.5" /> {t.pros_2}</li>
                    <li className="flex items-start gap-2"><Check size={16} className="text-green-500 shrink-0 mt-0.5" /> {t.pros_3}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                    <AlertTriangle className="text-orange-500" size={20} /> {t.cons_title}
                  </h4>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5" /> {t.cons_1}</li>
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5" /> {t.cons_2}</li>
                    <li className="flex items-start gap-2"><ArrowRight size={16} className="text-orange-500 shrink-0 mt-0.5" /> {t.cons_3}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex gap-5 shadow-sm">
                <div className="bg-slate-900 dark:bg-black p-4 rounded-xl h-fit text-white">
                  <TerminalSquare size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.box_black_title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t.box_black_desc}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex gap-5 shadow-sm">
                <div className="bg-slate-500 dark:bg-slate-700 p-4 rounded-xl h-fit text-white">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.box_grey_title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t.box_grey_desc}</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow flex gap-5 shadow-sm">
                <div className="bg-slate-200 dark:bg-slate-200 p-4 rounded-xl h-fit text-slate-800">
                  <FileCode2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.box_white_title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{t.box_white_desc}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ESTATÍSTICAS (CORRIGIDAS PARA O MESMO FUNDO DO CARROSSEL) */}
        <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-blue-600 dark:text-emerald-500 font-bold uppercase tracking-widest text-xs mb-2">{t.stat_title}</h2>
              <p className="text-slate-900 dark:text-white text-xl font-bold leading-snug">{t.stat_subtitle}</p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x divide-slate-200 dark:divide-slate-700 w-full">
              <div className="flex flex-col items-center sm:items-start sm:pl-6 text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-500 dark:text-emerald-400" />
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{t.stat_1_val}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t.stat_1_desc}</p>
              </div>
              <div className="flex flex-col items-center sm:items-start sm:pl-6 text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-5 h-5 text-blue-500 dark:text-emerald-400" />
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{t.stat_2_val}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t.stat_2_desc}</p>
              </div>
              <div className="flex flex-col items-center sm:items-start sm:pl-6 text-center sm:text-left">
                <div className="flex items-center gap-2 mb-1">
                  <AlertOctagon className="w-5 h-5 text-blue-500 dark:text-emerald-400" />
                  <span className="text-3xl font-black text-slate-900 dark:text-white">{t.stat_3_val}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">{t.stat_3_desc}</p>
              </div>
            </div>

          </div>
        </section>

        {/* TABELA COMPARATIVA SCANNERS VS AEGIS */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{t.vs_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{t.vs_desc}</p>
            </div>

            <div className="bg-slate-50 dark:bg-[#0a0f1c] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="grid grid-cols-6 items-center p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/80">
                <div className="col-span-4 font-bold text-slate-500 dark:text-slate-400 uppercase text-xs sm:text-sm tracking-wider">Capacidade Tática</div>
                <div className="col-span-1 text-center font-bold text-slate-500 dark:text-slate-400 uppercase text-xs sm:text-sm tracking-wider">Scanner</div>
                <div className="col-span-1 text-center font-extrabold text-blue-600 dark:text-emerald-400 uppercase text-xs sm:text-sm tracking-wider">ENQ SOLUÇÕES INTELIGENTES</div>
              </div>
              
              {[
                { feat: t.vs_feat_4, scanner: true, aegis: true },
                { feat: t.vs_feat_1, scanner: false, aegis: true },
                { feat: t.vs_feat_2, scanner: false, aegis: true },
                { feat: t.vs_feat_3, scanner: false, aegis: true },
                { feat: t.vs_feat_5, scanner: false, aegis: true },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-6 items-center p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 last:border-0 hover:bg-white dark:hover:bg-slate-900/50 transition-colors">
                  <div className="col-span-4 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300">{row.feat}</div>
                  <div className="col-span-1 flex justify-center">
                    {row.scanner ? <CheckCircle2 className="text-slate-400" size={24} /> : <XCircle className="text-red-400/50" size={24} />}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {row.aegis ? <CheckCircle2 className="text-blue-600 dark:text-emerald-400 drop-shadow-sm" size={26} /> : <XCircle className="text-red-500" size={26} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METODOLOGIA (TIMELINE) */}
        <section className="bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">{t.meth_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{t.meth_desc}</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="hidden lg:block absolute top-10 left-12 right-12 h-1 bg-slate-200 dark:bg-slate-800 z-0"></div>
              
              {[
                { num: "01", icon: Search, title: t.meth_step_1, desc: t.meth_desc_1 },
                { num: "02", icon: Activity, title: t.meth_step_2, desc: t.meth_desc_2 },
                { num: "03", icon: Target, title: t.meth_step_3, desc: t.meth_desc_3 },
                { num: "04", icon: FileText, title: t.meth_step_4, desc: t.meth_desc_4 }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center group">
                  <div className="w-20 h-20 bg-white dark:bg-[#0a0f1c] border-4 border-slate-100 dark:border-slate-900 group-hover:border-blue-100 dark:group-hover:border-emerald-900/50 rounded-full flex items-center justify-center mb-6 shadow-sm transition-colors">
                    <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-emerald-400 font-black group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><step.icon size={18} className="text-blue-500 dark:text-emerald-500 hidden sm:block lg:hidden" /> {step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AMEAÇAS COM MARCA D'ÁGUA NO FUNDO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">{t.vuln_title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ 
                { icon: Bug, title: t.vuln_1, desc: t.vuln_1_desc },
                { icon: ShieldAlert, title: t.vuln_2, desc: t.vuln_2_desc },
                { icon: Database, title: t.vuln_3, desc: t.vuln_3_desc },
                { icon: Users, title: t.vuln_4, desc: t.vuln_4_desc },
                { icon: TerminalSquare, title: t.vuln_5, desc: t.vuln_5_desc },
                { icon: CloudOff, title: t.vuln_6, desc: t.vuln_6_desc }
              ].map((item, i) => (
                <div key={i} className="relative group overflow-hidden p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-emerald-600 transition-all shadow-sm hover:-translate-y-1">
                  
                  {/* Ícone marca d'água no fundo da ameaça */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                    <item.icon size={160} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white dark:bg-[#0a0f1c] border border-slate-100 dark:border-slate-800 rounded-2xl text-blue-600 dark:text-emerald-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-900 transition-colors">
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
                    </div>
                    <p className="text-xs font-bold text-blue-600 dark:text-emerald-400 uppercase tracking-wider mb-2">{t.vuln_how}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SETORES (CARDS PREMIUM) */}
        <section className="bg-slate-100 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">{t.sectors_title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{t.sectors_desc}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { name: t.sectors_1, desc: t.sectors_1_desc, icon: Landmark },
                { name: t.sectors_2, desc: t.sectors_2_desc, icon: HeartPulse },
                { name: t.sectors_3, desc: t.sectors_3_desc, icon: ShoppingCart },
                { name: t.sectors_4, desc: t.sectors_4_desc, icon: Building2 },
                { name: t.sectors_5, desc: t.sectors_5_desc, icon: Zap },
                { name: t.sectors_6, desc: t.sectors_6_desc, icon: Dices }
              ].map((sector, idx) => (
                <div key={idx} className="relative group overflow-hidden p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] dark:opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-12">
                    <sector.icon size={160} />
                  </div>
                  <div className="relative z-10 flex flex-col items-start h-full">
                    <div className="p-3 sm:p-4 rounded-2xl bg-blue-50 dark:bg-[#0a0f1c] text-blue-600 dark:text-emerald-400 mb-4 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-900 transition-colors">
                      <sector.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{sector.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{sector.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/contato" className="inline-flex items-center gap-2 text-blue-600 dark:text-emerald-400 font-bold hover:underline">
                {t.btn_all_sectors} <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* CERTIFICAÇÕES DA EQUIPE & COMPLIANCE */}
        <section className="relative py-24 bg-white dark:bg-[#0a0f1c]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-emerald-900/20 border border-blue-200 dark:border-emerald-800/30 text-blue-700 dark:text-emerald-400 text-xs font-bold mb-6 uppercase tracking-wider">
                  <Award size={14} /> {t.team_cert_title}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">Hackers éticos,<br/>certificados globalmente.</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">{t.team_cert_desc}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['OSCP', 'CISSP', 'CEH', 'CISM'].map((cert, idx) => (
                    <div key={idx} className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                      <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100/50 dark:bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                      <ShieldCheck size={28} className="mx-auto mb-2 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-emerald-500 transition-colors" />
                      <span className="font-black text-lg text-slate-700 dark:text-slate-200 tracking-wider">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.cert_title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">{t.cert_desc}</p>
                
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-emerald-800 transition-colors">
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1">ISO 27001:2022</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight block">{t.cert_iso}</span>
                    </div>
                    <span className="text-xs font-bold font-mono bg-blue-50 text-blue-600 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-emerald-800/50 shrink-0 text-center shadow-sm">
                      A.8.8 COMPLIANT
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-emerald-800 transition-colors">
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1">SOC 2 TYPE II</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight block">{t.cert_soc}</span>
                    </div>
                    <span className="text-xs font-bold font-mono bg-blue-50 text-blue-600 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-emerald-800/50 shrink-0 text-center shadow-sm">
                      CC4.1 AUDITABLE
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-emerald-800 transition-colors">
                    <div className="flex-1">
                      <span className="font-bold text-slate-900 dark:text-slate-200 block mb-1">LGPD & GDPR</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight block">{t.cert_lgpd}</span>
                    </div>
                    <span className="text-xs font-bold font-mono bg-blue-50 text-blue-600 dark:bg-emerald-950/50 dark:text-emerald-400 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-emerald-800/50 shrink-0 text-center shadow-sm">
                      DATA PRIVACY
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SUPER CTA FINAL */}
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

      {/* RODAPÉ (FOOTER COMPLETO) */}
      <footer className="bg-slate-950 dark:bg-[#060a13] pt-20 pb-10 border-t border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2">
              <div className="text-2xl font-extrabold text-white flex items-center gap-2 mb-6">
                <ShieldCheck className="text-blue-500 dark:text-emerald-500" /> ENQ SOLUÇÕES INTELIGENTES<span className="text-blue-500 dark:text-emerald-500">.</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
                {t.footer_desc}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t.footer_sectors}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">{t.sectors_1}</a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">{t.sectors_2}</a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">{t.sectors_3}</a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">{t.sectors_6}</a></li>
                <li><a href="/servicos" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors mt-2 inline-block font-medium">{t.btn_all_sectors}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t.footer_contact}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"><Mail size={16} /> contato@aegisdefense.com</a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_pricing} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_schedule} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="/contato" className="hover:text-blue-400 dark:hover:text-emerald-400 transition-colors flex items-center justify-between group">{t.footer_reports}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t.footer_offices}</h4>
              <div className="space-y-6 text-sm text-slate-400">
                <div>
                  <strong className="text-slate-200 block mb-2">{t.footer_country_1}</strong>
                  <a href="/contato" className="flex items-start gap-2 mb-1 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">
                    <Phone size={14} className="shrink-0 mt-0.5 text-blue-500 dark:text-emerald-500" />
                    <span>+55 (11) 4002-8922</span>
                  </a>
                  <a href="/contato" className="flex items-start gap-2 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-blue-500 dark:text-emerald-500" />
                    <span>Av. Paulista, 1374<br/>São Paulo - SP</span>
                  </a>
                </div>
                <div>
                  <strong className="text-slate-200 block mb-2">{t.footer_country_2}</strong>
                  <a href="/contato" className="flex items-start gap-2 mb-1 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">
                    <Phone size={14} className="shrink-0 mt-0.5 text-blue-500 dark:text-emerald-500" />
                    <span>+351 912 345 678</span>
                  </a>
                  <a href="/contato" className="flex items-start gap-2 hover:text-blue-400 dark:hover:text-emerald-400 transition-colors">
                    <MapPin size={14} className="shrink-0 mt-0.5 text-blue-500 dark:text-emerald-500" />
                    <span>Av. da Liberdade, 110<br/>Lisboa, 1250-146</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 dark:border-slate-800/50 text-xs text-slate-500 gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <a href="/contato" className="hover:text-blue-400 dark:hover:text-slate-300 transition-colors">{t.footer_privacy}</a>
              <a href="/contato" className="hover:text-blue-400 dark:hover:text-slate-300 transition-colors">{t.footer_cookies}</a>
              <a href="/contato" className="hover:text-blue-400 dark:hover:text-slate-300 transition-colors">{t.footer_terms}</a>
              <a href="/contato" className="hover:text-blue-400 dark:hover:text-slate-300 transition-colors">{t.footer_faq}</a>
            </div>
            <div>
              &copy; {new Date().getFullYear()} ENQ SOLUÇÕES INTELIGENTES. Security by design.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

