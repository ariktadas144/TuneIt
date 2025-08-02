import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-transparent text-white z-10 relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="TuneIt Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">TuneIt</h1>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#features" className="hover:text-purple-200 transition">Features</a>
        <a href="#about" className="hover:text-purple-200 transition">About</a>
        <a href="#contact" className="hover:text-purple-200 transition">Contact</a>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-100 transition">
          Login
        </button>
      </div>
    </nav>
  );
}
