import React, { useState } from 'react';

const Desktop2 = () => {
  const [moodInput, setMoodInput] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleCameraClick = () => {
    alert("Camera functionality coming soon!");
  };

  const handleGeneratePlaylist = async () => {
  if (!moodInput.trim()) {
    alert("Please type how you're feeling.");
    return;
  }

  setLoading(true);
  try {
    const res = await fetch('/api/generate-playlist/manual', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood: moodInput }),
    });

    let data;
    try {
      data = await res.json(); // only try if response has content
      console.log("Response data:", data); // 👈 ADD THIS
      console.log("Raw songs array from backend:", data.songs);

    } catch (jsonErr) {
      throw new Error('Invalid JSON response from server.');
    }

    if (res.ok) {
      // Clean and format the playlist
      const cleaned = (data.songs || [])
    .filter(song => song && typeof song === 'object' && song.name && song.artist)
    .map(song => `${song.name} - ${song.artist}`);

      
      console.log("Raw songs from backend:", data.songs);
      setPlaylist(cleaned);

      setShowPopup(true);
    } else {
      alert(data.error || 'Failed to generate playlist.');
    }
  } catch (err) {
    console.error('Full error object:', err);
    alert('Something went wrong. ' + err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-[#0F0A1C] text-white font-poppins px-4 py-8 relative">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-4">🎶 Your Playlist</h2>
            {Array.isArray(playlist) && playlist.length > 0 ? (
            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {playlist.map((song, i) => (
                <li key={i} className="border-b pb-1">
                  {typeof song === 'string' ? song : 'Invalid song format'}
                </li>
              ))}
            </ul>
          ) : (
            <p>No songs available.</p>
          )}

          </div>
        </div>
      )}

      {/* Top Navigation */}
      <div className="flex justify-end gap-6 text-sm md:text-base font-medium pr-6 mb-8">
        <a href="#team" className="hover:underline">Team</a>
        <a href="#about" className="hover:underline">About us</a>
        <a href="#features" className="hover:underline">Features</a>
      </div>

      {/* Title and Tabs */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          Your vibe’s got four doors,<br />
          Open one and let the beats pour in.
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['Type the Vibe', 'Pick an emoticon', 'Feel the forecast', 'Mirror your mood'].map((tab) => (
            <button
              key={tab}
              className="border border-white/30 rounded-full px-6 py-2 text-sm hover:bg-white/10 transition-all"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Center Wave SVG */}
      <div className="flex justify-center mb-12">
        <img src="/images/img_frame_purple_200.png" alt="Wave" className="max-w-full h-[60px]" />
      </div>

      {/* Horizontal Section Layout */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-start mb-12">
        {/* Section 1: Type the Vibe */}
        <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full">
          <h2 className="mb-2 text-lg font-medium">Type the vibe</h2>
          <textarea
            className="w-full h-24 p-3 rounded-md text-black resize-none"
            placeholder="Describe how you're feeling..."
            value={moodInput}
            onChange={(e) => setMoodInput(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-3 mt-4">
            {['melancholic', 'I\'m feeling great', 'supercharged', 'I\'m feeling meh'].map((text, i) => (
              <button
                key={i}
                onClick={() => setMoodInput(text)}
                className="bg-white text-black rounded-full px-4 py-1 text-sm"
              >
                {text}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {['😄', '😔', '😡', '😎', '🥳', '😭', '😐', '🤯'].map((emoji, i) => (
              <button
                key={i}
                onClick={() => setMoodInput((prev) => `${prev} ${emoji}`.trim())}
                className="text-xl hover:scale-110 transition-transform"
              >
                {emoji}
              </button>
            ))}
          </div>
          <button
            onClick={handleGeneratePlaylist}
            disabled={loading}
            className="mt-4 w-full bg-[#CDBBFC] text-black py-2 rounded-lg font-semibold hover:opacity-80"
          >
            {loading ? 'Generating...' : 'Generate Playlist'}
          </button>
        </div>

        {/* Section 2: Feel the Forecast */}
        <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full text-center">
          <h2 className="mb-2 text-lg font-medium">Feel the forecast</h2>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-2 rounded-md text-black"
          />
          <div className="mt-4">
            <div
              className="w-full h-[100px] bg-white text-black flex items-center justify-center rounded-md cursor-pointer"
              onClick={handleLocationClick}
            >
              gif
            </div>
          </div>
          <button className="mt-4 w-full bg-[#CDBBFC] text-black py-2 rounded-lg font-semibold hover:opacity-80">
            Generate Playlist
          </button>
        </div>

        {/* Section 3: Mirror your Mood */}
        <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full text-center">
          <h2 className="mb-2 text-lg font-medium">Mirror your mood</h2>
          <div
            className="w-full h-[140px] bg-[#CDBBFC] flex items-center justify-center rounded-md cursor-pointer"
            onClick={handleCameraClick}
          >
            <img
              src="/images/img_placeholder_image.svg"
              alt="Upload Mood"
              className="w-10 h-10 opacity-50"
            />
          </div>
          <button className="mt-4 w-full bg-[#CDBBFC] text-black py-2 rounded-lg font-semibold hover:opacity-80">
            Generate Playlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
