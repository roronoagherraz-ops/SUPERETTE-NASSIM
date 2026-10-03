/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WholesaleSection } from './components/WholesaleSection';
import { AboutAndServices } from './components/AboutAndServices';
import { LocationSection } from './components/LocationSection';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickMobileBar } from './components/QuickMobileBar';
import { CartItem, Product, Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('nassim_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('nassim_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Sync HTML lang and dir attribute
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Cart total items count
  const cartTotalCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Lookup map of product counts in cart
  const cartItemsCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((item) => {
      map[item.product.id] = (map[item.product.id] || 0) + item.quantity;
    });
    return map;
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity = 1, type: 'detail' | 'wholesale' = 'detail') => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.type === type
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      } else {
        return [...prev, { product, quantity, type }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, type: 'detail' | 'wholesale', newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, type);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.type === type
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, type: 'detail' | 'wholesale') => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.type === type))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToRayons = () => {
    const el = document.getElementById('rayons');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-stone-50 flex flex-col font-sans ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onExploreClick={scrollToRayons}
        />

        {/* About & Core Services */}
        <AboutAndServices language={language} />

        {/* Wholesale Dedicated Section */}
        <WholesaleSection
          language={language}
          onBrowseWholesale={scrollToRayons}
        />

        {/* Interactive Rayons & Product Catalog */}
        <ProductCatalog
          language={language}
          onAddToCart={handleAddToCart}
          cartItemsCount={cartItemsCountMap}
        />

        {/* Location & Contact & Map */}
        <LocationSection language={language} />

        {/* Testimonials & Frequently Asked Questions */}
        <TestimonialsFAQ language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        language={language}
      />

      {/* Sticky Mobile Floating Action Bar */}
      <QuickMobileBar
        language={language}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
