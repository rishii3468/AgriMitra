import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();

      setResult(data.message);
      if (res.ok) {
        toast.success("Login successful!");
        // Save user/token as needed, then navigate
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Login request failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="w-full p-3 border border-green-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
        >
          Login
        </button>

        <p className="text-center text-green-800 font-medium mt-4">{result}</p>
      </div>
    </div>
  );
}
