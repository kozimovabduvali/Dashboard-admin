import { useState } from "react";
import { FaEllipsisV, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import IconSound from "../assets/svg/sound.svg";
import activ from "../assets/img/activ.png";
import beendet from "../assets/img/beendet.png";
import vorbes from "../assets/img/vorbes.png";
import filter from "../assets/img/filter.png";

import {} from "react-icons/md";

const Table = () => {
  const initialData = [
    {
      kampagnenname: "C2C Kampagne Q4, 2024",
      standorte: "1.400",
      start: "08.09.2024",
      ende: "24.09.2024",
      erstellt: "08.08.2024",
      status: "Aktiv",
      report: "Ausstehend",
    },
    {
      kampagnenname: "Awareness Kampagne",
      standorte: "1.630",
      start: "02.06.2024",
      ende: "16.06.2024",
      erstellt: "02.05.2024",
      status: "In Vorbereitung",
      report: "Ausstehend",
    },
    {
      kampagnenname: "Aktivierungs Kampagne",
      standorte: "1.920",
      start: "01.05.2024",
      ende: "15.05.2024",
      erstellt: "27.04.2024",
      status: "Beendet",
      report: "Download",
    },
    {
      kampagnenname: "Produkt Kampagne",
      standorte: "1.550",
      start: "21.04.2024",
      ende: "09.05.2024",
      erstellt: "12.04.2024",
      status: "Beendet",
      report: "Download",
    },
  ];

  // State for current page and rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open

  // Calculate the current rows to display
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = initialData.slice(startIndex, endIndex);

  // Pagination logic
  const totalPages = Math.ceil(initialData.length / rowsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when rows per page changes
  };

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <div className="max-w-base mx-auto px-4 lg:px-5 pt-6 md:pt-9 xl:pt-12">
      <div className="border bg-gray-50">
        {/* Header */}
        <div className="flex justify-between items-center rounded-t-lg border-b px-5 py-3 lg:py-5">
          <div className="flex items-center gap-2.5 w-full">
            <img src={IconSound} alt="IconSound" />
            <p className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
              Ergebnisse Kampagne (aufgesplittet)
            </p>
          </div>
          <img src={filter} className="text-gray-700 cursor-pointer" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto whitespace-nowrap poem p-2.5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-[0.9375rems]/[1.1344rem] font-bold border-b">
              <tr>
                <th className="px-4 py-5">Kampagnenname</th>
                <th className="px-4 py-5">Standorte</th>
                <th className="px-4 py-5">Start</th>
                <th className="px-4 py-5">Ende</th>
                <th className="px-4 py-5">Erstellt</th>
                <th className="px-4 py-5">Status</th>
                <th className="px-4 py-5">Report</th>
                <th className="px-4 py-5"></th>
              </tr>
            </thead>
            <tbody className="odd:bg-gray-100">
              {currentData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none py-2 lg:py-4"
                >
                  <td className="px-4 py-2 lg:py-4 font-bold text-black flex items-center gap-2">
                    <div className="shrink-0 size-6 lg:size-[1.875rem] rounded-full border-[0.0187rem]"></div>

                    {item.kampagnenname}
                  </td>
                  <td className="px-4 py-2 lg:py-4">{item.standorte}</td>
                  <td className="px-4 py-2 lg:py-4 flex items-center gap-1">
                    {item.start}
                  </td>
                  <td className="px-4 py-2 lg:py-4">{item.ende}</td>
                  <td className="px-4 py-2 lg:py-4">{item.erstellt}</td>
                  <td className="px-4 py-2 lg:py-4 flex items-center gap-2">
                    {item.status === "Aktiv" && <img src={activ} />}
                    {item.status === "In Vorbereitung" && <img src={beendet} />}
                    {item.status === "Beendet" && <img src={vorbes} />}
                    <span>{item.status}</span>
                  </td>
                  <td className="px-4 py-2 lg:py-4">{item.report}</td>
                  <td className="px-4 py-2 lg:py-4 text-right relative">
                    <FaEllipsisV
                      className="text-gray-500 cursor-pointer"
                      onClick={() => handleDropdownToggle(index)}
                    />
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                        <div className="p-2">
                          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                            Cockpit
                          </button>
                          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                            Belegungskarte
                          </button>
                          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                            Belegungsliste
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 border-t border-gray-200">
        {/* Pagination */}
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <button
            className="p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <FaChevronLeft
              className={`text-gray-600 ${
                currentPage === 1 && "text-gray-300"
              }`}
            />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-2 py-1 text-sm font-medium ${
                currentPage === index + 1
                  ? "text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-2 bg-gray-100 rounded hover:bg-gray-200"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight
              className={`text-gray-600 ${
                currentPage === totalPages && "text-gray-300"
              }`}
            />
          </button>
        </div>
        {/* Rows per page */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <label
            htmlFor="rowsPerPage"
            className="font-medium text-[0.9375rem]/[18.15px] "
          >
            pro Seite
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="p-1 border rounded text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
