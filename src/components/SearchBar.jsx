import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="border rounded-lg -mt-12 absolute  shadow-lg bg-white w-7/12 ml-80">
        <div className="flex ">
          <ul className="flex text-md cursor-pointer ">
            <li className=" hover:border-b-4 border-blue-500 m-5 font-serif ">Buy</li>
            <li className="hover:border-b-4 border-blue-500 m-5">Rent</li>
            <li className="hover:border-b-4 border-blue-500 m-5">PG/Co-living</li>
            <li className="m-5 hover:border-b-4 border-blue-500">Commercial</li>
            <li className="m-5 hover:border-b-4 border-blue-500">Coeorking</li>
            <li className="m-5 hover:border-b-4 border-blue-500">Plots/Land
            <span className="bg-blue-800 px-0.5 ml-1 text-white  text-sm">New</span>
            </li>
            <li className="m-5 hover:border-b-4 border-blue-500">Projects</li>
          </ul>
        </div>
        <div className="">
          <ul className=" flex ">
            <div className=" border w-3/12 cursor-pointer">
              <h2 className="text-center mt-3">All Residentials  </h2>
            </div>
            <div className="border">
              {/* <div className=""> */}
              <ul className="flex p-2 space-x-10 cursor-pointer">
                <li className="-mr-8">
                  <div className="mt-2 cursor-text">
                   
                    <img
                      src="https://www.pngfind.com/pngs/m/54-545482_vector-search-icon-search-icon-vector-png-transparent.png"
                      className="h-5 w-6"
                      alt=""
                      />
                  </div>
                </li>
                <li className="w-80 mt-1 cursor-text text-gray-400
                 ">Search "Hyderabad"</li>
                <li>
                  <img src="https://www.99acres.com/universalapp/img/nearMeV2.png" className="h-9 w-10" alt="" />
                </li>
                <li>
                  <img src="https://www.99acres.com/universalapp/img/mic.png" className="h-9 w-10" alt="" />
                </li>
                <li className="bg-blue-500 rounded-md w-24">
                  <h3 className=" p-2 text-center text-white rounded-md  ">Search</h3>
                </li>
              </ul>
              {/* </div> */}
            </div>
          </ul>
          <div className=""></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
