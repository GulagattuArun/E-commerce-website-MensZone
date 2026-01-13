import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Jeanspage from './pages/Jeanspage';
import Shirtspage from './pages/Shirtspage';
import Shoepage from './pages/Shoepage';
import Sunglassespage from './pages/Sunglassespage';
import Tshirtspage from './pages/Tshirtspage';
import Productpage from './pages/Productpage';
import Bookpage from './pages/bookpage';
import Cartpage from './pages/cartpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginPage from './pages/Loginpage';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="home" element={<Homepage />} />
                <Route path="jeans" element={<Jeanspage />} />
                <Route path="shirts" element={<Shirtspage />} />
                <Route path="shoes" element={<Shoepage />} />
                <Route path="sunglasses" element={<Sunglassespage />} />
                <Route path="tshirts" element={<Tshirtspage />} />
                <Route path="bookpage/:id" element={<Bookpage />} />
                <Route path="product/:id" element={<Productpage />} />
                <Route path="cartpage/:id" element={<Cartpage />} />
              </Routes>
            </>//wrapper it wraps all the elements 
          }
        />
      </Routes>
    </div>
  );
}

export default App;
