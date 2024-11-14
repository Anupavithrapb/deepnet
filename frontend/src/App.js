

// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import FoodPage from './Components/Pages/FoodPage';
// import DrinksPage from './Components/Pages/DrinksPage';
// import BrunchPage from './Components/Pages/BrunchPage';
// import MenuPage from './Components/Pages/MenuPage';

// function App() {
//   return (
//     <Router>
//       <div>
//         <h1>Menu</h1>
//         <Routes>
//         <Route path="/" element={<MenuPage />} />
//           <Route path="/menu/food" element={<FoodPage />} />
//           <Route path="/menu/drinks" element={<DrinksPage />} />
//           <Route path="/menu/brunch" element={<BrunchPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import FoodPage from './Components/Pages/FoodPage';
import DrinksPage from './Components/Pages/DrinksPage';
import BrunchPage from './Components/Pages/BrunchPage';
import MenuPage from './Components/Pages/MenuPage';
import Footer from './Components/Pages/Footer';


function App() {
  return (
    <Router>
     <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/brunch" element={<BrunchPage />} />
        <Route path="/drink" element={<DrinksPage />} />
        
      </Routes>
      <Footer/>
      </div>
      
    </Router>
   
  );
}


export default App;
