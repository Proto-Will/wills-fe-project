import './App.css';
import { Routes, Route } from "react-router-dom";

// Importing components starts here
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import AllReviews from './pages/AllReviews';
import AllCategories from './pages/AllCategories';
import CategorisedReviews from './pages/CategorisedReviews';
// Importing components ends here

function App() {

  return (
    <div className="App">
      <Header/>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/reviews/category/:category" element={<CategorisedReviews />} />
        <Route path="/categories" element={<AllCategories />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
