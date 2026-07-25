import { Arrangement, GiftAddon, DeliveryZone, Testimonial } from '../types';

export const SAMPLE_ARRANGEMENTS: Arrangement[] = [
  {
    id: 'arr-1',
    name: 'The Liebe Signature Water Bouquet',
    subtitle: 'Kept fresh in hydro-hydration wrap during delivery',
    category: 'water-bouquets',
    price: 4500,
    formattedPrice: 'KSh 4,500',
    image: '/src/assets/images/signature_water_bouquet_1784989581586.jpg',
    tag: 'Bestseller • Studio Signature',
    description: 'Our crowned creation. Hand-picked Naivasha blush garden roses, crisp white spray carnations, and silver dollar eucalyptus sealed in our proprietary water gel pack. Arrives fully hydrated with zero wilting risk.',
    stems: ['18x Blush Garden Roses', '6x White Spray Carnations', 'Silver Eucalyptus', 'Gypsophila (Baby’s Breath)'],
    hydrationType: 'Sealed Hydro-Gel Water Reservoir (Up to 48 Hours Fresh)',
    careInstructions: 'Trim stems by 1cm at 45° upon arrival and place in cool water with the provided floral food.',
    popularAddons: ['add-1', 'add-2', 'add-4']
  },
  {
    id: 'arr-2',
    name: 'Velvet Crimson Romance',
    subtitle: 'Deep crimson Kenyan roses in bespoke matte ceramic',
    category: 'romance',
    price: 5500,
    formattedPrice: 'KSh 5,500',
    image: '/src/assets/images/romance_red_roses_1784989604703.jpg',
    tag: 'Romance Favorite',
    description: '24 premium, long-stemmed velvety red roses cultivated in the Mount Kenya highlands. Elegantly styled in a nude matte ceramic vase for maximum romantic impact.',
    stems: ['24x Deep Crimson Kenyan Roses', 'Russian Olive Foliage', 'Hypericum Berries'],
    hydrationType: 'Full Hydration Ceramic Vase Included',
    careInstructions: 'Keep away from direct heat or sunlight. Top up vase water every 2 days.',
    popularAddons: ['add-1', 'add-5']
  },
  {
    id: 'arr-3',
    name: 'Opulent Blush & Velvet Gift Box',
    subtitle: 'Floral arrangement paired with artisanal candle & luxury box',
    category: 'gift-boxes',
    price: 6800,
    formattedPrice: 'KSh 6,800',
    image: '/src/assets/images/luxury_gift_box_1784989593332.jpg',
    tag: 'All-In-One Gift Experience',
    description: 'An unforgettable luxury keepsake. A handcrafted cylindrical velvet gift box overflowing with pastel pink roses, paired with a handcrafted soy scented candle and space for a handwritten memory note.',
    stems: ['15x Pastel Pink Garden Roses', 'White Hydrangeas', 'Dusty Miller Greens'],
    hydrationType: 'Floral Foam Reservoir in Water-tight Box Unit',
    careInstructions: 'Add 1/2 cup of water directly to the foam center every morning.',
    popularAddons: ['add-1', 'add-3', 'add-4']
  },
  {
    id: 'arr-4',
    name: 'Eternal Pastel Hydrangea Water Wrap',
    subtitle: 'Dreamy sky blues and soft creams in signature water packaging',
    category: 'water-bouquets',
    price: 4800,
    formattedPrice: 'KSh 4,800',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop',
    tag: 'Trending Design',
    description: 'A ethereal blend of cloud-like hydrangeas, cream garden roses, and delicate accent foliage. Specially hydro-wrapped for seamless transit across Nairobi.',
    stems: ['3x Premium Jumbo Blue Hydrangeas', '10x Ivory Cream Roses', 'Eucalyptus Sprigs'],
    hydrationType: 'Sealed Hydro-Gel Water Reservoir',
    careInstructions: 'Submerge hydrangea heads briefly in cool water if petals look thirsty.',
    popularAddons: ['add-2', 'add-4']
  },
  {
    id: 'arr-5',
    name: 'Sunset Glow Celebration',
    subtitle: 'Vibrant coral roses, lilies & golden foliage',
    category: 'custom-celebrations',
    price: 4200,
    formattedPrice: 'KSh 4,200',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop',
    tag: 'Birthday & Joy',
    description: 'Bursting with energy and warmth. Bright coral garden roses paired with fragrant Asiatic lilies and golden accents. Perfect for promotions, birthdays, and heartfelt congratulations.',
    stems: ['12x Coral Sunset Roses', '4x Asiatic Yellow Lilies', 'Solidago & Greens'],
    hydrationType: 'Water-wrapped Stem Base',
    careInstructions: 'Remove lower leaves below water level to keep vase water crystal clear.',
    popularAddons: ['add-1', 'add-3']
  },
  {
    id: 'arr-6',
    name: 'Gentle Care & Solace White Lilies',
    subtitle: 'Pure white Casablanca lilies & ivory garden roses',
    category: 'sympathy',
    price: 5200,
    formattedPrice: 'KSh 5,200',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=800&auto=format&fit=crop',
    tag: 'Thoughtful Solace',
    description: 'A dignified, peaceful arrangement crafted to express deepest sympathy, respect, and comfort during delicate moments.',
    stems: ['6x Fragrant Casablanca White Lilies', '12x Pure Ivory Roses', 'Monstera & Fern Foliage'],
    hydrationType: 'Hydration Box Base',
    careInstructions: 'Pinch off lily anthers as flowers bloom to prevent pollen stains.',
    popularAddons: ['add-4']
  }
];

export const GIFT_ADDONS: GiftAddon[] = [
  {
    id: 'add-1',
    name: 'Lindt Swiss Classic Chocolates (100g)',
    category: 'chocolates',
    price: 1200,
    formattedPrice: 'KSh 1,200',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?q=80&w=600&auto=format&fit=crop',
    description: 'Decadent Swiss milk chocolate infused with smooth hazelnut praline.'
  },
  {
    id: 'add-2',
    name: 'Artisanal Soy Wax Scented Candle',
    category: 'candles',
    price: 1500,
    formattedPrice: 'KSh 1,500',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop',
    description: 'Hand-poured in Nairobi with French Vanilla & Wild Rose essential oils (40hr burn).'
  },
  {
    id: 'add-3',
    name: 'Plush Velvet Keepsake Teddy Bear',
    category: 'plush',
    price: 1800,
    formattedPrice: 'KSh 1,800',
    image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600&auto=format&fit=crop',
    description: 'Ultra-soft premium cuddle teddy bear with Liebe ribbon.'
  },
  {
    id: 'add-4',
    name: 'Handwritten Calligraphy Card Note',
    category: 'cards',
    price: 300,
    formattedPrice: 'KSh 300',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop',
    description: 'Gold-embossed textured card handwritten by our resident calligrapher.'
  },
  {
    id: 'add-5',
    name: 'Sparkling Non-Alcoholic Rose Celebration',
    category: 'sparkling',
    price: 2200,
    formattedPrice: 'KSh 2,200',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop',
    description: 'Chilled premium sparkling rose nectar with fine bubbles for toasts.'
  }
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'zone-1',
    name: 'Embakasi Road & Immediate Environs',
    areaGroup: 'Embakasi & Immediate',
    fee: 200,
    formattedFee: 'KSh 200',
    estimatedTime: '30 - 45 mins',
    isExpressAvailable: true,
    landmarks: 'Opp. Pride Center, Next to Quickmart, Tassia, Fedha, Pipeline, Avenue Park'
  },
  {
    id: 'zone-2',
    name: 'Nyayo Estate (Phases 1 - 6)',
    areaGroup: 'Embakasi & Immediate',
    fee: 250,
    formattedFee: 'KSh 250',
    estimatedTime: '30 - 45 mins',
    isExpressAvailable: true,
    landmarks: 'Gate B, Gate D, Commercial Center, Baraka Estate'
  },
  {
    id: 'zone-3',
    name: 'Utawala, Mihang’o & Shooters',
    areaGroup: 'Eastlands & Environs',
    fee: 350,
    formattedFee: 'KSh 350',
    estimatedTime: '45 - 60 mins',
    isExpressAvailable: true,
    landmarks: 'GSU Training School, Zebra, Benedicta, Eastern Bypass Junction'
  },
  {
    id: 'zone-4',
    name: 'Donholm, Greenfields & Savannah',
    areaGroup: 'Eastlands & Environs',
    fee: 300,
    formattedFee: 'KSh 300',
    estimatedTime: '40 - 50 mins',
    isExpressAvailable: true,
    landmarks: 'Donholm Shopping Center, Jacaranda, Caltex, Greenspan Mall'
  },
  {
    id: 'zone-5',
    name: 'South B, South C & Imara Daima',
    areaGroup: 'Central & South',
    fee: 400,
    formattedFee: 'KSh 400',
    estimatedTime: '45 - 60 mins',
    isExpressAvailable: true,
    landmarks: 'Mombasa Road, Capital Centre, Nextgen Mall, Eka Hotel'
  },
  {
    id: 'zone-6',
    name: 'Nairobi CBD & Upper Hill',
    areaGroup: 'Central & South',
    fee: 500,
    formattedFee: 'KSh 500',
    estimatedTime: '60 - 90 mins',
    isExpressAvailable: true,
    landmarks: 'Kenyatta Avenue, City Hall, KICC, Upper Hill Medical District'
  },
  {
    id: 'zone-7',
    name: 'Kilimani, Lavington, Kileleshwa',
    areaGroup: 'West & Upscale Nairobi',
    fee: 600,
    formattedFee: 'KSh 600',
    estimatedTime: '60 - 90 mins',
    isExpressAvailable: true,
    landmarks: 'Yaya Centre, Valley Arcade, Lavington Mall, Kasuku Centre'
  },
  {
    id: 'zone-8',
    name: 'Westlands, Parklands & Gigiri',
    areaGroup: 'West & Upscale Nairobi',
    fee: 650,
    formattedFee: 'KSh 650',
    estimatedTime: '60 - 90 mins',
    isExpressAvailable: false,
    landmarks: 'Sarit Centre, Westgate, UN Avenue, Village Market'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Wanjiru Mukami',
    location: 'Nyayo Estate Phase 4',
    occasion: '10th Wedding Anniversary',
    comment: 'The water bouquet was a game changer! Delivered directly to our Nyayo house in 35 minutes. My husband said the roses smelled like a fresh Naivasha morning. Still blooming beautifully after 5 days.',
    rating: 5,
    date: '3 days ago',
    verifiedBuyer: true
  },
  {
    id: 'test-2',
    author: 'David Ochieng',
    location: 'Kilimani, Nairobi',
    occasion: 'Surprise Birthday',
    comment: 'I ordered via WhatsApp from my office in Westlands for delivery in Embakasi. The handwritten card and Lindt chocolates paired with the red roses were styled so elegantly. Unmatched class!',
    rating: 5,
    date: '1 week ago',
    verifiedBuyer: true
  },
  {
    id: 'test-3',
    author: 'Aminah Hassan',
    location: 'Utawala, Benedicta',
    occasion: 'Apology & Peace Flower',
    comment: 'Liebe & Roses really saved my relationship. The team was so compassionate on WhatsApp and helped me select the Velvet Crimson. Same-day delivery was right on time.',
    rating: 5,
    date: '2 weeks ago',
    verifiedBuyer: true
  }
];

export const WHATSAPP_NUMBER = '254712345678'; // Official studio WhatsApp
export const STUDIO_LOCATION = {
  address: 'Embakasi Road, Opposite Pride Center, Next to Quickmart Supermarket',
  neighborhood: 'Embakasi, Nairobi, Kenya',
  hours: 'Monday – Saturday: 7:30 AM – 8:00 PM | Sunday: 9:00 AM – 6:00 PM',
  mapQuery: 'Embakasi+Road+Pride+Center+Nairobi',
  phone: '+254 712 345 678',
  email: 'hello@liebeandroses.co.ke'
};
