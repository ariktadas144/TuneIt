import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/cities', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Missing city query' });

  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`;
    const { data } = await axios.get(url);
    res.json(data); // contains name, lat, lon, country, state
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

export default router;
