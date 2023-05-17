import React from "react";

export default function Service() {
  return (
    <>
      <div className="mt-10 ">
        <h1 className="font-bold text-2xl tracking-wide">
          Our services for owners
        </h1>
        <h4 className="text-gray-500 tracking-tighter">
          Make your life easier with our services
        </h4>
      </div>
      <div className=" cursor-pointer flex justify-between mt-4 gap-5">
        <div className="bg-sky-50 p-10 rounded-lg">
          <figure className="py-7 ">
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_rent_agreement.webp"
              className="h-32 "
              alt=""
            />
          </figure>
          <h3 className="py-1 font-semibold text-xl tracking-wide ">
            Rental Agreement
          </h3>
          <p className="text-gray-400 py-2 leading-tight mb-4">
            Share basic details online and get doorstep delivery of your rental
            agreement
          </p>
          <span className="text-blue-500 font-bold">Know more </span>
        </div>
        <div className="bg-orange-50 p-10 rounded-lg">
          <figure className="py-7 ">
            <img
              src="https://static.99acres.com/universalhp/img/d_hp_owner_assist_benefits.webp"
              className="h-32 "
              alt=""
            />
          </figure>
          <h3 className="py-1 font-semibold text-xl tracking-wide ">
            
Get assistance in selling faster
          </h3>
          <p className="text-gray-400 py-2 leading-tight mb-4">
          Dedicated Relationship manager to help you sell your property faster
          </p>
          <span className="text-blue-500 font-bold">Know more </span>
        </div>
      </div>
      <div className="mt-12">
              <ul className="flex">
                <li className="-z-10 w-8/12">
                  <img
                    src="https://static.99acres.com/universalhp/img/d_hp_pg_xl.webp"
                    alt=""
                    className="rounded-lg cursor-pointer hover:scale-105 ease-in duration-300 "
                  />
                </li>
                <li className=" ml-16 mt-12">
                  <h2 className="font-bold text-sm font-opensans text-gray-400  mb-4 ">RENT A PG/ CO-LIVING</h2>
                  <h1 className="text-3xl font-bold mb-4 ">
                  Paying Guest or Co-living options
                  </h1>
                  <p className="mb-4">
                  Explore shared and private rooms in all top cities of india
                  </p>
                  <p className=" w-56 text-center p-4 bg-blue-500 rounded-md cursor-pointer text-white font-semibold">
                    Explore PG/ CO-LIVING
                  </p>
                </li>
              </ul>
              <div className="p-10 shadow-lg flex w-11/12 bg-white border m-auto -mt-10 rounded-lg ">
                <div className="w-2/6 ">
                  <div className="w-56">
                    <h1 className="text-2xl font-bold font-sans">
                    Best articles on PG/ Co-living
                    </h1>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 ">
                    <h2>Read from beginners checklist to pro-tips</h2>
                    </div>
                </div>
                <div className=" ml-24 w-full">
                  
                  <div className="grid grid-cols-2 ">
                    <div className=" gap-4 mb-8 flex">
                      <div className="">
                        <img
                          src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2022/08/Land-parcel-320x180.jpg?1682336961000"
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300  "
                          alt=""
                        />
                      </div>
                      <div className="border-b">
                        
                        <div className="">Land rates go up in Noida</div>
                        <h2 className="mb-8 ">appril 24 2023</h2>
                      </div>
                    </div>
                    <div className=" gap-4 mb-8 flex">
                      <div className="">
                        <img
                          src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2022/08/Land-parcel-320x180.jpg?1682336961000"
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300  "
                          alt=""
                        />
                      </div>
                      <div className="border-b">
                        
                        <div className="">Land rates go up in Noida</div>
                        <h2 className="mb-8 ">appril 24 2023</h2>
                      </div>
                    </div>
                    <div className=" gap-4 mb-8 flex">
                      <div className="">
                        <img
                          src="https://static.99acres.com/universalhp/img/d_hp_rent_xl.webp"
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300  "
                          alt=""
                        />
                      </div>
                      <div className="">
                        
                        <div className="">Land rates go up in Noida</div>
                        <h2 className="  ">appril 24 2023</h2>
                      </div>
                    </div>
                    <div className=" gap-4 mb-8 flex">
                      <div className="">
                        <img
                          src="https://static.99acres.com/universalhp/img/d_hp_rent_xl.webp"
                          className=" w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300 "
                          alt=""
                        />
                      </div>
                      <div className="">
                        
                        <div className="">Land rates go up in Noida</div>
                        <h2 className="">appril 24 2023</h2>
                      </div>
                    </div>

                    <span className="-mt-4 font-bold text-sm">Read realty news, guides & articles</span>
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
    </>
  );
}
