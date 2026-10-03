import React from 'react';
import { ShoppingBasket, Truck, Clock, Sparkles, ShieldCheck, HeartHandshake, Box, Layers } from 'lucide-react';
import { Language } from '../types';

interface AboutAndServicesProps {
  language: Language;
}

export const AboutAndServices: React.FC<AboutAndServicesProps> = ({ language }) => {
  const isAr = language === 'ar';

  const services = [
    {
      icon: Box,
      title: { fr: 'Vente en Gros & Détail', ar: 'بيع بالجملة والتجزئة' },
      desc: {
        fr: 'Cartons complets, fardeaux d’eau ou achats à la pièce. Des prix dégressifs pour commerces et familles.',
        ar: 'كارتونات كاملة، فاردوات مياه وعصائر أو شراء بالقطعة. أسعار تنازلية للمحلات والعائلات.'
      },
      tag: { fr: 'Gros & Détail', ar: 'جملة وتجزئة' }
    },
    {
      icon: ShoppingBasket,
      title: { fr: 'Épicerie & Produits Frais', ar: 'مواد غذائية طازجة ومؤونة' },
      desc: {
        fr: 'Arrivage quotidien en lait, yaourts, fromages, pain frais, pâtes, huiles de table et conserves de premier choix.',
        ar: 'تجدد يومي للحليب، الياغورت، الأجبان، الخبز الطازج، العجائن، زيوت المائدة وأجود المصبرات.'
      },
      tag: { fr: 'Frais garanti', ar: 'طازج مضمون' }
    },
    {
      icon: Clock,
      title: { fr: 'Service Continu 24h/24 & 7j/7', ar: 'خدمة مستمرة 24/24 و 7/7' },
      desc: {
        fr: 'Votre supérette reste ouverte toute la nuit et tôt le matin. Ne manquez jamais de rien en cas d’urgence.',
        ar: 'محلكم مفتوح طوال الليل وفي الصباح الباكر دون انقطاع. جاهزون دائماً لتلبية كل احتياجاتكم الطارئة.'
      },
      tag: { fr: '24/7 Non-stop', ar: 'ليلاً ونهاراً' }
    },
    {
      icon: Sparkles,
      title: { fr: 'Articles Ménagers & Hygiène', ar: 'مواد التنظيف والعناية' },
      desc: {
        fr: 'Détergents en bidons et sacs de 5kg, eau de javel, savons, shampoings et produits pour l’entretien de la maison.',
        ar: 'مساحيق الغسيل 5 كغ، ماء جافيل، صابون، شامبو ومستلزمات نظافة البيت بأسعار في المتناول.'
      },
      tag: { fr: 'Grand choix', ar: 'تنوع واسع' }
    },
    {
      icon: HeartHandshake,
      title: { fr: 'Accueil & Préparation Rapide', ar: 'حسن الاستقبال وتجهيز الطلبيات' },
      desc: {
        fr: 'Passez votre commande via WhatsApp ou téléphone : nous rassemblons vos articles avant votre passage.',
        ar: 'أرسل طلبيتك عبر الواتساب أو اتصل هاتفياً، ونحن نجهز كل طلباتك في أكياس أو كراتين قبل وصولك.'
      },
      tag: { fr: 'Sans attente', ar: 'بدون انتظار' }
    },
    {
      icon: ShieldCheck,
      title: { fr: 'Emplacement & Parking Facile', ar: 'موقع استراتيجي وموقف سهل' },
      desc: {
        fr: 'Face à la Mosquée Taqwa à Sidi Mérouane. Arrêt minute aisé pour charger vos cartons et vos courses.',
        ar: 'موقع مباشر أمام مسجد التقوى بسيدي مروان مع سهولة التوقف وركن السيارة لتحميل الأغراض براحة.'
      },
      tag: { fr: 'Pratique', ar: 'سهل ومريح' }
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
            {isAr ? 'عن المتجر والخدمات' : 'Nos Engagements & Services'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {isAr ? 'لماذا يختار أهالي سيدي مروان سوبيرات نسيم؟' : 'Votre Supermarché de Proximité à Sidi Mérouane'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'تأسست سوبيرات نسيم لتكون وجهتكم الأولى للتسوق اليومي والتجاري في سيدي مروان. نجمع بين وفرة السلع وأسعار الجملة التنافسية والخدمة الدائمة طوال 24 ساعة.'
              : 'Supérette Nassim s’engage à vous offrir une disponibilité constante, un choix rigoureusement sélectionné de marques algériennes reconnues, et un accueil digne des traditions de notre région.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    {isAr ? srv.tag.ar : srv.tag.fr}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                  {isAr ? srv.title.ar : srv.title.fr}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {isAr ? srv.desc.ar : srv.desc.fr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
