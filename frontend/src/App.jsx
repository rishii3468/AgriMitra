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
              <a href="#" className="text-gray-700 hover:text-green-600">Marketplace</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Equipment</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Community</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Knowledge</a>
            </nav>
            
            {/* Right side */}
            <div className="flex items-center space-x-4">
              <select className="border-none bg-transparent text-gray-700 hidden sm:block">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="text-gray-700 hover:text-green-600 hidden sm:block">Login</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 hidden sm:block">
                Sign Up
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-gray-700"
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
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Marketplace</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Equipment</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600">Knowledge</a>
              <div className="pt-4 border-t">
                <select className="w-full border rounded px-3 py-2 text-gray-700">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                <button className="w-full mt-2 text-left px-3 py-2 text-gray-700 hover:text-green-600">Login</button>
                <button className="w-full mt-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-96 md:h-screen overflow-hidden">
        {/* Background with fallback */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect fill=\"%23197542\" width=\"100\" height=\"100\"/><path fill=\"%2328a745\" d=\"M0 0L100 100M100 0L0 100\" stroke-width=\"0.5\"/></svg>')",
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center"
         style={{
          
            backgroundImage: "url('/hero-farm.jpg')",
            width:"100%",
            height:"100%",
            objectFit:"contain"
          
          
            
          }}>
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fair Trade,<br />
              <span className="text-yellow-400">Smart Farming</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Connecting farmers and buyers for transparent pricing, shared resources, and sustainable agriculture.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-green-600 transition">
                Explore Marketplace
              </button>
              <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">2.5M kg</div>
              <div className="text-gray-600">Produce Traded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Equipment Shared</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* How AgriMitra Works Section */}
      <div className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How AgriMitra Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent and farmer-friendly platform designed for the modern agriculture ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Sell Produce */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-sm border">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sell Produce</h3>
              <p className="text-gray-600 text-sm">
                List your crops directly to buyers at fair market prices.
              </p>
            </div>

            {/* Buy Produce */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-sm border">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy Produce</h3>
              <p className="text-gray-600 text-sm">
                Source fresh crops directly from farmers nationwide.
              </p>
            </div>

            {/* Rent Equipment */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-sm border">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rent Equipment</h3>
              <p className="text-gray-600 text-sm">
                Access modern farming equipment when you need it.
              </p>
            </div>

            {/* Community Help */}
            <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-sm border">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Help</h3>
              <p className="text-gray-600 text-sm">
                Connect with fellow farmers and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Secure Transactions */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Transactions</h3>
              <p className="text-gray-600">
                Protected payments and verified buyers ensure safe trading for all parties.
              </p>
            </div>

            {/* Fair Pricing */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent market rates and direct farmer-to-buyer connections.
              </p>
            </div>

            {/* Wide Network */}
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wide Network</h3>
              <p className="text-gray-600">
                Connect with farmers and buyers across regions for better opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* AgriMitra */}
            <div>
              <div className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🌱</span>
               AgriMitra
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Empowering farmers through technology and fair trade practices.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Farmers</a></li>
                <li><a href="#" className="hover:text-white">Equipment</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Knowledge Hub</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
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