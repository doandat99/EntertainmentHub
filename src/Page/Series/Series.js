import React, { useEffect, useState } from "react";
import Genres from "../../components/Gennes/Gennes";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPanigation from "../../Panigation/CustomPanigation";
import useGenes from "../../hook/useGenes";
import axios from "axios";
const Series = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPage, setNumOfPage] = useState();
  const genreforURL = useGenes(selectedGenres);
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL} `
    );
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);
  return (
    <div>
      {" "}
      <span className="pagestitle">Series</span>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="movie">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
      {numOfPage > 1 && (
        <CustomPanigation setPage={setPage} numOfPages={numOfPage} />
      )}
    </div>
  );
};

export default Series;
