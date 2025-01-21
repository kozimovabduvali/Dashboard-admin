import { useState } from "react";
import { FaEllipsisV, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import IconMenu from "../assets/svg/menu.svg";
import IconVideoPlay from "../assets/svg/videoplay.svg";
import IconStroer from "../assets/svg/stroer.svg";
import expor from "../assets/img/export.png";
import filter from "../assets/img/filter.png";

const Table = () => {
  // Dummy data for the table (20 rows as per your request)
  const initialData = [
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181532",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 245 Nh. Trafostation",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181533",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 245 Nh. Trafostation",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181534",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 263-267 am S-Bf Adlershof",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181535",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 263-267 am S-Bf Adlershof",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181535",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 263/Höhe Radickestr.",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181536",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 263/Höhe Radickestr.",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181538",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 289",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181539",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. 289",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181544",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. Drosselsteg",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181545",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. Drosselsteg",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181544",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. Drosselsteg",
    },
    {
      anbieter: "Ströer",
      medium: "Public Video City",
      format: '10"',
      id: "181545",
      plz: "12489",
      ort: "Berlin",
      adresse: "Adlergestell geg. Drosselsteg",
    },
  ];

  // State for current page and rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);

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

  return (
    <div className="max-w-base mx-auto px-2 lg:px-5 pt-6 md:pt-9 xl:pt-12">
      <div className="bg-white">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b rounded-t-lg">
          <div className="flex items-center justify-between space-x-2 w-full pb-2">
            <div className="flex items-center space-x-2">
              <img src={IconMenu} alt="IconMenu" />
              <h2 className="text-lg font-semibold text-gray-800">
                Belegungsliste
              </h2>
            </div>
            <img src={filter} className="text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Table */}
        <div className="font-medium text-[0.9375rem]/[1.1344rem] text-dark overflow-x-auto poem whitespace-nowrap p-2.5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-gray-700 border-b uppercase text-sm">
              <tr>
                <th className="px-4 py-3">Anbieter</th>
                <th className="px-4 py-3">Medium</th>
                <th className="px-4 py-3">Format</th>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">PLZ</th>
                <th className="px-4 py-3">Ort</th>
                <th className="px-4 py-3">Adresse</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr key={index} className=" border-b last:border-none">
                  <td className="px-4 py-2 font-bold text-black">
                    <img
                      className="w-[60px] h-[60px]"
                      src={IconStroer}
                      alt="IconStroer"
                    />
                  </td>
                  <td className="font-medium text-[0.9375rem]/[1.1344rem] text-dark px-4 py-2">
                    {item.medium}
                  </td>
                  <td className="">
                    <div className="px-4 py-2 flex items-center gap-2.5">
                      <img src={IconVideoPlay} alt="IconVideoPlay" />
                      {item.format}
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.plz}</td>
                  <td className="px-4 py-2">{item.ort}</td>
                  <td className="px-4 py-2">{item.adresse}</td>
                  <td className="px-4 py-2 text-right">
                    <FaEllipsisV className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 border-t border-gray-200">
          {/* Rows per page */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <label htmlFor="rowsPerPage" className="font-medium text-[0.9375rem]/[18.15px] ">
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

          {/* Export Button */}
          <button className="border rounded-sm flex items-center justify-center gap-3 px-4 py-2 w-[15.625rem] transition duration-300 hover:border-dark">
            <img src={expor} />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
