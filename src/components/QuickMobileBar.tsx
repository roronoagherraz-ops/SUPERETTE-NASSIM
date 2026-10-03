import React from 'react';
import { Phone, MessageCircle, ShoppingCart, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';
import { Language } from '../types';

interface QuickMobileBarProps {
  language: Language;
  cartCount: number;
  onOpenCart: () => void;
}

export const QuickMobileBar: React.FC<QuickMobileBarProps> = ({
  language,
  cartCount,
  onOpenCart,
}) => {
  const isAr = language === 'ar';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-4 gap-2 text-center">
        {/* Call */}
        <a
          href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-600 mb-0.5" />
          <span className="text-[10px] leading-tight font-extrabold">
            {isAr ? 'اتصال' : 'Appeler'}
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/213659927326"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-bold transition-colors"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] leading-tight font-extrabold">WhatsApp</span>
        </a>

        {/* Cart */}
        <button
          type="button"
          onClick={onOpenCart}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-700 text-white font-bold transition-colors shadow-xs"
        >
          <ShoppingCart className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-tight font-extrabold">
            {isAr ? 'القائمة' : 'Panier'}
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 min-w-4 h-4 flex items-center justify-center text-[10px] font-black bg-amber-400 text-stone-950 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Maps */}
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold transition-colors"
        >
          <MapPin className="w-4 h-4 text-stone-600 mb-0.5" />
          <span className="text-[10px] leading-tight font-extrabold">
            {isAr ? 'الموقع' : 'Itinéraire'}
          </span>
        </a>
      </div>
    </div>
  );
};
