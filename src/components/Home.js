import { useState, useEffect } from "react";
import "../style/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🚀 Animasi bisa jalan tiap kali masuk viewport
      mirror: true, // ✅ Trigger animasi saat scroll balik ke atas
    });
  }, []);

  return (
    <section id="home">
      <div className="home-wrapper">
        <div className="intro-text">
          <h2 data-aos="fade-down" data-aos-delay="90">Acara Pernikahan</h2>
          <div className="divider"></div>
          <h3 data-aos="fade-left" data-aos-delay="100">
            Diselenggarakan pada 10 Agustus 2025 di Majalengka, Jawa Barat.
          </h3>
          <p data-aos="fade-right" data-aos-delay="300">
            Oleh karena itu, dengan segala hormat, kami bermaksud untuk
            mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
            kami.
          </p>
        </div>

        <div className="couple-section">
          <div className="row couple-row">
            <div className="col-6 couple-box" data-aos="fade-up" data-aos-delay="500">
              <div className="text-end">
                <h3>Herry</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  praesentium aut ipsa perferendis, incidunt soluta?
                </p>
              </div>
              <div className="img-wrapper">
                <img
                  src="/img/Me.jpeg"
                  alt="Herry"
                  className="img-responsive rounded-circle"
                />
              </div>
            </div>

            {/* <div className="divider"></div> */}

            <div className="col-6 couple-box" data-aos="fade-up" data-aos-delay="700">
              <div className="text-left">
                <h3>Dedeh</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  praesentium aut ipsa perferendis, incidunt soluta?
                </p>
              </div>
              <div className="img-wrapper">
                <img
                  src="/img/Ay.jpeg"
                  alt="Dedeh"
                  className="img-responsive rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="quote text-center mt-10" data-aos="zoom-in" data-aos-delay="500">
          “Cinta bukan saling menatap, tapi melihat ke arah yang sama.”
        </p>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default Home;
