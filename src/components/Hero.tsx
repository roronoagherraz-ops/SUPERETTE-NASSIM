import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2, PackageCheck, Sparkles, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onExploreClick }) => {
  const isAr = language === 'ar';

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white pt-8 pb-16 sm:py-20 lg:py-24">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main content */}
          <div className={`lg:col-span-7 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
            {/* Badges row */}
            <div className={`inline-flex flex-wrap items-center justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'} gap-2 mb-6`}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-stone-950 shadow-sm uppercase tracking-wide">
                <Clock className="w-3.5 h-3.5" />
                {isAr ? 'مفتوح 24/24 و 7/7' : 'Ouvert 24h/24 & 7j/7'}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/80 text-emerald-100 border border-emerald-600/60 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                {isAr ? 'سيدي مروان (ميلة)' : 'Sidi Mérouane (Mila)'}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/70 text-emerald-200 border border-emerald-700/50">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                {isAr ? 'مقابل مسجد التقوى' : 'En face de la Mosquée Taqwa'}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              {isAr ? (
                <>
                  <span className="text-amber-400">سوبيرات نسيم</span>
                  <br />
                  <span className="text-2xl sm:text-4xl text-emerald-100 font-bold">
                    مواد غذائية عامة — بالجملة والتجزئة
                  </span>
                </>
              ) : (
                <>
                  <span className="text-amber-400">Supérette Nassim</span>
                  <br />
                  <span className="text-2xl sm:text-4xl text-emerald-100 font-bold">
                    Alimentation Générale — Gros & Détail
                  </span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {isAr
                ? 'مرحباً بكم في متجركم العائلي بسيدي مروان! نوفر لكم جميع المواد الغذائية، الألبان، المشروبات ومواد التنظيف بأسعار تنافسية للأفراد والتجار، مع خدمة متواصلة على مدار الساعة بدون انقطاع.'
                : 'Bienvenue dans votre supérette de confiance à Sidi Mérouane ! Produits frais, épicerie, boissons fraîches, packs gros et détail à prix avantageux, avec un accueil chaleureux et une disponibilité totale jour et nuit.'}
            </p>

            {/* Action Buttons */}
            <div className={`flex flex-wrap items-center justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'} gap-3 sm:gap-4 mb-10`}>
              {/* Direct Call Button */}
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold text-base shadow-lg shadow-amber-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-stone-900 fill-stone-900" />
                <span>{isAr ? `اتصل بنا : ${STORE_INFO.phone}` : `Appeler : ${STORE_INFO.phone}`}</span>
              </a>

              {/* WhatsApp Order Button */}
              <a
                href={`https://wa.me/213659927326?text=${encodeURIComponent(
                  isAr 
                    ? 'السلام عليكم، أود الاستفسار والطلب من سوبيرات نسيم.' 
                    : 'Salam alaykoum, je souhaite passer une commande chez Supérette Nassim.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg border border-emerald-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span>{isAr ? 'طلب عبر واتساب' : 'Commander via WhatsApp'}</span>
              </a>

              {/* Explore Catalog */}
              <button
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur border border-white/20 transition-colors"
              >
                <PackageCheck className="w-4 h-4 text-amber-300" />
                <span>{isAr ? 'تصفح السلع والأسعار' : 'Consulter les Rayons'}</span>
              </button>
            </div>

            {/* Highlights Bar */}
            <div className="pt-6 border-t border-emerald-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-black text-amber-400">24h/24</span>
                <span className="text-xs text-emerald-200">{isAr ? 'خدمة ليل نهار' : 'Non-stop 7j/7'}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-black text-amber-400">Gros & Détail</span>
                <span className="text-xs text-emerald-200">{isAr ? 'أسعار خاصة للحزم' : 'Remises sur volume'}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-black text-amber-400">100%</span>
                <span className="text-xs text-emerald-200">{isAr ? 'منتجات أصلية وطازجة' : 'Produits frais & garantis'}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-2xl font-black text-amber-400">Taqwa</span>
                <span className="text-xs text-emerald-200">{isAr ? 'مقابل المسجد مباشرة' : 'Face à la Mosquée'}</span>
              </div>
            </div>
          </div>

          {/* Right Highlight Store Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/95 backdrop-blur-md text-stone-800 p-6 sm:p-7 shadow-2xl border border-white/20">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase rounded-md bg-emerald-100 text-emerald-800 mb-2">
                    {isAr ? 'معلومات المتجر السريعة' : 'Fiche Pratique'}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900">
                    {isAr ? 'سوبيرات نسيم — سيدي مروان' : 'Supérette Nassim'}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl">
                  🛒
                </div>
              </div>

              <div className="space-y-4 text-sm divide-y divide-stone-100">
                <div className="flex items-center gap-3 pt-3 first:pt-0">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">
                      {isAr ? 'رقم الهاتف المباشر:' : 'Numéro direct :'}
                    </div>
                    <a 
                      href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-emerald-700 hover:text-emerald-800 text-base"
                    >
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">
                      {isAr ? 'أوقات العمل:' : "Horaires d'ouverture :"}
                    </div>
                    <div className="font-bold text-stone-800">
                      {isAr ? STORE_INFO.hours.ar : STORE_INFO.hours.fr}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">
                      {isAr ? 'العنوان والموقع:' : 'Adresse & Repère :'}
                    </div>
                    <div className="font-bold text-stone-800">
                      {isAr ? STORE_INFO.address.ar : STORE_INFO.address.fr}
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5 font-mono">
                      Plus Code: {STORE_INFO.plusCode}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick actions inside card */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isAr ? 'اتصال هاتفي' : 'Appeler'}</span>
                </a>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-stone-600" />
                  <span>{isAr ? 'فتح الخريطة' : 'Itinéraire GPS'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
