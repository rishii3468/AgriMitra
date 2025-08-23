import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
  });
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          state: form.state,
          district: form.district,
        }),
      });
      const data = await res.json();
      setResult(data.message);
      if (res.ok) {
        toast.success("Registration/Login successful!");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Request failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-green-50 bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Sign Up / Login
        </h2>

        <input
          type="text"
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <input
          type="text"
          id="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number (+91...)"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <input
          type="text"
          id="state"
          value={form.state}
          onChange={handleChange}
          placeholder="State"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <input
          type="text"
          id="district"
          value={form.district}
          onChange={handleChange}
          placeholder="District"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
        >
          Submit
        </button>
        <p className="text-center text-green-800 font-medium mt-4">{result}</p>
        <p className="text-center text-gray-600 text-sm mt-2">
          After submission, you will be redirected to the homepage.
        </p>
      </div>
    </div>
  );
}
