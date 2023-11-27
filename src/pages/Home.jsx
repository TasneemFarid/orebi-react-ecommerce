import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Product from "../components/Product";
import Subheading from "../components/Subheading";

const Home = () => {
  return (
    <Container>
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
