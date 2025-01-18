import Bottom from "../assets/svg/bottom.svg";
function Header() {
  return (
    <div className="max-w-base h-full flex items-center mx-auto px-5 py-4">
      <button className="text-left flex items-end gap-2">
        <h5 className="text-dark/50">
          <span className="text-dark text-xl">Cockpit</span> <br /> C2C Kampagne
          Q4, 2024
        </h5>
        <img className="my-2.5" src={Bottom} alt="icon" />
      </button>
    </div>
  );
}

export default Header;
