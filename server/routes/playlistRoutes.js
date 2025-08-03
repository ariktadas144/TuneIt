import express from 'express';
import { generatePlaylistManual, generatePlaylistFromWeather } from '../controllers/playlistController.js';

const router = express.Router();

// POST /api/generate-playlist/manual
router.post('/manual', generatePlaylistManual);
router.post('/weather', generatePlaylistFromWeather);

export default router;
