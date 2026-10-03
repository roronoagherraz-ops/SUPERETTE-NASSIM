import React from 'react';
import { Package, Truck, Award, Users, Phone, MessageCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface WholesaleSectionProps {
  language: Language;
  onBrowseWholesale: () => void;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({ language, onBrowseWholesale }) => {
  const isAr = language === 'ar';

  return (
    <section id="gros" className="py-12 sm:py-16 bg-gradient-to-b from-stone-900 to-stone-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className={`lg:col-span-7 ${isAr ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-4">
              <Package className="w-3.5 h-3.5" />
              <span>{isAr ? 'قسم تجار التجزئة والمناسبات' : 'Espace Commerçants & Événements'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              {isAr ? (
                <>
                  البيع بالجملة ونصف الجملة <br />
                  <span className="text-amber-400">بأسعار تنافسية في سيدي مروان</span>
                </>
              ) : (
                <>
                  Vente en Gros & Demi-Gros <br />
                  <span className="text-amber-400">Aux Meilleurs Prix à Sidi Mérouane</span>
                </>
              )}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {isAr
                ? 'هل تدير مقهى، مطعماً، محلاً تجارياً، أو تستعد لمناسبة عائلية أو عرس؟ في سوبيرات نسيم نوفر لكم كميات كبيرة وفاردوات مياه، مشروبات، زيت، دقيق، سكر، ومواد تنظيف بأسعار جملة مباشرة مع سرعة التجهيز والتحميل.'
                : 'Vous gérez un café, un restaurant, un commerce de proximité ou préparez un événement familial (mariage, aqiqa, fête) ? Supérette Nassim vous approvisionne par cartons, fardeaux et palettes avec des remises substantielles sur volume.'}
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'فاردوات ماء وعصائر بأسعار الجملة' : "Fardeaux d'eau & sodas au prix de gros"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'كراتين الزيت والسكر والحليب' : "Cartons d'huile, sucre, lait & semoule"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'تجهيز سريع لطلبيات الأعراس والولائم' : "Préparation prioritaire pour fêtes & mariages"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'إمكانية التحميل والطلب 24 ساعة / 24' : 'Chargement et disponibilité 24h/24'}</span>
              </div>
            </div>

            {/* Wholesale Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/213659927326?text=${encodeURIComponent(
                  isAr
                    ? 'السلام عليكم، أرغب في الاستفسار عن أسعار الجملة (الكراتين والفاردوات) لدى سوبيرات نسيم.'
                    : 'Salam alaykoum, je souhaite un devis ou une commande en gros chez Supérette Nassim.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'طلب تسعيرة جملة عبر واتساب' : 'Demander un devis de gros (WhatsApp)'}</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs sm:text-sm border border-stone-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{isAr ? `اتصال للتجار : ${STORE_INFO.phone}` : `Appel direct : ${STORE_INFO.phone}`}</span>
              </a>

              <button
                type="button"
                onClick={onBrowseWholesale}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-stone-300 hover:text-white font-semibold text-xs transition-colors"
              >
                <span>{isAr ? 'عرض منتجات الجملة في الكتالوج' : 'Voir les packs de gros'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-lg mb-3">
                ☕
              </div>
              <h3 className="font-bold text-white text-base mb-1">
                {isAr ? 'المقاهي والمطاعم' : 'Cafés & Restaurants'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {isAr
                  ? 'تزويد دوري بالسكر، القهوة، الحليب، والمشروبات الغازية بكميات تلائم نشاطكم اليومي.'
                  : 'Approvisionnement régulier en café, sucre, lait et boissons fraîches à tarifs négociés.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center font-bold text-lg mb-3">
                🎉
              </div>
              <h3 className="font-bold text-white text-base mb-1">
                {isAr ? 'الأعراس والمناسبات' : 'Mariages & Événements'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {isAr
                  ? 'تجهيز فاردوات المياه المعدنية، العصائر، والحلويات مع إمكانية إرجاع الفائض غير المفتوح.'
                  : 'Packs de bouteilles d’eau, jus, sodas et confiserie pour vos cérémonies avec reprise des surplus non ouverts.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-3">
                🛒
              </div>
              <h3 className="font-bold text-white text-base mb-1">
                {isAr ? 'المحلات المجاورة' : 'Détaillants & Épiceries'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {isAr
                  ? 'حل سريع وتزويد فوري بدون الحاجة للتنقل لأسواق الجملة البعيدة، متوفر 24 ساعة.'
                  : 'Réassort rapide sans vous déplacer loin, disponible à toute heure pour dépanner votre stock.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-400/20 text-purple-400 flex items-center justify-center font-bold text-lg mb-3">
                🏡
              </div>
              <h3 className="font-bold text-white text-base mb-1">
                {isAr ? 'العائلات الكبيرة' : 'Familles Nombreuses'}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {isAr
                  ? 'شراء المؤونة الشهرية (عولة الشهر) بالكرتون لتوفير مصاريف التسوق.'
                  : 'Achetez vos provisions au mois par carton entier pour faire de vraies économies.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
