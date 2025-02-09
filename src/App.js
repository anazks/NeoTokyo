

import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Products from "./Pages/user/Products";
import DetailedView from "./Pages/user/DetailedView";
import CardPage from "./components/user/CardPage/CartPage";
import Login from "./Pages/user/Login";
import Recomends from "./components/user/Recomendation/Recomends";
import SupportPage from "./Pages/user/SupportPage";
// import AboutUs from "./components/user/AboutUs/AboutUs";
// import Login from "./components/user/Login/Login";
import AboutUs from "./Pages/user/AboutUs";
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/products" element={ <Products/> } />
        <Route path="/Details" element={ <DetailedView/> } />
        <Route path="/cart" element={<CardPage/>} />
        <Route path="/special" element = {<Recomends/>} />
        <Route path="/Support" element = {<SupportPage/>} />
        <Route path="/about" element = {<AboutUs/>} />

      </Routes>
    </>
  );
}

export default App;
