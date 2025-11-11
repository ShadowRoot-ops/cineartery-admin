"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Star } from "lucide-react";

interface AdFormat {
  id: string;
  name: string;
  subtitle?: string;
  dimensions?: string;
  area?: string;
  price: string;
  priceUnit?: string;
  variant: "dark" | "light-green" | "yellow" | "blue";
}

const standardFormats: AdFormat[] = [
  {
    id: "custom",
    name: "Custom Sized Ad",
    subtitle: "Flexible",
    price: "₹450",
    priceUnit: "per sq cm",
    variant: "dark",
  },
  {
    id: "quarter-1",
    name: "Quarter Page",
    dimensions: "25cm × 18cm",
    area: "450 sq cm",
    price: "₹1,25,000",
    variant: "light-green",
  },
  {
    id: "quarter-2",
    name: "Quarter Page",
    dimensions: "25cm × 18cm",
    area: "450 sq cm",
    price: "₹1,25,000",
    variant: "light-green",
  },
  {
    id: "quarter-3",
    name: "Quarter Page",
    dimensions: "25cm × 18cm",
    area: "450 sq cm",
    price: "₹1,25,000",
    variant: "light-green",
  },
];

const premiumFormats: AdFormat[] = [
  {
    id: "jacket-1",
    name: "Jacket Front",
    subtitle: "Front cover wrap",
    price: "₹7,50,000",
    variant: "yellow",
  },
  {
    id: "jacket-2",
    name: "Jacket Front",
    subtitle: "Front cover wrap",
    price: "₹7,50,000",
    variant: "yellow",
  },
  {
    id: "jacket-3",
    name: "Jacket Front",
    subtitle: "Front cover wrap",
    price: "₹7,50,000",
    variant: "yellow",
  },
];

const specialFormats: AdFormat[] = [
  {
    id: "pointer-1",
    name: "Pointer Ad",
    dimensions: "5cm × 10cm",
    price: "₹45,000",
    priceUnit: "per sq cm",
    variant: "blue",
  },
  {
    id: "pointer-2",
    name: "Pointer Ad",
    dimensions: "5cm × 10cm",
    price: "₹45,000",
    priceUnit: "per sq cm",
    variant: "blue",
  },
];

export default function AdFormatSelector() {
  const [selectedFormat, setSelectedFormat] = useState<string>("custom");

  const getVariantStyles = (variant: string, isSelected: boolean) => {
    const baseStyles = "transition-all duration-200";
    const selectedRing = isSelected ? "ring-2 ring-blue-500 ring-offset-2" : "";

    const variants: Record<string, string> = {
      dark: `${baseStyles} ${selectedRing} bg-gray-900 text-white hover:bg-gray-800`,
      "light-green": `${baseStyles} ${selectedRing} bg-green-50 border border-green-200 hover:bg-green-100 text-gray-900`,
      yellow: `${baseStyles} ${selectedRing} bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 text-gray-900`,
      blue: `${baseStyles} ${selectedRing} bg-blue-50 border border-blue-200 hover:bg-blue-100 text-gray-900`,
    };

    return variants[variant] || baseStyles;
  };

  const renderAdCard = (ad: AdFormat) => {
    const isSelected = selectedFormat === ad.id;

    return (
      <motion.button
        key={ad.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelectedFormat(ad.id)}
        className={`w-full text-left p-4 rounded-lg ${getVariantStyles(
          ad.variant,
          isSelected
        )}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              {ad.variant === "yellow" && (
                <Star className="w-4 h-4 text-yellow-600 fill-yellow-600 flex-shrink-0" />
              )}
              <span className="font-semibold text-base">{ad.name}</span>
            </div>
            <div
              className={`text-sm ${
                ad.variant === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {ad.subtitle || ad.dimensions}
            </div>
            {ad.area && (
              <div
                className={`text-xs mt-0.5 ${
                  ad.variant === "dark" ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {ad.area}
              </div>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-bold text-base">{ad.price}</div>
            {ad.priceUnit && (
              <div
                className={`text-xs ${
                  ad.variant === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {ad.priceUnit}
              </div>
            )}
          </div>
        </div>
      </motion.button>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Tag className="w-5 h-5 text-gray-700" />
        <h3 className="text-lg font-semibold text-gray-900">
          Select Ad Format
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Standard Formats
        </h4>
        <div className="space-y-2">{standardFormats.map(renderAdCard)}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Premium Jacket Ads
        </h4>
        <div className="space-y-2">{premiumFormats.map(renderAdCard)}</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Special Ad Types
        </h4>
        <div className="space-y-2">{specialFormats.map(renderAdCard)}</div>
      </motion.div>
    </div>
  );
}
