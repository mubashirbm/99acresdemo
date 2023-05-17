import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import ContactUs from "./ContactUs";
import User from "./User";
import Toggle from "./Toggle";
import AllIndia from "./AllIndia";
import ScrolledNav from "./ScrolledNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  let height = useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {scrolled ? <ScrolledNav/> :
        <div
        id="nav"
        className="py-4 px-8 relative z-10 flex justify-between  bg-transparent items-center"
        >
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

          <div className="flex bg-blak ">
            <ul className="flex  mr-6 gap-6 text-gray-300 font-semibold">
              <span class="group inline-block ">
                <button class="hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  For Buyers
                </button>
                <div class=" hidden absolute pt-1 text-gray-700 w-7/12 left-72 group-hover:block  w-12/12">
                  <Nav />
                </div>
              </span>
              <span class="group  inline-block">
                <button class="hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  For Tenants
                </button>
                <div class="absolute w-7/12 left-72 hidden pt-1 text-gray-700 group-hover:block">
                  <Nav />
                </div>
              </span>
              <span class="group  inline-block">
                <button class=" hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  For Owners
                </button>
                <div class="absolute hidden pt-1 w-7/12 left-72 text-gray-700 group-hover:block">
                  <Nav />
                </div>
              </span>
              <span class="group  inline-block">
                <button class="hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  For Dealers/Builders
                </button>
                <div class="absolute w-7/12 left-72 hidden pt-1 text-gray-700 group-hover:block">
                  <Nav />
                </div>
              </span>
              <span class="group  inline-block">
                <button class="hover:text-white inline-flex items-center rounded py-2 px-4 font-semibold">
                  Insights{" "}
                  <span className="bg-red-400 px-1 text-xs rounded-sm border">
                    New
                  </span>
                </button>
                <div class="absolute w-7/12 left-72 hidden pt-1 text-gray-700 group-hover:block">
                  <Nav />
                </div>
              </span>
            </ul>
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
          }

        <div className="relative Bannner ">
          <div className="-mt-20">
            <img
              className="object-cover  h-96 w-full hover:scale-110 ease-in duration-500"
              src="https://static.ieplads.com/bmsjs/banners/99acres-hp/1366/1366-the-broadstone.jpg"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
