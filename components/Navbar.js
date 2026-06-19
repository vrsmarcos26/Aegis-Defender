'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Adicionamos Menu e X aqui

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controle do menu mobile
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'pt' ? 'en' : lang === 'en' ? 'es' : 'pt';
    setLang(nextLang);
  };

  // Previne erro de hidratação mostrando um espaço vazio até que o tema seja carregado
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-[73px]"></nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo Original da ENQ */}
        <Link href="/" className="flex items-center cursor-pointer md:w-1/4 transition-transform hover:scale-105 z-50">
          <Image 
            src={theme === 'light' ? "/logo-enq-claro-sem-fundo.png" : "/logo-enq-dark-sem-fundo.png"} 
            alt="ENQ Soluções Inteligentes" 
            width={400} 
            height={120} 
            className={`w-auto object-contain drop-shadow-sm transition-all ${
              theme === 'light' ? 'h-14 sm:h-20 scale-110 -ml-2 sm:-ml-4' : 'h-10 sm:h-16'
            }`}
            priority
          />
        </Link>

        {/* Links Centralizados (Aparecem apenas no Desktop: md:flex) */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_home}</Link>
          <Link href="/servicos" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_services}</Link>
          <Link href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_contact}</Link>
        </div>

        {/* Controles à direita */}
        <div className="flex items-center justify-end gap-4 md:w-1/4 z-50">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors uppercase"
          >
            {lang}
          </button>
          
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-slate-500 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Botão Menu Hambúrguer (Aparece APENAS no Mobile: md:hidden) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors ml-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0f1c] border-b border-slate-200 dark:border-slate-800 shadow-xl flex flex-col py-4 px-6 gap-4 animate-in slide-in-from-top-2">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors pb-2 border-b border-slate-100 dark:border-slate-800"
          >
            {t.nav_home}
          </Link>
          <Link 
            href="/servicos" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors pb-2 border-b border-slate-100 dark:border-slate-800"
          >
            {t.nav_services}
          </Link>
          <Link 
            href="/contato" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
          >
            {t.nav_contact}
          </Link>
        </div>
      )}
    </nav>
  );
}