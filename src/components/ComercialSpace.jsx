import React from "react";

export default function ComercialSpace() {
  return (
    <>
      <div className=" text-center">
        <h4 className="font-bold text-xs mt-10  text-gray-500">
          COMMERCIAL SPACES
        </h4>
        <h1 className="text-4xl w-7/12 leading-snug m-auto font-bold tracking-wide ">
          Choose from a wide variety of commercial properties
        </h1>
      </div>
      <div className="flex justify-between mt-4 gap-5">
        <div className="bg-sky-50 p-16 rounded-lg">
          <h3 className="text-gray-400 py-1 leading-tight  ">
            BUY FOR COMMERCIAL USE
          </h3>
          <p className="text-4xl font-bold py-2 leading-tight mb-4">
            Buy a Commercial property
          </p>

          <p className="mb-10">
            Explore from Office Spaces, Co-working spaces, Retail Shops, Land,
            Factories and more
          </p>
          <span className="px-6 rounded-lg font-bold bg-blue-500 p-4 cursor-pointer text-white ">
            Explore Buying Commercial{" "}
          </span>
        </div>
        <div className="bg-orange-50 p-16 rounded-lg">
          <h3 className="text-gray-400 py-1 leading-tight  ">
            LEASE FOR COMMERCIAL USE
          </h3>
          <p className="text-4xl font-bold py-2 leading-tight mb-4">
            Lease a Commercial property
          </p>

          <p className="mb-10">
            Explore from Office Spaces, Co-working spaces, Retail Shops, Land,
            Factories and more
          </p>
          <span className="px-6 rounded-lg font-bold bg-blue-500 p-4 cursor-pointer text-white tracking-wider">
            Explore Leasing Commercial{" "}
          </span>
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-2xl font-bold">Handpicked Comercial Projects</h1>
        <p className="text-gray-500">Featured Comercial projects across India</p>
      </div>
      <div className="mt-44 mb-28">
        <div className="flex -mt-44  flex-shrink-0 relative w-full sm:w-auto">
          {/* <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" /> */}
          {/* <div className="card bg-black  rounded-lg p-4 w-full bg-base-100 shadow-xl"> */}
          {/* <div className="p-2 mt-1 items-center"> */}
          {/* <figure className=" "> */}
          <img
            src="https://newprojects.99acres.com/projects/city_corporation_limited/city_amanora_ascent_avenue/images/sqfii5fv_med.jpg"
            className=" w-4/12  rounded-lg cursor-pointer hover:scale-105 ease-in duration-300"
            alt="Shoes"
          />
          {/* </figure> */}
          {/* </div> */}
        </div>
        <div className="absolute  -mt-20 w-72 ml-8 h-44 m-auto rounded-xl bg-white shadow-lg p-8  ">
          <h1 className="mt-2 text-sm font-bold">Amanora Ascent Avenue</h1>
          <p className="text-gray-500">
            Commercial Shops,Bare shell office space, Hadapsar, Pune
          </p>
          <h4 className="font-bold ">₹ 79.6 Lacs - 1.86 Cr</h4>
        </div>
        {/* <div className="absolute  -mt-32  m-auto rounded-full shadow-lg   order-1 left-0 right-0"> */}
        <img
          src="https://newprojects.99acres.com/projects/city_corporation_limited/city_amanora_ascent_avenue/ycgt1cjs.jpg"
          className="absolute  -mt-28 ml-16 w-16 h-16 rounded-full"
          alt=""
        />

        {/* </div> */}
      </div>
    </>
  );
}
