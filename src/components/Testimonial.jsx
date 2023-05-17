import React, { Component, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Testimonial extends Component {
  render() {
    let data = [
      {
        img: "https://www.99acres.com/load/Company/testimonial_photo_serve/101",
        name: "Srikanth Malleboina",
        place: "Owner,Hyderabad",
        des: "You get an exclusive RM from 99acres team who tracks your property closely",
      },
      {
        img: "https://www.99acres.com/load/Company/testimonial_photo_serve/169",
        name: "Srikanth Malleboina",
        place: "Owner,Hyderabad",
        des: "You get an exclusive RM from 99acres team who tracks your property closely",
      },
      {
        img: "https://www.99acres.com/load/Company/testimonial_photo_serve/89",
        name: "Srikanth Malleboina",
        place: "Owner,Hyderabad",
        des: "You get an exclusive RM from 99acres team who tracks your property closely",
      },
      {
        img: "https://www.99acres.com/load/Company/testimonial_photo_serve/169",
        name: "Srikanth Malleboina",
        place: "Owner,Hyderabad",
        des: "You get an exclusive RM from 99acres team who tracks your property closely",
      },
    ];
    return (
      <>
        <div className=" py-4 text-center">
          <h3 className="text-sm py-2 font-bold tracking-wider text-gray-400">
            BENEFITS OF 99ACRES
          </h3>
          <h1 className="text-4xl py-2 font-bold tracking-wide">
            Why choose 99acres
          </h1>
        </div>
        <div className="flex  w-full gap-4 mb-10">
          <div className="w-4/12 ">
            <div>
              <img
                src="https://static.99acres.com/universalhp/img/d_hp_rent_agreement.webp"
                className="w-10 ml-4 h-12 rounded-full "
                alt=""
              />
            </div>
            <div className="py-2 mt-4">
              <h2 className="py-1 text-xl font-semibold " ><span className="text-blue-600 font-semibold text-base ">01.</span> Over 12 Lac properties</h2>
            </div>
            <div className="mb-6 ">
              <p className="font-semibold text-gray-400">10,000+ properties are added every day</p>
            </div>
          </div>
        
          <div className="w-4/12 ">
            <div >
              <img
                src="https://static.99acres.com/universalapp/img/projectnoimage.webp"
                className="ml-4 w-10 h-12 rounded-full "
                alt=""
              />
            </div>
            <div className="py-2 mt-4">
              <h2 className="py-1 text-xl font-semibold " ><span className="text-base text-blue-600 font-semibold ">02.</span> Verification by 99acres team</h2>
            </div>
            <div className="mb-6 ">
              <p className="font-semibold text-gray-400">Photos / Videos and other details are verified on location</p>
            </div>
          </div>
          <div className="w-4/12  ">
            <div className="">
              <img
                src="https://static.99acres.com/universalhp/img/ei.webp"
                className="w-10 ml-4 h-12 rounded-full "
                alt=""
              />
            </div>
            <div className="py-2 mt-4">
              <h2 className="py-1 text-xl font-semibold " ><span className="text-blue-600 font-semibold text-base">03.</span> Over 12 Lac properties</h2>
            </div>
            <div className="mb-6 ">
              <p className="font-semibold text-gray-400">High active user count and user engagement to find and close deals</p>
            </div>
          </div>
              </div>
        
        
        
        <div className="py-3 h-80 bg-neutral-100">
          <h3 className="py-3 text-md font-bold text-gray-500">TESTIMONIALS</h3>
          <h1 className="text-4xl leading-normal font-bold w-6/12">
            What our customers are saying about 99acres
          </h1>
          <p className="text-md  text-gray-800">
            Hear from our satisfied buyers, tenants, owners and dealers
          </p>
        </div>

        <div className="container mx-auto -mt-32 ">
          <div className=" justify-center w-full  h-full py-24 sm:py-8 ">
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={4}
              visibleSlides={2}
              step={1}
              infinite={false}
            >
              <div className="w-full relative flex items-center justify-center">
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
                <div className="w-full h-full  mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex  lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      {data.map((obj) => (
                        <>
                          <Slide index={0}>
                            <div className="flex border flex-shrink-0 relative w-full sm:w-auto">
                              {/* <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" /> */}
                              <div className="card h-48 bg-white rounded-lg p-4 w-96 bg-base-100 shadow-xl">
                                <div className="p-2 mt-1 flex items-center cursor-pointer ">
                                  <figure className=" ">
                                    <img
                                      src={obj.img}
                                      className="w-14 h-14 rounded-full"
                                      alt="Shoes"
                                    />
                                  </figure>
                                  <h2 className="p-4 font-semibold">
                                    Karvy Reality
                                  </h2>
                                </div>
                                <div className="card-body ">
                                  <p>
                                    The products they offer gives us more
                                    leverage in reaching out to right customer
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
          </div>
        </div>

        <span className="font-bold " >View all Testimonials</span>

        <div className="mt-6">
          <img
            src="https://static.99acres.com/universalhp/img/d_hp_app_banner_default.webp"
            alt=""
            className="cursor-pointer"
          />
        </div>
      </>
    );
  }
}
