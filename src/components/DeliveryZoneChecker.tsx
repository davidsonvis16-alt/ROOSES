import React, { useState } from 'react';
import { DELIVERY_ZONES, STUDIO_LOCATION } from '../data/flowerData';
import { MapPin, Search, Clock, ShieldCheck, Navigation } from 'lucide-react';

export const DeliveryZoneChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState(DELIVERY_ZONES[0]);

  const filteredZones = DELIVERY_ZONES.filter(
    (z) =>
      z.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      z.landmarks.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="delivery-zones" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C2D38] font-bold">
            Nairobi Same-Day Network
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Delivery Zones & Rates
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Dispatching directly from our Embakasi studio. Search your neighborhood below to verify delivery fee and estimated courier timeframe.
          </p>
        </div>

        {/* Search & Studio Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Search & Zone List */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]" />
              <input
                type="text"
                placeholder="Search neighborhood (e.g. Nyayo Estate, Utawala, Kilimani, Donholm, Westlands)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#D9D2C5] bg-white text-sm focus:ring-2 focus:ring-[#8C2D38] focus:outline-none shadow-sm"
              />
            </div>

            {/* Zone Buttons Scroll Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredZones.map((zone) => {
                const isSelected = selectedZone.id === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => setSelectedZone(zone)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                      isSelected
                        ? 'border-[#8C2D38] bg-[#FAF5EF] ring-1 ring-[#8C2D38] shadow-sm'
                        : 'border-[#E7E2D8] bg-white hover:border-[#D9D2C5]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm text-[#1C1917]">{zone.name}</span>
                      <span className="font-bold text-xs text-[#8C2D38] bg-[#EBE5DA] px-2 py-0.5 rounded-full">
                        {zone.formattedFee}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#78716C] line-clamp-1">
                      {zone.landmarks}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-[#57534E] pt-1 border-t border-[#E7E2D8]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#2E4839]" />
                        {zone.estimatedTime}
                      </span>
                      {zone.isExpressAvailable && (
                        <span className="text-[#2E4839] font-bold">Express Available</span>
                      )}
                    </div>
                  </button>
                );
              })}

              {filteredZones.length === 0 && (
                <div className="col-span-2 p-8 text-center text-xs text-[#78716C] bg-white rounded-2xl border border-[#E7E2D8]">
                  No exact match found. Don't worry! We deliver anywhere across Nairobi. Contact us on WhatsApp for custom courier rates.
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Studio Physical Location Spotlight */}
          <div className="lg:col-span-5 bg-[#1C1917] text-[#FAF8F5] p-8 rounded-3xl border border-[#2A2624] shadow-lg space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#2A2624] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#FDE68A] font-bold">
                  Physical Studio & Pickup
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">Liebe & Roses Studio</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#8C2D38] flex items-center justify-center text-white">
                <Navigation className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8C2D38] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">{STUDIO_LOCATION.address}</p>
                  <p className="text-[#A8A29E] mt-0.5">{STUDIO_LOCATION.neighborhood}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#2A2624] border border-[#3E3835] space-y-2">
                <div className="flex items-center gap-2 text-[#FDE68A] font-semibold text-xs">
                  <Clock className="w-4 h-4" />
                  <span>Studio Hours</span>
                </div>
                <p className="text-[#D6D3D1] text-[11px] leading-relaxed">
                  {STUDIO_LOCATION.hours}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#2E4839]/30 border border-[#2E4839] space-y-1">
                <div className="flex items-center gap-1.5 text-[#A7F3D0] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Selected Zone Details</span>
                </div>
                <p className="text-white font-serif font-bold text-sm">{selectedZone.name}</p>
                <p className="text-[#D6D3D1] text-[11px]">
                  Flat Fee: <strong className="text-white">{selectedZone.formattedFee}</strong> • ETA: <strong className="text-white">{selectedZone.estimatedTime}</strong>
                </p>
                <p className="text-[#A8A29E] text-[10px] italic">
                  Key Coverage: {selectedZone.landmarks}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
