import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "./components/NextArrow";
import PrevArrow from "./components/PrevArrow";
import Product from "./components/Product";

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <Product className="mx-3" />
        </div>
        <div>
          <Product className="mx-3" />
        </div>
        <div>
          <Product className="mx-3" />
        </div>
        <div>
          <Product className="mx-3" />
        </div>
        <div>
          <Product className="mx-3" />
        </div>
        <div>
          <Product className="mx-3" />
        </div>
      </Slider>
    </div>
  );
}

export default App;
