'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // 1. Adicione useState e useEffect
import { ShieldCheck, Sun, Moon } from 'lucide-react';

export default function Navbar({ lang, setLang, theme, setTheme, t }) {
  // 2. Criar estado para saber se o componente já carregou no navegador
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'pt' ? 'en' : lang === 'en' ? 'es' : 'pt';
    setLang(nextLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo que retorna para a Home e alterna com o tema */}
        <Link href="/" className="flex items-center cursor-pointer w-1/4 transition-transform hover:scale-105">
          {mounted ? (
            <Image 
              src={theme === 'light' ? "/logo-enq-claro-sem-fundo.jpg" : "/logo-enq-dark-sem-fundo.png"} 
              alt="ENQ Soluções Inteligentes" 
              width={200} 
              height={60} 
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
              priority
            />
          ) : (
             <div className="h-10 sm:h-12 w-[120px]" /> // Espaço reservado durante o carregamento
          )}
        </Link>

        <div className="flex-grow flex justify-center items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_home}</Link>
          <Link href="/servicos" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_services}</Link>
          <Link href="/contato" className="hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">{t.nav_contact}</Link>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/4">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors uppercase"
          >
            {lang}
          </button>
          
          {/* 3. Renderização condicional do ícone */}
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="text-slate-500 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors"
          >
            {mounted ? (
               theme === 'light' ? <Moon size={18} /> : <Sun size={18} />
            ) : (
               <div className="w-[18px] h-[18px]" /> // Placeholder invisível enquanto carrega
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}