export type Language = 'fr' | 'ar';

export interface Product {
  id: string;
  name: {
    fr: string;
    ar: string;
  };
  category: string;
  categoryName: {
    fr: string;
    ar: string;
  };
  priceDetail: number; // in DZD
  priceWholesale?: number; // in DZD
  wholesaleUnit?: {
    fr: string;
    ar: string;
  };
  unit: {
    fr: string;
    ar: string;
  };
  badge?: {
    fr: string;
    ar: string;
    type: 'popular' | 'fresh' | 'wholesale' | 'promo';
  };
  description?: {
    fr: string;
    ar: string;
  };
  image: string;
  inStock: boolean;
  availableWholesale: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  type: 'detail' | 'wholesale';
}
