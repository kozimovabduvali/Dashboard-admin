import IconMenu from "../../assets/svg/menu.svg";
import RightMenu from "../../assets/svg/rightmenu.svg";
import IconStroer from "../../assets/svg/stroer.svg";
import IconVideoPlay from "../../assets/svg/videoplay.svg";
import ImgTable from "../../assets/img/table.png";

function Table2() {
  return (
    <>
      <div className="bg-white rounded-sm border  overflow-x-auto">
        <div className="flex items-center justify-between gap-2.5 px-5 py-4 lg:py-6 border-b ">
          <div className="flex items-center gap-2.5">
            <img src={IconMenu} alt="IconSound" />
            <p className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
              Ergebnisse Kampagne (aufgesplittet)
            </p>
          </div>
          <button className="!w-6">
            <img src={RightMenu} alt="RightMenu" />
          </button>
        </div>
        <div className="flex overflow-x-auto poem !p-2.5">
          <table className="w-full text-justify whitespace-nowrap">
            <thead className="text-[0.9375rem]/[1.1344rem] font-bold text-dark/50">
              <tr className="border-b">
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Anbieter
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Medium
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Format
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Platzierung
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Tage
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Standorte
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b !h-max">
                <th
                  scope="row"
                  className="px-4 lg:px-6 py-2.5 lg:py-5 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <img src={IconStroer} alt="IconStroer" />
                  </div>
                </th>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-dark text-[0.9375rem]/[1.1344rem]">
                    Public Video City
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <div className="flex items-center gap-3">
                    <img src={IconVideoPlay} alt="IconVideoPlay" />
                    <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                    10”
                    </p>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  National
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  24
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  600
                  </p>
                </td>
              </tr>
              <tr className="bg-white border-b !h-max">
                <th
                  scope="row"
                  className="px-4 lg:px-6 py-2.5 lg:py-5 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <img src={IconStroer} alt="IconStroer" />
                  </div>
                </th>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-dark text-[0.9375rem]/[1.1344rem]">
                  Großflächen
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <div className="flex items-center gap-3">
                    <img src={IconVideoPlay} alt="IconVideoPlay" />
                    <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                    18/1
                    </p>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  Top 10
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  14
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">
                  800
                  </p>
                </td>
              </tr>
              <tr className="bg-white border-b !h-max">
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-dark text-[0.9375rem]/[1.1344rem]">
                  Gesamt
                  </p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-bold text-dark text-[0.9375rem]/[1.1344rem]">
                  1.400
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <img className="min-w-[43.75rem]" src={ImgTable} alt="ImgTable" />
        </div>
      </div>
    </>
  );
}

export default Table2;
