"use client";

import { motion } from "framer-motion";
import { X, BookOpen, MapPin } from "lucide-react";

export default function MagazineCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-xl p-4 md:p-6 relative"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <X className="w-5 h-5 text-gray-600" />
      </motion.button>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
          <BookOpen className="w-8 h-8 text-gray-400" />
        </div>

        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Magazine Advertising
          </h2>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="font-medium">Weekly Magazine</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="font-medium">Chennai</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Leading daily across major metros. ABC-certified. Ideal for
            corporate announcements and mass-market reach.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Language", value: "Hindi/English" },
              { label: "Demographics", value: "Age 22-40" },
              { label: "Readership", value: "1.8M" },
              { label: "Circulation", value: "2.5L" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="bg-white rounded-lg p-3 text-center"
              >
                <div className="text-xs text-gray-500 mb-1 font-medium">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
