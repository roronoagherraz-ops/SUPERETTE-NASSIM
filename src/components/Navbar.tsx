import React from 'react';
import { Phone, ShoppingCart, MapPin, Clock, Globe } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  cartCount,
  onOpenCart,
}) => {
  const isAr = language === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>
              {isAr ? 'مفتوح الآن 24/24 و 7/7 — خدمة متواصلة ليلاً ونهاراً' : 'Ouvert 24h/24 & 7j/7 — Service continu jour et nuit'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-200 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {isAr ? 'سيدي مروان (مقابل مسجد التقوى)' : 'Sidi Mérouane (En face de la Mosquée Taqwa)'}
            </span>
            <a 
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="font-bold text-white hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex items-center justify-center shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tighter">N</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-2xl text-stone-900 tracking-tight">
                  {isAr ? STORE_INFO.nameArabic : STORE_INFO.name}
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 rounded-md border border-amber-300">
                  {isAr ? 'جملة وتجزئة' : 'Gros & Détail'}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium hidden sm:block">
                {isAr ? STORE_INFO.subtitle.ar : STORE_INFO.subtitle.fr}
              </p>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-600">
            <a href="#rayons" className="hover:text-emerald-700 transition-colors">
              {isAr ? 'الأقسام والمنتجات' : 'Nos Rayons'}
            </a>
            <a href="#gros" className="hover:text-emerald-700 transition-colors">
              {isAr ? 'عروض الجملة' : 'Espace Gros'}
            </a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">
              {isAr ? 'عن السوبيرات' : 'À propos'}
            </a>
            <a href="#location" className="hover:text-emerald-700 transition-colors">
              {isAr ? 'الموقع والخريطة' : 'Localisation'}
            </a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">
              {isAr ? 'اتصل بنا' : 'Contact'}
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle */}
            <div className="flex items-center rounded-lg bg-stone-100 p-0.5 border border-stone-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${
                  language === 'fr'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Afficher en Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1.5 rounded-md transition-all ${
                  language === 'ar'
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="العرض باللغة العربية"
              >
                العربية
              </button>
            </div>

            {/* Call button desktop */}
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isAr ? 'اتصل الآن' : '0659 92 73 26'}</span>
            </a>

            {/* Cart / Shopping List Trigger */}
            <button
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all group"
            >
              <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">
                {isAr ? 'قائمة الطلب' : 'Ma Liste'}
              </span>
              {cartCount > 0 && (
                <span className="ml-0.5 sm:ml-1 px-1.5 py-0.2 min-w-5 h-5 flex items-center justify-center text-xs font-extrabold bg-amber-400 text-stone-900 rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
