import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Home.css";
import Guest from "./Guest";

const FormGuest = () => {
  const [showGuestList, setShowGuestList] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attendance: true,
    message: "",
  });
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowGuests = () => {
    setShowGuestList(!showGuestList);
  };

  const handleRSVP = async () => {
    if (!formData.name.trim()) {
      setNotification("Harap isi nama Anda");
      return;
    }

    setIsLoading(true);
    try {
      // const response = await fetch("http://localhost:5000/api/rsvp", {
        const response = await fetch("https://weddingserver-production.up.railway.app/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("RESPONSE:", response);
      const data = await response.json();
      console.log("RESPONSE:", data);
      setNotification("Konfirmasi berhasil dikirim !");
      setShowGuestList(false);
      setFormData({ name: "", attendance: true, message: "" });
    } catch (error) {
      setNotification(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🚀 Animasi bisa jalan tiap kali masuk viewport
      mirror: true, // ✅ Trigger animasi saat scroll balik ke atas
    });
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <section id="form-guest" data-aos="fade-up">
      <div className="bg-blue-100 min-h-screen p-8">
        {/* Notification */}
        {notification && (
          <div className="fixed top-4 right-4 z-50 notification-wrapper">
            <div
              className={`relative text-white px-4 py-3 pr-8 rounded-md shadow-lg ${
                notification.includes("Error") ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {/* Konten Notifikasi */}
              <div className="relative">
                {notification}
                {/* Tombol Close di pojok kanan atas teks */}
                <button
                  onClick={() => setNotification(null)}
                  className="absolute -top-5 -right-8 text-white hover:text-gray-200 text-lg"
                >
                  ×
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div className="h-full bg-white animate-[progress_5s_linear_forwards]" />
              </div>
            </div>
          </div>
        )}

        <h1 className="text-3xl font-bold text-blue-800 text-center" data-aos="fade-right" data-aos-delay="300">
          Konfirmasi kehadiran
        </h1>
        <h1 className="animate-pulse text-wedding-gold text-center mt-2" data-aos="fade-left" data-aos-delay="400">
          Kami Menunggu Kehadiran Anda!
        </h1>

        {/* Form RSVP */}
        <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow" data-aos="zoom-in" data-aos-delay="500">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nama Lengkap"
            className="w-full px-4 py-2 border rounded mb-3"
          />
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Pesan (opsional)"
            className="w-full px-4 py-2 border rounded mb-3"
          />
          <label className="flex items-center mb-3">
            <input
              type="checkbox"
              checked={formData.attendance}
              onChange={(e) =>
                setFormData({ ...formData, attendance: e.target.checked })
              }
              className="mr-2"
            />
            Saya akan hadir
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center" data-aos="fade-up" data-aos-delay="500">
          <button
            onClick={handleRSVP}
            disabled={isLoading}
            className="px-6 py-3 bg-wedding-gold text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? "Mengirim..." : "Konfirmasi Kehadiran"}
          </button>

          <button
            onClick={handleShowGuests}
            className="px-6 py-3 bg-wedding-blue text-white rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            {showGuestList ? "Tutup Daftar" : "Lihat Daftar Tamu"}
          </button>
        </div>

        {showGuestList && <Guest />}
      </div>
    </section>
  );
};

export default FormGuest;
