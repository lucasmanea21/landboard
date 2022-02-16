import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { roadmap } from "./data";

const Item = ({ status, date, title }) => (
  <div className="item dark">
    <div className="roadmap-box next-road background-dark-blue-2">
      <p className={`mb-4 ${status.toLowerCase()}`}>
        <span>{status}</span>
      </p>
      <h6 className="text-white">{date}</h6>
      <p className="text-grey">{title}</p>
    </div>
  </div>
);

const CustomCarousel = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
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

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <a onClick={onClick} className="prev-roadmap dark text-white">
        <FaAngleLeft />
      </a>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <a className="next-roadmap dark text-white" onClick={onClick}>
        <FaAngleRight />
      </a>
    );
  }
  return (
    <Slider {...settings}>
      {roadmap.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </Slider>
  );
};
export default CustomCarousel;
