import React, { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");

  const sendOTP = async () => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    setResult(data.message);
  };

  const verifyOTP = async () => {
    const res = await fetch("http://localhost:5000/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, code: otp }),
    });
    const data = await res.json();
    setResult(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login with OTP
        </h2>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number (+91...)"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button
          onClick={sendOTP}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 mb-6"
        >
          Send OTP
        </button>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button
          onClick={verifyOTP}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Verify OTP
        </button>
        
        <button className="w-full bg-none text-blue-500 hover:underline mt-2"> 
          <span>Already Have an account?</span> Sign in
        </button>
        <p className="text-center text-green-800 font-medium mt-4">{result}</p>
      </div>
    </div>
  );
}