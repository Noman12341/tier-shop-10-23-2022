import "./App.css";
import {
  Home,
  DetailPage,
  ProductsPage,
  CartPage,
  CheckoutPage,
  AboutUs,
  ContactUs
} from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<DetailPage />} />
          <Route exact path="/products-page" element={<ProductsPage />} />
          <Route exact path="/cart-page" element={<CartPage />} />
          <Route exact path="/checkout-page" element={<CheckoutPage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
