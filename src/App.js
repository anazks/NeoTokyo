

import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Products from "./Pages/user/Products";
import DetailedView from "./Pages/user/DetailedView";
function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/Details" element={ <DetailedView/> } />

      </Routes>
    </>
  );
}

export default App;
