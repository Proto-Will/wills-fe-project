import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

// Importing components starts here
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import AllReviews from './pages/AllReviews';
// Importing components ends here

function App() {

// we'll need a current user state, and a logged in/out state
  const [currUser, setCurrUser] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //     console.log("Inside of the itemslist page useeffect");
  //     fetch("https://wills-project-games.herokuapp.com/api")
  //         .then((response) => response.json())
  //         .then((categoryList) => {
  //             setCategories(categoryList.categories);
  //             // console.log(categories);
  //         })
  // }, [])
  
  useEffect(() => {
      fetch("https://all-about-boardgames.herokuapp.com/api/reviews")
          .then((response) => response.json())
          .then((reviews) => {
              setReviewList(reviews.reviews);
          })
  }, [])


  return (
    <div className="App">
      <Header/>
      <Nav currUser={currUser}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews reviewList={reviewList} />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
