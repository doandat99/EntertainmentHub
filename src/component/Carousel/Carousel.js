import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css";
const responsive = {
  0: { items: 3 },
  568: { items: 5 },
  1024: { items: 7 },
};

const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ media_type, id }) => {
  const [modal, setModal] = useState([]);
  const fetchCredit = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setModal(data.cast);
  };
  const items = modal.map((item) => (
    <div className="carouselItem">
      <img
        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
        alt={item?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__name">{item?.name}</b>
    </div>
  ));

  useEffect(() => {
    fetchCredit();
  }, []);
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      autoPlay
    />
  );
};
export default Carousel;
