import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* All pages inside MainLayout will have Navbar/Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* We will add /opportunities here later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;