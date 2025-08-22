import React, { useState } from 'react';

const AgriConnect = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-green-600 text-xl font-bold flex items-center">
                <span className="mr-2">🌱</span>
               AgriMitra
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Marketplace</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Equipment</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Community</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Knowledge</a>
            </nav>
            
            {/* Right side */}
            <div className="flex items-center space-x-4">
              <select className="border-none bg-transparent text-gray-700 hidden sm:block focus:outline-none">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="text-gray-700 hover:text-green-600 hidden sm:block transition-colors">Login</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 hidden sm:block transition-colors">
                Sign Up
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-gray-700 p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Marketplace</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Equipment</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors">Knowledge</a>
              <div className="pt-4 border-t border-gray-200 mt-4">
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors mb-2">Login</button>
                <button className="w-full bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Fixed background image */}
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-screen overflow-hidden">
        {/* Background image with proper sizing */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-700 to-green-600"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-screen">
          <div className="text-white max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Fair Trade,<br />
              <span className="text-yellow-400">Smart Farming</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
              Connecting farmers and buyers for transparent pricing, shared resources, and sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                Explore Marketplace
              </button>
              <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition-all duration-300 font-semibold">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Enhanced responsiveness */}
      <div className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-sm sm:text-base text-gray-600">Active Farmers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">2.5M kg</div>
              <div className="text-sm sm:text-base text-gray-600">Produce Traded</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-sm sm:text-base text-gray-600">Equipment Shared</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* How AgriMitra Works Section - Improved responsive grid */}
      <div className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">How AgriMitra Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Simple, transparent and farmer-friendly platform designed for the modern agriculture ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Sell Produce */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sell Produce</h3>
              <p className="text-gray-600 text-sm">
                List your crops directly to buyers at fair market prices.
              </p>
            </div>

            {/* Buy Produce */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.28" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy Produce</h3>
              <p className="text-gray-600 text-sm">
                Source fresh crops directly from farmers nationwide.
              </p>
            </div>

            {/* Rent Equipment */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rent Equipment</h3>
              <p className="text-gray-600 text-sm">
                Access modern farming equipment when you need it.
              </p>
            </div>

            {/* Community Help */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Help</h3>
              <p className="text-gray-600 text-sm">
                Connect with fellow farmers and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced with better icons */}
      <div className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AgriMitra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Secure Transactions */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Transactions</h3>
              <p className="text-gray-600 text-base">
                Protected payments and verified buyers ensure safe trading for all parties.
              </p>
            </div>

            {/* Fair Pricing */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Pricing</h3>
              <p className="text-gray-600 text-base">
                Transparent market rates and direct farmer-to-buyer connections.
              </p>
            </div>

            {/* Wide Network */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wide Network</h3>
              <p className="text-gray-600 text-base">
                Connect with farmers and buyers across regions for better opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Enhanced responsiveness */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AgriMitra */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🌱</span>
               AgriMitra
              </div>
              <p className="text-gray-300 text-sm mb-4 max-w-xs">
                Empowering farmers through technology and fair trade practices.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Farmers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Knowledge Hub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 AgriMitra. Built for farmers, by farmers.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgriConnect;