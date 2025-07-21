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
        <div className="intro">
          <div
            className="flex justify-center items-center gap-6 mt-3"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          >
            <img
              src="/img/Ay.jpeg"
              alt="Istri"
              className="w-60 h-36 object-cover rounded-[999px] shadow-md transition-transform duration-300 hover:scale-110"
            />
            {/* <img
              src="/img/Me.jpeg"
              alt="Suami"
              className="w-28 h-40 object-cover rounded-full shadow-md"
            /> */}
          </div>
          <p
            className="text-center text-xs italic text-gray-600"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            “Cinta bukan saling menatap, tapi melihat ke arah yang sama.”
          </p>
          <p
            className="quote text-center italic mt-10"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            "Dan di antara ayat-ayat-Nya ialah Dia menciptakan untukmu
            istri-istri dari jenismu sendiri, supaya kamu merasa nyaman
            kepadanya, dan dijadikan-Nya di antaramu mawadah dan
            rahmah.Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir".
          </p>
          <p
            className="quote text-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Ar-Rum:21
          </p>
        </div>
        <div className="divider"></div>
        <p
          className="quote text-center italic font-bold text-2xl mt-10"
          data-aos="zoom-in-up"
          data-aos-delay="70"
        >
          Assalamu'alaikum Wr. Wb.
        </p>
        <p
          className="quote text-center mt-5"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          Tanpa mengurangi rasa hormat, perkenankan kami mengundang
          Bapak/Ibu/Saudara/i , serta kerabat sekalian, untuk menghadiri acara
          pernikahan kami.
        </p>
        <div className="couple-section">
          <div className="row couple-row">
            <div
              className="col-6 couple-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="text-end">
                <h3>Mempelai Laki</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  praesentium aut ipsa perferendis, incidunt soluta?
                  <br />
                  <span className="italic text-xs font-bold">- Herry -</span>
                </p>
              </div>
              <div className="img-wrapper">
                <img
                  src="/img/Me.jpeg"
                  alt="Herry"
                  className="img-responsive rounded-circle transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* <div className="divider"></div> */}

            <div
              className="col-6 couple-box"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="text-left">
                <h3>Mempelai Wanita</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  praesentium aut ipsa perferendis, incidunt soluta?
                  <br />
                  <span className="italic text-xs font-bold">- Dedeh -</span>
                </p>
              </div>
              <div className="img-wrapper">
                <img
                  src="/img/Ay.jpeg"
                  alt="Dedeh"
                  className="img-responsive rounded-circle transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-wrapper">
        <div className="intro-text">
          <h2 data-aos="fade-down" data-aos-delay="90">
            Acara Pernikahan
          </h2>
          {/* <div className="divider"></div> */}
          <h3 data-aos="fade-left" data-aos-delay="100">
            Diselenggarakan pada 10 Agustus 2025 di Majalengka, Jawa Barat.
          </h3>
          {/* <p data-aos="fade-right" data-aos-delay="300">
            Oleh karena itu, dengan segala hormat, kami bermaksud untuk
            mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
            kami.
          </p> */}
        </div>

        {/* <p
          className="quote text-center mt-10"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          “Cinta bukan saling menatap, tapi melihat ke arah yang sama.”
        </p>
        <div className="divider"></div> */}
      </div>
    </section>
  );
};

export default Home;
