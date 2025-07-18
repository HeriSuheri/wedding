import simplyCountdown from "simplycountdown.js";
import "../style/Main.css";
import { useEffect } from "react";

const Main = (props) => {
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };
//   props.showNav(false);

  useEffect(() => {
    const countdownContainer = document.getElementById("countdown");
    if (countdownContainer && countdownContainer.childNodes.length === 0) {
      simplyCountdown("#countdown", {
        year: 2025,
        month: 8,
        day: 10,
        hours: 9,
        minutes: 0,
        seconds: 0,
        words: {
          days: { root: "Hari", lambda: (r, n) => r },
          hours: { root: "Jam", lambda: (r, n) => r },
          minutes: { root: "Menit", lambda: (r, n) => r },
          seconds: { root: "Detik", lambda: (r, n) => r },
        },
        plural: false,
        inline: false,
        enableUtc: false,
      });
    }
  }, []);

  return (
    <section id="main">
      <main>
        <h4>
          Kepada <span>Bapak/Ibu/Saudara/i, </span>
        </h4>
        <h1>Herry & Dedeh</h1>
        <p>Akan melangsungkan resepsi pernikahan dalam:</p>
        <div id="countdown" className="simply-countdown"></div>
        <button
          className="btn mt-4"
          onClick={() => {
            const target = document.getElementById("home");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
            props.showNav(true);
          }}
        >
          Lihat Undangan
        </button>
      </main>
    </section>
  );
};

export default Main;
