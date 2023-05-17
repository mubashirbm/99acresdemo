
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default function RealEstaate() {


   
    let images=["https://static.99acres.com/universalhp/img/d_hp_ppf.webp","https://static.99acres.com/universalhp/img/d_hp_ppf.webp","https://static.99acres.com/universalhp/img/d_hp_ppf.webp","https://static.99acres.com/universalhp/img/d_hp_plot_land.webp","https://static.99acres.com/universalhp/img/ei.webp","https://static.99acres.com/universalhp/img/ei.webp","https://static.99acres.com/universalhp/img/d_hp_com_buy.webp","https://static.99acres.com/universalhp/img/d_hp_com_lease.webp"]
  let no=[1,2,3,4,5,6,7]
    return (
    <>



        <div className="container mx-auto">
            <div className="text-center p-4 text-xs text-gray-400 mt-6  font-bold">
                <h1>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h1>
            </div>
            <div className="flex items-center justify-center w-full -mt-14 h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2} visibleSlides={1} step={1} infinite={false}>
                    <div className="w-full relative flex items-center justify-center">
                    <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 -ml-4 bg-white w-10 h-10 rounded-full  cursor-pointer"
                  id="prev"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto"
                  >
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonBack>
                        <div className="w-full h-full mx-auto  p-2 overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-40 flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                   
                                    <Slide index={1}>
                                        <div className="flex  gap-4 flex-shrink-0 relative  sm:w-auto">
                                            {images.map((img)=>(
<>
                                            <img src={img} alt="sitting area" className="h-28 cursor-pointer object-cover object-center hover:scale-105 ease-in duration-300 " />
                                            
</>
                                            ))}

                                        
                                            
                                        </div>
                                    </Slide>
                                    
                                    
                                    
                                    
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 w-10 h-10 -mr-5 rounded-full bg-white right-0  "
                  id="next"
                >
                  <svg
                    width={8}
                    height={14}
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto"
                  >
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="black"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ButtonNext>
                    </div>
                </CarouselProvider>

                
            </div>
        </div>
     
    </>
  )
}
