import React, { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map((item) => (
    <div className="carouselItem">
      <img
        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
        alt={item?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{item?.name}</b>
    </div>
  ));
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      disableDotsControls
      autoPlay
      responsive={responsive}
    />
  );
};
export default Carousel;
