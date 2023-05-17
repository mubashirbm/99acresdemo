import React from "react";

export default function AllIndia() {
  return (
    <>
      <div className="p-3 rounded-t-xl bg-white w-6/12">
        <div className="py-2 mb-6">
          <h1 className="text-3xl font-semibold">Explore real estate in...</h1>
        </div>
        <div className="px-4 mb-5">
          <ul className="flex gap-6  text-xs font-semibold cursor-pointer text-gray-500">
            <li className="hover:text-black hover:border-b-4 border-blue-500">Buy</li>
            <li className="hover:text-black hover:border-b-4 border-blue-500">Rent/Lease</li>
            <li className="hover:text-black hover:border-b-4 border-blue-500">Plots/Land</li>
            <li className="hover:text-black hover:border-b-4 border-blue-500">PG/C0-living</li>
          </ul>
        </div>
        <div className="flex p-2 ml-2 justify-between items-center border rounded-lg shadow-lg">
          <div className="text-sm">
            Residential <span className=" ml-1"> v</span>
          </div>
          <div className="flex mr-8 w-5/12">
            <img src="https://www.pngfind.com/pngs/m/54-545482_vector-search-icon-search-icon-vector-png-transparent.png" className="w-6" alt="" />
            City Name
          </div>
          <button className="rounded-md text-xs bg-blue-700 py-1 px-2 text-white">
            Explore
          </button>
        </div>
        <div className="mt-6 ml-2">
          <p className="text-sm text-gray-500  mb-4 font-semibold">
            Continue Browsing where you lef off...
          </p>
        </div>
        <button className="rounded-2xl text-sm ml-4 mb-8 text-gray-500 border p-2">
          Buy in Dehradun
        </button>
      </div>
      <div className="bg-gray-400 text-sm  w-6/12 rounded-b-xl items-center p-4 flex justify-between">
        <div className="flex ">
          <ul className="flex gap-6">
            <li>Dubai</li>
            <li>For NRI</li>
            <li className="leading-3">
              <div>International</div>
              <div className="text-xs ">powered By listglobally.com</div>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2" >
          View Top cites <span className="mt-1"> <img src="https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png" className="w-3" alt="" /> </span>
        </div>
      </div>
    </>
  );
}
