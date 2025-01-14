

import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Products from "./Pages/user/Products";
import DetailedView from "./Pages/user/DetailedView";
import CardPage from "./components/user/CardPage/CartPage";
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/Details" element={ <DetailedView/> } />
        <Route path="/cart" element={<CardPage/>} />
      </Routes>
    </>
  );
}

export default App;
