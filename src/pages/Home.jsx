import React, { useRef } from "react";
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
      <div class="banner">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
      >
        0{i + 1}
      </button>
    ),
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
      <Container className="mt-16">
        <Flex className="justify-between">
          <div className="w-1/2">
            <Image src={ad1} className="w-full" />
          </div>
          <div className="w-1/2">
            <Image src={ad2} className="w-full" />
            <Image src={ad3} className="w-full mt-10" />
          </div>
        </Flex>

        <Subheading text="New Arrivals" className="" />
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

        <Subheading text="Best Sellers" className="" />
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

        <Image src={ad4} />

        <Subheading text="Special Offers" className="" />
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
