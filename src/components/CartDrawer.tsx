import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, Phone, ShoppingBag, ArrowRight, Store, CheckCircle } from 'lucide-react';
import { CartItem, Language } from '../types';
import { STORE_INFO } from '../data/storeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, type: 'detail' | 'wholesale', newQty: number) => void;
  onRemoveItem: (productId: string, type: 'detail' | 'wholesale') => void;
  onClearCart: () => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  language,
}) => {
  const isAr = language === 'ar';
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  // Calculate totals
  const totalAmount = items.reduce((acc, item) => {
    const unitPrice =
      item.type === 'wholesale' && item.product.priceWholesale
        ? item.product.priceWholesale
        : item.product.priceDetail;
    return acc + unitPrice * item.quantity;
  }, 0);

  // Build WhatsApp Message
  const handleSendWhatsApp = () => {
    let message = isAr
      ? `*طلب جديد — سوبيرات نسيم (سيدي مروان)*\n\n`
      : `*NOUVELLE COMMANDE — Supérette Nassim (Sidi Mérouane)*\n\n`;

    if (customerName.trim()) {
      message += isAr ? `👤 الاسم: ${customerName}\n` : `👤 Client: ${customerName}\n`;
    }
    if (customerAddress.trim()) {
      message += isAr ? `📍 العنوان / الحي: ${customerAddress}\n` : `📍 Adresse/Quartier: ${customerAddress}\n`;
    }
    message += `-------------------------\n`;
    message += isAr ? `📦 *تفاصيل المنتجات:*\n` : `📦 *Articles commandés :*\n`;

    items.forEach((item, index) => {
      const name = isAr ? item.product.name.ar : item.product.name.fr;
      const typeLabel =
        item.type === 'wholesale'
          ? (isAr ? `(جملة: ${item.product.wholesaleUnit?.ar || 'كارتون'})` : `(Gros: ${item.product.wholesaleUnit?.fr || 'Carton'})`)
          : (isAr ? `(تجزئة: ${item.product.unit.ar})` : `(Détail: ${item.product.unit.fr})`);
      const price =
        item.type === 'wholesale' && item.product.priceWholesale
          ? item.product.priceWholesale
          : item.product.priceDetail;
      const lineTotal = price * item.quantity;

      message += `${index + 1}. ${name} ${typeLabel}\n   ➔ ${item.quantity} x ${price} DA = ${lineTotal} DA\n`;
    });

    message += `-------------------------\n`;
    message += isAr
      ? `💰 *المجموع التقديري:* ${totalAmount} د.ج (DA)\n`
      : `💰 *TOTAL ESTIMÉ:* ${totalAmount} DA\n`;

    if (customerNotes.trim()) {
      message += isAr ? `📝 ملاحظة: ${customerNotes}\n` : `📝 Remarque: ${customerNotes}\n`;
    }

    message += isAr
      ? `\nيرجى تأكيد التوفر ووقت الاستلام أو التوصيل. شكراً لكم!`
      : `\nMerci de confirmer la préparation et l'horaire de retrait. Merci!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/213659927326?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className={`fixed inset-y-0 ${isAr ? 'left-0' : 'right-0'} max-w-full flex`}>
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  {isAr ? 'قائمة المشتريات / الطلب' : 'Ma Liste de Courses'}
                </h2>
                <p className="text-xs text-stone-500">
                  {items.length}{' '}
                  {isAr ? 'عناصر مختارة' : items.length > 1 ? 'articles' : 'article'}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto text-2xl">
                  🛒
                </div>
                <h3 className="font-bold text-stone-800 text-base">
                  {isAr ? 'قائمتك فارغة حالياً' : 'Votre liste est vide'}
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  {isAr
                    ? 'اختر المواد التي تحتاجها من الأقسام لتجهيز طلبيتك وإرسالها مباشرة.'
                    : 'Parcourez les rayons et ajoutez les articles nécessaires à votre quotidien ou pour vos événements.'}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs"
                >
                  {isAr ? 'تصفح السلع' : 'Commencer les courses'}
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {items.map((item) => {
                    const isWholesale = item.type === 'wholesale';
                    const unitPrice =
                      isWholesale && item.product.priceWholesale
                        ? item.product.priceWholesale
                        : item.product.priceDetail;
                    const subtotal = unitPrice * item.quantity;

                    return (
                      <div
                        key={`${item.product.id}-${item.type}`}
                        className="p-3 rounded-xl border border-stone-200 bg-stone-50/50 flex gap-3 items-center justify-between"
                      >
                        <img
                          src={item.product.image}
                          alt={isAr ? item.product.name.ar : item.product.name.fr}
                          className="w-14 h-14 object-cover rounded-lg shrink-0 border border-stone-200"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs sm:text-sm text-stone-900 truncate">
                            {isAr ? item.product.name.ar : item.product.name.fr}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                isWholesale
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {isWholesale
                                ? (isAr ? `جملة (${item.product.wholesaleUnit?.ar || 'كارتون'})` : `Gros (${item.product.wholesaleUnit?.fr || 'Carton'})`)
                                : (isAr ? `تجزئة (${item.product.unit.ar})` : `Détail (${item.product.unit.fr})`)}
                            </span>
                            <span className="text-xs text-stone-600 font-medium">
                              {unitPrice} DA
                            </span>
                          </div>

                          <div className="text-xs font-extrabold text-emerald-700 mt-1">
                            {subtotal} DA
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id, item.type)}
                            className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                            title="Supprimer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex items-center gap-1 bg-white border border-stone-200 rounded-lg p-0.5 shadow-2xs">
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.type, Math.max(1, item.quantity - 1))
                              }
                              className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.type, item.quantity + 1)
                              }
                              className="w-6 h-6 rounded flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Customer Details for smooth order preparation */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2.5">
                  <div className="text-xs font-bold text-emerald-900">
                    {isAr ? 'معلومات لتجهيز طلبك مسبقاً (اختياري) :' : 'Pour préparer votre commande (optionnel) :'}
                  </div>
                  <input
                    type="text"
                    placeholder={isAr ? 'اسمك أو لقبك' : 'Votre Nom'}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg bg-white border border-emerald-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder={isAr ? 'الحي / المكان في سيدي مروان' : 'Quartier / Repère à Sidi Mérouane'}
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg bg-white border border-emerald-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder={isAr ? 'ملاحظة إضافية (وقت الاستلام، حجم معين...)' : 'Remarque spéciale (ex: Retrait à 19h...)'}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg bg-white border border-emerald-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-xs font-semibold text-stone-500 hover:text-red-600 underline"
                  >
                    {isAr ? 'إفراغ القائمة بالكامل' : 'Vider toute la liste'}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer with Totals and Order CTAs */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-stone-600">
                  {isAr ? 'المجموع التقديري :' : 'Total estimé :'}
                </span>
                <span className="text-xl font-extrabold text-emerald-800">
                  {totalAmount} DA
                </span>
              </div>
              <p className="text-[11px] text-stone-500 leading-tight">
                {isAr
                  ? '* الدفع يتم نقداً أو عبر بريدي موب عند الاستلام داخل المتجر أو عند التوصيل.'
                  : '* Règlement sur place en espèces ou BaridiMob lors du retrait ou de la livraison.'}
              </p>

              <div className="space-y-2 pt-1">
                {/* Send via WhatsApp */}
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الطلب عبر واتساب' : 'Envoyer la commande via WhatsApp'}</span>
                </button>

                {/* Call directly */}
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{isAr ? `تأكيد بالاتصال : ${STORE_INFO.phone}` : `Appeler pour commander : ${STORE_INFO.phone}`}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
