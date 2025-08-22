import React, { useState } from "react";
import { Link } from 'react-router';

const crops = [
  {
    name: "Organic Tomatoes",
    farmer: "Rajesh Kumar",
    location: "Nashik, Maharashtra",
    harvested: "1/15/2024",
    quantity: 500,
    price: 25,
    oldPrice: 30,
    rating: "4.8",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1524593166156-312f362cada0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Basmati Rice",
    farmer: "Priya Sharma",
    location: "Karnal, Haryana",
    harvested: "1/10/2024",
    quantity: 2000,
    price: 85,
    oldPrice: 90,
    rating: "4.9",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Fresh Onions",
    farmer: "Suresh Patil",
    location: "Pune, Maharashtra",
    harvested: "1/12/2024",
    quantity: 1000,
    price: 18,
    oldPrice: 22,
    rating: "4.6",
    category: "Vegetables",
    image:
      "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Green Chilies",
    farmer: "Lakshmi Devi",
    location: "Guntur, Andhra Pradesh",
    harvested: "1/14/2024",
    quantity: 700,
    price: 40,
    oldPrice: 50,
    rating: "4.7",
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1576763595295-c0371a32af78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fresh Apples",
    farmer: "Vinod Singh",
    location: "Shimla, Himachal Pradesh",
    harvested: "1/8/2024",
    quantity: 800,
    price: 120,
    oldPrice: 140,
    rating: "4.9",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    name: "Alphonso Mangoes",
    farmer: "Anil Pawar",
    location: "Ratnagiri, Maharashtra",
    harvested: "1/5/2024",
    quantity: 600,
    price: 200,
    oldPrice: 220,
    rating: "4.8",
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&h=300&fit=crop",
  },
  {
    name: "Toor Dal",
    farmer: "Ramesh Yadav",
    location: "Latur, Maharashtra",
    harvested: "1/3/2024",
    quantity: 1500,
    price: 95,
    oldPrice: 105,
    rating: "4.7",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1612869538502-b5baa439abd7?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Groundnuts",
    farmer: "Kavitha Reddy",
    location: "Anantapur, Andhra Pradesh",
    harvested: "1/6/2024",
    quantity: 1200,
    price: 65,
    oldPrice: 75,
    rating: "4.6",
    category: "Grains",
    image:
      "https://plus.unsplash.com/premium_photo-1668420870736-168a5a5c79a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];





export default function MarketPlace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter crops based on search term and category
  const filteredCrops = crops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      crop.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top bar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 bg-white border-b">
        <Link to='/'>
          <button className="flex items-center gap-2 text-green-700 hover:opacity-80">
            

            
            <span className="text-2xl">🌱</span>
            <span className="text-2xl font-extrabold">AgriMitra</span>
          </button>
        </Link>

        <div className="flex gap-2 sm:gap-3">
          <button className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-green-600 text-white shadow hover:-translate-y-0.5 hover:shadow-md hover:bg-green-700 active:translate-y-0 transition">
            List Item
          </button>

          <button className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-green-100 text-green-700 border border-green-400 hover:bg-green-200 transition">
            My Orders
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Crop Marketplace</h2>
        <p className="text-gray-600 mt-1">
          Fresh produce directly from verified farmers
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search for crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2.5 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2.5 rounded-xl"
          >
            <option>All Categories</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Grains</option>
          </select>
        </div>
      </section>

      {/* Cards */}
      <section className="grid gap-6 px-4 sm:px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition overflow-hidden"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="h-44 w-full object-cover"
                loading="lazy"
              />

              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg">{crop.name}</h3>
                </div>

                <div className="mt-1 text-sm">
                  <span className="font-medium">{crop.farmer}</span>
                  <span className="ml-2 text-xs text-white bg-green-600 px-2 py-0.5 rounded-full align-middle">
                    Verified
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">{crop.location}</p>
                <p className="text-sm text-gray-600">
                  Harvested: {crop.harvested}
                </p>

                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-sm text-gray-700">Quantity</p>
                    <p className="font-semibold">{crop.quantity} Kg</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">Price</p>
                    <p className="text-green-600 font-extrabold">
                      ₹{crop.price}/Kg{" "}
                      <span className="text-gray-400 line-through text-sm align-middle">
                        {crop.oldPrice} 
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 border border-green-600 text-green-700 px-3 py-2 rounded-xl hover:bg-green-50 transition">
                    Contact Farmer
                  </button>
                  <Link
                    to="/payment"
                    state={{ crop }}
                    className="bg-green-500 text-white px-4 py-2 rounded inline-block mt-2"
                  >
                      Buy Now
                  </Link>
                  
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">
              No crops found matching your search criteria.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
