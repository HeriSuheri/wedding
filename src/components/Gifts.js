import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Gifts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🚀 Animasi bisa jalan tiap kali masuk viewport
      mirror: true, // ✅ Trigger animasi saat scroll balik ke atas
    });
  }, []);

  const rekeningList = [
    {
      bank: "BCA",
      logo: "/img/bca.png", //  folder publik
      accountName: "Heri Suheri",
      accountNumber: "6331388251",
    },
    {
      bank: "Mandiri",
      logo: "/img/mandiri.jpg",
      accountName: "Dedeh Yunengsih",
      accountNumber: "1122334455",
    },
  ];

  return (
    <section id="gifts" className="py-16 px-4 bg-blue-100 text-center pb-10">
      <div
        className="max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <h2 className="text-3xl font-bold text-pink-500 mb-2">
          Kirim Hadiah 💝
        </h2>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ungkapan Tanda Kasih
        </p>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kehadiran Anda sudah sangat berarti bagi kami. Namun jika ingin
          mengirimkan tanda kasih secara digital, hadiah bisa di kirimkan ke
          rekening :
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rekeningList.map((rek, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-left"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={rek.logo}
                  alt={rek.bank}
                  className="w-15 h-10 object-contain"
                />
                <h3
                  className="text-lg font-semibold text-gray-800"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {rek.bank}
                </h3>
              </div>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                a.n. <span className="font-medium">{rek.accountName}</span>
              </p>
              <p
                className="text-gray-900 font-mono text-lg tracking-wider mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {rek.accountNumber}
              </p>
              <button
                onClick={() => navigator.clipboard.writeText(rek.accountNumber)}
                className="mt-3 text-sm text-pink-500 underline hover:text-pink-600 transition"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Salin Nomor Rekening
              </button>
            </div>
          ))}
        </div>
        <p
          className="text-lg font-semibold mt-20 text-wedding-gold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i sekalian,{" "}
          <br />
          kami mengucapkan Terima kasih
        </p>
        <h2
          className="quote text-center italic font-bold text-4xl mt-5 text-wedding-gold"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Wassalamu'alaikum Wr. Wb.
        </h2>

        <h2
          className="quote text-center italic font-bold text-4xl mt-5 text-wedding-gold"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Herry & Dedeh
        </h2>
      </div>
    </section>
  );
};

export default Gifts;
