export const getSongsFromGemini = async (mood) => {
  console.log(`💡 Gemini is currently unavailable. Using dummy data for mood: "${mood}"`);

  // Simulated playlist based on mood
  const dummySongs = [
    { title: "Happy", artist: "Pharrell Williams" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
    { title: "Good as Hell", artist: "Lizzo" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves" },
    { title: "Shake It Off", artist: "Taylor Swift" },
    { title: "Good Vibes", artist: "Chris Janson" },
    { title: "Sugar", artist: "Maroon 5" },
    { title: "On Top of the World", artist: "Imagine Dragons" },
    { title: "Best Day of My Life", artist: "American Authors" },
    { title: "High Hopes", artist: "Panic! At The Disco" },
    { title: "I'm Yours", artist: "Jason Mraz" },
    { title: "Feel It Still", artist: "Portugal. The Man" },
    { title: "Better When I'm Dancin'", artist: "Meghan Trainor" },
    { title: "Shotgun", artist: "George Ezra" },
    { title: "Sunflower", artist: "Post Malone & Swae Lee" },
    { title: "Happier", artist: "Marshmello ft. Bastille" },
    { title: "Stronger", artist: "Kanye West" },
    { title: "Rather Be", artist: "Clean Bandit ft. Jess Glynne" },
    { title: "Don't Worry Be Happy", artist: "Bobby McFerrin" }
  ];

  return dummySongs;
};
