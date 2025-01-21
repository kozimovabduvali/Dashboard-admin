import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import "../index.css";

const navItems = [
  {
    path: "/",
    icon: (
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6 20V12.9412H14.4V20H20.4V10.5882H24L12 0L0 10.5882H3.6V20H9.6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/Location",
    icon: (
      <svg
        width="19"
        height="27"
        viewBox="0 0 19 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 0C4.24786 0 0 4.2255 0 9.45C0 16.5375 9.5 27 9.5 27C9.5 27 19 16.5375 19 9.45C19 4.2255 14.7521 0 9.5 0ZM9.5 12.825C7.62714 12.825 6.10714 11.313 6.10714 9.45C6.10714 7.587 7.62714 6.075 9.5 6.075C11.3729 6.075 12.8929 7.587 12.8929 9.45C12.8929 11.313 11.3729 12.825 9.5 12.825Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/Menu",
    icon: (
      <svg
        width="25"
        height="14"
        viewBox="0 0 25 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8.4H2.77778V5.6H0V8.4ZM0 14H2.77778V11.2H0V14ZM0 2.8H2.77778V0H0V2.8ZM5.55556 8.4H25V5.6H5.55556V8.4ZM5.55556 14H25V11.2H5.55556V14ZM5.55556 0V2.8H25V0H5.55556Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/Notification",
    icon: (
      <svg
        width="27"
        height="23"
        viewBox="0 0 27 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.9849 7.69549C25.3662 6.74436 24.5265 5.96617 23.4217 5.4906V16.2556C24.4823 15.7801 25.3662 15.0451 25.9849 14.0508C26.6036 13.0564 26.9129 11.9756 26.9129 10.8515C26.9129 9.72744 26.6036 8.64662 25.9849 7.69549ZM20.726 0V21.6598L13.7879 16.2124H9.63385V21.6598C9.63385 22.0489 9.50127 22.3515 9.23612 22.6109C8.97097 22.8703 8.66162 23 8.2639 23H5.4798C5.08208 23 4.77273 22.8703 4.50758 22.6109C4.24243 22.3515 4.10985 22.0489 4.10985 21.6598V16.2124H2.69571C1.94445 16.2124 1.32576 15.953 0.795455 15.4342C0.265152 14.9154 0 14.2669 0 13.5752V8.12782C0 7.39286 0.265152 6.78759 0.795455 6.2688C1.32576 5.75 1.98864 5.4906 2.69571 5.4906H13.7437L20.726 0Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    path: "/Settings",
    icon: (
      <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.305 17.4881C26.3683 17.0131 26.4 16.5223 26.4 15.9998C26.4 15.4931 26.3683 14.9865 26.2892 14.5115L29.5033 12.0098C29.7883 11.7881 29.8675 11.3606 29.6933 11.044L26.6533 5.7873C26.4633 5.43897 26.0675 5.32814 25.7192 5.43897L21.935 6.95897C21.1433 6.3573 20.3042 5.85064 19.37 5.47064L18.8 1.44897C18.7367 1.06897 18.42 0.799805 18.04 0.799805H11.96C11.58 0.799805 11.2792 1.06897 11.2158 1.44897L10.6458 5.47064C9.71167 5.85064 8.85667 6.37314 8.08083 6.95897L4.29667 5.43897C3.94833 5.3123 3.5525 5.43897 3.3625 5.7873L0.338333 11.044C0.148333 11.3765 0.211666 11.7881 0.528333 12.0098L3.7425 14.5115C3.66333 14.9865 3.6 15.509 3.6 15.9998C3.6 16.4906 3.63167 17.0131 3.71083 17.4881L0.496666 19.9898C0.211666 20.2115 0.1325 20.639 0.306666 20.9556L3.34667 26.2123C3.53667 26.5606 3.9325 26.6715 4.28083 26.5606L8.065 25.0406C8.85667 25.6423 9.69583 26.149 10.63 26.529L11.2 30.5506C11.2792 30.9306 11.58 31.1998 11.96 31.1998H18.04C18.42 31.1998 18.7367 30.9306 18.7842 30.5506L19.3542 26.529C20.2883 26.149 21.1433 25.6423 21.9192 25.0406L25.7033 26.5606C26.0517 26.6873 26.4475 26.5606 26.6375 26.2123L29.6775 20.9556C29.8675 20.6073 29.7883 20.2115 29.4875 19.9898L26.305 17.4881ZM15 21.6998C11.865 21.6998 9.3 19.1348 9.3 15.9998C9.3 12.8648 11.865 10.2998 15 10.2998C18.135 10.2998 20.7 12.8648 20.7 15.9998C20.7 19.1348 18.135 21.6998 15 21.6998Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (!isOpen) {
      setIsAnimating(true);
      setIsOpen(true);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsOpen(false), 300); // Match animation duration
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="h-full">
      <div className="max-w-base w-full h-full flex items-center justify-between mx-auto px-4 lg:px-5 py-2.5 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <h5 className="text-dark/50 dark:text-gray-2">
            <span className="font-bold text-dark dark:text-gray-2 text-xl">
              Cockpit
            </span>
            <br /> C2C Kampagne Q4, 2024
          </h5>
        </div>
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-dark transition duration-300 hover:opacity-75"
        >
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
      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/50 z-50 flex transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav
            className={`bg-dark text-white w-[250px] min-h-screen px-5 py-4 transform transition-transform duration-300 ${
              isAnimating ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center">
              <img className="h-5" src={Logo} alt="logo" />
              <button onClick={toggleMenu} className="text-white">
                ✕
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              {navItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  onClick={toggleMenu}
                  className={`flex items-center gap-x-4 py-2 px-3 rounded-md ${
                    isActive(item.path)
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-600 text-gray-300"
                  }`}
                >
                  {item.icon}
                  <span>{item.path.replace("/", "") || "Home"}</span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex-1" onClick={toggleMenu} />
        </div>
      )}
    </header>
  );
}

export default Header;
