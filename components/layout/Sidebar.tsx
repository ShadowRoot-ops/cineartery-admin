"use client";

import { motion } from "framer-motion";
import {
  Home,
  FileText,
  Tag,
  DollarSign,
  Calendar as CalendarIcon,
  ShoppingCart,
  CreditCard,
  FileSignature,
  Copyright,
  Users,
  Settings,
  Zap,
} from "lucide-react";

const navItems = [
  { name: "Overview", icon: Home, active: true },
  { name: "Script writing", icon: FileText },
  { name: "Breakdown", icon: Tag },
  { name: "Budget", icon: DollarSign },
  { name: "Schedule", icon: CalendarIcon },
  { name: "Seller", icon: ShoppingCart },
  { name: "Finance", icon: CreditCard },
  { name: "Agreement", icon: FileSignature },
  { name: "Copyrights", icon: Copyright },
];

const pageItems = [
  { name: "Audition", icon: Users },
  { name: "Calendar", icon: CalendarIcon },
  { name: "Contacts", icon: Users },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)] flex flex-col overflow-y-auto">
      <div className="p-6 sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">Cine</span>
          <span className="text-gray-900">Artery</span>
        </h1>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item, index) => (
          <motion.button
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left ${
              item.active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{item.name}</span>
          </motion.button>
        ))}
      </nav>

      <div className="px-3 py-4">
        <div className="mb-3">
          <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Pages
          </h3>
        </div>

        <div className="space-y-1">
          {pageItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navItems.length + index) * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-all text-left"
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="m-3 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white shadow-xl"
      >
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
          <Zap className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-bold text-lg text-center mb-2">CineArtery</h3>
        <p className="text-sm text-blue-100 text-center mb-4 leading-relaxed">
          Get access to all features
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-white text-blue-600 font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get Pro
        </motion.button>
      </motion.div>
    </aside>
  );
}
