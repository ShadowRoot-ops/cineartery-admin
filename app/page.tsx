"use client";

import { Bell, MessageSquare, ChevronDown, X, Star, Tag } from "lucide-react";

export default function Home() {
  // Removed unused state variables that were causing ESLint warnings
  // const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  // const [selectedDays, setSelectedDays] = useState<string[]>(["Tue"]);

  const standardFormats = [
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

  const premiumJacketAds = [
    {
      id: "jacket-1",
      name: "Jacket Front",
      subtitle: "Front cover wrap",
      price: "₹7,50,000",
    },
    {
      id: "jacket-2",
      name: "Jacket Front",
      subtitle: "Front cover wrap",
      price: "₹7,50,000",
    },
    {
      id: "jacket-3",
      name: "Jacket Front",
      subtitle: "Front cover wrap",
      price: "₹7,50,000",
    },
  ];

  const specialAdTypes = [
    {
      id: "pointer-1",
      name: "Pointer Ad",
      dimensions: "5cm × 10cm",
      price: "₹45,000",
      priceUnit: "per sq cm",
    },
    {
      id: "pointer-2",
      name: "Pointer Ad",
      dimensions: "5cm × 10cm",
      price: "₹45,000",
      priceUnit: "per sq cm",
    },
  ];

  const days = ["Tue", "Tue", "Tue", "Tue", "Tue", "Tue", "Tue"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">
                v2
              </div>
              <span className="font-semibold text-gray-900">Project Name</span>
            </div>

            <nav className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Breakdown</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm">Elements</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-sm">Reports</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                8
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
              <div className="w-6 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">🇬🇧</span>
              </div>
              <span className="text-sm text-gray-700">English</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center gap-3 hover:bg-gray-100 rounded-lg px-3 py-2">
              <div className="w-8 h-8 bg-purple-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-purple-400 to-pink-400"></div>
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">Sam</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)] flex flex-col">
          <div className="p-6">
            <h1 className="text-xl font-bold">
              <span className="text-blue-600">Cine</span>
              <span className="text-gray-900">Artery</span>
            </h1>
          </div>

          <nav className="flex-1 px-3">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg mb-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-sm font-medium">Overview</span>
            </button>

            {[
              "Script writing",
              "Breakdown",
              "Budget",
              "Schedule",
              "Seller",
              "Finance",
              "Agreement",
              "Copyrights",
            ].map((item) => (
              <button
                key={item}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-sm">{item}</span>
              </button>
            ))}

            <div className="mt-8 mb-3">
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Pages
              </h3>
            </div>

            {["Audition", "Calendar", "Contacts", "Settings"].map((item) => (
              <button
                key={item}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-sm">{item}</span>
              </button>
            ))}
          </nav>

          {/* Upgrade Card */}
          <div className="m-3 p-6 bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold mb-2">CineArtery</h3>
            <p className="text-xs text-blue-100 mb-4">
              Get access to all features on blumoas
            </p>
            <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
              Get Pro
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Magazine Advertising Card */}
            <div className="col-span-12 bg-gray-100 rounded-xl p-6 relative">
              <button className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-lg">
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex gap-6">
                <div className="w-24 h-24 bg-white rounded-lg border-2 border-dashed border-gray-300"></div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Magazine Advertising
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span>Weekly Magazine</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>Chennai</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Leading daily across major metros. ABC-certified. Ideal for
                    corporate announcements and mass-market reach.
                  </p>

                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">Language</div>
                      <div className="text-sm font-semibold text-gray-900">
                        Hindi/English
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Demographics
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        Age 22-40
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Readership
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        1.8M
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-500 mb-1">
                        Circulation
                      </div>
                      <div className="text-sm font-semibold text-gray-900">
                        2.5L
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Ad Format Section */}
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-5 h-5 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Select Ad Format
                </h3>
              </div>

              {/* Standard Formats */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Standard Formats
                </h4>
                <div className="space-y-2">
                  {standardFormats.map((format) => (
                    <button
                      key={format.id}
                      // Removed onClick handler since we're not tracking selection
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        format.variant === "dark"
                          ? "bg-gray-900 text-white hover:bg-gray-800"
                          : "bg-green-50 border border-green-200 hover:bg-green-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div
                            className={`font-semibold ${
                              format.variant === "dark"
                                ? "text-white"
                                : "text-gray-900"
                            }`}
                          >
                            {format.name}
                          </div>
                          <div
                            className={`text-sm ${
                              format.variant === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            {format.subtitle || format.dimensions}
                          </div>
                          {format.area && (
                            <div
                              className={`text-xs ${
                                format.variant === "dark"
                                  ? "text-gray-500"
                                  : "text-gray-500"
                              }`}
                            >
                              {format.area}
                            </div>
                          )}
                        </div>
                        <div
                          className={`font-bold ${
                            format.variant === "dark"
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {format.price}
                          {format.priceUnit && (
                            <div className="text-xs font-normal text-gray-500">
                              {format.priceUnit}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Premium Jacket Ads */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Premium Jacket Ads
                </h4>
                <div className="space-y-2">
                  {premiumJacketAds.map((ad) => (
                    <button
                      key={ad.id}
                      // Removed onClick handler since we're not tracking selection
                      className="w-full text-left p-4 rounded-lg bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                            <span className="font-semibold text-gray-900">
                              {ad.name}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 ml-6">
                            {ad.subtitle}
                          </div>
                        </div>
                        <div className="font-bold text-gray-900">
                          {ad.price}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Ad Types */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Special Ad Types
                </h4>
                <div className="space-y-2">
                  {specialAdTypes.map((ad) => (
                    <button
                      key={ad.id}
                      // Removed onClick handler since we're not tracking selection
                      className="w-full text-left p-4 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {ad.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {ad.dimensions}
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">
                            {ad.price}
                          </div>
                          <div className="text-xs text-gray-500">
                            {ad.priceUnit}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              {/* Custom Size Card */}
              <div className="bg-white rounded-xl border-2 border-blue-400 p-6">
                <div className="flex items-center justify-center mb-2">
                  <Tag className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    12×10 cm
                  </div>
                  <div className="text-sm text-gray-600">Custom</div>
                </div>
              </div>

              {/* Position and Days Selection */}
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Position
                    </h4>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-sm text-gray-700">Front</span>
                          <span className="text-sm text-gray-500">Spl</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between p-3 bg-gray-900 text-white rounded-lg">
                        <span className="text-sm font-medium">Front</span>
                        <span className="text-sm">Spl</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Days(1)
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-900 text-white rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">Tue</span>
                        </div>
                        <span className="text-sm">₹54k</span>
                      </div>
                      {days.slice(1).map((day, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-700">{day}</span>
                          </div>
                          <span className="text-sm text-gray-500">₹54k</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Total */}
              <div className="bg-gray-900 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider">
                    Estimated Total
                  </h4>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-white" />
                    <span>Best Price</span>
                  </div>
                </div>
                <div className="text-4xl font-bold mb-4">₹54,000</div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>12×10cm</span>
                  <span>•</span>
                  <span>Supplement</span>
                  <span>•</span>
                  <span>1 day</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
