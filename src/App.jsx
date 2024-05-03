import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import SignUp from './Pages/Registration/SignUp';
import About from "./Pages/aboutUs/About";
import Cart from "./Pages/cart/Cart";
import Checkout from './Pages/checkout/Checkout';
import Error from "./Pages/error/Error";
import Product from "./Pages/productDetail/ProductDetail";
import Contact from "./Pages/contact/Contact";
import Account from "./Pages/account/Account";
import Wishlist from "./Pages/wishlist/Wishlist";
import SingleCategoryPage from "./components/categories/SingleCategoryPage";
import AllProducts from "./Pages/allProducts/AllProducts";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*"  element={<Error/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/loginSignup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/productdetail/:id" element={<Product/>} />
        {/* Corrected Route */}
        <Route path="/category/:id" element={<SingleCategoryPage/>} />
      </Routes>
    </Router>
  );
}
