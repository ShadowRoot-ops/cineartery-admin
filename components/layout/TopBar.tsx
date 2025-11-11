"use client";

import { Bell, MessageSquare, ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8 flex-1">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs md:text-sm">
                  v2
                </span>
              </div>
              <span className="font-semibold text-gray-900 text-sm md:text-base hidden sm:inline">
                Project Name
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {["Breakdown", "Elements", "Reports"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm"
                >
                  <span className="font-medium">{item}</span>
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                8
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block"
            >
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </motion.button>

            <button className="hidden md:flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-lg transition-colors text-sm">
              <span className="font-medium">EN</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 hover:bg-gray-100 rounded-lg px-2 md:px-3 py-1.5 transition-colors"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              <div className="text-left hidden sm:block text-sm">
                <div className="font-semibold text-gray-900 leading-tight">
                  Sam
                </div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
