export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-center mb-6">🎵 TuneIt</h1>
      <p className="text-lg text-center max-w-xl mb-10">
        Discover mood-based music like never before. Generate playlists based on your emotions, weather, and location.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold transition">
          Try It Now
        </button>
        <button className="border border-white hover:bg-white hover:text-purple-900 px-6 py-3 rounded-lg text-lg font-semibold transition">
          Learn More
        </button>
      </div>
    </main>
  );
}
