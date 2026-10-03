import { Product } from '../types';

export const STORE_INFO = {
  name: 'Supérette Nassim',
  nameArabic: 'سوبيرات نسيم',
  subtitle: {
    fr: 'Alimentation Générale — Gros & Détail',
    ar: 'مواد غذائية عامة — بالجملة والتجزئة'
  },
  phone: '0659 92 73 26',
  phoneFormatted: '0659 92 73 26',
  phoneInternational: '+213659927326',
  whatsappUrl: 'https://wa.me/213659927326',
  address: {
    fr: 'Sidi Mérouane, En face de la Mosquée Taqwa (Wilaya de Mila)',
    ar: 'سيدي مروان، مقابل مسجد التقوى (ولاية ميلة)'
  },
  landmark: {
    fr: 'En face de la Mosquée Taqwa',
    ar: 'مقابل مسجد التقوى'
  },
  plusCode: 'G796+W3C, Sidi Merouane',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=G796%2BW3C,+Sidi+Merouane',
  googleMapsEmbed: 'https://maps.google.com/maps?q=G796%2BW3C,%20Sidi%20Merouane&t=&z=16&ie=UTF8&iwloc=&output=embed',
  hours: {
    fr: 'Ouvert 24h/24 & 7j/7 (Non-stop)',
    ar: 'مفتوح 24 ساعة / 24 و 7 أيام / 7 (بدون انقطاع)'
  }
};

export const CATEGORIES = [
  { id: 'all', name: { fr: 'Tous les rayons', ar: 'جميع الأقسام' }, icon: 'ShoppingBag' },
  { id: 'epicerie', name: { fr: 'Épicerie Générale', ar: 'البقالة والمؤونة' }, icon: 'Utensils' },
  { id: 'frais', name: { fr: 'Produits Frais & Laitiers', ar: 'الألبان والأجبان' }, icon: 'Milk' },
  { id: 'boissons', name: { fr: 'Boissons & Eaux', ar: 'المشروبات والمياه' }, icon: 'Coffee' },
  { id: 'gros', name: { fr: 'Vente en Gros & Packs', ar: 'عروض الجملة والكارتون' }, icon: 'Boxes' },
  { id: 'biscuits', name: { fr: 'Biscuits & Confiserie', ar: 'البسكويت والحلويات' }, icon: 'Cookie' },
  { id: 'hygiene', name: { fr: 'Hygiène & Entretien', ar: 'مواد التنظيف والمنزل' }, icon: 'Sparkles' },
];

export const PRODUCTS: Product[] = [
  // Épicerie
  {
    id: 'p-1',
    name: {
      fr: 'Huile de Table Elio 5 Litres',
      ar: 'زيت المائدة إيليو 5 لتر'
    },
    category: 'epicerie',
    categoryName: { fr: 'Épicerie', ar: 'البقالة' },
    priceDetail: 650,
    priceWholesale: 620,
    wholesaleUnit: { fr: 'Carton (4 bidons)', ar: 'كارتون (4 دلاء)' },
    unit: { fr: 'bidon 5L', ar: 'دلو 5 لتر' },
    badge: { fr: 'Essentiel', ar: 'أساسي', type: 'popular' },
    description: {
      fr: 'Huile 100% végétale raffinée pour friture et assaisonnement.',
      ar: 'زيت نباتي مكرر 100% للطهي والقلي.'
    },
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-2',
    name: {
      fr: 'Semoule Extra Fine Sim 10 Kg',
      ar: 'دقيق سميد ممتاز سيم 10 كغ'
    },
    category: 'epicerie',
    categoryName: { fr: 'Épicerie', ar: 'البقالة' },
    priceDetail: 550,
    priceWholesale: 510,
    wholesaleUnit: { fr: 'Sac 25kg / Lot 10 sacs', ar: 'كيس 25كغ أو حزمة' },
    unit: { fr: 'sac 10kg', ar: 'كيس 10 كغ' },
    badge: { fr: 'Qualité Supérieure', ar: 'جودة ممتازة', type: 'popular' },
    description: {
      fr: 'Idéale pour la confection du pain traditionnel, galette (kesra) et pâtes.',
      ar: 'مثالية لإعداد الخبز التقليدي والكسرة والمخبوزات.'
    },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-3',
    name: {
      fr: 'Café Moulu Familia 250g',
      ar: 'قهوة مطحونة فاميليا 250 غ'
    },
    category: 'epicerie',
    categoryName: { fr: 'Épicerie', ar: 'البقالة' },
    priceDetail: 250,
    priceWholesale: 235,
    wholesaleUnit: { fr: 'Carton (24 paquets)', ar: 'كارتون (24 علبة)' },
    unit: { fr: 'paquet 250g', ar: 'علبة 250 غ' },
    badge: { fr: 'Très demandé', ar: 'طلب كبير', type: 'popular' },
    description: {
      fr: 'Arôme corsé et riche, le café traditionnel préféré des foyers algériens.',
      ar: 'نكهة أصيلة وقوية، القهوة المفضلة للعائلات الجزائرية.'
    },
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-4',
    name: {
      fr: 'Pâtes Benhamadi / Safina 500g',
      ar: 'معكرونة بن حمادي / سفينة 500غ'
    },
    category: 'epicerie',
    categoryName: { fr: 'Épicerie', ar: 'البقالة' },
    priceDetail: 85,
    priceWholesale: 75,
    wholesaleUnit: { fr: 'Carton (20 sachets)', ar: 'كارتون (20 كيس)' },
    unit: { fr: 'sachet 500g', ar: 'كيس 500 غ' },
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-5',
    name: {
      fr: 'Concentré de Tomate Amor Benamor 800g',
      ar: 'طماطم مصبرة عمور بن عمر 800غ'
    },
    category: 'epicerie',
    categoryName: { fr: 'Épicerie', ar: 'البقالة' },
    priceDetail: 280,
    priceWholesale: 260,
    wholesaleUnit: { fr: 'Carton (12 boîtes)', ar: 'كارتون (12 علبة)' },
    unit: { fr: 'boîte 800g', ar: 'علبة 800 غ' },
    badge: { fr: 'Promo', ar: 'تخفيض', type: 'promo' },
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },

  // Frais & Laitiers
  {
    id: 'p-6',
    name: {
      fr: 'Lait Entier Pasteurisé Soummam / Candia 1L',
      ar: 'حليب مبستر صومام / كانديا 1 لتر'
    },
    category: 'frais',
    categoryName: { fr: 'Frais & Laitiers', ar: 'الألبان والأجبان' },
    priceDetail: 110,
    priceWholesale: 100,
    wholesaleUnit: { fr: 'Fardeau (12 briques)', ar: 'فاردو (12 علبة)' },
    unit: { fr: 'brique 1L', ar: 'علبة 1 لتر' },
    badge: { fr: 'Frais du jour', ar: 'طازج يومياً', type: 'fresh' },
    description: {
      fr: 'Arrivage quotidien chaque matin, stock toujours garanti 24h/24.',
      ar: 'توزيع يومي متجدد كل صباح، متوفر دائماً 24/24.'
    },
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-7',
    name: {
      fr: 'Fromage Fondu Tartino / Berbère (24 portions)',
      ar: 'جبن تارتينو / البربر (24 قطعة)'
    },
    category: 'frais',
    categoryName: { fr: 'Frais & Laitiers', ar: 'الألبان والأجبان' },
    priceDetail: 340,
    priceWholesale: 315,
    wholesaleUnit: { fr: 'Carton (16 boîtes)', ar: 'كارتون (16 علبة)' },
    unit: { fr: 'boîte 24p', ar: 'علبة 24 قطعة' },
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-8',
    name: {
      fr: 'Yaourt aux Fruits Soummam (Pack de 8)',
      ar: 'ياغورت بالفواكه صومام (حزمة 8 علب)'
    },
    category: 'frais',
    categoryName: { fr: 'Frais & Laitiers', ar: 'الألبان والأجبان' },
    priceDetail: 200,
    priceWholesale: 185,
    wholesaleUnit: { fr: 'Carton (48 pots)', ar: 'كارتون (48 علبة)' },
    unit: { fr: 'pack 8 pots', ar: 'حزمة 8 علب' },
    badge: { fr: 'Frais', ar: 'طازج', type: 'fresh' },
    image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },

  // Boissons & Eaux
  {
    id: 'p-9',
    name: {
      fr: 'Pack Eau Minérale Lalla Khedidja (6 x 1.5L)',
      ar: 'فاردو ماء معدني لالة خديجة (6 × 1.5 لتر)'
    },
    category: 'boissons',
    categoryName: { fr: 'Boissons', ar: 'المشروبات' },
    priceDetail: 240,
    priceWholesale: 210,
    wholesaleUnit: { fr: 'Palette / À partir de 10 fardeaux', ar: 'باليت / ابتداء من 10 فاردوات' },
    unit: { fr: 'pack 6x1.5L', ar: 'حزمة 6 قارورات' },
    badge: { fr: 'Prix Gros Avantageux', ar: 'سعر جملة خاص', type: 'wholesale' },
    description: {
      fr: 'Eau pure naturelle de source, disponible au pack et en grande quantité pour événements et commerçants.',
      ar: 'مياه معدنية طبيعية نقية، متوفرة بالحزمة وبالجملة للمناسبات والمحلات.'
    },
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-10',
    name: {
      fr: 'Hamoud Boualem Selecto / Blanc 2 Litres',
      ar: 'حمـود بوعلام سيليكتو / أبيض 2 لتر'
    },
    category: 'boissons',
    categoryName: { fr: 'Boissons', ar: 'المشروبات' },
    priceDetail: 130,
    priceWholesale: 115,
    wholesaleUnit: { fr: 'Fardeau (6 bouteilles)', ar: 'فاردو (6 قارورات)' },
    unit: { fr: 'bouteille 2L', ar: 'قارورة 2 لتر' },
    badge: { fr: 'Incontournable', ar: 'المشروب الوطني', type: 'popular' },
    description: {
      fr: 'Le goût légendaire algérien, toujours frais dans nos frigos 24h/24.',
      ar: 'المذاق الجزائري الأصيل، متوفر دائماً بارد في ثلاجاتنا 24/24.'
    },
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-11',
    name: {
      fr: 'Jus Ifri Cocktail / Orange 1.5L',
      ar: 'عصير إيفري كوكتيل / برتقال 1.5 لتر'
    },
    category: 'boissons',
    categoryName: { fr: 'Boissons', ar: 'المشروبات' },
    priceDetail: 140,
    priceWholesale: 125,
    wholesaleUnit: { fr: 'Fardeau (6 bouteilles)', ar: 'فاردو (6 قارورات)' },
    unit: { fr: 'bouteille 1.5L', ar: 'قارورة 1.5 لتر' },
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },

  // Biscuits & Confiserie
  {
    id: 'p-12',
    name: {
      fr: 'Biscuits Bimo Traditionnel (Pack de 6)',
      ar: 'بسكويت بيمو الأصيل (حزمة 6 علب)'
    },
    category: 'biscuits',
    categoryName: { fr: 'Biscuiterie', ar: 'البسكويت' },
    priceDetail: 150,
    priceWholesale: 135,
    wholesaleUnit: { fr: 'Carton (24 paquets)', ar: 'كارتون (24 علبة)' },
    unit: { fr: 'lot 6 paquets', ar: 'حزمة 6 علب' },
    badge: { fr: 'Classique', ar: 'كلاسيكي', type: 'popular' },
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-13',
    name: {
      fr: 'Chocolat à Tartiner Maxon 750g',
      ar: 'شوكولاتة الطلي ماكسون 750غ'
    },
    category: 'biscuits',
    categoryName: { fr: 'Biscuiterie', ar: 'البسكويت' },
    priceDetail: 480,
    priceWholesale: 440,
    wholesaleUnit: { fr: 'Carton (12 pots)', ar: 'كارتون (12 إناء)' },
    unit: { fr: 'pot 750g', ar: 'علبة 750 غ' },
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },

  // Hygiène & Entretien
  {
    id: 'p-14',
    name: {
      fr: 'Lessive Poudre Omo / Ariel 5 Kg Automatique',
      ar: 'مسحوق غسيل أومو / أريال 5 كغ للغسالات'
    },
    category: 'hygiene',
    categoryName: { fr: 'Hygiène', ar: 'التنظيف' },
    priceDetail: 1350,
    priceWholesale: 1250,
    wholesaleUnit: { fr: 'À partir de 3 barils/sacs', ar: 'ابتداء من 3 أكياس' },
    unit: { fr: 'sac 5kg', ar: 'كيس 5 كغ' },
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },
  {
    id: 'p-15',
    name: {
      fr: 'Eau de Javel Bref Extra 2 Litres',
      ar: 'ماء جافيل بريف المركز 2 لتر'
    },
    category: 'hygiene',
    categoryName: { fr: 'Hygiène', ar: 'التنظيف' },
    priceDetail: 160,
    priceWholesale: 140,
    wholesaleUnit: { fr: 'Carton (12 flacons)', ar: 'كارتون (12 قارورة)' },
    unit: { fr: 'bidon 2L', ar: 'قارورة 2 لتر' },
    image: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  },

  // Gros Spécifique
  {
    id: 'p-16',
    name: {
      fr: 'Pack Grossiste Eau Minérale (15 Fardeaux de 6x1.5L)',
      ar: 'عرض الجملة: ماء معدني (15 فاردو 6×1.5 لتر)'
    },
    category: 'gros',
    categoryName: { fr: 'Vente en Gros', ar: 'بيع الجملة' },
    priceDetail: 3600,
    priceWholesale: 3000,
    wholesaleUnit: { fr: 'Lot de 15 fardeaux', ar: 'حزمة 15 فاردو' },
    unit: { fr: 'lot 15 fardeaux (90 bouteilles)', ar: '15 فاردو (90 قارورة)' },
    badge: { fr: 'Offre Spéciale Gros', ar: 'عرض تجاري خاص', type: 'wholesale' },
    description: {
      fr: 'Idéal pour cafés, restaurants, chantiers, mosquées, cortèges et fêtes familiales.',
      ar: 'عرض مثالي للمقاهي، المطاعم، الورشات، المساجد، والأعراس والمناسبات.'
    },
    image: 'https://images.unsplash.com/photo-1559839914-ba2ae647c050?w=500&auto=format&fit=crop&q=80',
    inStock: true,
    availableWholesale: true,
  }
];

export const TESTIMONIALS = [
  {
    name: 'Amine Kaddour',
    role: { fr: 'Habitant du quartier - Sidi Mérouane', ar: 'ساكن بالحي - سيدي مروان' },
    comment: {
      fr: "Un grand merci à Nassim ! Avoir une supérette ouverte 24h/24 juste en face de la Mosquée Taqwa est une bénédiction. Toujours disponible même à 3h du matin pour les urgences.",
      ar: "بارك الله في الأخ نسيم، متجر 24/24 مقابل مسجد التقوى نعمة كبيرة لسكان سيدي مروان. دائماً متوفر كل ما نحتاجه حتى في أوقات متأخرة من الليل."
    },
    rating: 5,
  },
  {
    name: 'Mourad Benyahia',
    role: { fr: 'Gérant de cafétéria & Commerçant', ar: 'صاحب مقهى وتاجر' },
    comment: {
      fr: "J'achète régulièrement le lait, le sucre et les boissons en gros chez Supérette Nassim. Les prix au carton sont très compétitifs et le service est ultra rapide !",
      ar: "أشتري بانتظام الحليب، السكر والمشروبات بالجملة من سوبيرات نسيم. أسعار الكارتون ممتازة والتعامل في قمة الاحترام والسرعة."
    },
    rating: 5,
  },
  {
    name: 'Fatima Z.',
    role: { fr: 'Mère de famille', ar: 'ربة منزل' },
    comment: {
      fr: "Rayons toujours bien rangés, propreté irréprochable et on trouve tous les produits de consommation courante. Le personnel est très poli et serviable.",
      ar: "المحل منظم ونظيف جداً وكل السلع الأساسية متوفرة دائماً. المعاملة طيبة جداً من القائمين على المحل."
    },
    rating: 5,
  }
];

export const FAQ_ITEMS = [
  {
    question: {
      fr: "La supérette est-elle réellement ouverte 24h/24 et 7j/7 ?",
      ar: "هل المحل مفتوح فعلاً 24 ساعة / 24 و 7 أيام في الأسبوع؟"
    },
    answer: {
      fr: "Oui, absolument ! Supérette Nassim assure un service continu jour et nuit, 365 jours par an, y compris les vendredis et les jours de fête.",
      ar: "نعم بكل تأكيد! سوبيرات نسيم تقدم خدمة متواصلة ليلاً ونهاراً، طوال أيام السنة بما في ذلك أيام الجمعة والأعياد."
    }
  },
  {
    question: {
      fr: "Faites-vous la vente en gros pour les commerçants ou les fêtes ?",
      ar: "هل توفرون البيع بالجملة للتجار والمقاهي والأعراس؟"
    },
    answer: {
      fr: "Oui ! Nous fournissons les détaillants, cafés, réceptions et événements en gros (fardeaux d'eau, boissons, cartons d'huile, sucre, détergents...). Appelez-nous au 0659 92 73 26 pour préparer votre commande.",
      ar: "نعم نوفر البيع بالجملة للتجار، المقاهي، المناسبات والأعراس (فاردوات ماء ومشروبات، كارتونات زيت، سكر، مواد تنظيف...). اتصلوا بنا على 0659 92 73 26 لتحضير طلبكم."
    }
  },
  {
    question: {
      fr: "Où se situe exactement la supérette à Sidi Mérouane ?",
      ar: "أين تقع السوبيرات بالتحديد في سيدي مروان؟"
    },
    answer: {
      fr: "Nous sommes idéalement situés juste en face de la Mosquée Taqwa (مسجد التقوى) à Sidi Mérouane. Le stationnement est facile devant le magasin.",
      ar: "موقعنا متميز جداً مباشرة مقابل مسجد التقوى بسيدي مروان (ولاية ميلة) مع توفر أماكن مريحة لركن السيارات."
    }
  },
  {
    question: {
      fr: "Puis-je commander par téléphone ou par WhatsApp ?",
      ar: "هل يمكنني الطلب مسبقاً عبر الهاتف أو الواتساب؟"
    },
    answer: {
      fr: "Tout à fait ! Vous pouvez constituer votre liste de courses directement sur notre site puis cliquer sur 'Commander sur WhatsApp' ou nous téléphoner au 0659 92 73 26 pour que nous préparions tout avant votre passage.",
      ar: "نعم بالتأكيد! يمكنك تجهيز قائمة مشترياتك مباشرة من الموقع ثم الضغط على 'إرسال عبر واتساب' أو الاتصال على 0659 92 73 26 لنجهز طلبك قبل وصولك."
    }
  }
];
