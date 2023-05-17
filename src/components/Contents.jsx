import React from "react";
import RealEstaate from "./RealEstaate";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import HandpickedProjects from "./HandpickedProjects";
import Testimonial from "./Testimonial";
import UpcomingProects from "./UpcomingProects";
import Service from "./Service";
import TopCities from "./TopCities";
import ComercialSpace from "./ComercialSpace";

export default function Contents() {
  let data=[{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"},{img:"https://www.99acres.com/universalapp/img/PriceTrend2.png",h1:"Prize Trends",p:"Check property Rates and Prizes"}]
  return (
    <>
      <section className="w-full">
        <div className=" container w-10/12 m-auto mt-24">
          <RealEstaate />

          <div className=" w-10/12  m-auto ">
            <div className="bg-sky-50 h-80 rounded-md ">
              <div className="items-center w-11/12 m-auto flex h-28 justify-between">
                <div className="flex ">
                  <img
                    className="w-16 h-16"
                    src="https://static.99acres.com/universalapp/img/batch_prediction.png"
                    alt=""
                  />
                  <div>
                    <ul className="pt-2">
                      <li>
                        <h2 className="font-sans text-2xl font-bold">
                          Insights & Tools
                        </h2>
                      </li>
                      <li>
                        <h4 className="text-gray-600 text-sm">Go from browsing to buying</h4>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-36 box-content border-blue-400 border-2 rounded-md">
                  <h2 className="text-blue-500 font-bold p-2 ">
                    View all insights
                  </h2>
                </div>
              </div>
            </div>
            <div className="container -mt-52   mx-auto">
              <div className="flex   w-full h-full py-24 sm:py-8 ">
                {/* Carousel for desktop and large size devices */}
                
                <CarouselProvider
              className="lg:block hidden m-auto w-11/12 "
              naturalSlideWidth={100}isIntrinsicHeight={true}totalSlides={7}visibleSlides={2}step={1}infinite={false}
            >
              <div className="w-full relative flex items-center ">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 -ml-6 w-10 h-10 rounded-full  cursor-pointer"
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
                <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full   flex lg:gap-1  md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      
                        {data.map((obj)=>(
                            <>
                      <Slide index={0}>
                      <div className="flex flex-shrink-0  relative w-full sm:w-auto">
                              <div class=" flex-col h-60 w-11/12 border bg-white mb-12 rounded-xl overflow-hidden shadow-lg">
                                <div class="relative overflow-hidden ">
                                  <div className="w-24 h-24 bg-sky-50 rounded-full m-auto mt-6 p-6">
                                    <img
                                      src={obj.img}
                                      className="w-12 h-12 cursor-pointer hover:scale-105 ease-in duration-300 m-auto "
                                      alt="alt title"
                                      
                                    />
                                  </div>
                                </div>
                                <div class=" flex-1">
                                  <div class=" mt-6">
                                    <h4 className=" ml-4 font-bold">
                                      {obj.h1}
                                    </h4>
                                  </div>
                                  <p className=" text-gray-400 ml-4">
                                    {obj.p}
                                  </p>
                                </div>
                              </div>
                            </div>
                      </Slide>
                        </>
                    ))}
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

                {/* Carousel for tablet and medium size devices */}
              </div>
            </div>
            <div className="">
              <h2 className="text-center font-bold text-gray-500 text-sm ">
                ALL PROPERTY NEEDS - ONE PORTAL
              </h2>
            </div>
            <div className="m-auto w-7/12">
              <h1 className="text-center p-1 mb-7 text-4xl font-bold ">
                Find Better Places to Live, Work and Wonder...
              </h1>
            </div>
            <div>
              <ul className="flex">
                <li className="-z-10">
                  <div className="object-cover object-center cursor-pointer hover:scale-125 transition-all duration-500 ">

                  <img
                    src="https://static.99acres.com/universalhp/img/d_hp_buy_xl.webp"
                    alt=""
                    className=" cursor-pointer hover:scale-105 ease-in duration-300"
                    />
                    </div>
                </li>
                <li className="ml-12 mt-16">
                  <h2 className="font-bold text-gray-500 mb-4 ">Buy A Home</h2>
                  <h1 className="text-2xl font-bold mb-4 ">
                    Find, Buy & Own Your Dream Home
                  </h1>
                  <p className="mb-4">
                    Explore from Apartments, land, builder floors, villas and
                    more
                  </p>
                  <p className=" w-44 text-center p-4 cursor-pointer bg-blue-600 rounded-md text-white font-semibold">
                    Explore Buying
                  </p>
                </li>
              </ul>
              <div className="p-10 shadow-lg flex w-11/12 bg-white border m-auto -mt-10 rounded-lg ">
                <div className="w-2/6 ">
                  <div className="w-44">
                    <h1 className="text-2xl font-bold font-sans">
                      Top articles on home buying
                    </h1>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 ">
                    <h2>Read from Beginners check-list to Pro Tips</h2>
                    </div>
                </div>
                <div className=" ml-24 w-full">
                  <div className="">
                    <ul className=" flex gap-10 mb-8">
                      <li>News</li>
                      <li>Text&Legal</li>
                      <li>Help Guides</li>
                      <li>Investment</li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 ">
                    <div className=" gap-4 mb-8 flex">
                      <div className="">
                        <img
                          src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2022/08/Land-parcel-320x180.jpg?1682336961000"
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300"
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
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300"
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
                          className="w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300"
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
                          src="https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2022/08/Land-parcel-320x180.jpg?1682336961000"
                          className=" w-16 h-16 cursor-pointer hover:scale-105 ease-in duration-300"
                          alt=""
                        />
                      </div>
                      <div className="">
                        
                        <div className="">Land rates go up in Noida</div>
                        <h2 className="">appril 24 2023</h2>
                      </div>
                    </div>

                    <span className="-mt-4">Read realty news, guides & articles</span>
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          <HandpickedProjects/>
<UpcomingProects/>
<Service/>
<TopCities/>
<ComercialSpace/>


          <Testimonial/>
          </div>
        </div>
      </section>
    </>
  );
}
