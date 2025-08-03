import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Desktop2 from './pages/Desktop2';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vibe" element={<Desktop2 />} />
    </Routes>
  );
}
