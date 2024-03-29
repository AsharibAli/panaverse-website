import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Shazain Tariq",
      image: "/assets/people-1.png",
      city: "Karachi",
      country: "Pakistan",
      rating: "5",
      testimoni:
        "As a PIAIC Blockchain student, Shazain has likely undergone extensive training in blockchain technology, which is a field that has been gaining traction in recent years. The fact that Shazain has been able to apply the skills he has learned in PIAIC to create such a substantial financial gain is a testament to the quality of the program and the student's aptitude and commitment to learning, youngest millionare",
    },
    {
      name: "Noor ul Ain Afaq",
      image: "/assets/people-2.png",
      city: "Karachi",
      country: "Pakistan",
      rating: "4.5",
      testimoni:
        "The fact that this housewife has been able to transform her life and the lives of her children is an incredible achievement. It is a testament to her resilience, her drive, and her ability to overcome obstacles. By becoming a blockchain developer, she has opened up new opportunities for herself and her family, providing them with greater financial stability and the possibility of a brighter future, i'm passionate about building",
    },
    {
      name: "Faiza Aziz Khan",
      image: "/assets/people-2.png",
      city: "Karachi",
      country: "Pakistan",
      rating: "4.5",
      testimoni:
        "The success story of Faiza Aziz Khan is truly remarkable, and it demonstrates the power of hard work, determination, and entrepreneurship. Earning a million dollars working from home is an incredible feat, and it is a testament to the potential of remote work and the digital economy. Faiza's achievement also underscores the importance of acquiring the necessary skills to thrive in a digital world, such as proficiency in technologies",
    },
    {
      name: "Aisha",
      image: "/assets/people-2.png",
      city: "Karachi",
      country: "Pakistan",
      rating: "4.5",
      testimoni:
        "As a PIAIC Cloud-Native student, Aisha has likely undergone extensive training in cloud computing, which is an emerging field with a lot of potential for growth. The skills and knowledge she has acquired through this program would have undoubtedly played a significant role in the success of her startup. In addition to providing a cost-effective infrastructure, cloud computing can also enhance the needs of businesses",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
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
          initialSlide: 2,
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
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
