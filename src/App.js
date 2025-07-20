import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import FormGuest from "./components/FormGuest";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./components/Home";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDisc, setShowDisc] = useState(false);
  const audioRef = useRef(null);

  // Function buat toggle audio manual via icon
  const toggleAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);

      if (!audioRef.current.muted) {
        audioRef.current
          .play()
          .catch((e) => console.log("Autoplay blocked:", e));
      }
    }
  };

  // Function buat aktifkan musik dari Main (langsung play)
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current
        .play()
        .then(() => setShowDisc(true)) // 💿 muncul setelah musik aktif
        .catch((e) => console.log("Autoplay blocked:", e));
    }
  };
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
      <audio ref={audioRef} muted={isMuted} loop>
        <source src="/audio/rahasia hati.mp3" type="audio/mp3" />
      </audio>

      {showDisc && (
        <button
          onClick={toggleAudio}
          className="fixed bottom-4 right-4 z-[9999] bg-wedding-gold rounded-full p-3 shadow-md hover:scale-105 transition-transform"
        >
          <span
            className={`text-xl ${
              !isMuted
                ? "text-red-500 animate-disc-motion" 
                : "text-green-500" 
            }`}
          >
            {!isMuted ? "⏸️" : "▶️"}
          </span>
        </button>
      )}
      <main className="bg-blue-100 flex-grow">
        <Main showNav={setShowNavbar} playAudio={playAudio} />
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
