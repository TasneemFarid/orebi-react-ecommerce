import React, { useRef } from "react";
import { FaTruck } from "react-icons/fa";
import { MdLooksTwo } from "react-icons/md";
import { SlReload } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import ad4 from "../assets/ad4.png";
import banner from "../assets/bg-image.png";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import Product from "../components/Product";
import Subheading from "../components/Subheading";

const Home = () => {
  let dropRef = useRef(null);
  let handleClick = (e) => {
    if (e.target.classList[0] == "clickbtn") {
      if (dropRef.current.style.display == "block") {
        dropRef.current.style.display = "none";
      } else {
        dropRef.current.style.display = "block";
      }
    } else {
      if (!dropRef.current.contains(e.target)) {
        if (dropRef.current.style.display == "block") {
          dropRef.current.style.display = "none";
        }
      }
    }
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow class="absolute top-1/2 right-0 -translate-y-1/2" />,
    prevArrow: (
      <PrevArrow class="absolute top-1/2 left-0 -translate-y-1/2 z-30" />
    ),
  };
  const bannersettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <button>0{i + 1}</button>,
  };
  return (
    <>
      <Slider {...bannersettings}>
        <div>
          <Image src={banner} className="w-full" />
        </div>
        <div>
          <Image src={banner} className="w-full" />
        </div>
        <div>
          <Image src={banner} className="w-full" />
        </div>
      </Slider>

      <div className="border-2 border-offwhite py-6 px-40">
        <Flex className="justify-between font-dm font-normal text-base text-lightash">
          <Flex className="gap-2 items-center">
            <MdLooksTwo className="text-2xl text-dark" />
            Two years warranty
          </Flex>
          <Flex className="gap-2 items-center">
            <FaTruck className="text-2xl text-dark" />
            Free shipping
          </Flex>
          <Flex className="gap-2 items-center">
            <SlReload className="text-2xl text-dark" />
            Return policy in 30 days
          </Flex>
        </Flex>
      </div>

      <Container className="">
        <Flex className="gap-5 my-32">
          <div className="w-1/2">
            <Image src={ad1} className="w-full" />
          </div>
          <div className="w-1/2">
            <Image src={ad2} className="w-full" />
            <Image src={ad3} className="w-full mt-10" />
          </div>
        </Flex>

        <Subheading text="New Arrivals" className="mb-12" />
        <Slider {...settings}>
          <div className="w-24">
            <Product heading="Product 1" />
          </div>
          <div className="w-24">
            <Product heading="Product 2" />
          </div>
          <div className="w-24">
            <Product heading="Product 3" />
          </div>
          <div className="w-24">
            <Product heading="Product 4" />
          </div>
          <div className="w-24">
            <Product heading="Product 4" />
          </div>
          <div className="w-24">
            <Product heading="Product 4" />
          </div>
        </Slider>

        <Subheading text="Best Sellers" className="mt-32 mb-12" />
        <Flex className="justify-between">
          <div className="w-24">
            <Product heading="Product 1" />
          </div>
          <div className="w-24">
            <Product heading="Product 2" />
          </div>
          <div className="w-24">
            <Product heading="Product 3" />
          </div>
          <div className="w-24">
            <Product heading="Product 4" />
          </div>
        </Flex>

        <Image src={ad4} className="mt-32" />

        <Subheading text="Special Offers" className="mt-32 mb-12" />
        <Flex className="justify-between">
          <div className="w-24">
            <Product heading="Product 1" />
          </div>
          <div className="w-24">
            <Product heading="Product 2" />
          </div>
          <div className="w-24">
            <Product heading="Product 3" />
          </div>
          <div className="w-24">
            <Product heading="Product 4" />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
