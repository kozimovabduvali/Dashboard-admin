import IconContact from "../../assets/svg/contact.svg";
import IconContact2 from "../../assets/svg/contact2.svg";
import IconRight from "../../assets/svg/right.svg";

function Grid() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-7 2xl:gap-x-[3.125rem]">
        {/* 1 */}
        <div className="bg-white rounded-sm overflow-hidden border-[0.0187rem]  p-4">
          <div className="flex items-center gap-3.5 pb-4 lg:pb-6">
            <img src={IconContact} alt="IconContact" />
            <p className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
              Brutto-Kontakte Kampagne (lt. Planung)
            </p>
          </div>
          <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem]">
            432.582.476
          </h3>
          <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
            <img src={IconRight} alt="IconRight" />
            <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
              Details
            </span>
          </button>
        </div>
        {/* 2 */}
        <div className="relative bg-white rounded-sm overflow-hidden border-[0.0187rem]  p-4">
          <div className="relative z-10">
            <div className="flex items-center gap-3.5 pb-4 lg:pb-6">
              <img src={IconContact2} alt="IconContact" />
              <p className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
                Brutto-Kontakte Kampagne (lt. Messung)
              </p>
            </div>
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl  2xl:text-[3.125rem]/[3.9875rem]">
              290.236.000
            </h3>
            <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
              <img src={IconRight} alt="IconRight" />
              <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
                Details
              </span>
            </button>
          </div>
          <div className="absolute bottom-0 2xl:top-1/2 z-0 2xl:-translate-y-1/2 right-0 w-36 2xl:w-[12.1875rem] 2xl:h-64 bg-red-4 rounded-l-none rounded-t-3xl rounded-b-none rounded-r-none py-2 2xl:rounded-l-full flex items-center justify-center">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem] text-white">
              -32,9
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
