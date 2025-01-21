function Header() {
  return (
    <div className="max-w-base w-full h-full flex items-center justify-between mx-auto px-4 lg:px-5 py-2.5 lg:py-4">
      <div className="cursor-pointer dark:text-gray-2 text-left flex items-end gap-2">
        <h5 className="text-dark/50 dark:text-gray-2">
          <span className="font-bold text-dark dark:text-gray-2 text-xl">
            Cockpit
          </span>{" "}
          <br /> C2C Kampagne Q4, 2024
        </h5>
        <svg
          className="dark:text-gray-2 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={8}
          fill="none"
          // {...props}
        >
          <path
            fill="currentColor"
            fillOpacity={0.5}
            d="M1.645 0 7 4.945 12.355 0 14 1.522 7 8 0 1.522 1.645 0Z"
          />
        </svg>
      </div>
      <button className="lg:hidden text-dark transition duration-300 hover:opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
