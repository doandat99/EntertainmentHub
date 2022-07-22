import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./AliceCarousel.css";
const responsive = {
  0: { items: 3 },
  568: { items: 5 },
  1024: { items: 7 },
};

const Carousel = ({ media_type, id }) => {
  const [content, setContent] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data.cast);
  };
  const handleDragStart = (e) => e.preventDefault();
  const items = content.map((item) => (
    <div className="item">
      <img
        src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
        alt={item?.name}
        onDragStart={handleDragStart}
        className="item_img"
      />
      <b className="item_name">{item?.name}</b>
    </div>
  ));
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AliceCarousel
      infinite
      mouseTracking
      items={items}
      responsive={responsive}
      autoPlay
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default Carousel;
