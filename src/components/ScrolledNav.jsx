import React from 'react'
import AllIndia from './AllIndia'
import Nav from './Nav'
import ContactUs from './ContactUs'
import Toggle from './Toggle'
import User from './User'

export default function ScrolledNav() {
  return (
    <>
    
    <div
          id="nav"
          className="py-4 px-8 top-0 z-10 flex w-full justify-between fixed bg-blue-600 items-center"
         >
            <div className='top-96 mt-52 right-0 mr-40 fixed'>
<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxMqhXfFjmBhphLq_WXQ-pYjgKptQQgp9fx__ByVlsWGQVmRm0" className='w-16 rounded-full' alt="" />
            </div>
          <div className="flex items-center">
            <img
              src="https://static.99acres.com/universalhp/img/nnacres_white_v2.png"
              className=" w-28 h-9"
              alt=""
            />
            <div className="px-3 mb-1 text-white font-medium">
              <span class="group  inline-block">
                <button class="hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  All India{" "}
                  <span className="w-4 ml-1 ">
                    <img
                      src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
                      alt=""
                    />
                  </span>
                </button>
                <div class="absolute w-9/12 left-20  hidden pt-1 text-gray-700 group-hover:block">
                  <AllIndia />
                </div>
              </span>
            </div>
          </div>

          <div className="flex  ">
            <div className="border  mr-32 bg-white rounded-lg">
              {/* <div className=""> */}
              <ul className="flex items-center space-x-10 cursor-pointer">
                <li className="-mr-8">
                  <div className="mt-2 flex cursor-text border-r border-black ml-2">
                   
                   <h1 className='mr-2 mb-2'>Buy 
               </h1>
               <img
               className='w-3 h-4 mt-2 mr-2 '
                src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
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
                <li className="rounded-md ">
                <img
                      src="https://www.pngfind.com/pngs/m/54-545482_vector-search-icon-search-icon-vector-png-transparent.png"
                      className="h-5 w-6 mr-2"
                      alt=""
                      />
                </li>
              </ul>
              {/* </div> */}
            </div>
            <div className="px-3 py-2 rounded-lg mr-4 bg-white">
              <p className="font-semibold text-sm  tracking-wide">
                Post property{" "}
                <span className="rounded-md bg-green-600 text-xs text-white px-2">
                  FREE
                </span>
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full  bg-white ">
                <span class="group  inline-block">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/155/155689.png"
                    className="w-4 mt-1 ml-1"
                    alt=""
                  />

                  <div class="absolute hidden w-7/12 -ml-44 mt-6 pt-1 text-gray-700 group-hover:block">
                    <ContactUs />
                  </div>
                </span>
              </div>
              <div className="w-6 h-6  rounded-full mr-1 bg-white ">
                <span className="group inline-block">
                  <img
                    src="https://i.pinimg.com/474x/7b/c6/fd/7bc6fd1adc9df8f49353a40d716a0a7d.jpg"
                    className="w-4 mt-1 ml-1"
                    alt=""
                  />
                  <div className="absolute hidden group-hover:block bg-white rounded-lg -ml-16 p-4  mt-6 pt-1">
                    <User />
                  </div>
                </span>
              </div>
            </div>
            <span className="w-4  mr-3  ">
              <img
                src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png"
                alt=""
              />
            </span>

            <div className="mr-4">
              <Toggle />
            </div>
          </div>
        </div>
    </>
  )
}
