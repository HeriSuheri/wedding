import { useState, useEffect } from "react";
import FormGuest from "./components/FormGuest";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <FormGuest />
      </main>
      <div className="bg-gray-100 h-20 flex items-center justify-center">
        <footer className="text-center text-xs text-gray-500 py-4">
          &copy; 2025 Heri Wedding
        </footer>
      </div>
    </div>
  );
}

export default App;
