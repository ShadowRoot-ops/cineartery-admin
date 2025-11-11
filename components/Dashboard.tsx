"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TopBar from "./layout/TopBar";
import Sidebar from "./layout/Sidebar";
import MobileMenu from "./layout/MobileMenu";
import MagazineCard from "./sections/MagazineCard";
import AdFormatSelector from "./sections/AdFormatSelector";
import CustomSizePanel from "./sections/CustomSizePanel";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar onMenuClick={() => setIsMobileMenuOpen(true)} />

      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-4 md:p-6 overflow-auto min-h-[calc(100vh-65px)]"
        >
          <div className="max-w-7xl mx-auto">
            <MagazineCard />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
              <div className="lg:col-span-7">
                <AdFormatSelector />
              </div>

              <div className="lg:col-span-5">
                <CustomSizePanel />
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
