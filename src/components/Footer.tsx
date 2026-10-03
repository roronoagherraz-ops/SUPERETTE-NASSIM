import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isAr = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-12 pb-24 md:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center font-extrabold text-xl">
                N
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">
                  {isAr ? STORE_INFO.nameArabic : STORE_INFO.name}
                </span>
                <p className="text-xs text-amber-400 font-semibold">
                  {isAr ? 'مواد غذائية عامة — جملة وتجزئة' : 'Gros & Détail 24h/24'}
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isAr
                ? 'سوبيرات نسيم بسيدي مروان — خدمتكم شرف لنا على مدار الساعة. نوفر لكم أجود السلع الغذائية ومواد التنظيف بأسعار مناسبة لكل العائلات والتجار.'
                : 'Votre supérette de référence à Sidi Mérouane (Mila). Approvisionnement continu 24h/24 et 7j/7 pour les particuliers et professionnels.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{isAr ? 'مفتوح دائماً 24/24' : 'Toujours Ouvert 24h/24'}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {isAr ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rayons" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الأقسام والمنتجات' : 'Tous les Rayons'}
                </a>
              </li>
              <li>
                <a href="#gros" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'عروض البيع بالجملة' : 'Vente en Gros & Packs'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'خدماتنا ومزايانا' : 'Nos Engagements'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-amber-400 transition-colors">
                  {isAr ? 'الموقع وخريطة الوصول' : 'Plan d’accès Google Maps'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {isAr ? 'معلومات الاتصال' : 'Contact & Commande'}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400">{isAr ? 'الهاتف المباشر:' : 'Téléphone :'}</div>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400">WhatsApp :</div>
                  <a
                    href="https://wa.me/213659927326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    0659 92 73 26
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-stone-400">{isAr ? 'ساعات العمل:' : 'Disponibilité :'}</div>
                  <div className="text-white font-medium">24h/24 & 7j/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              {isAr ? 'العنوان' : 'Adresse'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  {isAr ? STORE_INFO.address.ar : STORE_INFO.address.fr}
                </span>
              </div>
              <div className="text-[11px] text-stone-500 font-mono">
                Code Plus: {STORE_INFO.plusCode}
              </div>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700 hover:border-emerald-500 text-stone-200 text-xs font-semibold transition-colors"
              >
                {isAr ? 'عرض على الخريطة' : 'Ouvrir sur Maps'} ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} {STORE_INFO.name} — Sidi Mérouane. {isAr ? 'جميع الحقوق محفوظة.' : 'Tous droits réservés.'}
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span>🇩🇿</span>
              <span>Sidi Mérouane, Wilaya de Mila</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 transition-colors"
              title="Haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
