import React, { useState } from "react";
import { Link } from 'react-router';
import api from "../lib/axios";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const fetchCrops = async () => {
  try {
    const response = await api.get("/crops");
    return response.data;
  } catch (error) {
    console.error("Error fetching crops:", error);
    throw error;
  }
};





export default function MarketPlace() {
  const [crops, setCrops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const getCrops = async () => {
      try {
        const data = await fetchCrops();
        setCrops(data);
        console.log(data);
      } catch (err) {
        setError("Failed to load crops");
      } finally {
        setLoading(false);
      }
    };

    getCrops();
  }, [crops.length]);
  // if (loading) return <div>Loading crops...</div>;
  // if (error) return <div>{error}</div>;
  // Filter crops based on search term and category
  const filteredCrops = crops.filter((crop) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    const matchesSearch =
      crop.cropName.toLowerCase().includes(lowerSearchTerm) ||
      crop.farmerName.toLowerCase().includes(lowerSearchTerm) ||
      (crop.location.city && crop.location.city.toLowerCase().includes(lowerSearchTerm)) ||
      (crop.location.state && crop.location.state.toLowerCase().includes(lowerSearchTerm));

    const matchesCategory =
      selectedCategory === "All Categories" ||
      (crop.category && crop.category === selectedCategory);

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
          <Link to="/list-crop">
            <button className="px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl bg-green-600 text-white shadow hover:-translate-y-0.5 hover:shadow-md hover:bg-green-700 active:translate-y-0 transition">
              List Crop
            </button>
          </Link>

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
                src={crop.image || '/default-image.jpg'} // fallback if none
                alt={crop.cropName}
                className="h-44 w-full object-cover"
                loading="lazy"
              />

              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg">{crop.cropName}</h3>
                </div>

                <div className="mt-1 text-sm">
                  <span className="font-medium">{crop.farmerName}</span>
                  <span className="ml-2 text-xs text-white bg-green-600 px-2 py-0.5 rounded-full align-middle">
                    Verified
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  {crop.location.city}, {crop.location.state}
                </p>
                <p className="text-sm text-gray-600">
                  Harvested: {new Date(crop.harvestedDate).toLocaleDateString()}
                </p>

                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-sm text-gray-700">Quantity</p>
                    <p className="font-semibold">{crop.quantityKg} Kg</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700">Price</p>
                    <p className="text-green-600 font-extrabold">
                      ₹{crop.pricePerKg}/Kg
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
                    className="bg-green-600 text-white px-4 py-2 rounded inline-block mt-2"
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
