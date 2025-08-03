import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// 1. Get Access Token
async function getSpotifyAccessToken() {
  const authString = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${authString}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.response?.data || error.message);
    throw new Error("Spotify token failed");
  }
}

// 2. Search for each track
export const searchSpotifyTracks = async (songsArray) => {
  const accessToken = await getSpotifyAccessToken();
  const results = [];

  for (const song of songsArray) {
    const query = `track:${song.title} artist:${song.artist}`;
    const encodedQuery = encodeURIComponent(query);

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodedQuery}&type=track&limit=1`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const track = response.data.tracks.items[0];
      if (track) {
        results.push({
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          url: track.external_urls.spotify,
          uri: track.uri,
          image: track.album.images?.[0]?.url || null,
        });
      } else {
        results.push(null); // or log skipped track
      }
    } catch (err) {
      console.error(`Error searching for "${song.title}" by ${song.artist}:`, err.message);
      results.push(null);
    }
  }

  return results;
};
