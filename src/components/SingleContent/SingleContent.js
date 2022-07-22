import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@material-ui/core";
import ContentModal from "../Modal/Modal";
const SingleContent = ({
  id,
  poster,
  title,
  media_type,
  vote_average,
  date,
}) => {
  const num = vote_average.toFixed(1);
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={num}
        color={num > 6 ? "primary" : "secondary"}
        overlap="rectangular"
      />
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="date">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
