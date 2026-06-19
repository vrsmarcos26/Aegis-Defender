'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShieldCheck, Sun, Moon } from 'lucide-react';

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  const [mounted, setMounted] = useState(false);
  
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[48px]"></div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Original da ENQ com transição de tema suportada */}
        <Link href="/" className="flex items-center cursor-pointer w-1/4 transition-transform hover:scale-105">
          <Image 
            src={theme === 'light' ? "/logo-enq-claro-sem-fundo.png" : "/logo-enq-dark-sem-fundo.png"} 
            alt="ENQ Soluções Inteligentes" 
            width={400} 
            height={120} 
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm"
            priority
          />
        </Link>

        {/* Links Centralizados */}
        <div className="hidden md:flex flex-grow justify-center items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_home}</Link>
          <Link href="/servicos" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_services}</Link>
          <Link href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_contact}</Link>
        </div>

        {/* Controles à direita */}
        <div className="flex items-center justify-end gap-4 w-1/4">
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
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}