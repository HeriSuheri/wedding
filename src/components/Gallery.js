// components/Gallery.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

SwiperCore.use([Autoplay, Pagination]);

// const galleryImages = [   // ambil dari folder public
//   "/img/gallery1.jpg",
//   "/img/gallery2.jpg",
//   "/img/gallery3.jpg",
//   "/img/gallery4.jpg",
//   "/img/gallery5.jpg",
//   "/img/gallery6.jpg",
//   "/img/gallery7.jpg",
// ];

const galleryImages = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/350/250?random=2',
  'https://picsum.photos/320/320?random=3',
  'https://picsum.photos/302/302?random=4',
  'https://picsum.photos/300/400?random=5',
  'https://picsum.photos/330/300?random=6',
  'https://picsum.photos/300/300?random=7',
];

// const galleryImages = Array.from({ length: 7 }, () => 'https://picsum.photos/302/302');

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-[#fef8f4] to-[#f7f2ec]">
      <div className="max-w-5xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-500">Gallery Cerita Kami</h2>
        <p className="text-gray-500 font-bold mt-2">Kenangan indah kami bersama</p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
      >
        {galleryImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
