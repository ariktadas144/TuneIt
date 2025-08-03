import axios from 'axios';
import { getSongsFromGemini } from '../services/geminiService.js';
import { searchSpotifyTracks } from '../services/spotifyService.js';

export const generatePlaylistManual = async (req, res) => {
  try {
    const { mood } = req.body;

    if (!mood) {
      return res.status(400).json({ error: 'Mood input is required.' });
    }

    // Step 1: Get basic song list from Gemini
    const songs = await getSongsFromGemini(mood);

    if (!songs || songs.length === 0) {
      return res.status(500).json({ error: 'No songs generated from Gemini.' });
    }

    // Step 2: Enrich with Spotify links/URIs (optional but useful)
    const enrichedSongs = await searchSpotifyTracks(songs);

    res.status(200).json({ mood, songs: enrichedSongs });
  } catch (err) {
    console.error('Error in controller:', err.message);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};

export const generatePlaylistFromWeather = async (req, res) => {
  try {
    const { lat, lon } = req.body;
    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required.' });
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const weatherRes = await axios.get(weatherUrl);
    const weatherData = weatherRes.data;
    const condition = weatherData.weather?.[0]?.main || 'Clear';
    const temp = weatherData.main?.temp;

    console.log(`Weather: ${condition}, Temp: ${temp}°C`);

    // Convert weather → mood
    let mood = '';
    if (condition === 'Clear') mood = 'sunny and happy';
    else if (condition === 'Rain') mood = 'rainy and melancholic';
    else if (condition === 'Clouds') mood = 'cloudy and calm';
    else if (condition === 'Snow') mood = 'cold and peaceful';
    else if (condition === 'Thunderstorm') mood = 'stormy and intense';
    else mood = `The weather is ${condition.toLowerCase()} and ${temp} degrees`;

    console.log(`Derived mood: ${mood}`);

    const songs = await getSongsFromGemini(mood);
    if (!songs || songs.length === 0) {
      return res.status(500).json({ error: 'No songs generated from Gemini.' });
    }

    const enrichedSongs = await searchSpotifyTracks(songs);
    res.status(200).json({ mood, songs: enrichedSongs });
  } catch (err) {
    console.error('Error in weather controller:', err.message);
    res.status(500).json({ error: 'Weather-based playlist failed. Please try again.' });
  }
};