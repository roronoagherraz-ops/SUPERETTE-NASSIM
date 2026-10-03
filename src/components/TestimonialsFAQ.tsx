import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, HelpCircle, Heart } from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/storeData';
import { Language } from '../types';

interface TestimonialsFAQProps {
  language: Language;
}

export const TestimonialsFAQ: React.FC<TestimonialsFAQProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Block */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 uppercase tracking-wider mb-2">
              {isAr ? 'آراء زبائننا الكرام' : 'Avis des Clients'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {isAr ? 'ثقة زبائن سيدي مروان والمناطق المجاورة' : 'La Confiance des Habitants de Sidi Mérouane'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                    "{isAr ? t.comment.ar : t.comment.fr}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <div className="font-bold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-xs text-stone-500 font-medium">
                    {isAr ? t.role.ar : t.role.fr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isAr ? 'الأسئلة الشائعة' : 'Questions Fréquentes'}</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-stone-900">
              {isAr ? 'كل ما تحتاج معرفته عن خدماتنا' : 'Tout ce que vous devez savoir'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-stone-50"
                  >
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">
                      {isAr ? item.question.ar : item.question.fr}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-3 leading-relaxed">
                      {isAr ? item.answer.ar : item.answer.fr}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
