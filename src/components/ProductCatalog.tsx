import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, Check, ShoppingCart, Sparkles, Tag, Package, Filter } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/storeData';
import { Product, Language } from '../types';

interface ProductCatalogProps {
  language: Language;
  onAddToCart: (product: Product, quantity: number, type: 'detail' | 'wholesale') => void;
  cartItemsCount: Record<string, number>;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  language,
  onAddToCart,
  cartItemsCount,
}) => {
  const isAr = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterMode, setFilterMode] = useState<'all' | 'wholesale' | 'promo'>('all');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Filter products based on search, category and filterMode
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Filter mode match
      if (filterMode === 'wholesale' && !item.availableWholesale) {
        return false;
      }
      if (filterMode === 'promo' && item.badge?.type !== 'promo') {
        return false;
      }

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchFr = item.name.fr.toLowerCase().includes(query) || item.categoryName.fr.toLowerCase().includes(query);
        const matchAr = item.name.ar.toLowerCase().includes(query) || item.categoryName.ar.toLowerCase().includes(query);
        return matchFr || matchAr;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, filterMode]);

  const handleAdd = (product: Product, type: 'detail' | 'wholesale') => {
    onAddToCart(product, 1, type);
    setJustAddedId(`${product.id}-${type}`);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section id="rayons" className="py-12 sm:py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-2">
            {isAr ? 'كتالوج السلع والأسعار' : 'Catalogue & Rayons'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {isAr ? 'تصفح منتجاتنا المتوفرة في المتجر' : 'Nos Produits Disponibles en Magasin'}
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            {isAr
              ? 'اختر مشترياتك للتجزئة أو بالجملة وأضفها إلى قائمتك لطلبها وتجهيزها مباشرة عبر واتساب أو الهاتف.'
              : 'Composez votre commande pour vos courses quotidiennes ou en gros pour votre commerce / événement.'}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-stone-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${isAr ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن زيت، سميد، حليب، قهوة...' : 'Rechercher huile, semoule, lait, café...'}
                className={`w-full py-2.5 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50/50 ${
                  isAr ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={`absolute top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400 hover:text-stone-700 ${
                    isAr ? 'left-3' : 'right-3'
                  }`}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filters */}
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <button
                type="button"
                onClick={() => setFilterMode('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  filterMode === 'all'
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {isAr ? 'الكل' : 'Tous'}
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('wholesale')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  filterMode === 'wholesale'
                    ? 'bg-amber-500 text-stone-950'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                {isAr ? 'متوفر بالجملة' : 'Vente en Gros'}
              </button>
              <button
                type="button"
                onClick={() => setFilterMode('promo')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  filterMode === 'promo'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                {isAr ? 'تخفيضات' : 'Promos'}
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-stone-100 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <span>{isAr ? cat.name.ar : cat.name.fr}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-md mx-auto">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-base font-bold text-stone-800 mb-1">
              {isAr ? 'لم نتمكن من العثور على أي منتج' : 'Aucun produit trouvé'}
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              {isAr
                ? 'جرب البحث بكلمة أخرى أو تصفح الأقسام الأخرى.'
                : 'Essayez un autre mot-clé ou réinitialisez les filtres.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setFilterMode('all');
              }}
              className="px-4 py-2 text-xs font-bold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              {isAr ? 'إعادة ضبط الفلاتر' : 'Réinitialiser les filtres'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const inCartCount = cartItemsCount[product.id] || 0;
              const justAddedDetail = justAddedId === `${product.id}-detail`;
              const justAddedWholesale = justAddedId === `${product.id}-wholesale`;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Badges Container */}
                    <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={isAr ? product.name.ar : product.name.fr}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Stock & Badge Overlays */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
                        {product.badge ? (
                          <span
                            className={`px-2 py-0.5 rounded-md text-[11px] font-bold shadow-xs ${
                              product.badge.type === 'popular'
                                ? 'bg-amber-400 text-stone-950'
                                : product.badge.type === 'fresh'
                                ? 'bg-emerald-500 text-white'
                                : product.badge.type === 'promo'
                                ? 'bg-red-500 text-white'
                                : 'bg-blue-600 text-white'
                            }`}
                          >
                            {isAr ? product.badge.ar : product.badge.fr}
                          </span>
                        ) : <span />}

                        {inCartCount > 0 && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-xs">
                            {inCartCount} {isAr ? 'في القائمة' : 'sélectionné'}
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-stone-900/80 text-white backdrop-blur-xs">
                          {isAr ? product.categoryName.ar : product.categoryName.fr}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-stone-900 text-base leading-snug mb-1">
                        {isAr ? product.name.ar : product.name.fr}
                      </h3>
                      {product.description && (
                        <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                          {isAr ? product.description.ar : product.description.fr}
                        </p>
                      )}

                      {/* Prices breakdown */}
                      <div className="mt-3 p-2.5 rounded-xl bg-stone-50 border border-stone-100 space-y-1.5 text-xs">
                        {/* Detail Price */}
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-stone-500">
                            {isAr ? 'سعر التجزئة:' : 'Prix au détail :'}
                          </span>
                          <span className="text-emerald-700 text-sm font-extrabold">
                            {product.priceDetail} DA{' '}
                            <span className="text-[10px] font-normal text-stone-500">
                              / {isAr ? product.unit.ar : product.unit.fr}
                            </span>
                          </span>
                        </div>

                        {/* Wholesale Price if available */}
                        {product.availableWholesale && product.priceWholesale && (
                          <div className="flex items-center justify-between text-amber-900 font-semibold border-t border-stone-200/60 pt-1">
                            <span className="text-stone-500 text-[11px]">
                              {isAr ? 'سعر الجملة:' : 'Tarif gros :'}
                            </span>
                            <span className="font-bold text-amber-700 text-xs">
                              {product.priceWholesale} DA{' '}
                              <span className="text-[10px] font-normal text-stone-500">
                                ({isAr ? product.wholesaleUnit?.ar : product.wholesaleUnit?.fr})
                              </span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="p-4 pt-0 space-y-2">
                    {/* Add Detail */}
                    <button
                      type="button"
                      onClick={() => handleAdd(product, 'detail')}
                      className={`w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                        justAddedDetail
                          ? 'bg-emerald-600 text-white scale-[1.02]'
                          : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      }`}
                    >
                      {justAddedDetail ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{isAr ? 'تمت الإضافة !' : 'Ajouté !'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>{isAr ? 'إضافة للتجزئة' : 'Ajouter au Panier (Détail)'}</span>
                        </>
                      )}
                    </button>

                    {/* Add Wholesale if available */}
                    {product.availableWholesale && (
                      <button
                        type="button"
                        onClick={() => handleAdd(product, 'wholesale')}
                        className={`w-full py-1.5 px-3 rounded-xl font-semibold text-[11px] flex items-center justify-center gap-1.5 border transition-all ${
                          justAddedWholesale
                            ? 'bg-amber-400 text-stone-900 border-amber-500'
                            : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                        }`}
                      >
                        <Package className="w-3.5 h-3.5 text-amber-700" />
                        <span>{isAr ? 'إضافة كارتون / جملة' : 'Ajouter en Gros'}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
