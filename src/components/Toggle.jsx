import React, { useState } from "react";
import classNames from "classnames";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" cursor-pointer z-10 fixed ">
      {/* Button to toggle the menu */}
      <button
      className="mt-2"
        onClick={toggleMenu}
      > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" className="w-6" alt="" />
      </button>

      {/* Menu content */}
      <div
        className={classNames(
          "absolute -top-4 right-0 h-screen w-96 bg-white transition-transform translate-x-2 duration-700  transform" ,
          {
            hidden: !isOpen,
            "translate-x-12 ": isOpen,
          }
        )}
      >
        {/* Add your menu items here */}
        <div className="py-2 px-4">
          <div className="flex justify-between py-2 px-4">
            <div className="flex">
                
            <img src="https://freesvg.org/img/abstract-user-flat-3.png" className="w-6" alt="" />
            <h1 className="ml-2 text-blue-600 font-bold text-sm">LOGIN / REGISTER</h1>
            </div>
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </span>
          </div>
          <div className="px-2 py-4 border-b">
            <h1 className="font-semibold text-sm">Post Property <span className="px-2 rounded-md bg-green-600 text-white">FREE</span></h1>
          </div>
          <div  className="px-2 py-4 border-b ">
            <h1 className="text-sm">Explore our Services</h1>
          </div>
          <div className=" bg-white  px-2 py-4 border-b">
            <ul className=" gap-4 text-sm leading-7">
                <div className="py-2 ">

                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> For Buyers</li>
                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> For Buyers</li>
                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> For Buyers</li>
                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> For Buyers</li>
                </div>
                
            </ul>
          </div>
          <div className=" bg-white text-sm">
            <ul className=" gap-4 border-b  leading-7">
                <div className="p-2 ">

                <li className="ml-4  items-center flex "><span></span> Home Loans</li>
                <li className=" ml-4 items-center flex "><span></span>Rental Agreement</li>
                <li className="gap-3 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" />Insights<span>NEW</span> </li>
                <li className="ml-5 items-center flex "><span></span> Rental Agreement Service <span>NEW</span></li>
                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> Articles & News</li>
                </div>
                
            </ul>
          </div>
          <div className=" text-sm bg-white">
            <ul className=" gap-4 border-b">
                <div className="p-3 leading-7 ">

                <li className="ml-5 items-center flex "><span></span> About Us</li>
                <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> Get Help</li>
                <li className="ml-5  items-center flex "><span></span>Download App</li>
                {/* <li className="gap-2 items-center flex "><span></span> Rental Agreement Service </li> */}
                {/* <li className="gap-2 items-center flex "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfS_bCGaLlHASv8qmFNHuRiciZgPudHYuetQ&usqp=CAU" className="w-2 h-3 " alt="" /><span></span> Articles & News</li> */}
                </div>
                
            </ul>
          </div>
          <div className=" items-center  ">
            
                <div className="justify-between  bg-gray-100 mt-6 rounded-lg p-3 flex ">
<h2 className="text-gray-500 text-xs mt-2 ml-2">Search Property Code </h2>
<span>
    <img src="https://www.pngfind.com/pngs/m/54-545482_vector-search-icon-search-icon-vector-png-transparent.png" className="w-8" alt="" />
</span>
                
                
                </div>
                
            
          </div>
          <div className="p-3 text-sm">
            <p>Toll Free Number:1800 41 99099</p>
            <p>For international numbers <span className="text-blue-600">click here</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
