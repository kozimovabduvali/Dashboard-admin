import IconSound from "../../assets/svg/sound.svg";


function Table() {
  return (
    <>
      <div className="bg-white rounded-sm border border-dark/50 overflow-x-auto">
        <div className="flex items-center gap-2.5 px-5 py-4 lg:py-6 border-b border-dark/50">
          <img src={IconSound} alt="IconSound" />
          <p className="font-bold text-[0.9375rem]/[1.1344rem] text-black">
            Ergebnisse Kampagne (aufgesplittet)
          </p>
        </div>
        <div className="overflow-x-auto poem !p-2.5">
          <table className="w-full text-justify whitespace-nowrap">
            <thead className="text-[0.9375rem]/[1.1344rem] font-bold text-dark/50">
              <tr className="border-b">
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Medientyp
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Standorte
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Basis
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Gemessen
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Zur Basis
                </th>
                <th scope="col" className="px-4 lg:px-6 py-3 lg:py-5">
                  Kosten
                </th>
                <th scope="col" className="text-right px-6 py-3 lg:py-5">
                  TKP
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-2 border-b">
                <th
                  scope="row"
                  className="px-4 lg:px-6 py-2.5 lg:py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <div className="size-6 lg:size-[1.875rem] rounded-full border-[0.0187rem] border-dark"></div>
                    <p className="font-bold text-[0.9375rem]/[1.1344rem]">OOH</p>
                  </div>
                </th>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">1.696</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">97.540.000</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">102.612.000</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem] text-[#06D6A0]">+5,2%</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">507.914</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4 text-right">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">4,9</p>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-4 lg:px-6 py-2.5 lg:py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <div className="size-6 lg:size-[1.875rem] rounded-full border-[0.0187rem] border-dark"></div>
                    <p className="font-bold text-[0.9375rem]/[1.1344rem]">DOOH</p>
                  </div>
                </th>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">4.529</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">335.042.476</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">187.624.000</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem] text-[#06D6A0]">–44,0%</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">3.696.240</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4 text-right">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">19,7</p>
                </td>
              </tr>
              <tr className="bg-red-4 text-white border-b">
                <th
                  scope="row"
                  className="px-4 lg:px-6 py-2.5 lg:py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-[0.9375rem]/[1.1344rem] text-white">Gesamt</p>
                  </div>
                </th>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">6.225</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">432.582.476</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">290.236.000</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">–32,9%</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">4.204.154</p>
                </td>
                <td className="px-4 lg:px-6 py-2.5 lg:py-4 text-right">
                  <p className="font-medium text-[0.9375rem]/[1.1344rem]">14,5</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;
