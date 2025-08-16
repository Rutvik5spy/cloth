import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import NoRestock from "./pages/NoRestock";
import Navbar from "./Components/Navbar";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import Account from "./pages/Account";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
    <Router>
      <div className="mt-20 p-4">
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="/no-restock" element={<NoRestock />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </div>
    </Router>
    </SearchProvider>
    </CartProvider>
  );
}

export default App;
