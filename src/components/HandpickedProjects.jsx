import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

export default function HandpickedProjects() {
  let data = [
    {
      img: "https://newprojects.99acres.com/projects/landasia_infrastructure_limited/l.a._city/images/rx3l3far_med.jpg",
      logo:"https://newprojects.99acres.com/projects/landasia_infrastructure_limited/l.a._city/5efonjzu.jpg",
      name: "LandAsia LA City",
      place: "2,3 BHK Apartment,House/Villa, Chakrata Road, Dehradun",
      des: "₹ 95 Lacs - 1.5 Cr",
    },
    {
      img: "https://newprojects.99acres.com/projects/lumbini_constructions/lumbini_elysee/images/yxki8zrj_med.jpg",
      logo:"https://newprojects.99acres.com/projects/lumbini_constructions/lumbini_elysee/idt69quc.jpg",
      name: "Lumbini ElyseeFeaturedLumbini Elysee",
      place: "3,4 BHK Apartment, Financial District, Hyderabad",
      des: "₹ 1.95 - 3.9 Cr",
    },
    {
      img: "https://newprojects.99acres.com/projects/prajapati_constructions/prajapati_magnum/images/xo0hugl4_med.jpg",
      logo:"https://newprojects.99acres.com/projects/prajapati_constructions/prajapati_magnum/ldw0l2cj.png",
      name: "Lumbini ElyseeFeaturedLumbini Elysee",
      place: "3,4 BHK Apartment, Financial District, Hyderabad",
      des: "₹ 1.95 - 3.9 Cr",
    },
    {
      img: "https://newprojects.99acres.com/projects/landasia_infrastructure_limited/l.a._city/images/rx3l3far_med.jpg",
      name: "Lumbini ElyseeFeaturedLumbini Elysee",
      place: "3,4 BHK Apartment, Financial District, Hyderabad",
      des: "₹ 1.95 - 3.9 Cr",
    },
    {
      img: "https://newprojects.99acres.com/projects/landasia_infrastructure_limited/l.a._city/images/rx3l3far_med.jpg",
      name: "Lumbini ElyseeFeaturedLumbini Elysee",
      place: "3,4 BHK Apartment, Financial District, Hyderabad",
      des: "₹ 1.95 - 3.9 Cr",
    },
    {
      img: "https://newprojects.99acres.com/projects/landasia_infrastructure_limited/l.a._city/images/rx3l3far_med.jpg",
      name: "Lumbini ElyseeFeaturedLumbini Elysee",
      place: "3,4 BHK Apartment, Financial District, Hyderabad",
      des: "₹ 1.95 - 3.9 Cr",
    },
  ];

  return (
    <>
    

      <div className=" py-10 ">
        <h2 className="text-2xl  tracking-wide font-bold">
          Handpicked Residential Projects
        </h2>
        <h4 className="text-gray-500">
          Featured Residential projects across India
        </h4>
      </div>

      <div className="container mx-auto  ">
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
                className="absolute z-30 left-0 -ml-6 w-10 h-10 rounded-full bg-white  cursor-pointer"
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
                    className="h-96 flex bg-white lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                    {data.map((obj) => (
                      <>
                        <Slide>
                          <div className="flex -mt-44  flex-shrink-0 relative w-full sm:w-auto">
                            {/* <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" /> */}
                            {/* <div className="card bg-black  rounded-lg p-4 w-full bg-base-100 shadow-xl"> */}
                            {/* <div className="p-2 mt-1 items-center"> */}
                            {/* <figure className=" "> */}
                            <img
                              src={obj.img}
                              className=" w-full -z-0 rounded-lg cursor-pointer hover:scale-105 ease-in duration-300"
                              alt="Shoes"
                            />
                            {/* </figure> */}
                            {/* </div> */}
                          </div>
                          <div className="absolute  -mt-20 w-10/12 h-44 m-auto rounded-xl bg-white shadow-lg p-8  order-1 left-0 right-0">
                            <h1 className="mt-2 text-sm font-bold">
                              {obj.name}
                            </h1>
                            <p className="text-gray-500">{obj.place}</p>
                            <h4 className="font-bold ">{obj.des}</h4>
                          </div>
                          {/* <div className="absolute  -mt-32  m-auto rounded-full shadow-lg   order-1 left-0 right-0"> */}
                            <img src={obj.logo} className="absolute  -mt-28 ml-16 w-16 h-16 rounded-full" alt="" />
                           
                          {/* </div> */}
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
    </>
  );
}
