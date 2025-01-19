import IconChart from "../../assets/svg/iconchart.svg";
import IconRight from "../../assets/svg/right.svg";
import Chart from "../../assets/svg/chart.svg";

function Grid2() {
  return (
    <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-y-4 gap-x-4 lg:gap-x-7 2xl:gap-x-[3.125rem]">
      {/* 1 */}
      <div className="bg-white rounded-sm overflow-hidden border-[0.0187rem] border-dark/50 p-4 lg:p-5 2xl:pr-7">
        <div className="flex items-center gap-3.5">
          <img src={IconChart} alt="IconChart" />
          <h5 className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
            OOH Anteil an den Brutto-Kontakten
          </h5>
        </div>
        <div className="flex justify-between gap-5 pt-3 lg:pt-[1.125rem]">
          <div className="">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem] text-black">35%</h3>
            <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
              <img src={IconRight} alt="IconRight" />
              <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
                Details
              </span>
            </button>
          </div>
          <img className="size-14 lg:size-20 2xl:size-[5.9375rem]" src={Chart} alt="Chart" />
        </div>
      </div>
      {/* 2 */}
      <div className="bg-white rounded-sm overflow-hidden border-[0.0187rem] border-dark/50 p-4 lg:p-5 2xl:pr-7">
        <div className="flex items-center gap-3.5">
          <img src={IconChart} alt="IconChart" />
          <h5 className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
            OOH Anteil an den Brutto-Kontakten
          </h5>
        </div>
        <div className="flex justify-between gap-5 pt-3 lg:pt-[1.125rem]">
          <div className="">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem] text-black">65%</h3>
            <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
              <img src={IconRight} alt="IconRight" />
              <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
                Details
              </span>
            </button>
          </div>
          <img className="size-14 lg:size-20 2xl:size-[5.9375rem]" src={Chart} alt="Chart" />
        </div>
      </div>
      {/* 3 */}
      <div className="bg-white rounded-sm overflow-hidden border-[0.0187rem] border-dark/50 p-4 lg:p-5 2xl:pr-7">
        <div className="flex items-center gap-3.5">
          <img src={IconChart} alt="IconChart" />
          <h5 className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
            OOH Anteil an den Brutto-Kontakten
          </h5>
        </div>
        <div className="flex justify-between gap-5 pt-3 lg:pt-[1.125rem]">
          <div className="">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem] text-black">12%</h3>
            <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
              <img src={IconRight} alt="IconRight" />
              <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
                Details
              </span>
            </button>
          </div>
          <img className="size-14 lg:size-20 2xl:size-[5.9375rem]" src={Chart} alt="Chart" />
        </div>
      </div>
      {/* 4 */}
      <div className="bg-white rounded-sm overflow-hidden border-[0.0187rem] border-dark/50 p-4 lg:p-5 2xl:pr-7">
        <div className="flex items-center gap-3.5">
          <img src={IconChart} alt="IconChart" />
          <h5 className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
            OOH Anteil an den Brutto-Kontakten
          </h5>
        </div>
        <div className="flex justify-between gap-5 pt-3 lg:pt-[1.125rem]">
          <div className="">
            <h3 className="font-space-grotesk font-bold text-2xl lg:text-4xl 2xl:text-[3.125rem]/[3.9875rem] text-black">88%</h3>
            <button className="text-left flex items-center gap-2 pt-3 lg:pt-[1.5625rem] transition duration-300 hover:opacity-75">
              <img src={IconRight} alt="IconRight" />
              <span className="font-medium text-[0.9375rem]/[1.1344rem] text-dark/50">
                Details
              </span>
            </button>
          </div>
          <img className="size-14 lg:size-20 2xl:size-[5.9375rem]" src={Chart} alt="Chart" />
        </div>
      </div>
    </div>
  );
}

export default Grid2;
