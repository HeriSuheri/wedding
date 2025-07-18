import "../style/Home.css";
import { useFadeOnInScroll } from "../hooks/useFadeOnInScroll";

const Home = () => {
  const [ref, isVisible] = useFadeOnInScroll();

  return (
    <section id="home" ref={ref} className={isVisible ? "fade-in" : ""}>
      <div className="home-wrapper">
        <div className="intro-text">
          <h2>Acara Pernikahan</h2>
          <div className="divider"></div>
          <h3>
            Diselenggarakan pada 10 Agustus 2025 di Majalengka, Jawa Barat.
          </h3>
          <p>
            Oleh karena itu, dengan segala hormat, kami bermaksud untuk
            mengundang Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan
            kami.
          </p>
        </div>

        <div className="couple-section">
          <div className="row couple-row">
            <div className="col-6 couple-box">
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

            <div className="col-6 couple-box">
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
        <p className="quote text-center mt-10">
          “Cinta bukan saling menatap, tapi melihat ke arah yang sama.”
        </p>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default Home;
