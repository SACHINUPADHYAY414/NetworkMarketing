import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsUpButton from "./components/whatsupButton/WhatsupButton";

import Home from "./pages/home/LandingPage";
import SEO from "./pages/seo/Seo";
import AboutUs from "./pages/aboutUs/aboutUs";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Faq from "./pages/faq/Faq";
import Audit from "./pages/audit/Audit";
import Smm from "./pages/smm/Smm";
import PerformanceMarketing from "./pages/pm/PerformanceMarketing";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/smm" element={<Smm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/performance-marketing" element={<PerformanceMarketing />}/>
      </Routes>

      <Footer />
      <WhatsUpButton />
    </BrowserRouter>
  );
}

export default App;
