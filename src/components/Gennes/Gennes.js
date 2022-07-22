import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const hanldeAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((item) => item.id !== genre.id));
    setPage(1);
  };
  const hanldeDelete = (genre) => {
    setSelectedGenres(selectedGenres.filter((item) => item.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
    return () => setGenres({});
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((item) => (
        <Chip
          key={item.id}
          label={item.name}
          color="primary"
          style={{ margin: 2 }}
          clickable
          size="small"
          onDelete={() => hanldeDelete(item)}
        />
      ))}
      {genres.map((item) => (
        <Chip
          key={item.id}
          label={item.name}
          style={{ margin: 2 }}
          clickable
          size="small"
          onClick={() => hanldeAdd(item)}
        />
      ))}
    </div>
  );
};

export default Genres;
