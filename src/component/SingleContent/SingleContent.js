import React from "react";
import "./SingleContent.css";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import CustomModal from "../Modal/CustomModal";
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const num = vote_average.toFixed(1);
  return (
    <CustomModal media_type={media_type} id={id}>
      <Badge
        badgeContent={num}
        color={num > 6 ? "primary" : "secondary"}
        overlap="rectangular"
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </CustomModal>
  );
};

export default SingleContent;
