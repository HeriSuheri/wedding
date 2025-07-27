import { useState, useEffect } from "react";

const RSVP = ({ setNotification }) => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [guestList, setGuestList] = useState([]);
  const [guests, setGuests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [guestsPerPage, setGuestsPerPage] = useState(10);
  const [totalGuests, setTotalGuests] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [attendanceFilter, setAttendanceFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchGuests = async () => {
    try {
      setLoading(true);

      // Simulasi delay 500ms
      await new Promise((resolve) => setTimeout(resolve, 500));

      const params = new URLSearchParams({
        page: currentPage,
        limit: guestsPerPage,
        ...(search && { search }),
        ...(attendanceFilter !== "all" && { attendance: attendanceFilter }),
      });

      //   const response = await fetch(
      //     `http://localhost:5000/api/guests?${params}`
      //   );

      const response = await fetch(
        `https://weddingserver-production.up.railway.app/api/guests?${params}`
      );
      const data = await response.json();

      setGuests(data.guests);
      setTotalPages(data.pagination.totalPages);
      setTotalGuests(data.pagination.totalGuests);
    } catch (err) {
      setNotification(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRSVP = async () => {
    if (!formData.name.trim()) {
      setNotification("Harap isi nama Anda");
      return;
    }

    if (formData.attendance === "") {
      setNotification("Harap pilih kehadiran");
      return;
    }

    setIsLoading(true);

    try {
      // Simulasi delay 500ms
      await new Promise((resolve) => setTimeout(resolve, 500));

      //   const response = await fetch("http://localhost:5000/api/rsvp", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(formData),
      //   });

      const response = await fetch(
        "https://weddingserver-production.up.railway.app/api/rsvp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setNotification("Konfirmasi berhasil dikirim !");
      setFormData({ name: "", attendance: true, message: "" });
      fetchGuests();
    } catch (error) {
      setNotification(`Error: ${error.message}`);
      setFormData({
        name: "",
        attendance: "",
        message: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGuests();
    }, 300);
    return () => clearTimeout(timer);
  }, [currentPage, search, guestsPerPage, attendanceFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, guestsPerPage, attendanceFilter]);

  const visiblePages = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Jika dekat awal
  if (currentPage <= 3) {
    startPage = 1;
    endPage = Math.min(5, totalPages);
  }

  // Jika dekat akhir
  if (currentPage >= totalPages - 2) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <section id="rsvp" className="py-16 px-4 bg-[#fff4f9] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-gray-600 mb-8">
          Isi form di bawah ini untuk melakukan konfirmasi kehadiran.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          <div className="w-full">
            <label
              htmlFor="nama"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Nama Lengkap"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="jumlah"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Jumlah
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              min="1"
              max="5"
              defaultValue="1"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="status"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Konfirmasi
            </label>
            <select
              name="status"
              id="status"
              value={
                formData.attendance === true
                  ? "true"
                  : formData.attendance === false
                  ? "false"
                  : ""
              }
              onChange={(e) => {
                const value = e.target.value;
                setFormData({
                  ...formData,
                  attendance:
                    value === "true" ? true : value === "false" ? false : "",
                });
              }}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            >
              <option value="">Pilih salah satu</option>
              <option value="true">Hadir</option>
              <option value="false">Tidak Hadir</option>
            </select>
          </div>

          <div className="w-full">
            <label
              htmlFor="nama"
              className="block text-left text-sm font-medium text-gray-700 mb-1"
            >
              Pesan atau Do'a
            </label>
            <textarea
              type="text-area"
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Isi Pesan atau Do'a disini"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          <div className="col-span-full mt-4 mb-20">
            <button
              onClick={handleRSVP}
              className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition"
            >
              Kirim
            </button>
            {isLoading && (
              <span style={{ marginLeft: "10px" }}>Mengirim Konfirmasi...</span>
            )}
          </div>
        </div>

        <div className="mt-10 space-y-6 text-left">
          {/* Heading dan Search Input */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Ucapan atau Do'a dari Tamu 💌
            </h3>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Tamu ..."
              className="border border-pink-300 rounded-md p-1.5 w-[140px] text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          {/* Daftar tamu */}
          {loading ? (
            "Memuat Data ..."
          ) : guests.filter(
              (guest) =>
                !search ||
                guest.name.toLowerCase().includes(search.toLowerCase()) ||
                guest.message.toLowerCase().includes(search.toLowerCase())
            ).length === 0 ? (
            <p className="text-gray-500 italic text-center">
              Tamu tidak ditemukan 😢
            </p>
          ) : (
            guests
              .filter(
                (guest) =>
                  !search ||
                  guest.name.toLowerCase().includes(search.toLowerCase()) ||
                  guest.message.toLowerCase().includes(search.toLowerCase())
              )
              .map((guest, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow">
                  <p className="text-pink-600 font-medium mb-1">{guest.name}</p>
                  <p className="text-gray-700 italic">“{guest.message}”</p>
                </div>
              ))
          )}
        </div>
        <div className="flex gap-1 items-center mt-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            &lt;
          </button>
          {visiblePages.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNum
                  ? "bg-wedding-gold text-white"
                  : "bg-gray-200"
              }`}
            >
              {pageNum}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-2 text-left">
          Menampilkan {guests.length} dari {totalGuests} tamu
        </div>
      </div>
    </section>
  );
};

export default RSVP;
