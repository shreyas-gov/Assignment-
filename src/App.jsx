import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import {Route, Routes} from "react-router-dom";


function App() {
  const products = [
    {
      id: 1,
      name: "ASUS TUF Gaming F16",
      price: "₹1,49,999",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcylEUue0xa3bFth--qXu_7WR3q7Nx0Uvig&s",
    },
    {
      id: 2,
      name: "RGB Gaming Mouse",
      price: "₹2,999",
      image:
        "https://files.vplak.com/500-images/razer/VIPER-MINI/black/image-2.jpg",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: "₹5,999",
      image:
        "https://spinbot.co.in/cdn/shop/files/Gallery_Image_MK87_Keyboard_3_acf4d99c-2064-4a19-8160-c9a7f3121f62.jpg?v=1769774103&width=1946",
    },
    {
      id: 4,
      name: "Gaming Headset",
      price: "₹4,798",
      image:
        "https://m.media-amazon.com/images/I/61B98PewkeL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      
      <Hero />

      <section className="products">
        <h2>Best Deals For Today's</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Routes>
        <Route path="/about" element={<About/>} />       
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;