import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

const Desktop2 = () => {
  const [moodInput, setMoodInput] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loadingManual, setLoadingManual] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [cityInput, setCityInput] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);


  useEffect(() => {
    if (cityInput.length > 1 && !selectedCity) {
      fetchCitySuggestions(cityInput);
    } else {
      setCitySuggestions([]);
    }
  }, [cityInput]);


  const fetchCitySuggestions = debounce(async (query) => {
    if (query.length < 2) return;

    try {
      const res = await fetch(`/api/cities?q=${query}`);
      const data = await res.json();
      setCitySuggestions(data.slice(0, 5)); // only top 5
    } catch (err) {
      console.error('Failed to fetch city suggestions', err);
    }
  }, 300);


  const handleLocationClick = async () => {
    setLoadingWeather(true);
    let lat, lon;

    if (selectedCity) {
      lat = selectedCity.lat;
      lon = selectedCity.lon;
    } else {
      // Try getting user's actual geolocation
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          });
        });

        lat = position.coords.latitude;
        lon = position.coords.longitude;
      } catch (geoErr) {
        console.error("Geolocation error:", geoErr);
        alert("Please allow location access or select a city manually.");
        setLoadingWeather(false);
        return;
      }
    }

    // Now send the POST request
    try {
      const res = await fetch('/api/generate-playlist/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat, lon }),
      });

      const data = await res.json();
      if (res.ok) {
        const cleaned = (data.songs || [])
          .filter(song => song && typeof song === 'object' && song.name && song.artist)
          .map(song => `${song.name} - ${song.artist}`);
        setPlaylist(cleaned);
        setShowPopup(true);
      } else {
        alert(data.error || 'Failed to generate weather-based playlist.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. ' + err.message);
    } finally {
      setLoadingWeather(false);
    }
  };


  const requestUserLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      console.log("Location permission granted. Coords:", lat, lon);
      alert("Location access granted ✅");
    } catch (err) {
      console.error("Location access denied or failed:", err);
      alert("Location access denied ❌");
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

  setLoadingManual(true);
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
      console.log("✅ Raw response from backend:", data);
      console.log("✅ Raw data.songs type:", typeof data.songs, "Value:", data.songs);


    } catch (jsonErr) {
      throw new Error('Invalid JSON response from server.');
    }

    if (res.ok) {
      // Clean and format the playlist
      let cleaned = [];

      if (Array.isArray(data.songs)) {
        cleaned = data.songs
          .filter(line => typeof line === 'string' && line.includes(' - '))
          .map(line => line.trim());
      } else {
        console.error("❌ data.songs is not an array:", data.songs);
      }



      
      console.log("✅ Cleaned playlist (frontend):", cleaned);

      setPlaylist(cleaned);

      setShowPopup(true);
    } else {
      alert(data.error || 'Failed to generate playlist.');
    }
  } catch (err) {
    console.error('Full error object:', err);
    alert('Something went wrong. ' + err.message);
  } finally {
    setLoadingManual(false);
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
            disabled={loadingManual}
            className="mt-4 w-full bg-[#CDBBFC] text-black py-2 rounded-lg font-semibold hover:opacity-80"
          >
            {loadingManual ? 'Generating...' : 'Generate Playlist'}
          </button>
        </div>

        {/* Section 2: Feel the Forecast */}
        <div className="bg-[#D9D9D90D] p-6 rounded-xl max-w-[300px] w-full text-center">
          <h2 className="mb-2 text-lg font-medium">Feel the forecast</h2>
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full p-2 rounded-md text-black"
            value={cityInput}
            onChange={(e) => {
              setCityInput(e.target.value);
              setSelectedCity(null); // reset previous selection
            }}
          />

          {citySuggestions.length > 0 && !selectedCity && (
            <ul className="bg-white text-black rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
              {citySuggestions.map((city, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedCity(city);
                    setCityInput(`${city.name}, ${city.country}`);
                    setCitySuggestions([]); // hide dropdown
                  }}
                >
                  {city.name}, {city.state ? city.state + ', ' : ''}{city.country}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4">
            <div
              className="w-full h-[100px] bg-white text-black flex items-center justify-center rounded-md cursor-pointer"
              onClick={requestUserLocation}
            >
              gif
            </div>
          </div>
          <button
          onClick={handleLocationClick}
          disabled={loadingWeather}
          className="mt-4 w-full bg-[#CDBBFC] text-black py-2 rounded-lg font-semibold hover:opacity-80"
        >
          {loadingWeather ? 'Generating...' : 'Generate Playlist'}
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
