// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Desktop2 from './pages/Desktop2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desktop2" element={<Desktop2 />} />
    </Routes>
  );
}

export default App;
