import React, { useState } from "react";
import Slider from "react-slick";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  title = "What Our Customers Are Saying",
  subtitle = "Trusted by thousands of happy users across Nigeria",
  listTestimoni = [
    {
      name: "Adewale Johnson",
      city: "Lagos",
      country: "Nigeria",
      rating: "4.8",
      testimoni:
        "Very fast airtime and data delivery. I’ve been using this VTU platform for months now and it has never disappointed me.",
    },
    {
      name: "Fatima Yusuf",
      city: "Abuja",
      country: "Nigeria",
      rating: "4.7",
      testimoni:
        "Electricity token was delivered instantly. Reliable and affordable services!",
    },
    {
      name: "Chinedu Okeke",
      city: "Enugu",
      country: "Nigeria",
      rating: "4.9",
      testimoni:
        "Cable TV subscription processed in seconds. Highly recommended platform.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a>
          <span className="mx-2 rounded-full h-4 w-4 block cursor-pointer transition-all bg-gray-300"></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          {title}
        </h2>
        <p className="text-gray-600 w-10/12 sm:w-7/12 lg:w-6/12 mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Slider */}
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-200 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col shadow-sm">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg font-semibold capitalize">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                      {item.city}, {item.country}
                    </p>
                  </div>
                </div>

                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm font-medium">{item.rating}</p>
                  <span className="flex ml-2">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <p className="mt-5 text-left text-gray-600">
                “{item.testimoni}”
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows */}
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white transition-all text-orange-500 cursor-pointer"
            onClick={() => sliderRef?.slickPrev()}
          >
            <ArrowBack className="h-6 w-6" />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white transition-all text-orange-500 cursor-pointer"
            onClick={() => sliderRef?.slickNext()}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;