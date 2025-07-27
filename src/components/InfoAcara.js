import "../style/InfoAcara.css";

const InfoAcara = () => {
  return (
    <section
      id="infoAcara"
      className="relative py-10 px-6 text-white w-full min-h-[60vh] md:min-h-[80vh]"
      style={{
        backgroundImage: "url('/img/InfoAcara3.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 mt-10" style={{ fontFamily: "'Great Vibes', cursive" }}>Informasi Acara</h2>
          <p
            className="mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: "#5a3e2b"}}
          >
            Alamat: Jl.Bojong Indah RT/RW 01/06 No.6 <br />
            Pondok kelapa, Duren Sawit - Jakarta Timur
          </p>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.359732941108!2d107.616864!3d-6.9097349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e635c9284fc1%3A0x268bddf9bd0971c0!2sKologdam!5e0!3m2!1sen!2ssg!4v1693486483694!5m2!1sen!2ssg"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-md my-4"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.3775417229301!2d106.92888914381416!3d-6.233256808616087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d9a04cad607%3A0x198a4b56d4c65ddb!2sFahmi%20furniture%20%26%20interior!5e0!3m2!1sen!2sid!4v1753078951850!5m2!1sen!2sid"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href="https://maps.app.goo.gl/5rWTaMBxQ1Sky1uT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-wedding-gold text-white px-4 py-2 rounded-full text-sm hover:brightness-110 transition my-3"
          >
            Klik untuk membuka peta
          </a>

          <p
            className="text-sm text-gray-600 mt-2"
            style={{ fontFamily: "'Playfair Display', serif", color: "#5a3e2b"}}
          >
            Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di
            tujuan namun tidak ada tanda-tanda sedang dilangsungkan pernikahan,
            boleh jadi Anda salah jadwal, atau salah tempat.
          </p>
        </div>

        {/* Card Info */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {/* Akad Nikah */}
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center w-full md:w-1/2">
            <h3
              className="text-lg font-semibold mb-2 text-wedding-gold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Akad Nikah
            </h3>
            <div className="flex justify-around mb-4 font-semibold text-lg text-wedding-gold">
              <div>
                <i className="bi bi-clock block mb-1"></i>
                <span>08.00 - 10.00</span>
              </div>
              <div>
                <i className="bi bi-calendar3 block mb-1"></i>
                <span>Minggu, 10 Agustus 2025</span>
              </div>
            </div>
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Playfair Display', serif" , color: "#5a3e2b"}}
            >
              Saat acara akad diharapkan untuk kondusif menjaga kekhidmatan dan
              kekhusyuan seluruh prosesi.
            </p>
          </div>

          {/* Resepsi */}
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center w-full md:w-1/2">
            <h3
              className="text-lg font-semibold mb-2 text-wedding-gold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Resepsi
            </h3>
            <div className="flex justify-around mb-4 font-semibold text-lg text-wedding-gold">
              <div>
                <i className="bi bi-clock block mb-1"></i>
                <span>11.00 - selesai</span>
              </div>
              <div>
                <i className="bi bi-calendar3 block mb-1"></i>
                <span>Minggu, 10 Agustus 2025</span>
              </div>
            </div>
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mohon hadir dengan bahagia dan menjaga ketertiban demi kelancaran
              acara resepsi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoAcara;
