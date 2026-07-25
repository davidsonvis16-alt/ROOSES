export interface Arrangement {
  id: string;
  name: string;
  subtitle: string;
  category: 'water-bouquets' | 'romance' | 'gift-boxes' | 'sympathy' | 'custom-celebrations';
  price: number; // in KSh
  formattedPrice: string;
  image: string;
  tag?: string; // e.g. "Bestseller", "Signature", "Studio Exclusive"
  description: string;
  stems: string[];
  hydrationType: string; // e.g., "Signature Water Packaged", "Ceramic Hydration Vase", "Luxury Velvet Box"
  careInstructions: string;
  popularAddons?: string[];
}

export interface GiftAddon {
  id: string;
  name: string;
  category: 'chocolates' | 'candles' | 'plush' | 'cards' | 'sparkling';
  price: number;
  formattedPrice: string;
  image: string;
  description: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  areaGroup: 'Embakasi & Immediate' | 'Eastlands & Environs' | 'Central & South' | 'West & Upscale Nairobi';
  fee: number;
  formattedFee: string;
  estimatedTime: string;
  isExpressAvailable: boolean;
  landmarks: string;
}

export interface CartItem {
  arrangement: Arrangement;
  selectedSize: 'Classic' | 'Grand' | 'Imperial';
  priceMultiplier: number;
  selectedAddons: GiftAddon[];
  customMessageCard?: string;
  deliveryZone?: DeliveryZone;
  recipientName?: string;
  recipientPhone?: string;
  deliveryDate?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  occasion: string;
  comment: string;
  rating: number;
  date: string;
  verifiedBuyer: boolean;
}

export interface AiRecommendationResult {
  title: string;
  flowers: string[];
  vibe: string;
  recommendedWrapping?: string;
  cardMessage: string;
  giftAddon?: string;
  priceEstimate: string;
  designerNote?: string;
}
