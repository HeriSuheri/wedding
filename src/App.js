import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import FormGuest from "./components/FormGuest";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./components/Home";
import InfoAcara from "./components/InfoAcara";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Gifts from "./components/Gifts";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showDisc, setShowDisc] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [notif, setNotif] = useState(null);
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

  const showUndangan = () => {
    setShowContent(true);
    setTimeout(() => {
      const target = document.getElementById("home");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
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

  useEffect(() => {
    if (notif) {
      const timer = setTimeout(() => {
        setNotif(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notif]);

  return (
    <div className="flex flex-col min-h-screen">
      {notif && (
        <div className="fixed top-4 right-4 z-50 notification-wrapper">
          <div
            className={`relative text-white px-4 py-3 pr-8 rounded-md shadow-lg ${
              notif.includes("Error") ? "bg-red-500" : "bg-green-500"
            }`}
          >
            <div className="relative">
              {notif}
              <button
                onClick={() => setNotif(null)}
                className="absolute -top-5 -right-8 text-white hover:text-gray-200 text-lg"
              >
                ×
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div className="h-full bg-white animate-[progress_5s_linear_forwards]" />
            </div>
          </div>
        </div>
      )}
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
              !isMuted ? "text-red-500 animate-disc-motion" : "text-green-500"
            }`}
          >
            {!isMuted ? "⏸️" : "▶️"}
          </span>
        </button>
      )}
      <main className="bg-blue-100 flex-grow">
        <Main
          showNav={setShowNavbar}
          playAudio={playAudio}
          showUndangan={showUndangan}
        />
        {showNavbar && <Navbar />}

        {showContent && (
          <>
            <div id="home">
              <Home />
            </div>
            <div id="InfoAcara">
              <InfoAcara />
            </div>
            <div id="story">
              <Story />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="rsvp">
              <Rsvp setNotification={setNotif} />
            </div>
            <div id="gifts">
              <Gifts />
            </div>
            {/* <div id="form-guest">
              <FormGuest setNotification={setNotif}/>
            </div> */}
          </>
        )}
      </main>
      <footer className="bg-gray-400 text-gray-900 text-sm px-6 py-7">
        {/* Copyright Tetap Tengah */}
        <p className="w-full text-center text-xs mb-50">
          &copy; 2025 Heri Wedding. All rights reserved.
        </p>
        <div className="mt-2 text-left text-md">
          ✨ Design by Hery Suhery ✨
        </div>
        <div className="mt-2 text-left text-xs italic">
          ingin undangan digital seperti ini ? <br />
          Hubungi :
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center md:items-start mt-30">
          {/* Icon Sosial Media: Selalu rata kiri */}
          <div className="flex gap-4 text-xl w-full md:w-auto justify-start">
            <a
              href="https://wa.me/6285214210194"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp hover:text-green-500 transition" />
            </a>

            <a
              href="https://www.instagram.com/herysuhery22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-pink-600 transition" />
            </a>

            <a
              href="https://github.com/HeriSuheri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github hover:text-gray-700 transition" />
            </a>

            <a
              href="http://facebook.com/herry.ricardo.18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f hover:text-blue-600 transition" />
            </a>

            <a
              href="https://www.youtube.com/@herysuhery9158"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube hover:text-red-600 transition" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover:text-sky-600 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/hery-suhery- 3b24ab1b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in hover:text-blue-500 transition" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
