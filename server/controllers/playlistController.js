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
