import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsUpButton from "./components/whatsupButton/WhatsupButton";

import Home from "./pages/home/LandingPage";
import SEO from "./pages/seo/Seo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo" element={<SEO />} />
      </Routes>

      <Footer />
      <WhatsUpButton />
    </BrowserRouter>
  );
}

export default App;