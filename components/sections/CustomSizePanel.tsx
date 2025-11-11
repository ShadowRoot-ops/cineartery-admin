"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tag, Star } from "lucide-react";

export default function CustomSizePanel() {
  const [selectedDay, setSelectedDay] = useState<string>("Tue-0");
  const [selectedPosition, setSelectedPosition] = useState<string>("Front-3");

  const positions = [
    { position: "Front", type: "Spl" },
    { position: "Front", type: "Spl" },
    { position: "Front", type: "Spl" },
    { position: "Front", type: "Spl" },
  ];

  const days = Array(7).fill({ day: "Tue", price: "₹54k" });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl border-2 border-blue-400 p-6 shadow-lg"
      >
        <div className="flex items-center justify-center mb-3">
          <Tag className="w-6 h-6 text-blue-600" />
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">12×10 cm</div>
          <div className="text-sm text-gray-600 font-medium">Custom</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-md"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Position
            </h4>
            <div className="space-y-2">
              {positions.map((pos, index) => {
                const id = `${pos.position}-${index}`;
                const isSelected = selectedPosition === id;

                return (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedPosition(id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      isSelected
                        ? "bg-gray-900 text-white shadow-md"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className="text-sm font-medium">{pos.position}</span>
                    <span
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {pos.type}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Days(1)
            </h4>
            <div className="space-y-2 max-h-52 overflow-y-auto">
              {days.map((dayOption, index) => {
                const id = `${dayOption.day}-${index}`;
                const isSelected = selectedDay === id;

                return (
                  <motion.button
                    key={id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedDay(id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                      isSelected
                        ? "bg-gray-900 text-white shadow-md"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "border-white bg-white"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">
                        {dayOption.day}
                      </span>
                    </div>
                    <span
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {dayOption.price}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-gray-900 rounded-xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider">
            Estimated Total
          </h4>
          <div className="flex items-center gap-1.5 text-sm">
            <Star className="w-4 h-4 fill-white" />
            <span className="font-medium">Best Price</span>
          </div>
        </div>
        <div className="text-5xl font-bold mb-4">₹54,000</div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          <span>12×10cm</span>
          <span>•</span>
          <span>Supplement</span>
          <span>•</span>
          <span>1 day</span>
        </div>
      </motion.div>
    </div>
  );
}
