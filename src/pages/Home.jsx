import React, { useRef } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
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
  return (
    <Container>
      //////////////
      <div onClick={handleClick}>
        <button className="clickbtn">click</button>
        <div className="bg-red-500 hidden" ref={dropRef}>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum
          facilis natus quae pariatur ad hic, ipsam voluptatibus, repellendus
          veniam cupiditate omnis vel dignissimos asperiores magnam qui culpa,
          voluptatum saepe?
        </h1>
      </div>
      ///////////////////
      <Subheading text="New Arrivals" className="mb-10" />
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
  );
};

export default Home;
