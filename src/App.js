import './App.css';
import { Routes, Route } from "react-router-dom";

// Importing components starts here
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import AllReviews from './pages/AllReviews';
// Importing components ends here

function App() {

  return (
    <div className="App">
      <Header/>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
