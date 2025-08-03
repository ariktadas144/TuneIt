import express from 'express';
import { generatePlaylistManual } from '../controllers/playlistController.js';

const router = express.Router();

// POST /api/generate-playlist/manual
router.post('/manual', generatePlaylistManual);

export default router;
