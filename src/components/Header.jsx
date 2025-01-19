import Bottom from "../assets/svg/bottom.svg";
function Header() {
  return (
    <div className="max-w-base w-full h-full flex items-center justify-between mx-auto px-4 lg:px-5 py-2.5 lg:py-4">
      <button className="text-left flex items-end gap-2">
        <h5 className="text-dark/50">
          <span className="text-dark text-xl">Cockpit</span> <br /> C2C Kampagne
          Q4, 2024
        </h5>
        <img className="my-2.5" src={Bottom} alt="icon" />
      </button>
      <button className="lg:hidden">
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
