import LandingPage from "./components/LandingPage"
import About from "./pages/About";
import Seller from "./pages/Seller"
import SellerDashboard from "./pages/SellerDashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Seller" element={<Seller />} />
          <Route path="/Dashboard" element={<SellerDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
