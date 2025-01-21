import { useState } from "react";

const FilterComponent = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const sections = [
    { title: "ANBIETER", count: 2, color: "bg-[#0F0E5E]" },
    { title: "MEDIUM", count: 3, color: "bg-[#2A62FB]" },
    { title: "FORMAT", count: 4, color: "bg-[#0396FF]" },
    { title: "POI", count: 24, color: "bg-[#FA5482]" },
    { title: "ERGEBNISSE", count: 0, color: "bg-[#22183D]" },
  ];

  return (
    <div className="w-full max-w-[25.625rem] bg-[#F0F2F7] rounded">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          // placeholder="Search"
          className="w-full h-[3.125rem] py-2 pl-10 px-4 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-dark/50"
        />
        <svg
          className="absolute top-1/2 -translate-y-1/2 left-3"
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="none"
          // {...props}
        >
          <path
            fill="#22183D"
            fillOpacity={0.5}
            d="M14.294 12.579h-.904l-.32-.31a7.4 7.4 0 0 0 1.796-4.836 7.433 7.433 0 1 0-7.433 7.433 7.4 7.4 0 0 0 4.837-1.796l.309.32v.904L18.296 20 20 18.296l-5.706-5.717Zm-6.861 0a5.139 5.139 0 0 1-5.146-5.146 5.139 5.139 0 0 1 5.146-5.146 5.139 5.139 0 0 1 5.146 5.146 5.139 5.139 0 0 1-5.146 5.146Z"
          />
        </svg>
      </div>

      {/* Accordion Sections */}
      <div className="p-4">
        {sections.map((section) => (
          <div
            key={section.title}
            className={`${section.color} text-white mb-2.5 rounded overflow-hidden`}
          >
            <button
              className="w-full px-4 py-3 lg:py-4 !rounded-sm !overflow-hidden flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-bold">
                {section.title} ({section.count})
              </span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  activeSection === section.title ? "rotate-180" : "rotate-0"
                }`}
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.7625 0L7.5 5.56275L13.2375 0L15 1.71255L7.5 9L0 1.71255L1.7625 0Z"
                  fill="white"
                />
              </svg>
            </button>
            {activeSection === section.title && (
              <div className="p-4 bg-gray-200 text-gray-800">
                {/* Content section */}
                Content for {section.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
