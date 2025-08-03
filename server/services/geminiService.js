import axios from 'axios';

export const getSongsFromGemini = async (mood) => {
  const geminiPrompt = `
    Based on the user's mood "${mood}", suggest a Spotify playlist of 20 songs.
    Provide the song name and artist in this format: "Song Name - Artist".
    Do not include links or numbering. Just a plain list.
  `;

  const MAX_RETRIES = 3;
  const RETRY_DELAY_MS = 2000;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log("Gemini prompt:", geminiPrompt);

      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent',
        {
          contents: [{ parts: [{ text: geminiPrompt }] }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': process.env.GEMINI_API_KEY,
          },
        }
      );
      

      const rawText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      console.log('Gemini raw response text:', rawText);


      if (!rawText) return [];

      const songs = rawText
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.includes(' - '))
        .slice(0, 20);

      console.log('songs:\n', songs);

      return songs;

    } catch (err) {
      if (err.response?.status === 429 && attempt < MAX_RETRIES) {
        console.warn(`Rate limited (429). Retrying in ${RETRY_DELAY_MS / 1000}s... [Attempt ${attempt}]`);
        await new Promise(res => setTimeout(res, RETRY_DELAY_MS));
      } else {
        console.error('Gemini API error:', err.message);
        return [];
      }
    }
  }

  return [];
};
