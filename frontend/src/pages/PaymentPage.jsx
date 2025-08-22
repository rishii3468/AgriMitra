import React from "react";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const { crop } = location.state || {};

  if (!crop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <p className="text-lg font-semibold text-red-600">
          No order found. Please go back to marketplace.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          Payment Details
        </h2>

        {/* Order Summary */}
        <div className="border border-green-200 rounded-lg p-4 mb-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            Order Summary
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-24 h-24 object-cover rounded-lg shadow"
            />
            <div>
              <p className="font-semibold text-gray-800">{crop.name}</p>
              <p className="text-sm text-gray-600">{crop.quantity}</p>
              <p className="text-sm text-gray-600">Price: {crop.price}</p>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="border border-green-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            Payment Info
          </h3>
          <p className="text-gray-700">
            Total Payable Amount:{" "}
            <span className="text-green-700 font-bold">{crop.quantity * crop.price}</span>
          </p>
        </div>

        {/* Proceed Button */}
        <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold shadow-md">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}
