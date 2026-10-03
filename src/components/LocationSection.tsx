import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Copy, Check, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface LocationSectionProps {
  language: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(STORE_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="location" className="py-12 sm:py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
            {isAr ? 'الموقع وخط السير' : 'Localisation & Accès'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {isAr ? 'كيفية الوصول إلى سوبيرات نسيم' : 'Comment nous trouver à Sidi Mérouane'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {isAr
              ? 'موقع مميز وسهل الوصول في قلب سيدي مروان مقابل مسجد التقوى مباشرة مع موقف سيارات مريح.'
              : 'Situé idéalement à proximité immédiate de la Mosquée Taqwa à Sidi Mérouane avec accès direct et stationnement.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left / Contact & Directions Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Business Details Card */}
            <div id="contact" className="p-6 rounded-2xl bg-stone-50 border border-stone-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2 border-b border-stone-200 pb-3">
                <span className="text-emerald-700">📌</span>
                <span>{isAr ? 'معلومات الاتصال والمحل' : 'Informations & Contact'}</span>
              </h3>

              {/* Phone item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500">
                    {isAr ? 'الهاتف المحمول:' : 'Téléphone direct :'}
                  </div>
                  <a
                    href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                    className="text-base sm:text-lg font-extrabold text-emerald-700 hover:text-emerald-800 underline decoration-emerald-300"
                  >
                    {STORE_INFO.phone}
                  </a>
                  <div className="text-[11px] text-stone-500 mt-0.5">
                    {isAr ? 'متاح دائماً 24/24 للطلبيات والاستفسارات' : 'Joignable à toute heure jour et nuit'}
                  </div>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-500">
                    {isAr ? 'أوقات العمل:' : "Horaires d'ouverture :"}
                  </div>
                  <div className="text-sm font-extrabold text-stone-900">
                    {isAr ? 'مفتوح 24 ساعة / 24 — 7 أيام / 7' : 'Ouvert 24 heures sur 24 & 7j/7'}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-0.5">
                    {isAr ? '✓ خدمة مستمرة بما فيها الجمعة والأعياد' : '✓ Service non-stop y compris vendredis et fériés'}
                  </div>
                </div>
              </div>

              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-stone-500">
                    {isAr ? 'العنوان والمعلم الرئيسي:' : 'Adresse & Repère :'}
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    {isAr ? STORE_INFO.address.ar : STORE_INFO.address.fr}
                  </div>
                  <div className="mt-2 p-2 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-stone-600 truncate">{STORE_INFO.plusCode}</span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="px-2 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[11px] flex items-center gap-1 shrink-0 transition-colors"
                      title="Copier le Plus Code"
                    >
                      {copiedPlusCode ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{isAr ? 'تم النسخ' : 'Copié'}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>{isAr ? 'نسخ الرمز' : 'Copier'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isAr ? 'اتصال مباشر' : 'Appeler le magasin'}</span>
                </a>

                <a
                  href={`https://wa.me/213659927326`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Landmark Guidance Card */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-2">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <span>🕌</span>
                <span>{isAr ? 'إرشادات الوصول السريع:' : "Point de repère incontournable :"}</span>
              </div>
              <p className="text-amber-950/80 leading-relaxed">
                {isAr
                  ? 'المتجر يقع مباشرة أمام مسجد التقوى بسيدي مروان. عند وصولكم إلى ساحة المسجد ستجدون واجهة سوبيرات نسيم واضحة مع إضاءة 24/24 ومكان واسع للوقوف.'
                  : 'Le magasin est situé exactement en face de la Mosquée Taqwa de Sidi Mérouane. Facile d’accès depuis la route principale, avec places de stationnement devant le magasin.'}
              </p>
            </div>
          </div>

          {/* Right / Embedded Map */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-stone-700">
                    {isAr ? 'خريطة تفاعلية — سيدي مروان' : 'Plan interactif Google Maps'}
                  </span>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>{isAr ? 'فتح في التطبيق' : 'Ouvrir en plein écran'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Iframe */}
              <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-stone-200 relative bg-stone-200">
                <iframe
                  title="Carte Supérette Nassim Sidi Mérouane"
                  src={STORE_INFO.googleMapsEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Map CTA footer */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="text-xs text-stone-500 text-center sm:text-left">
                  {isAr
                    ? 'انقر على الزر لتشغيل الـ GPS مباشرة والتوجيه نحو المتجر.'
                    : 'Cliquez pour lancer le guidage GPS direct vers la Supérette Nassim.'}
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shrink-0 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isAr ? 'بدء التوجيه في Google Maps' : 'Ouvrir dans Google Maps'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
