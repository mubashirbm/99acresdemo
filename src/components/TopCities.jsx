// import React from "react";
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function TopCities() {

    let images=[{img:"https://mediacdn.99acres.com/media1/11848/1/236961707D-1594715125517.jpg",city:"Delhi/NCR",prop:"135,000+ Properties"},{img:"https://mediacdn.99acres.com/media1/11846/12/236932009D-1594709336922.jpg",city:"Banglore"},{img:"https://mediacdn.99acres.com/media1/16807/3/336143474D-1640587363487.jpg",city:"Pune"},{img:"https://mediacdn.99acres.com/media1/11848/0/236960749D-1594714810078.jpg",city:"Chennai"},{img:"https://mediacdn.99acres.com/media1/11848/15/236975527D-1594718126587.jpg",city:"Mumbai"},{img:"https://mediacdn.99acres.com/media1/11848/7/236967665D-1594716318858.jpg",city:"Hyderabad"},{img:"https://mediacdn.99acres.com/media1/11848/1/236961707D-1594715125517.jpg",city:"Kolkata"}]
  return (
    <>
      <div className=" mt-16">
        <h3 className="text-xs text-gray-400 font-bold mb-2">TOP CITIES</h3>
        <h1 className="font-bold text-4xl mb-8 tracking-wide">
          Explore Real Estate in Popular Indian Cities
        </h1>
      </div>
      <div className="">
        {/* <div className="grid grid-cols-4">
        
          <div className="flex items-center bg-green-100  w-9/12">
            <div className="">
              <img
                src="https://mediacdn.99acres.com/media1/11848/1/236961707D-1594715125517.jpg"
                className="object-cover rounded-lg w-24  h-24"
                alt=""
              />
            </div>
            <div className="p-2 m-auto">
              <h1>Delhi / NCR</h1>
              <h2>136,000+ Properties</h2>
            </div>
          </div>
        </div> */}

        <div className=" w-full ">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} visibleSlides={1} step={0} infinite={false}>
                    <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button"aria-label="slide backward"className="absolute z-30 left-0 -ml-6 bg-white w-10 h-10 rounded-full  cursor-pointer"id="prev">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                    <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="  w-full flex  md:gap-6 items-center transition ease-out duration-700">
                                    <Slide index={1}>
                                        {/* <div className="flex  gap-4 flex-shrink-0 relative  sm:w-auto">
                                            {images.map((img)=>(
                                         <>
                                            <img src={img} alt="sitting area" className="h-28 object-cover object-center " />
                                            </>
                                            ))}
                                        </div> */}
                                        <div className="grid grid-cols-4 ">
                                        {images.map((img)=>(
                                         <>
                                            <div className="flex items-center     ">
                                                <div className="mt-3">
                                                  <img src={img.img}
                                                    className="object-cover rounded-lg w-24 h-24 cursor-pointer hover:scale-105 ease-in duration-300"  alt="" />
                                                </div>
                                            <div className="p-2 m-auto">
                                                <h1 className="font-bold">{img.city}</h1>
                                                <h2>136,000+ Propertiess</h2>
                                            </div>
                                            </div>
                                            </>
                                            ))}
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 w-10 h-10 -mr-5 rounded-full bg-white right-0  " id="next" >
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
                    <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
      </div>
    </>
  );
}
