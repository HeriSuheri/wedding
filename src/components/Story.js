import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    title: "Pertama Bertemu",
    date: "1 Juni 2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, modi autem? Commodi autem quo quia?",
    image: "https://picsum.photos/302/302",
  },
  {
    title: "Mulai Serius",
    date: "1 Januari 2005",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto enim eaque obcaecati odit itaque explicabo quisquam quos at.",
    image: "https://picsum.photos/300/300",
  },
  {
    title: "Tunangan",
    date: "7 November 2009",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, deleniti distinctio. Esse quas sit explicabo corporis magni qui expedita a.",
    image: "https://picsum.photos/301/301",
  },
];

const Story = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🚀 Animasi bisa jalan tiap kali masuk viewport
      mirror: true, // ✅ Trigger animasi saat scroll balik ke atas
    });
  }, []);

  return (
    <section id="story" className="py-16 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        {/* Text Header */}
        <div
          className="text-center mb-16"
          data-aos="zoom-in-up"
          data-aos-delay="50"
        >
          <h2 className="text-3xl font-bold text-pink-500">Cerita Kami</h2>
          <span
            className="block text-sm text-gray-500 font-bold mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bagaimana Cinta Kami Bersemi
          </span>
          <p
            className="text-gray-600 mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            similique non soluta nulla asperiores voluptatem.
          </p>
        </div>

        {/* Garis Vertikal mulai setelah header */}
        <div className="hidden md:block absolute left-1/2 top-[250px] transform -translate-x-1/2 w-1 bg-wedding-gold h-[calc(100%-250px)] z-0" />

        {/* Timeline Items */}
        <div className="space-y-24 relative z-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:justify-between ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className="relative w-full md:w-[40%] h-[250px]"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div
                  className="w-full h-full bg-center bg-cover shadow-md"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Titik bulat di tengah */}
                {/* <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-wedding-gold border-4 border-white rounded-full z-20 shadow-md" /> */}
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-[55%] relative ${
                  index % 2 === 1 ? "md:pl-12 md:items-end" : "md:pr-12"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
                data-aos="fade-right"
                data-aos-delay="110"
              >
                <div
                  className={`relative max-w-lg p-5 shadow-md ${
                    index % 2 === 1
                      ? "ml-auto bg-white rounded-tl-3xl rounded-bl-3xl rounded-tr-md"
                      : "mr-auto bg-white rounded-tr-3xl rounded-br-3xl rounded-tl-md"
                  }`}
                >
                  {/* Segitiga Chat Arrow */}
                  <div
                    className={`absolute top-6 ${
                      index % 2 === 1 ? "-right-3" : "-left-3"
                    } w-0 h-0 border-t-8 border-b-8 border-transparent ${
                      index % 2 === 1
                        ? "border-l-8 border-l-white"
                        : "border-r-8 border-r-white"
                    }`}
                  />

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-500 mb-2 block">
                    {item.date}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
