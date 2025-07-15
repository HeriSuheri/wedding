import { useState, useEffect } from "react";

const Guest = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [guestsPerPage, setGuestsPerPage] = useState(10);
  const [totalGuests, setTotalGuests] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [attendanceFilter, setAttendanceFilter] = useState("all");

  // const fetchGuests = async () => {
  //   try {
  //     setLoading(true);
  //     const url = `http://localhost:5000/api/guests?page=${currentPage}&limit=${guestsPerPage}&search=${search}`;
  //     const response = await fetch(url);
  //     const { guests, totalPages, totalGuests } = await response.json();
  //     setGuests(guests);
  //     setTotalPages(totalPages);
  //     setTotalGuests(totalGuests);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchGuests = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage,
        limit: guestsPerPage,
        ...(search && { search }),
        ...(attendanceFilter !== "all" && { attendance: attendanceFilter }),
      });

      const response = await fetch(
        `http://localhost:5000/api/guests?${params}`
      );
      const data = await response.json();

      setGuests(data.guests);
      setTotalPages(data.pagination.totalPages);
      setTotalGuests(data.pagination.totalGuests);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  if (loading) return <div className="text-center py-8">Memuat data...</div>;
  if (error)
    return <div className="text-red-500 text-center py-8">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-wedding-gold mb-6">Daftar Tamu</h2>

      {/* <div className="flex justify-between mb-4">
        <select
          value={guestsPerPage}
          onChange={(e) => setGuestsPerPage(Number(e.target.value))}
          className="border p-1 rounded"
        >
          <option value="10">10 per halaman</option>
        </select>

        <input
          type="text"
          placeholder="Cari nama tamu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-blue"
        />
      </div> */}
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={attendanceFilter}
          onChange={(e) => setAttendanceFilter(e.target.value)}
          className="border p-1 rounded"
        >
          <option value="all">Semua Status</option>
          <option value="true">Hadir</option>
          <option value="false">Tidak Hadir</option>
        </select>

        <input
          type="text"
          placeholder="Cari nama tamu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-wedding-blue text-white">
            <tr>
              <th className="py-3 px-4 text-left">No</th>
              <th className="py-3 px-4 text-left">Nama</th>
              <th className="py-3 px-4 text-left">Konfirmasi</th>
              <th className="py-3 px-4 text-left">Pesan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {guests.length > 0 ? (
              guests.map((guest, index) => (
                <tr key={guest._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {(currentPage - 1) * guestsPerPage + index + 1}
                  </td>
                  <td className="py-3 px-4 font-medium">{guest.name}</td>
                  <td className="py-3 px-4">
                    {guest.attendance ? (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Hadir
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                        Tidak Hadir
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {guest.message || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-500">
                  {search
                    ? "Tidak ditemukan tamu dengan nama tersebut"
                    : "Belum ada tamu yang mengkonfirmasi"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-wedding-blue text-white rounded disabled:opacity-50"
        >
          Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-wedding-gold text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-wedding-blue text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> */}

      <div className="flex gap-1 items-center">
        {/* Tombol Previous */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Halaman Pertama */}
        {currentPage > 3 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-3 py-1 rounded bg-gray-200"
            >
              1
            </button>
            {currentPage > 4 && <span className="px-1">...</span>}
          </>
        )}

        {/* Halaman Sekitar Current */}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          let pageNum;
          if (currentPage <= 3) {
            pageNum = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageNum = totalPages - 4 + i;
          } else {
            pageNum = currentPage - 2 + i;
          }

          return (
            pageNum <= totalPages &&
            pageNum >= 1 && (
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
            )
          );
        })}

        {/* Halaman Terakhir */}
        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && <span className="px-1">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 rounded bg-gray-200"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Tombol Next */}
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

      <div className="text-sm text-gray-500 mt-2">
        Menampilkan {guests.length} dari {totalGuests} tamu
      </div>
    </div>
  );
};

export default Guest;
