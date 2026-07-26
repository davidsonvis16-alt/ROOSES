import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SignatureCollections } from './components/SignatureCollections';
import { LiebeExperience } from './components/LiebeExperience';
import { CustomEmotionBuilder } from './components/CustomEmotionBuilder';
import { DeliveryZoneChecker } from './components/DeliveryZoneChecker';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutStudioSection } from './components/AboutStudioSection';
import { FooterSection } from './components/FooterSection';
import { FeaturedArrangementsModal } from './components/FeaturedArrangementsModal';

import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsAppBar } from './components/FloatingWhatsAppBar';
import { Arrangement, GiftAddon, CartItem } from './types';

export default function App() {
  const [selectedArrangement, setSelectedArrangement] = useState<Arrangement | null>(null);
  const [isAiConciergeOpen, setIsAiConciergeOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (
    arrangement: Arrangement,
    selectedAddons: GiftAddon[] = [],
    size: 'Classic' | 'Grand' | 'Imperial' = 'Classic'
  ) => {
    const priceMultiplier = size === 'Classic' ? 1 : size === 'Grand' ? 1.5 : 2.1;
    const newItem: CartItem = {
      arrangement,
      selectedSize: size,
      priceMultiplier,
      selectedAddons,
    };

    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#8C2D38] selection:text-white">
      {/* Header Bar */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        onOpenCustomBuilder={() => scrollToSection('custom-builder')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('collections')}
          onCustomBuilderClick={() => scrollToSection('custom-builder')}
          onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
        />

        {/* Signature Collections */}
        <SignatureCollections
          onSelectArrangement={(item) => setSelectedArrangement(item)}
          onAddToCart={(item) => handleAddToCart(item)}
        />

        {/* The Liebe Experience & Water Bouquet Tech */}
        <LiebeExperience />

        {/* Interactive Custom Emotion Builder */}
        <CustomEmotionBuilder />

        {/* Delivery Zone Checker */}
        <DeliveryZoneChecker />

        {/* How It Works */}
        <HowItWorks />

        {/* Customer Testimonials */}
        <TestimonialsSection />

        {/* Studio Location & About Us */}
        <AboutStudioSection />
      </main>

      {/* Footer */}
      <FooterSection
        onOpenCustomBuilder={() => scrollToSection('custom-builder')}
        onOpenAiConcierge={() => setIsAiConciergeOpen(true)}
      />

      {/* Quick View Modal */}
      <FeaturedArrangementsModal
        arrangement={selectedArrangement}
        onClose={() => setSelectedArrangement(null)}
        onAddToCart={(arr, addons, sz) => handleAddToCart(arr, addons, sz)}
      />

      
    

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Sticky WhatsApp Floating Action Bar */}
      <FloatingWhatsAppBar />
    </div>
  );
}

