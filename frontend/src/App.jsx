import React from 'react';

const AgriConnect = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-green-600 text-xl font-bold flex items-center">
                <span className="mr-2">🌱</span>
                AgriConnect
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600">Marketplace</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Equipment</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Community</a>
              <a href="#" className="text-gray-700 hover:text-green-600">Knowledge</a>
            </nav>
            
            {/* Right side */}
            <div className="flex items-center space-x-4">
              <select className="border-none bg-transparent text-gray-700">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="text-gray-700 hover:text-green-600">Login</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Fixed background image */}
      <div className="relative h-96 overflow-hidden">
        {/* Background Image with working URL */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            color:"blue",
            backgroundImage: "url('/hero-farm.jpg')",
            width:"100vw",
            height:"20vh"
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
            <h1 className="text-5xl font-bold mb-4">
              Fair Trade,<br />
              <span className="text-yellow-400">Smart Farming</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Connecting farmers and buyers for transparent pricing, shared resources,<br />
              and sustainable agriculture.
            </p>
            <div className="flex space-x-4">
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
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2.5M kg</div>
              <div className="text-gray-600">Produce Traded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Equipment Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </div>

      {/* How AgriConnect Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AgriConnect Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent and farmer-friendly platform designed for the modern
              agriculture ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {/* Sell Produce */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sell Produce</h3>
              <p className="text-gray-600 text-sm">
                List your crops directly to buyers at fair
                market prices.
              </p>
            </div>

            {/* Buy Produce */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buy Produce</h3>
              <p className="text-gray-600 text-sm">
                Source fresh crops directly from farmers
                nationwide.
              </p>
            </div>

            {/* Rent Equipment */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rent Equipment</h3>
              <p className="text-gray-600 text-sm">
                Access modern farming equipment when
                you need it.
              </p>
            </div>

            {/* Community Help */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Help</h3>
              <p className="text-gray-600 text-sm">
                Connect with fellow farmers and share
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-12">
            {/* Secure Transactions */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Transactions</h3>
              <p className="text-gray-600">
                Protected payments and verified buyers ensure safe trading
                for all parties.
              </p>
            </div>

            {/* Fair Pricing */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent market rates and direct farmer-to-buyer
                connections.
              </p>
            </div>

            {/* Wide Network */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wide Network</h3>
              <p className="text-gray-600">
                Connect with farmers and buyers across regions for better
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {/* AgriConnect */}
            <div>
              <div className="text-xl font-bold mb-4 flex items-center">
                <span className="mr-2">🌱</span>
                AgriConnect
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Empowering farmers through technology and fair
                trade practices.
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
            © 2024 AgriConnect. Built for farmers, by farmers.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgriConnect;