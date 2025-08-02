import React from "react";
import cassetteImg from "../assets/cassette.png";
import userImg from "../assets/user.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 py-12 flex flex-col items-center justify-between">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold mb-4">🎵 TuneIt</h1>
        <p className="text-lg max-w-xl mx-auto">
          Your AI-powered music mood companion — Generate playlists by mood,
          weather, or even your selfie.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full hover:bg-indigo-100 transition">
            Try It Now
          </button>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="relative mt-16">
        <img
          src={cassetteImg}
          alt="Cassette"
          className="w-[300px] md:w-[400px] mx-auto drop-shadow-xl"
        />
        <img
          src={userImg}
          alt="User"
          className="w-20 h-20 rounded-full absolute -bottom-4 -right-4 border-4 border-white"
        />
      </div>
    </div>
  );
}
