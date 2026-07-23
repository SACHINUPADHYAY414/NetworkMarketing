import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsUpButton from "./components/whatsupButton/WhatsupButton";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Loader from "./components/Loader";

import Home from "./pages/home/LandingPage";
import SEO from "./pages/seo/Seo";
import AboutUs from "./pages/aboutUs/aboutUs";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";
import Audit from "./pages/audit/Audit";
import Smm from "./pages/smm/Smm";
import PerformanceMarketing from "./pages/pm/PerformanceMarketing";
import WebsiteDevlopement from "./pages/wd/WebsiteDevlopement";
import LocalSEO from "./pages/localSEO/LocalSEO";
import ContentCreation from "./pages/contentCreation/ContentCreation";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seo" element={<SEO />} />
            <Route path="/smm" element={<Smm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/audit" element={<Audit />} />
            <Route
              path="/performance-marketing"
              element={<PerformanceMarketing />}
            />
            <Route
              path="/website-developement"
              element={<WebsiteDevlopement />}
            />
            <Route path="/local-seo" element={<LocalSEO />} />
            <Route path="/content-creation" element={<ContentCreation />} />
          </Routes>

          <Footer />
          <WhatsUpButton />
        </>
      )}
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
