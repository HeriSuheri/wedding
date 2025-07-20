import { useState, useEffect } from "react";
import AOS from "aos";
import FormGuest from "./components/FormGuest";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Scroll naik dan mentok ke atas
      if (currentScrollY < lastScrollY && currentScrollY === 0) {
        setShowNavbar(false);
      }
      // Scroll turun dari atas
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      AOS.refreshHard(); // force AOS re-calculate posisi semua elemen
    };

    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-blue-100 flex-grow">
        <Main showNav={setShowNavbar} />
        {showNavbar && <Navbar />}
        <div id="home">
          <Home />
        </div>
        <div id="form-guest">
          <FormGuest />
        </div>
      </main>
      <div className="bg-gray-100 h-20 flex items-center justify-center">
        <footer className="text-center text-xs text-gray-500 py-4">
          &copy; 2025 Heri Wedding
        </footer>
      </div>
    </div>
  );
}

export default App;
