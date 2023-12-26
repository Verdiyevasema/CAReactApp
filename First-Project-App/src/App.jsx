import { Routes, Route } from "react-router-dom"
import Footer from "./layout/footer";
import Header from "./layout/header";
import HomePage from "./pages/home-page/home";
import AboutPage from "./pages/about-page";
import ProductsPage from "./pages/products-page";
import ProductDetails from "./pages/products-details";
import ErrorPage from "./pages/not-found"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
